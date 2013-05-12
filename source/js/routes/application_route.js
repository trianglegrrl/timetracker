ETT.ApplicationRoute = Em.Route.extend({

  setupController: function(controller, model) {
    this.controllerFor('projects').set('content', ETT.Project.all());
    this.controllerFor('timeEntries').set('content', ETT.TimeEntry.all());
  }

});