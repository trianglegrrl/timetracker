ETT.Project = DS.Model.extend({
  timeEntries:  DS.hasMany('ETT.TimeEntry'),
  name:         DS.attr('string'),
  rate:         DS.attr('number'),
  slug:         DS.attr('string'),

  paidHours: function() {
    var reducer = function(i, timeEntry, index, enumerable) {
      if (timeEntry.get('paid') === false) { return i; }
      return i + parseFloat(timeEntry.get('hours'));
    };
    return this.get('timeEntries').reduce(reducer, 0);
  }.property('timeEntries.@each.hours', 'timeEntries.@each.paid'),

  unpaidHours: function() {
    var reducer = function(i, timeEntry, index, enumerable) {
      if (timeEntry.get('paid') === true) { return i; }
      return i + parseFloat(timeEntry.get('hours'));
    };
    return this.get('timeEntries').reduce(reducer, 0);
  }.property('timeEntries.@each.hours', 'timeEntries.@each.paid'),

  totalHours: function() {
    return this.get('paidHours') + this.get('unpaidHours');
  }.property('paidHours', 'unpaidHours'),

  paidDollars: function() {
    return this.get('paidHours') * this.get('rate');
  }.property('paidHours'),

  unpaidDollars: function() {
    return this.get('unpaidHours') * this.get('rate');
  }.property('unpaidHours'),

  totalDollars: function() {
    return this.get('totalHours') * this.get('rate');
  }.property('totalHours')

});