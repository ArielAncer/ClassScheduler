Meteor.startup(function () {
  if (sternClasses.find().count() === 0) {
    sternClasses.insert(
      {
         "credits": 3,
         "crn": "34424",
         "crse": "1001",
         "day1": "TR",
         "prof": "Constance J Crawford",
         "time1finish": "11:45",
         "time1start": "10:30",
         "time2finish": "",
         "time2start": "",
         "title": "Accounting Principles I"
      }
    );
    sternClasses.insert(
      {
         "credits": 3,
         "crn": "34371",
         "crse": "1002",
         "day1": "TR",
         "prof": "David Hornung",
         "time1finish": "10:15",
         "time1start": "09:00",
         "time2finish": "",
         "time2start": "",
         "title": "Accounting Principles II"
      })
  };
})
