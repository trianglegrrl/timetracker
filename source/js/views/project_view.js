ETT.ProjectView = Em.View.extend({
  didInsertElement: function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
});
