ETT.TimeEntriesController = Em.ArrayController.extend({
  needs: ['project'],
  sortProperties: ['date'],
  sortAscending: false,

  // Detect whether the project controller is set
  isProject: function() {
    return this.get('controllers.project.name') != null;
  }.property('controllers.project.name'),

  addEntry: function(entryObject) {
    var entry = ETT.TimeEntry.createRecord(entryObject);
    this.pushObject(entry);
  },

  togglePaid: function(entry) {
    entry.toggleProperty('paid');
  },
  
});