ETT.ProjectRoute = Em.Route.extend({

  model: function(params) {
    return ETT.Project.all().findProperty('slug', params.slug);
  },

  serialize: function(project) {
    return { slug: project.get('slug') };
  },

  setupController: function(controller, model) {
    this.controllerFor('projects').set('content', [model]);
  }

  // setupController: function(controller, model) {
  //   this.controllerFor('projects').set('content', @controller.);
  // }

});