ETT.Project = DS.Model.extend({
  timeEntries:  DS.hasMany('ETT.TimeEntry'),
  name:         DS.attr('string'),
  rate:         DS.attr('number'),
  slug:         DS.attr('string'),

  paidHours: function() {
    var reducer = function(i, timeEntry, index, enumerable) {
      if (timeEntry.get('paid') === true) {
        return i + parseFloat(timeEntry.get('hours'));
      }
    };
    var paidHours = this.get('timeEntries').reduce(reducer, 0);
    return (isNaN(paidHours)) ? 0 : paidHours;
  }.property('timeEntries.@each.hours', 'timeEntries.@each.paid'),

  unpaidHours: function() {
    var reducer = function(i, timeEntry, index, enumerable) {
      if (timeEntry.get('paid') === false) {
        return i + parseFloat(timeEntry.get('hours'));
      }
    };
    var unpaidHours = this.get('timeEntries').reduce(reducer, 0);
    return (isNaN(unpaidHours)) ? 0 : unpaidHours;
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