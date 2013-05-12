ETT.TimeEntry = DS.Model.extend({
  project:  DS.belongsTo('ETT.Project'),
  notes:    DS.attr('string'),
  date:     DS.attr('date'),
  hours:    DS.attr('number'),
  paid:     DS.attr('boolean'),

  niceDate: function() {
    var date = this.get('date');
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  }.property('date')
});