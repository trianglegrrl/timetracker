ETT.ProjectsIndexRoute = Ember.Route.extend({
  model: function () { 
    return ETT.Project.findAll();
  }
});

ETT.ProjectsShowRoute = Ember.Route.extend({
  model: function (params) { 
    return ETT.Project.find(params.project_id);
  },
  setupController: function (controller, model) {
    model.findTimeEntries();
  }
});