ETT.Router.map(function() {

  this.resource( 'time_entries' );

  this.resource( 'projects' , function() {
    this.resource( 'project', { path: ':slug' } );
  });

});