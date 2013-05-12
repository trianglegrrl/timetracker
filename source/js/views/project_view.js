ETT.ProjectView = Em.View.extend({

  didInsertElement: function() {
    // Scroll to top of page when navigating to this view
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },

});