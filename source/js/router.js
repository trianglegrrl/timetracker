ETT.Router.map(function() {

  this.resource( 'projects', { path: '/projects' }, function() {
    this.resource( 'time_entries', { path: '/' } );
    this.resource( 'project', { path: ':slug' }, function() {
      this.route( 'edit' );
    });
  });

});