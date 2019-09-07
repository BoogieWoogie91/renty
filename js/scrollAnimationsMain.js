// scroll animation (index.html)  
  window.onscroll = function () {

// rent buttons onscroll animation  
    var vW = document.documentElement.clientWidth;
    var buttons = document.getElementById('rentButtons');

    if(window.pageYOffset > 0 && vW < 768) {
      buttons.classList.add('rentButtonsAnimated');      
      
    } else if (window.pageYOffset == 0){
      buttons.classList.remove('rentButtonsAnimated');
    }


// progress bar animation (index.html)
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (-0.001 + winScroll / height) * 330;
    document.getElementById("blackStrip").style.width = scrolled + "%";
    console.log(winScroll / height);
    console.log(document.getElementById('checkbox_1').value);
  };