import fetchCountries from "./fetchCountries";
import countriesList from "./countryList.hbs";
import countryCard from "./countryCard.hbs";
import '../node_modules/lodash';
import { alert } from '@pnotify/core';
import notifications from "./notifications";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/countdown/dist/PNotifyCountdown.css";
import "./styles.css";

const debounce = require('lodash.debounce');

const refs = {
    inputRef: document.querySelector('.input'),
    countriesListRef: document.querySelector('.countries-list'),
    countryContainerRef: document.querySelector('.country-container')
}

refs.inputRef.addEventListener('input', debounce(searchCountries, 500));

function searchCountries() {

    fetchCountries(refs.inputRef.value).
        then(response => {
            if (response.status === 404) {
                handleError();
                return;
            } else handleResult(response);
        });
}


function renderCountriesList(country) {

    refs.countriesListRef.insertAdjacentHTML('beforeend', countriesList(country));
}

function renderCountry(country) {
    refs.countryContainerRef.innerHTML = '';
    refs.countryContainerRef.insertAdjacentHTML('beforeend', countryCard(country));
}

function handleResult(response) {
    if (response.length === 1) {
        renderCountry(response);
        alert(notifications.found);
    } else if (response.length > 10) {
        alert(notifications.foundTooMany);
        return;
    } else {
        renderCountriesList(response);
        alert(notifications.foundMany);
    }
}

function handleError() {
    alert(notifications.notFound);
}

