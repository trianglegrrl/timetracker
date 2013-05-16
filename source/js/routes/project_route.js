ETT.ProjectRoute = Em.Route.extend({
  setupController: function(controller, project) {
    this.controllerFor('timeEntriesNew').set('currentProject', project);
    this.controllerFor('timeEntriesNew').createNewEntry();
    this.controllerFor('timeEntries').set('content', ETT.TimeEntry.filter(function(timeEntry) {
      return timeEntry.get('project') === project && timeEntry.get('id');
    }));
  },

  deactivate: function() {
    this.controllerFor('timeEntriesNew').set('currentProject', null);
  }
});
