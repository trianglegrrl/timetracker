ETT.Project = Ember.Object.extend({
  findTimeEntries: function () {
    results = [];

    $.ajax('http://embergarten.unspace.ca/time_entries?project_id=' + this.get('id'), {
      success: function (data) {
        data.time_entries.forEach(function(p){
          results.pushObject(ETT.TimeEntry.create(p));
        })
      }
    });
    this.set('timeEntries', results);    
  }
});

ETT.Project.reopenClass({
  find: function(project_id) {
    project = ETT.Project.create({id: project_id} );
    $.ajax('http://embergarten.unspace.ca/projects/' + project_id, {
      success: function (data) {
        project.setProperties(data.project);
      }
    }); 
    return project;    
  },
  findAll: function () {
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
