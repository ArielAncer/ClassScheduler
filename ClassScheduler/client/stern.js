Template.stern.rendered = function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  Session.set('currentSearch')
};

Template.stern.helpers({
  'sternClasses': function () {
    return sternClasses.find({}, {sort: {title: 1}}).fetch();
  },

  'search': function() {
    return Session.get('currentSearch')
  },

  'currentMoreInfo': function () {
    return Session.get('currentMoreInfo');
  }
});

Template.stern.events({
  'keydown input.search' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var searchTerm = $('input.search').val();
      var search = sternClasses.find({title:{$regex:".*" + searchTerm + "*"}}, {sort: {title: 1}}).fetch();
      Session.set('currentSearch', search);
    }
  },

  'click a#more-info': function () {
    Session.set('currentMoreInfo', this);
    $('#modal1').openModal();
  },


  'click h5.title': function (e) {
    e.preventDefault();

    var time = this.time1start.split(":");
    var startTime = time[0];

    var days = this.day1.split("");
    for (day in days) {
      if (days[day] == "M") { $("#" + startTime + '-mon').html(this.title); }
      if (days[day] == "T") { $("#" + startTime + '-tues').html(this.title); }
      if (days[day] == "W") { $("#" + startTime + '-wed').html(this.title); }
      if (days[day] == "R") { $("#" + startTime + '-thurs').html(this.title); }
      if (days[day] == "F") { $("#" + startTime + '-fri').html(this.title); }
    }
    if (this.day2 == null) {}
    else {
      days = this.day2.split("");
      time = this.time2start.split(":");
      startTime = time[0];
       for (day in days) {
          if (days[day] == "M") { $("#" + startTime + '-mon').html(this.title); }
          if (days[day] == "T") { $("#" + startTime + '-tues').html(this.title); }
          if (days[day] == "W") { $("#" + startTime + '-wed').html(this.title); }
          if (days[day] == "R") { $("#" + startTime + '-thurs').html(this.title); }
          if (days[day] == "F") { $("#" + startTime + '-fri').html(this.title); }
       } 
    }
  }
});
