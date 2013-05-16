ETT.TimeEntriesRoute = Em.Route.extend({
  model: function(params) {
    return ETT.TimeEntry.find();
  },

  renderTemplate: function(controller, model) {
    this._super(); // this.render('time_entries');
    this.render('totals', {
      into: 'application',
      outlet: 'totals',
      controller: 'projects'
    });
  },

  setupController: function(controller) {
    controller.set('isIndex', true);
    this.controllerFor('projects').set('content', ETT.Project.find());
    this.controllerFor('timeEntriesNew').createNewEntry();
  },

  deactivate: function() {
    this.controller.set('isIndex', false);
  }
});
