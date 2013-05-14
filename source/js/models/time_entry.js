ETT.TimeEntry = DS.Model.extend({
  project:      DS.belongsTo('ETT.Project'),
  description:  DS.attr('string'),
  date:         DS.attr('date'),
  hours:        DS.attr('number'),
  paid:         DS.attr('boolean'),

  dollars: function() {
    return this.get('hours') * this.get('project.rate');
  }.property('hours', 'project.rate')

});