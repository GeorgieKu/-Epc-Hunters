document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
        document.getElementById("overlay").classList.toggle("showed")
    })
    
    if(window.innerWidth <= 576) {
        
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 20,
            navigation: {
              nextEl: '.hero__next',
              prevEl: '.hero__prev',
            },
          });
    }
})
