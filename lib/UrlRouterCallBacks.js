/**
 * Author: Archer Reilly
 * Date: 04/Feb/2015
 * File: UrlRouterCallBacks.js
 * Desc: some callback functions that will be used in URL routers
 *
 * Produced By CSRGXTU.
 */
var request = require('request');
var cheerio = require('cheerio');

module.exports = {
  /**
   * indexPage
   * return index page of the search
   *
   * @param
   * @return
   */
  indexPage: function(req, res) {
    res.send('GoogleService-NodeJs: index view');
  },

  /**
   * resultPage
   * return result page of the search
   *
   * @param
   * @return
   */
  resultPage: function(req, res) {
    res.send('GoogleService-NodeJs: result view');
  },

  /**
   * searchHandler
   * handles the search query from client
   *
   * @param
   * @return
   */
  searchHandler: function(req, res) {
    var q = req.query.q;
    var url = 'https://www.google.com/search?hl=en&q=' + q;

    request(url, function(err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var title = $('title').text();
        var stats = $('div[id=resultStats]').text();
        var statsTime = $('div[id=resultStats]>nobr').text();
        var recs = [];
        $('li[class=g]').each(function(i, element) {
          var title = $(this).children().eq(0).text();
          var url = $(this).children().eq(0).find('a').attr('href');
          url = url.slice(7, url.indexOf('&sa'));
          var abs = $(this).find('span[class=st]').text();
          var tmp = {
            title: title,
            url: url,
            abs: abs
          };
          recs.push(tmp);
        });

        var relatedKeywords = [];
        $('p[class=_Bmc]').each(function(i, element) {
          var tmp = {
            keyWord: $(this).text().replace("'", "\'").replace('"', '\"')
          };
          relatedKeywords.push(tmp);
        });

        var data = {
          title: title,
          stats: stats,
          statsTime: statsTime,
          relatedKeywords: relatedKeywords,
          recs: recs,
        };

        return res.send(data);
      }
    });
  },
}
