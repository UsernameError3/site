'use strict';

const Handlebars = require('handlebars');
const localCSS = {};

Handlebars.registerHelper('addCSS', (url) => {
    localCSS[url] = true;
    return '';
});

Handlebars.registerHelper('writeCSS', () => {
    var str = '',
        env = process.env.NODE_ENV;

    /*istanbul ignore next*/
    if (env === 'development') {
        Object.keys(localCSS).forEach((url) => {
            str += '<link rel="stylesheet" href="/static' + url + '"\>\n';
        });
    } else {
        str = '<link rel="stylesheet" href="/static/css/bundle.min.css"\>\n';
    }

    return str;
});

Handlebars.registerHelper('writeGeneratorCSS', () => {
    var str = '',
        env = process.env.NODE_ENV;

    /*istanbul ignore next*/
    if (env === 'development') {
        Object.keys(localCSS).forEach((url) => {
            str += '<link rel="stylesheet" href="/static' + url + '"\>\n';
        });
    } else {
        str = '<link rel="stylesheet" href="/static/css/bundle.generator.min.css"\>\n';
    }

    return str;
});