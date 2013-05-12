ETT.IndexRoute = Em.Route.extend({

  renderTemplate: function() {
    this.render('time_entries', {
      into: 'application',
      controller: 'timeEntries'
    });

    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },

});