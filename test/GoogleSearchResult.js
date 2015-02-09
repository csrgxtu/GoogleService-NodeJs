var request = require('request');
var cheerio = require('cheerio');

var url = 'https://www.google.com/search?hl=en&q=redhat';

request(url, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var title = $('title').text();
    var stats = $('div[id=resultStats]').text();
    var statsTime = $('div[id=resultStats]>nobr').text();
    var recs = {};
    $('li[class=g]').each(function(i, element) {
      var title = $(this).children().eq(0).text();
      var url = $(this).children().eq(0).find('a').attr('href');
      url = url.slice(7, url.indexOf('&sa'));
      var org = $(this).children().eq(1).html();
      console.log('DEBUG: ' + org);
    });
    var data = {
      title: title,
      stats: stats,
      statsTime: statsTime,
      recs: {},
    };
    //console.log(res);
  }
});
console.log('Started ...');
