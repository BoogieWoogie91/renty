function formRefresh () {    

  var givePopUpSuccess = document.getElementById('giveRentPopUpFormSucсess');
  var givePopUpFail = document.getElementById('giveRentPopUpFormFail');

  var takePopUpSuccess = document.getElementById('takeRentPopUpFormSucсess');
  var takePopUpFail = document.getElementById('takeRentPopUpFormFail');

  var repairsFormSuccess = document.getElementById('leaveRequestFormSucсess');
  var repairsFormFail = document.getElementById('leaveRequestFormFail');

  var repairsFormPopUpSuccess = document.getElementById('leaveRequestPopUpFormSucсess');
  var repairsFormPopUpFail = document.getElementById('leaveRequestPopUpFormFail');

  



  if (givePopUpSuccess.classList.contains('formSuccess')) {
    givePopUpSuccess.classList.remove('formSuccess');

  } else if (givePopUpFail.classList.contains('formFail')) {
    givePopUpFail.classList.remove('formFail');

  } else if (takePopUpSuccess.classList.contains('formSuccess')) {
    takePopUpSuccess.classList.remove('formSuccess');

  } else if (takePopUpFail.classList.contains('formFail')) {
    takePopUpFail.classList.remove('formFail');

  } else if (repairsFormSuccess.classList.contains('leaveRequestFormSuccess')) {
    repairsFormSuccess.classList.remove('leaveRequestFormSuccess');

  } else if (repairsFormFail.classList.contains('leaveRequestFormFail')) {
    repairsFormFail.classList.remove('leaveRequestFormFail');

  } else if (repairsFormPopUpSuccess.classList.contains('leaveRequestPopUpFormSucсess')) {
    repairsFormPopUpSuccess.classList.remove('leaveRequestFormSuccess');

  } else if (repairsFormPopUpFail.classList.contains('leaveRequestFormFail')) {
    repairsFormPopUpFail.classList.remove('leaveRequestFormFail');

  } 
}