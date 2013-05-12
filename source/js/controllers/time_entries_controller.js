ETT.TimeEntriesController = Em.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  addEntry: function(entryObject) {
    console.log(entryObject);
    var entry = ETT.TimeEntry.createRecord(entryObject);
    console.log(entry);
    this.pushObject(entry);
  },

  togglePaid: function(entry) {
    entry.toggleProperty('paid');
  },
  
});