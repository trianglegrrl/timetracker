//= require "jquery"
//= require "handlebars"
//= require "ember"
//= require "ember-data"
//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./routes
//= require ./fixtures
//= require ./store
//= require ./router

// 'ETT' Namespace
window.ETT = Ember.Application.create({
  LOG_TRANSITIONS: true // Log routing transitions
})

