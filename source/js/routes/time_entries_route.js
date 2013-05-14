ETT.TimeEntriesRoute = Em.Route.extend({

  model: function(params) {
    return ETT.TimeEntry.find();
  },

  setupController: function() {
    this.controllerFor( 'projects' ).set( 'content', ETT.Project.find() );
    this.controllerFor( 'project' ).set( 'content', null );
  },

});