ETT.TimeEntriesController = Em.ArrayController.extend({
  needs: ['projects'],
  sortProperties: ['date'],
  sortAscending: false,
  projects: Em.computed.alias('controllers.projects')
});
