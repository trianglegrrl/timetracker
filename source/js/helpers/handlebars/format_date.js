// Custom Handlebars helper for formatting money
Em.Handlebars.registerBoundHelper('formatDate', function(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  if ((date instanceof Date) && !isNaN(date.getTime())) {
    return date.getFullYear() +
      '-' + ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' + ('0' + (date.getDate() + 1)).slice(-2);
  }
});
