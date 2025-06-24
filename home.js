// Swiper: Hero Navigation
const swiperHeroNavEl = document.querySelector("#swiperHeroNav");
let swiperHeroNav;
if (swiperHeroNavEl) {
  swiperHeroNav = new Swiper(swiperHeroNavEl, {
    slidesPerView: 5,
  });
}

// Swiper: Hero Main
const swiperHeroEl = document.querySelector("#swiperHero");
if (swiperHeroEl) {
  new Swiper(swiperHeroEl, {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    thumbs: swiperHeroNav ? { swiper: swiperHeroNav } : undefined,
    effect: "fade",
  });
}

// Splide: Brands Line
const brandsLineEl = document.querySelector('#brands-line');
if (brandsLineEl && typeof Splide !== 'undefined' && window.splide?.Extensions) {
  new Splide(brandsLineEl, {
    type: 'loop',
    drag: 'free',
    autoWidth: true,
    focus: 'center',
    clones: 20,
    autoScroll: {
      speed: 0.75,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    pagination: false,
    arrows: false,
  }).mount(window.splide.Extensions);
}

// Swiper: Multiple .colections_list
const colectionLists = document.querySelectorAll(".colections_list");
if (colectionLists.length > 0) {
  colectionLists.forEach(el => {
    new Swiper(el, {
      slidesPerView: "auto",
      spaceBetween: 12,
    });
  });
}
