/**
 * Author: Archer Reilly
 * Date: 04/Feb/2015
 * File: index.js
 * Desc: the main(entrence) file of this project.
 *
 * Produced By CSRGXTU
 */
var express = require('express');
var UrlRouterCallBacks = require('./lib/UrlRouterCallBacks');

var app = express();

// url routers
app.get('/', UrlRouterCallBacks.indexPage);
app.get('/result', UrlRouterCallBacks.resultPage);
app.get('/search', UrlRouterCallBacks.searchHandler);

app.listen(3000);
