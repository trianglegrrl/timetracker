ETT.NewEntryDescriptionTextArea = Em.TextArea.extend({
  attributeBindings: [ 'disabled' ],

  disabled: function() {
    return Em.isEmpty( this.get('controller.project') );
  }.property('controller.project')

});