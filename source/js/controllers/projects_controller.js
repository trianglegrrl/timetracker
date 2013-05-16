ETT.ProjectsController = Em.ArrayController.extend({
  paidHours: function() {
    return this._calculateTotalByProperty('paidHours');
  }.property('@each.paidHours'),

  unpaidHours: function() {
    return this._calculateTotalByProperty('unpaidHours');
  }.property('@each.unpaidHours'),

  totalHours: function() {
    return this.get( 'paidHours' ) + this.get( 'unpaidHours' );
  }.property( 'paidHours', 'unpaidHours' ),

  paidDollars: function() {
    return this._calculateTotalByProperty('paidDollars');
  }.property('@each.paidDollars'),

  unpaidDollars: function() {
    return this._calculateTotalByProperty('unpaidDollars');
  }.property('@each.unpaidDollars'),

  totalDollars: function() {
    return this.get( 'paidDollars' ) + this.get( 'unpaidDollars' );
  }.property( 'paidDollars', 'unpaidDollars' ),

  _calculateTotalByProperty: function( property ) {
    var reducer = function( i, project ) {
      return i + parseFloat( project.get( property ) );
    };
    return this.reduce(reducer, 0);
  },
});
