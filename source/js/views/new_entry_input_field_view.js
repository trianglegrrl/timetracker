ETT.NewEntryInputField = Em.TextField.extend({
  tagName: 'input',
  attributeBindings: [ 'min', 'max', 'step', 'disabled' ],

  disabled: function() {
    return Em.isEmpty( this.get('controller.project') );
  }.property('controller.project'),

});