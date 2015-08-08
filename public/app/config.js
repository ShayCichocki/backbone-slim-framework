//
// Config
define(function () {
  'use strict';

  require.config({
    deps: ['init'],
    paths: {
      app              : 'app',
      backbone         : '../packages/backbone/backbone',
      Backbone         : '../packages/backbone/backbone',
      'bootstrap'      : '../packages/bootstrap/dist/js/bootstrap',
      'backbone-forms' : '../packages/backbone-forms/distribution/backbone-forms',
      Handlebars       : '../packages/handlebars/handlebars',
      jquery           : '../packages/jquery/dist/jquery.min',
      text             : '../packages/requirejs-text/text',
      underscore       : '../packages/underscore/underscore-min',
      'bootstrap/button'     : '../packages/bootstrap/js/button',
      'bootstrap/modal'      : '../packages/bootstrap/js/modal',

    },
    shim: {
      Backbone         : { deps: ['underscore', 'jquery'], exports: 'Backbone' },
      backbone         : { deps: ['underscore', 'jquery'], exports: 'Backbone' },
      'bootstrap'      : { deps: ['jquery'] },
      'backbone-forms' : { deps: ['backbone']},
      Handlebars       : { exports:'Handlebars'},
      underscore       : { exports: '_' },
      'bootstrap/button'     : { deps: ['jquery'] },
      'bootstrap/modal'      : { deps: ['jquery'] },
    }
  });
});
