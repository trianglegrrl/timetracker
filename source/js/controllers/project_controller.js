ETT.ProjectController = Em.ObjectController.extend({
  needs: ['timeEntries'],
  timeEntries: Em.computed.alias('controllers.timeEntries')
});
