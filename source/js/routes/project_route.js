ETT.ProjectRoute = Em.Route.extend({

  model: function(params) {
    return this.modelFor('projects').findProperty( 'slug', params.slug );
  },

  serialize: function(project) {
    return { slug: project.get('slug') };
  },

  renderTemplate: function(controller, project) {
    if (project != null) {
      this.render( 'project' );
    } else {
      this.render( 'project_404' );
    }
  },

});