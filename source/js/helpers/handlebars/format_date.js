// Custom Handlebars helper for formatting money
Em.Handlebars.registerBoundHelper('formatDate', function(date) {
  if (typeof date === 'string') {
    date = date.split('-');
    date = new Date(date[0], date[1], date[2]);
  }
  if ((date instanceof Date) && !isNaN(date.getTime())) {
    return date.getFullYear() +
      '-' + ('0' + date.getMonth()).slice(-2) +
      '-' + ('0' + date.getDate()).slice(-2);
  }
});
