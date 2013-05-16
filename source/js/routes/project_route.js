ETT.ProjectRoute = Em.Route.extend({
  setupController: function(controller, project) {
    this.controllerFor('time_entries.new').set('project', project);
    this.controllerFor('timeEntries').set('content', ETT.TimeEntry.filter(function(time_entry) {
      return time_entry.get('project') === project;
    }));
  }
});
