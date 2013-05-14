// Custom Handlebars helper for formatting money
Em.Handlebars.registerBoundHelper('formatDate', function(date) {
  if (date instanceof Date) {
    return  date.getFullYear() + '-'
            + ('0' + date.getMonth()).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
  }
});