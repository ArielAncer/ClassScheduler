Template.calendar.helpers({
  'slotA': function () {
      text: "Hello";
  }
});

  $(document).ready(function(){
    $("#09-thurs").click(function(){
      if ($("#09-thurs").html().length > 0) {
        $("#modal1").openModal();
      }
    }); 
  });


    $(document).ready(function(){
    $(".delete").click(function(){
        $("#09-thurs").empty();
        $("#modal1").closeModal();
    }); 
    });


  