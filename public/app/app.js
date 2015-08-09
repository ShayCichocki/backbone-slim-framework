// Provides a central rendering function for the app
define(function (require) {
  var $ = require('jquery'),
      app = {
        $el: $('#main-content'),
        show: function (view) {
          this.$el.html('').append(view.render().el);      
        }
      };
  return app;
});
