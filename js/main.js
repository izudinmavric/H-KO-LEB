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



      // SHOW SCROLL TOP

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // Kada skrolamo vise od 560 viewport height, dodajemo show-scroll header klasu
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)



// SCROLL REVEAL


// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 1500,
//     reset: true
// });

// sr.reveal(`.main_section, .onama_section,
//             .nasiproizvodi_section, .nasepekare_section,
//             .galerija_section`, {
//     interval: 200
// })