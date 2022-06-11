var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // }
});

export default swiper;