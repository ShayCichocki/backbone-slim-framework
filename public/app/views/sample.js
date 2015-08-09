define(function (require) {
  'use strict';

  var Backbone = require('backbone'),
      HB = require('Handlebars'),
      tmpl = require('text!templates/sample.html');

  return Backbone.View.extend({

    initialize: function(options) {
      this.sample_model = options.sample_model;
    },
    render: function () {
     var view=this, template;
     template = HB.compile(tmpl);
     this.sample_model.set('foo','bar');
     view.$el.html(template(this.sample_model.toJSON()));
     return this;
    }

  });
});
