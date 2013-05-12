ETT.TotalsController = Em.ArrayController.extend({
  needs: ['projects'],
  content: Em.computed.alias('controllers.projects'),

  paidHours: function() {
    return this._calculateTotalByProperty('paidHours');
  }.property('@each.paidHours'),

  unpaidHours: function() {
    return this._calculateTotalByProperty('unpaidHours');
  }.property('@each.unpaidHours'),

  totalHours: function() {
    return this._calculateTotalByProperty('totalHours');
  }.property('@each.totalHours'),

  paidDollars: function() {
    return this._calculateTotalByProperty('paidDollars').toFixed(2);
  }.property('@each.paidDollars'),

  unpaidDollars: function() {
    return this._calculateTotalByProperty('unpaidDollars').toFixed(2);
  }.property('@each.unpaidDollars'),

  totalDollars: function() {
    return this._calculateTotalByProperty('totalDollars').toFixed(2);
  }.property('@each.totalDollars'),

  _calculateTotalByProperty: function(property) {
    var reducer = function(i, project, index, enumerable) {
      return i + parseFloat(project.get(property));
    };
    return this.reduce(reducer, 0);
  }

});