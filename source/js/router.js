ETT.Router.map(function() {
  this.route( 'old', { path: '/old' } );
  this.resource( 'project', { path: '/project/:slug' }, function() {
    this.route( 'edit' );
  });
});

ETT.Router.reopen({
  location: 'history' // Use History API for routes
});