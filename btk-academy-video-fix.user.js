// ==UserScript==
// @name         BTK Akademi Video Durmasını Engelle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  BTK Akademi'de sekme değiştirildiğinde veya tam ekran modunda videonun durmasını engeller.
// @author       https://github.com/tanersb
// @match        https://www.btkakademi.gov.tr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Sayfa görünürlük değişimlerini devre dışı bırak
    document.addEventListener('visibilitychange', function(event) {
        event.stopImmediatePropagation();
    }, true);

    // Tam ekran değişimlerini devre dışı bırak
    document.addEventListener('fullscreenchange', function(event) {
        event.stopImmediatePropagation();
    }, true);

    // `document.hidden` özelliğini geçersiz kıl
    Object.defineProperty(document, 'hidden', {
        configurable: true,
        get: function() { return false; }
    });

    // `document.visibilityState` özelliğini geçersiz kıl
    Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get: function() { return 'visible'; }
    });

    console.log("BTK Akademi için video durmasını engelleyen script yüklendi!");
})();
