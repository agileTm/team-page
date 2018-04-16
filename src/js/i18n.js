function getLang() {
    var lang = null;
    if (window && window.localStorage !== undefined) {
        lang = window.sessionStorage.getItem('lang');
    }

    if (!lang) {
        if (navigator.languages && navigator.languages.length) {
            // latest versions of Chrome and Firefox set this correctly
            lang = navigator.languages[0];
        } else if (navigator.userLanguage) {
            // IE only
            lang = navigator.userLanguage;
        } else {
            // latest versions of Chrome, Firefox, and Safari set this correctly
            lang = navigator.language;
        }
    }

    return lang;
}

function i18n() {
    var lang = getLang();
    $('#lan').val(lang === 'ko-KR' ? lang : 'en').prop('selected', true);
    changeLan(lang);
}

function changeLan(lang) {
    var text = lang === 'ko-KR' ? langs.kr : langs.en;
    var keys = Object.keys(text);
    var keySize = keys.length;

    for (var i = 0; i < keySize; i++) {
        var key = keys[i];
        $('#' + key).html(text[key]);
    }

    window.sessionStorage.setItem('lang', lang);
}

i18n();