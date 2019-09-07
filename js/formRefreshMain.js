function formRefresh () {  
  var giveSuccess = document.getElementById('giveRentFormSucсess');
  var giveFail = document.getElementById('giveRentFormFail');

  var takeSuccess = document.getElementById('takeRentFormSucсess');
  var takeFail = document.getElementById('takeRentFormFail');

  var questionSuccess = document.getElementById('questionFormSucсess');
  var questionFail = document.getElementById('questionFormFail');

  var tinkoffFormSucсess = document.getElementById('tinkoffFormSucсess');
  var tinkoffFormFail = document.getElementById('tinkoffFormFail');

  var givePopUpSuccess = document.getElementById('giveRentPopUpFormSucсess');
  var givePopUpFail = document.getElementById('giveRentPopUpFormFail');

  var takePopUpSuccess = document.getElementById('takeRentPopUpFormSucсess');
  var takePopUpFail = document.getElementById('takeRentPopUpFormFail');

  var beforeRentFormPopUpSuccess = document.getElementById('beforeRentFormSucсess');
  var beforeRentFormPopUpFail = document.getElementById('beforeRentFormFail');


  if (giveSuccess.classList.contains('formSuccess')) {
    giveSuccess.classList.remove('formSuccess');

  } else if (giveFail.classList.contains('formFail')) {
    giveFail.classList.remove('formFail');

  } else if (takeSuccess.classList.contains('formSuccess')) {
    takeSuccess.classList.remove('formSuccess');

  } else if (takeFail.classList.contains('formFail')) {
    takeFail.classList.remove('formFail');

  } else if (questionSuccess.classList.contains('formSuccess')) {
    questionSuccess.classList.remove('formSuccess');

  } else if (questionFail.classList.contains('formFail')) {
    questionFail.classList.remove('formFail');

  } else if (tinkoffFormSucсess.classList.contains('formSuccess')) {
    tinkoffFormSucсess.classList.remove('formSuccess');

  } else if (tinkoffFormFail.classList.contains('formFail')) {
    tinkoffFormFail.classList.remove('formFail');

  } else if (givePopUpSuccess.classList.contains('formSuccess')) {
    givePopUpSuccess.classList.remove('formSuccess');

  } else if (givePopUpFail.classList.contains('formFail')) {
    givePopUpFail.classList.remove('formFail');

  } else if (takePopUpSuccess.classList.contains('formSuccess')) {
    takePopUpSuccess.classList.remove('formSuccess');

  } else if (takePopUpFail.classList.contains('formFail')) {
    takePopUpFail.classList.remove('formFail');

  } else if (beforeRentFormPopUpSuccess.classList.contains('formSuccess')) {
    beforeRentFormPopUpSuccess.classList.remove('formSuccess');

  } else if (beforeRentFormPopUpFail.classList.contains('formFail')) {
    beforeRentFormPopUpFail.classList.remove('formFail');
  }
}