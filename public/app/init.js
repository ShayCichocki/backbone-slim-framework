//
// Init
// =============================================================================
//
// * Author: [Shay Cichocki]
// * Since: 2/13/2015
// * Starts the app
// -----------------------------------------------------------------------------
//
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
