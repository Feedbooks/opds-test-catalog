console.log('This would be the main JS file.');

const knownLangs = ['en', 'ru'];

console.log('This is loaded from', window.location.href);

var myLang = 'en';
var myPath = window.location.pathname.split('/');
var myPage = myPath.pop();

var lng = navigator.language || navigator.userLanguage;
console.log('Browser wants', lng);
lng = lng.split('-')[0]; /* it's in "ll-TT" form */
if (knownLangs.indexOf(lng) == -1) {
    console.error('Unknown browser lang', lng);
} else {
    console.log('Assuming browser wants', lng);
    myLang = lng;
}

if (myPage == 'index.html' || myPage == '') {
    console.warn('At default index...')
} else if (myPage.substr(0, 6) == 'index.' && myPage.substr(-5) == '.html') {
    lng = myPage.split('.')[1];
    if (knownLangs.indexOf(lng) == -1) {
        console.error('Unknown page lang', lng);
        lng = myLang;
    }
    myLang = lng; /* preserve requested language */
} else {
    console.error('Wrong page path', myPath.join('/') + '/' + myPage);
}

if (window.location.pathname != myPath.join('/') + '/index.' + myLang + '.html') {
    window.location.pathname = myPath.join('/') + '/index.' + myLang + '.html';
    console.log('Switching', window.location.pathname,
                'to', myPath.join('/') + '/index.' + myLang + '.html');
} else {
    console.log('Already at', window.location.pathname);
}
