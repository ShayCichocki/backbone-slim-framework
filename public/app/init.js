//Fires off the application
define(function (require) {

  var $ = require('jquery'),
      app = require('app'),
      Backbone = require('backbone'),
      MainRouter = require('routers/sample');

  $(function () {
    app.router = new MainRouter();
    Backbone.history.start({pushState: true});
    
  });
});
