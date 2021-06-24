// <!-- ZA PRELAZ SLIKA U PRVOJ SEKCIJI -->

function imgSlider(anything) {
    document.querySelector('.img1').src = anything;
  }


//    ZA SLIDERRR

          var counter = 1;
      setInterval(function(){
          document.getElementById('radio' + counter).checked =true;
          counter++;
          if(counter>4){
              counter = 1;
          }
      }, 4000);