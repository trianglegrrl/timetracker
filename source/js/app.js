//= require "jquery"
//= require "handlebars"
//= require "ember"
//= require "ember-data"
//= require "format-money"
//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require ./fixtures
//= require ./store
//= require_tree ./routes
//= require ./router

// 'ETT' Namespace
window.ETT = Ember.Application.create({
  LOG_TRANSITIONS: true // Log routing transitions
})

// Custom Handlebars helper for formatting money
Em.Handlebars.registerBoundHelper('formatMoney', function(num) {
  return num.formatMoney();
});