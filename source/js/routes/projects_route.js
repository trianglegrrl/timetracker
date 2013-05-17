ETT.ProjectsRoute = Ember.Route.extend({
  model: function(){
    var result = [];
    $.ajax('http://embergarten.unspace.ca/projects',{
      success: function(data){
        result.pushObjects(data.projects);
      }
    });
    return result;
  }
});
