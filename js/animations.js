
  //open/close burger popup
  function openBurgerButton () { 
    var bg = document.getElementById('burgerButton');
    var bgPop = document.getElementById('burgerPopUp');    

    bg.classList.toggle('animateBurger');    
    bgPop.classList.toggle('animateBurgerPopUp');

    if (bgPop.classList.contains('animateBurgerPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }    
  };

  
//close burger popup via anchors
  function closeBurgerPopUp () { 
    var bgPop = document.getElementById('burgerPopUp');
    var bg = document.getElementById('burgerButton');

    bg.classList.toggle('animateBurger');
    bgPop.classList.toggle('animateBurgerPopUp');
  };


//open social Media popup
  function openSocialMediaButton () { 
    var smb = document.getElementById('socialMediaButton');
    var smbPop = document.getElementById('socialMediaPopUp');    

    smb.classList.toggle('socialMediaButtonAnimated');    
    smbPop.classList.toggle('animateSocialMediaPopUp');

    if (smbPop.classList.contains('animateSocialMediaPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static'; 
    }   
  };


// open give rent form (mobile)
  function giveRentButton () {
    var gr= document.getElementById('giveRent');
    var tr = document.getElementById('takeRent');
    var grPop = document.getElementById('giveRentPopUp');    
    var trPop = document.getElementById('takeRentPopUp');

    gr.classList.add('activeButton');
    tr.classList.remove('activeButton');    
    grPop.classList.add('animateGiveRentPopUp');
    trPop.classList.remove('animateTakeRentPopUp');


    if(grPop.classList.contains('animateGiveRentPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }

  };


// open take rent form (mobile)
  function takeRentButton () {
    var gr= document.getElementById('giveRent');
    var tr = document.getElementById('takeRent');
    var trPop = document.getElementById('takeRentPopUp');
    var grPop = document.getElementById('giveRentPopUp');
    
    tr.classList.add('activeButton');
    gr.classList.remove('activeButton');    
    trPop.classList.add('animateTakeRentPopUp');
    grPop.classList.remove('animateGiveRentPopUp');

    if(trPop.classList.contains('animateTakeRentPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }
  };


// close give rent form (mobile)
  function closeGiveFormButton () {
    var cfb= document.getElementById('closeFromButton');    
    var grPop = document.getElementById('giveRentPopUp');    
      
    grPop.classList.remove('animateGiveRentPopUp');

    if(grPop.classList.contains('animateGiveRentPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }    
  };


// close take rent form (mobile)
  function closeTakeFormButton () {
    var cfb = document.getElementById('closeFromButton');    
    var trPop = document.getElementById('takeRentPopUp');    
      
    trPop.classList.remove('animateTakeRentPopUp');

    if(trPop.classList.contains('animateTakeRentPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }
    
  };


// repair form popup (catalogue.html)
  function callRepairsForm (id) {  
    var rb = document.getElementById(id);
    var form = document.getElementById('leaveRequest');
    var adForm = document.getElementById('adaptiveFormPopUp');
    var vW = document.documentElement.clientWidth;       

    if (vW > 767) {      
      rb.classList.toggle('animatedServiceCard');
      form.classList.add('animatedLeaveRequest');
    } else if (vW < 768) {
      rb.classList.toggle('animatedServiceCard');
      adForm.classList.toggle('animatedAdaptiveFormPopUp');
    }

    if(adForm.classList.contains('animatedAdaptiveFormPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }
  }

// close repairs form popup (mobile catalogue.html)
  function closeLeaveRequestButton () {      
    var lrPop = document.getElementById('adaptiveFormPopUp');    
      
    lrPop.classList.remove('animatedAdaptiveFormPopUp');

    if(lrPop.classList.contains('animatedAdaptiveFormPopUp')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';      
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }    
  };

//before rent form popup

function faderPopUp() {
  var fader = document.getElementById('fader');
  var vW = document.documentElement.clientWidth; 

  fader.classList.add('faderAnimated');

  if (vW < 768) {
      if (fader.classList.contains('faderAnimated')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';    
      }
  } else if (vW > 767) {
    document.body.style.overflow = 'hidden';
  }
}

// close before rent popup

function closeBeforeRentFormButton () {       
    var fader = document.getElementById('fader');    
      
    fader.classList.remove('faderAnimated');

    if (fader.classList.contains('faderAnimated')) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'scroll';
      document.body.style.position = 'static';
    }    
  };