// import Swiper from "swiper";
// // import Swiper styles
// import "swiper/swiper-bundle.css";

var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
