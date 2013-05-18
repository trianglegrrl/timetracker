ETT.TimeEntry = Ember.Object.extend({
  dollars: function () {
    return(this.get('hours') * this.get('project.rate'));
  }.property('project.rate', 'hours')
});
