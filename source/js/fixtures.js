var preloadData = function() {
  window.PRELOADS = {
    projects: [{
      id: 1,
      name: 'RPN',
      slug: 'rpn',
      rate: 225.00,
      time_entry_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },{
      id: 2,
      name: 'Technologic',
      slug: 'technologic',
      rate: 200.00,
      time_entry_ids: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },{
      id: 3,
      name: 'Throne of JS',
      slug: 'throne-of-js',
      rate: 200.00,
      time_entry_ids: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },{
      id: 4,
      name: 'Embergarten',
      slug: 'embergarten',
      rate: 200.00,
      time_entry_ids: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    }],
    time_entries: []
  };

  var timeEntryNotes = [
    'Refactoring brochure site',
    'Debugging back-end',
    'Meeting',
    'Front-end development',
    'Front-end debugging',
    'Markup and styling',
    'Database migrations',
    'Technical debt'
  ];

  var startDate       = new Date(2013, 04, 01),
      endDate         = new Date(2013, 05, 12),
      newDate         = startDate,
      timeEntryDates  = [];

  while ( newDate <= endDate ) {
    timeEntryDates.push(new Date(newDate));
    newDate.setDate(newDate.getDate()+1);
  };

  for ( var i = 0; i <= 39; i++ ) {
    var timeEntry = {
      id:         i+1,
      date:       timeEntryDates[i].toString(),
      project_id: (i < 10) ? 1 : parseInt( i.toString().charAt(0) ) + 1,
      hours:      Math.floor((Math.random()*10)+1),
      notes:      timeEntryNotes[ Math.floor( Math.random() * timeEntryNotes.length ) ],
      paid:       Math.floor((Math.random()*39)+1) == i
    };

    window.PRELOADS.time_entries.push(timeEntry);
  };
};

preloadData()
