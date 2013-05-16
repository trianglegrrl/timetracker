ETT.ProjectRoute = Em.Route.extend({
  setupController: function(controller, project) {
    this.controllerFor('timeEntries').set('content', ETT.TimeEntry.filter(function(time_entry) {
      return time_entry.get('project') === project;
    this.controllerFor('timeEntriesNew').set('currentProject', project);
    this.controllerFor('timeEntriesNew').createNewEntry();
    }));

  deactivate: function() {
    this.controllerFor('timeEntriesNew').set('currentProject', null);
  }
});
