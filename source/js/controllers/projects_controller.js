ETT.ProjectsController = Em.ArrayController.extend({

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
    return this._calculateTotalByProperty('paidDollars');
  }.property('@each.paidDollars'),

  unpaidDollars: function() {
    return this._calculateTotalByProperty('unpaidDollars');
  }.property('@each.unpaidDollars'),

  totalDollars: function() {
    return this._calculateTotalByProperty('totalDollars');
  }.property('@each.totalDollars'),

  _calculateTotalByProperty: function(property) {
    var reducer = function(i, project, index, enumerable) {
      return i + parseFloat(project.get(property));
    };
    return this.reduce(reducer, 0);
  },
  
});