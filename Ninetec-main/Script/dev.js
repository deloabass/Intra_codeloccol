function myPlugin({ swiper, extendParams, on }) {
    extendParams({
      debugger: false,
    });

    on('init', () => {
      if (!swiper.params.debugger) return;
      console.log('init');
    });
    // ... (autres événements de débogage)

  }
      var swiper = new Swiper(".swiper", {
      // Install Plugin To Swiper
      modules: [myPlugin],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Enable debugger
      debugger: true,
      slidesPerView: 6,
      spaceBetween: 10,
       autoplay: {
  delay: 2000, // délai entre chaque diapositive en millisecondes
  disableOnInteraction: false, // désactive l'autoplay lors de l'interaction de l'utilisateur
},
    });