ETT.TimeEntriesNewController = Em.ObjectController.extend({
  needs: ['timeEntries', 'projects', 'project'],
  isIndex: Em.computed.alias('controllers.timeEntries.isIndex'),
  currentProject: null,

  // Creates transaction + new TimeEntry
  createNewEntry: function() {
    var transaction, timeEntry, currentProject;
    transaction = this.get('transaction') || this.get('store').transaction();
    timeEntry   = transaction.createRecord(ETT.TimeEntry, {});
    if (currentProject = this.get('currentProject')) {
      timeEntry.set('project', currentProject);
    }
    this.set('content', timeEntry);
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
    this.get('transaction').commit();
    console.log('Created new entry, updating controller!');
    this.createNewEntry();
  },

  // Cancels the new TimeEntry creation process
  cancelNewEntry: function() {
    var transaction;
    if (transaction = this.get('transaction')) {
      transaction.rollback();
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
