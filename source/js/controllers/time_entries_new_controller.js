ETT.TimeEntriesNewController = Em.ObjectController.extend({
  needs: ['timeEntries', 'projects', 'project'],
  isIndex: Em.computed.alias( 'controllers.timeEntries.isIndex' ),
  isValid: false,

  init: function() {
    this._super();
    this.createNewEntry();
  },

  // Creates transaction + new TimeEntry
  createNewEntry: function() {
    this.transaction = this.get('store').transaction();
    this.set( 'content', this.transaction.createRecord(ETT.TimeEntry, {}) );
    if ( !this.get( 'isIndex' ) ) {
      this.set( 'project', this.get('controllers.project.content') );
    }
  },

  // Commit + clear current transaction
  saveNewEntry: function() {
    // Create Date object
    var date = this.get( 'date' );
    if ( typeof date === 'string') {
      date = date.split('-');
      date = new Date(date[0], date[1], date[2]);
      this.set( 'content.date', date );
    }
    this.transaction.commit();
  },

  // Cancels the new TimeEntry creation process
  cancelNewEntry: function() {
    if (this.transaction) {
      this.transaction.rollback();
    }
  },

  validateNewEntry: function() {
    // Ensure all properties are present
    if (  Em.isEmpty( this.get('project') ) ||
          Em.isEmpty( this.get('date') )    ||
          Em.isEmpty( this.get('hours') )   ||
          Em.isEmpty( this.get('description') ) ) {
      this.set('isValid', false);

    // Pass validation
    } else {
      this.set( 'isValid', true );
    }
  }.observes( 'project', 'date', 'hours', 'description' ),
  
})