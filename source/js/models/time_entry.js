ETT.TimeEntry = DS.Model.extend({
  project:  DS.belongsTo('ETT.Project'),
  notes:    DS.attr('string'),
  date:     DS.attr('date'),
  hours:    DS.attr('number'),
  paid:     DS.attr('boolean'),

  niceDate: function() {
    var date = this.get('date');
    return  date.getFullYear() + '-'
            + ('0' + date.getMonth()).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
  }.property('date'),

  dollars: function() {
    return ( this.get('hours') * this.get('project.rate') ).toFixed(2);
  }.property('hours', 'project.rate')

});