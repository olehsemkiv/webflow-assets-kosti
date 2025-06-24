  const acc = document.querySelectorAll(".item-accordion");

  acc.forEach((accItem) => {
    accItem.addEventListener("click", function () {
      const panel = this.querySelector(".item-accordion_panel");
      const head = this.querySelector(".item-accordion_head");

      const isActive = this.classList.contains("active");

      // Закриваємо всі акордеони
      acc.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".item-accordion_panel").classList.remove("active");
        item.querySelector(".item-accordion_head").classList.remove("active");
        item.querySelector(".item-accordion_panel").style.maxHeight = null;
      });

      // Якщо не був активний, відкриваємо цей
      if (!isActive) {
        this.classList.add("active");
        head.classList.add("active");
        panel.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + 16 + "px";
      }
    });
  });


  document.querySelectorAll('.item-accordion').forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.querySelectorAll('.item-accordion').forEach(el => {
        if (el !== item) {
          el.classList.add('not-hovered');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.item-accordion').forEach(el => {
        el.classList.remove('not-hovered');
      });
    });
  });


  const catalogueLists = document.querySelectorAll(".catalogue_list");
  if (catalogueLists.length > 0) {
    catalogueLists.forEach(el => {
      new Swiper(el, {
        slidesPerView: "auto",
        spaceBetween: 12,
      });
    });
  }



  document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('.collection-cms_radio');
    const output = document.getElementById('current-category-text');

    // Встановити обраний radio по замовчуванню
    const defaultRadio = document.querySelector('.collection-cms_radio-start-checked');
    if (defaultRadio) {
      defaultRadio.checked = true;
      const label = defaultRadio.closest('label').querySelector('.collection-cms_radio-label');
      if (label && output) output.textContent = label.textContent;
    }

    // Додати прослуховувачі на всі radio
    radios.forEach(radio => {
      radio.addEventListener('change', function () {
        const label = this.closest('label').querySelector('.collection-cms_radio-label');
        if (label && output) output.textContent = label.textContent;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelector('.collection-cms_filter-open');
    const filterPanel = document.querySelector('.main-filter');
    const overlay = document.querySelector('.main-filter_overlay');
    const closeButton = document.querySelector('.main-filter_close');

    if (openButton && filterPanel) {
      openButton.addEventListener('click', function () {
        filterPanel.classList.add('visible');
      });
    }

    function closeFilter() {
      filterPanel.classList.remove('visible');
    }

    if (overlay) {
      overlay.addEventListener('click', closeFilter);
    }

    if (closeButton) {
      closeButton.addEventListener('click', closeFilter);
    }
  });


  const swiper = new Swiper("#productGallery", {
    navigation: {
      nextEl: "#productGallery-next",
      prevEl: "#productGallery-prev",
    },
    pagination: {
      el: "#productGallery-pag",
      type: "fraction",
    },
  });
