const initApp =()=>{
        
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mobileMenu =document.getElementById('mobile-menu')
    
    const toggleMenu=()=>{
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    }
    hamburgerBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
  }

  document.addEventListener('DOMContentLoaded',initApp)




// swiper js
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});