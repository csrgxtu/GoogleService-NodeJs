/**
 * Author: Archer Reilly
 * Date: 04/Feb/2015
 * File: UrlRouterCallBacks.js
 * Desc: some callback functions that will be used in URL routers
 *
 * Produced By CSRGXTU.
 */
var request = require('request');

module.exports = {
  /**
   * indexPage
   * return index page of the search
   *
   * @param
   * @return
   */
  indexPage: function(req, res) {
    res.send('GoogleService-NodeJs');
  },

  /**
   * resultPage
   * return result page of the search
   *
   * @param
   * @return
   */
  resultPage: function(req, res) {
    res.send('GoogleService-NodeJs');
  },

  /**
   * queryHandler
   * handles the search query from client
   *
   * @param
   * @return
   */
  queryHandler: function(req, res) {
    res.send('GoogleService-NodeJs'); 
  },
}
