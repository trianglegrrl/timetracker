ETT.ProjectRoute = Em.Route.extend({

  model: function(params) {
    // console.log(this.controllerFor( 'time_entries' ).get( 'length' ) );
    // console.log(params);
    return this.modelFor('projects').findProperty('slug', params.slug);
  },

  serialize: function(project) {
    return { slug: project.get('slug') };
  },

});