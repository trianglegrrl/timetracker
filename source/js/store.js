// Configure custom pluralizations
DS.RESTAdapter.configure('plurals', {
  time_entry: 'time_entries'
});

// Create Ember Data Store
ETT.Store = DS.Store.extend({
  revision: 12, // API Version
  init: function() {
    var _this = this;
    _this._super()

    if ( Em.isNone(preloaded_data = window.PRELOADS) ) {
      return;
    }

    $.each(preloaded_data, function(key, data) {
      var type = Em.get(ETT, key.replace(/s$/,'').replace(/ie$/,'y').classify());
      _this.loadMany(type, data);
    });
  }
});