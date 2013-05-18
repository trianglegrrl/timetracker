ETT.Project = Ember.Object.extend({
  findTimeEntries: function () {
    var results = [];
    var project = this;
    $.ajax('http://embergarten.unspace.ca/time_entries?project_id=' + this.get('id'), {
      success: function (data) {
        data.time_entries.forEach(function(p){
          p.project = project;
          results.pushObject(ETT.TimeEntry.create(p));
        })
      }
    });
    this.set('timeEntries', results);    
  },

  totalHours: function () {
    var count = 0;
    this.get('timeEntries').forEach (function (entry) { 
      count += Number(entry.get('hours')); 
    });
    return count;
  }.property('timeEntries.@each.hours'),

  totalDollars: function () {
    var count = 0;
    this.get('timeEntries').forEach (function (entry) { 
      count += Number(entry.get('dollars')); 
    });
    return count;
  }.property('timeEntries.@each.dollars', 'project.rate')
});

ETT.Project.reopenClass({
  find: function(params) {
    project = ETT.Project.create({id: params.id, rate: params.rate } );
    $.ajax('http://embergarten.unspace.ca/projects/' + params.id, {
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
