ETT.ProjectRoute = Em.Route.extend({

  setupController: function(controller, project) {
    console.log(project);
    this.controllerFor( 'time_entries.new' ).set( 'project', project );
  },

  renderTemplate: function(controller, project) {
    if ( !Em.isEmpty( project ) ) {
      this.render( 'project' );
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    } else {
      this.render( 'project_404' );
    }
  }

});