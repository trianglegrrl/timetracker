ETT.TimeEntriesNewController = Em.ObjectController.extend({
  needs: ['timeEntries', 'projects', 'project'],
  isIndex: Em.computed.alias('controllers.timeEntries.isIndex'),

  init: function() {
    this._super();
    this.createNewEntry();
  },

  // Creates transaction + new TimeEntry
  createNewEntry: function() {
    this.transaction = this.transaction || this.get('store').transaction();
    this.set('content', this.transaction.createRecord(ETT.TimeEntry, {}));
  },

  // Commit + clear current transaction
  saveNewEntry: function() {
    // Create Date object
    var date = this.get('date');
    if (typeof date === 'string') {
      date = date.split('-');
      date = new Date(date[0], date[1], date[2]);
      this.set('content.date', date);
    }
    this.transaction.commit();
    this.createNewEntry();
  },

  // Cancels the new TimeEntry creation process
  cancelNewEntry: function() {
    if (this.transaction) {
      this.transaction.rollback();
    }
  },

  isValid: function() {
    return !(Em.isEmpty(this.get('project')) ||
             Em.isEmpty(this.get('date'))    ||
             Em.isEmpty(this.get('hours'))   ||
             Em.isEmpty(this.get('description')));
  }.property('project', 'date', 'hours', 'description'),

  isInvalid: Em.computed.not('isValid'),

  projectEmpty: Em.computed.empty('project')
});
