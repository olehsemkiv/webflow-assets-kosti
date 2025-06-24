document.addEventListener('DOMContentLoaded', () => {
  // 1. Divider animation when in center
  const dividers = document.querySelectorAll('.text-image_divider');
  function checkInCenter() {
    dividers.forEach(divider => {
      const rect = divider.getBoundingClientRect();
      const dividerCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      if (Math.abs(dividerCenter - viewportCenter) < 10) {
        divider.classList.add('animate');
      }
    });
  }
  window.addEventListener('scroll', checkInCenter);
  window.addEventListener('resize', checkInCenter);
  checkInCenter();

  // 2. Burger menu toggle
  const iconMenu = document.querySelector('.menu_icon');
  const menuBody = document.querySelector('.header_menu');
  if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }

  // 3. Header color change on scroll
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('[data-header-theme]');
  function updateHeaderTheme() {
    let currentTheme = null;
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY + headerHeight / 2;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        currentTheme = section.getAttribute('data-header-theme');
      }
    });
    if (currentTheme) {
      header.classList.toggle('header-light', currentTheme === 'light');
      header.classList.toggle('header-dark', currentTheme === 'dark');
    }
  }
  window.addEventListener('scroll', updateHeaderTheme);
  window.addEventListener('resize', updateHeaderTheme);
  updateHeaderTheme();

  // 4. simpleParallax init
  const images = document.querySelectorAll('img[data-parallax]');
  new simpleParallax(images, {
    scale: 1.4,
    delay: 0.2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
});

  document.addEventListener("DOMContentLoaded", function () {
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
  });
