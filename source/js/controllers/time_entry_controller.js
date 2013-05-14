ETT.TimeEntryController = Em.ObjectController.extend({
  needs: ['project'],

  // Detect whether the project controller is set
  isProject: function() {
    return this.get('controllers.project.name') != null;
  }.property('controllers.project.name'),

});