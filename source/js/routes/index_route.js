ETT.IndexRoute = Em.Route.extend({

  renderTemplate: function() {
    // Unset project controller's content on index to show
    // projects column on timeEntries template
    this.controllerFor('project').set('content', undefined);

    // Render the timeEntries template into the main outlet
    // with the timeEntries controller (set in Application route)
    this.render('time_entries', {
      into: 'application',
      controller: 'timeEntries'
    });

    // Scroll to the top of this view when coming back to it
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },

});