document.querySelectorAll('.accordeon-item__trigger').forEach((item) => 
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordeon-item--active')) {
      parent.classList.remove('accordeon-item--active');
    } else {
      document
       .querySelectorAll('.accordeon-item')
       .forEach((child) => child.classList.remove('accordeon-item--active'))
      parent.classList.add('accordeon-item--active');
    }
  })
)


var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

export default swiper;