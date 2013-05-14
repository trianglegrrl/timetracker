ETT.TimeEntriesRoute = Em.Route.extend({

  model: function(params) {
    return ETT.TimeEntry.find();
  },

  renderTemplate: function(controller, model) {
    controller.set( 'isIndex', true );
    this.render( 'time_entries' );
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },

  deactivate: function() {
    this.controller.set( 'isIndex', false );
  },

});