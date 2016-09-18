//define ip and port to web service
var ip_server = '192.168.0.6:3000';

//includes web server modules
var server = require('webserver').create();

//start web server
var service = server.listen(ip_server, function(request, response) {
  var links = [];
  var casper = require('casper').create();

  function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
      return e.getAttribute('href')
    });
  }

  casper.start('http://google.com/', function() {
    // search for 'casperjs' from google form
    this.fill('form[action="/search"]', { q: request.postRaw }, true);
  });

  casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
  });

  casper.run(function() {
    response.statusCode = 200;

    //sends results as JSON object
    response.write(JSON.stringify(links, null, null));
    response.closeGracefully();
  });
});
console.log('Server running at http://' + ip_server+'/');

// curl --data "casperjs" http://127.0.0.1:8585/
// The above command would search for “casperjs” on google and return a JSON array of results. This is a trivial example and can be expanded into something more complex.
