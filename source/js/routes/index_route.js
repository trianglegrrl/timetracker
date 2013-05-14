ETT.IndexRoute = Em.Route.extend({

  redirect: function() {
    this.transitionTo( 'time_entries' );
  },

});