ETT.Router.map(function() {
  this.resource('projects', { path: '/projects' },
    function() {
      this.route('show', { path: ':project_id' });
    });
});
