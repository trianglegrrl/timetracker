// Configure custom pluralizations
ETT.Adapter = DS.RESTAdapter.extend();

ETT.Adapter.configure('plurals', {
  time_entry: 'time_entries'
});

ETT.Adapter.reopen({
  url: 'http://embergarten.unspace.ca'
});

// Create Ember Data Store
ETT.Store = DS.Store.extend({
  revision: 12, // API Version
  adapter: ETT.Adapter
});
