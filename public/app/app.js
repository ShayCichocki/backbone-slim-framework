//
// Application
// =============================================================================
//
// * Author: [Shay Cichocki]
// * Since: 2/13/2015
// * central rendering for app
// -----------------------------------------------------------------------------
//

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
