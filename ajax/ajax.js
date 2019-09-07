
// give rent ajax
$('#giveRentForm').submit(function(e) {
  e.preventDefault();

  var estateType = $('#giveRentSelect'),
      estateAdress = $('#giveRentAdress'),
      estatePhone = $('#giveRentPhone'),
      estateEmail = $('#giveRentEmail');

  if ( (estateType.val() != "Выберите тип") && (estateAdress.val() != "") && (estatePhone.val() != "") && (estateEmail.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
            type: estateType.val(),
            adress: estateAdress.val(),
            phone: estatePhone.val(),
            email: estateEmail.val(),
      },

      success: function(response) {
      setTimeout(function() {
        $("#giveRentFormSucсess").addClass("formSuccess");
      }, 700);

        setTimeout(function() {
          estateAdress.val("");
          estatePhone.val("");
          estateEmail.val("");
        }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
          $("#giveRentFormFail").addClass("formFail");
        }, 700);

        setTimeout(function() {
          estateAdress.val("");
          estatePhone.val("");
          estateEmail.val("");
        }, 1700);
      },
    });

  } else {
    if (estateType.val() == "Выберите тип") {
      estateType.addClass("error");
    }

    if (estateAdress.val() == "" ) {
      estateAdress.addClass("error");
    }

    if (estatePhone.val() == "" ) {
      estatePhone.addClass("error");
    }

    if (estateEmail.val() == "" ) {
      estateEmail.addClass("error");
    }
  }
});





// take rent ajax
$('#takeRentForm').submit(function(e) {
    e.preventDefault();

    var estateType = $('#takeRentSelect'),
        estateAdress = $('#takeRentAdress'),
        estatePhone = $('#takeRentPhone'),
        estateEmail = $('#takeRentEmail');


  if ( (estateType.val() != "Выберите тип") && (estateAdress.val() != "") && (estatePhone.val() != "") && (estateEmail.val() != "") ) {
    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              type: estateType.val(),
              adress: estateAdress.val(),
              phone: estatePhone.val(),
              email: estateEmail.val(),
      },
      success: function(response) {
        setTimeout(function() {
                  $("#takeRentFormSucсess").addClass("formSuccess");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#takeRentFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");
                }, 1700);
      },
    });
  } else {
    if (estateType.val() == "Выберите тип") {
      estateType.addClass("error");
    }

    if (estateAdress.val() == "" ) {
      estateAdress.addClass("error");
    }

    if (estatePhone.val() == "" ) {
      estatePhone.addClass("error");
    }

    if (estateEmail.val() == "" ) {
      estateEmail.addClass("error");
    }
  }
});


// questionForm ajax
$('#questionForm').submit(function(e) {
    e.preventDefault();

    var question = $('#questionInput'),
        questionPhone = $('#questionPhone'),
        questionEmail = $('#questionEmail'),
        checkbox = $('#checkbox_1'),
        label = $('#questionLabel');

  if ( (checkbox.val() != "") && (question.val() != "") && (questionPhone.val() != "") && (questionEmail.val() != "") ) {
        
    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              question: question.val(),              
              phone: questionPhone.val(),
              email: questionEmail.val(),              
      },
      success: function(response) {
        setTimeout(function() {
                  $("#questionFormSucсess").addClass("formSuccess");
                }, 700);

                setTimeout(function() {                  
                  question.val("");
                  questionPhone.val("");
                  questionEmail.val("");
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#questionFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {                  
                  question.val("");
                  questionPhone.val("");
                  questionEmail.val("");
                }, 1700);
      },
    });
  } else {
    if (question.val() == "") {
      question.addClass("error");
    }

    if (questionPhone.val() == "" ) {
      questionPhone.addClass("error");
    }

    if (questionEmail.val() == "" ) {
      questionEmail.addClass("error");
    }

    if (checkbox.attr('checked') != "checked" ) {
      label.addClass("labelError");
    }
  }
});

// tinkoffForm ajax
$('#tinkoffForm').submit(function(e) {
    e.preventDefault();

    var name = $('#tinkoffName'),
        tinkoffPhone = $('#tinkoffPhone');


  if ( (name.val() != "") && (tinkoffPhone.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              name: name.val(),              
              phone: tinkoffPhone.val(),                            
      },
      success: function(response) {
        setTimeout(function() {
                  $("#tinkoffFormSucсess").addClass("formSuccess");
                }, 700);

                setTimeout(function() {                  
                  name.val("");
                  tinkoffPhone.val("");                  
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#tinkoffFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {                  
                  name.val("");                  
                  tinkoffPhone.val("");
                }, 1700);
      },
    });
  } else {
    if (name.val() == "") {
      name.addClass("error");
    }

    if (tinkoffPhone.val() == "" ) {
      tinkoffPhone.addClass("error");
    }
  }
});

// giveRent(mobile) ajax
$('#giveRentPopUpForm').submit(function(e) {
    e.preventDefault();

    var estateType = $('#giveRentPopUpSelect'),
        estateAdress = $('#giveRentPopUpAdress'),
        estatePhone = $('#giveRentPopUpPhone'),
        estateEmail = $('#giveRentPopUpEmail');

  if ( (estateType.val() != "") && (estateAdress.val() != "") && (estatePhone.val() != "") && (estateEmail.val() != "") ) {      
    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              type: estateType.val(),
              adress: estateAdress.val(),
              phone: estatePhone.val(),
              email: estateEmail.val(),                            
      },
      success: function(response) {
        setTimeout(function() {
                  $("#giveRentPopUpFormSucсess").addClass("formSuccess");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");                  
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#giveRentPopUpFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");
                }, 1700);
      },
    });
  } else {
    if (estateType.val() == "Выберите тип") {
      estateType.addClass("error");
    }

    if (estateAdress.val() == "" ) {
      estateAdress.addClass("error");
    }

    if (estatePhone.val() == "" ) {
      estatePhone.addClass("error");
    }

    if (estateEmail.val() == "" ) {
      estateEmail.addClass("error");
    }
  }
});


// takeRent(mobile) ajax
$('#takeRentPopUpForm').submit(function(e) {
    e.preventDefault();

    var estateType = $('#takeRentPopUpSelect'),
        estateAdress = $('#takeRentPopUpAdress'),
        estatePhone = $('#takeRentPopUpPhone'),
        estateEmail = $('#takeRentPopUpEmail');

  if ( (estateType.val() != "") && (estateAdress.val() != "") && (estatePhone.val() != "") && (estateEmail.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              type: estateType.val(),
              adress: estateAdress.val(),
              phone: estatePhone.val(),
              email: estateEmail.val(),                            
      },
      success: function(response) {
        setTimeout(function() {
                  $("#takeRentPopUpFormSucсess").addClass("formSuccess");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");                  
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#takeRentPopUpFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {                  
                  estateAdress.val("");
                  estatePhone.val("");
                  estateEmail.val("");
                }, 1700);
      },
    });
  } else {
    if (estateType.val() == "Выберите тип") {
      estateType.addClass("error");
    }

    if (estateAdress.val() == "" ) {
      estateAdress.addClass("error");
    }

    if (estatePhone.val() == "" ) {
      estatePhone.addClass("error");
    }

    if (estateEmail.val() == "" ) {
      estateEmail.addClass("error");
    }
  }
});


// repairs form ajax
$('#leaveRequest').submit(function(e) {
    e.preventDefault();

    var leaveRequestPhone = $('#leaveRequestPhone'),
        checkbox = $('#check_1'),
        label = $('#questionLabel');

    if ( (leaveRequestPhone.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              phone: leaveRequestPhone.val(),                                          
      },
      success: function(response) {
        setTimeout(function() {
                  $("#leaveRequestFormSucсess").addClass("leaveRequestFormSuccess");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                 
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#leaveRequestFormFail").addClass("leaveRequestFormFail");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                  
                }, 1700);
      },
    });
  } else {
    if (leaveRequestPhone.val() == "") {
      leaveRequestPhone.addClass("error");
    }

    if (checkbox.attr('checked') != "checked") {
      label.addClass("labelError");
    }    
  }
});

// repairs form (mobile) ajax
$('#adaptiveLeaveRequest').submit(function(e) {
    e.preventDefault();

    var leaveRequestPhone = $('#adaptiveLeaveRequestPhone'),
        checkbox = $('#check_2'),
        label = $('#questionLabel_2');

    if ( (leaveRequestPhone.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              phone: leaveRequestPhone.val(),                                          
      },
      success: function(response) {
        setTimeout(function() {
                  $("#leaveRequestPopUpFormSucсess").addClass("leaveRequestFormSuccess");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                 
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#leaveRequestPopUpFormFail").addClass("leaveRequestFormFail");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                  
                }, 1700);
      },
    });
  } else {
    if (leaveRequestPhone.val() == "") {
      leaveRequestPhone.addClass("error");
    }

    if (checkbox.attr('checked') != "checked") {
      label.addClass("labelError");
    }    
  }
});

// before rent form (mobile) ajax
$('#beforeRentForm').submit(function(e) {
    e.preventDefault();
    var leaveRequestPhone = $('#beforeRentPhone'),
        checkbox = $('#check_2'),
        label = $('#questionLabel_2');


        if ( (leaveRequestPhone.val() != "") ) {

    $.ajax({
      url: "https://www.renty.me/-/promo-lend",
      type: "POST",
      data: {
              phone: leaveRequestPhone.val(),                                          
      },
      success: function(response) {
        setTimeout(function() {
                  $("#beforeRentFormSucсess").addClass("formSucсess");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                 
                }, 1700);
      },

      error: function(response) {
        setTimeout(function() {
                  $("#beforeRentFormFail").addClass("formFail");
                }, 700);

                setTimeout(function() {
                  leaveRequestPhone.val("");                  
                }, 1700);
      },
    });
  } else {
    if (leaveRequestPhone.val() == "") {
      leaveRequestPhone.addClass("error");
    }

    if (checkbox.attr('checked') != "checked") {
      label.addClass("labelError");
    }    
  }
});