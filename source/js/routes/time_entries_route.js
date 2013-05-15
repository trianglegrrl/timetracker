ETT.TimeEntriesRoute = Em.Route.extend({

  model: function(params) {
    return ETT.TimeEntry.find();
  },

  renderTemplate: function(controller, model) {
    controller.set( 'isIndex', true );
    this.render( 'time_entries' );
    this.render( 'totals', { into: 'application', outlet: 'totals', controller: this.controllerFor('projects') } );
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },

  setupController: function(controller) {
    this.controllerFor('projects').set('content', ETT.Project.find());
  },

  deactivate: function() {
    this.controller.set( 'isIndex', false );
  },

});