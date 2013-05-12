ETT.ProjectRoute = Em.Route.extend({

  model: function(params) {
    return ETT.Project.all().findProperty('slug', params.slug);
  },

  serialize: function(project) {
    return { slug: project.get('slug') };
  },

});