ETT.Router.map(function() {
  this.route( 'home', { path: '/home' } );
  this.route( 'old', { path: '/old' } );
  this.resource( 'project', { path: '/project/:project_slug' } )
});