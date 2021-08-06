import * as PNotifyMobile from '@pnotify/mobile/';
import { defaultModules } from '@pnotify/core';
import * as PNotifyCountdown from '@pnotify/countdown';


defaultModules.set(PNotifyMobile, {});

export default {
    found: {
        type: 'success',
        title: 'Country found',
        delay: 2000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {

            }]
        ])
    },
    foundMany: {
        type: 'notice',
        text: 'Please specify your request',
        delay: 5000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {

            }]
        ])
    },
    foundTooMany: {
        type: 'error',
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 2000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    notFound: {
        type: 'error',
        text: 'Please, try another country name',
        delay: 2000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {

            }]
        ])
    },

};