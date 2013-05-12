ETT.TotalsController = Em.Controller.extend({
  needs: ['projects'],

  projects: Em.computed.alias('controllers.projects'),

  paidHours: Em.computed.alias('projects.paidHours'),

  unpaidHours: Em.computed.alias('projects.unpaidHours'),

  totalHours: Em.computed.alias('projects.totalHours'),

  paidDollars: Em.computed.alias('projects.paidDollars'),

  unpaidDollars: Em.computed.alias('projects.unpaidDollars'),

  totalDollars: Em.computed.alias('projects.totalDollars')

});