// Configure custom pluralizations
DS.RESTAdapter.configure('plurals', {
  time_entry: 'time_entries'
});

DS.RESTAdapter.reopen({
  url: 'http://embergarten.unspace.ca'
});

// Create Ember Data Store
ETT.Store = DS.Store.extend({
  revision: 12 // API Version
});
