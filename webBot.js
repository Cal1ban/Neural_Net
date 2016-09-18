var casper = require('casper').create({
    pageSetting:{
      loadImages: true,
      loadPlugins: true
    },
});

casper.start('https://www.google.com/trends/correlate/search?e=iphone&t=weekly&p=us', function() {

  //user agent spoofing
  casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');

    this.echo(this.getTitle());
    this.waitForSelector(".results", (function() {

      this.captureSelector('Charts.png', '.results');

    }), (function() {
        // if load fails, fail gracefully
      this.die("Timeout reached.");
      this.exit();

      }), 22000);

});

casper.run();
