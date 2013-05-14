ETT.TimeEntryController = Em.ObjectController.extend({
  needs: ['timeEntries'],
  isIndex: Em.computed.alias( 'controllers.timeEntries.isIndex' ),
});