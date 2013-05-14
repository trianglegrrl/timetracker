ETT.TimeEntriesController = Em.ArrayController.extend({
  needs: ['project', 'projects'],
  sortProperties: ['date'],
  sortAscending: false,

  projects: Em.computed.alias('controllers.projects'),

  // Detect whether the project controller is set
  isProject: function() {
    return this.get('controllers.project.name') != null;
  }.property('controllers.project.name'),

  addEntry: function(entryObject) {
    this.pushObject(entryObject);
  },
  
});