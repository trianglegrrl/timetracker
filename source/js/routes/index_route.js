ETT.IndexRoute = Em.Route.extend({

  renderTemplate: function() {
    this.controllerFor('projects').set('content', ETT.Project.all());
    this.controllerFor('timeEntries').set('content', ETT.TimeEntry.all());
    
    this.render('time_entries', {
      into: 'application',
      controller: 'timeEntries'
    });
  },

});