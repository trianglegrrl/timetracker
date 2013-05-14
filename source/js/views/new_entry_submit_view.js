ETT.NewEntryButton = Em.View.extend({
  tagName: 'button',
  attributeBindings: [ 'type', 'tabindex', 'disabled', 'action' ],

  disabled: function() {
    return !this.get( 'context.isValid' );
  }.property( 'context.isValid' ),

  click: function() {
    if ( this.get('disabled') ) {
      alert( 'All fields are required' );
      return;
    };
    this.get('context').send( 'saveNewEntry' );
  },

});