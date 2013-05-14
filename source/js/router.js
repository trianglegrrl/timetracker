ETT.Router.map(function() {
  this.route( 'old' );
  this.resource( 'time_entries' );
  this.resource( 'projects', { path: '/projects' }, function() {
    this.resource( 'project', { path: ':slug' }, function() {
      this.route( 'edit' );
    });
  });
});

// ETT.Router.reopen({
//   location: 'history' // Use History API for routes
// });