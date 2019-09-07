//scroll animation (catalogue.html)

window.onscroll = function () {
    var vW = document.documentElement.clientWidth;
    var buttons = document.getElementById('rentButtons');

    if(window.pageYOffset > 0 && vW < 768) {
      buttons.classList.add('rentButtonsAnimated');      
      
    } else if (window.pageYOffset == 0){
      buttons.classList.remove('rentButtonsAnimated');
    }
  };