ETT.ProjectRoute = Em.Route.extend({

  model: function(params) {
    return this.modelFor('projects').findProperty( 'slug', params.slug );
  },

  serialize: function(project) {
    return { slug: project.get('slug') };
  },

  renderTemplate: function(controller, project) {
    this.controllerFor( 'time_entries.new' ).set( 'project', project );

    if ( !Em.isEmpty( project ) ) {
      this.render( 'project' );
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    } else {
      this.render( 'project_404' );
    }
  },

});