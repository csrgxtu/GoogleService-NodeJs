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
app.get('/index.html', UrlRouterCallBacks.indexPage);
app.post('/index.html', UrlRouterCallBacks.indexPage);
app.get('/result.html', UrlRouterCallBacks.resultPage);
app.post('/result.html', UrlRouterCallBacks.resultPage);
app.get('/search.json', UrlRouterCallBacks.searchHandler);
app.post('/search.json', UrlRouterCallBacks.searchHandler);

app.listen(3000);
