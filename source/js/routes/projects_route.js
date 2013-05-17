ETT.ProjectsRoute = Ember.Route.extend({
  model: function(){
    return [
      {
        name: 'First Project',
        rate: 20,
        budget: 100
      },
      {
        name: 'Second Project',
        rate: 40,
        budget: 200
      }
    ]
  }
});
