ETT.ApplicationRoute = Em.Route.extend({

  renderTemplate: function() {
    this.controllerFor('projects').set('content', ETT.Project.all());

    var timeEntriesController = this.controllerFor('timeEntries')
      .set('content', ETT.TimeEntry.all());

    this.render('application');

    this.render('time_entries', {
      into: 'application',
      controller: timeEntriesController.get('arrangedContent')
    });
  },

});