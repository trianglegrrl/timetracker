ETT.ProjectRoute = Em.Route.extend({

  setupController: function(controller, project) {
    console.log(project);
    this.controllerFor( 'time_entries.new' ).set( 'project', project );
  }

});