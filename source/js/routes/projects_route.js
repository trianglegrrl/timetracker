ETT.ProjectsRoute = Ember.Route.extend({
  model: function(){
    results = [];
    $.ajax('http://embergarten.unspace.ca/projects',{
      success: function (data) {
        data.projects.forEach(function(p){
          results.pushObject(ETT.Project.create(p));
        })
      }
    });
    return results;
  }
});
