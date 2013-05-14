ETT.ProjectsRoute = Em.Route.extend({

  model: function(params) {
    return ETT.Project.find();
  },

});