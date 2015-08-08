define(function (require) {
  'use strict';
  var app = require('app'),
      Backbone = require('backbone'),
      SampleModel = require('models/sample'),
      SampleView = require('views/sample');
    
  return Backbone.Router.extend({
    routes: {
      '': 'application'
    },
    application: function () {
       var view, model;
        model = new SampleModel();
        view = new SampleView({sample_model: model});
        model.fetch().done(function () {
            app.show(view);
        });
    }

  });
});
