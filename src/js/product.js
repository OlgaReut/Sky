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

const hamburger = document.querySelector('.btn2')
const naviMenu = document.querySelector('.navigation_lists')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    naviMenu.classList.toggle('active')
})

document.querySelectorAll('.navigation_link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    naviMenu.classList.remove('active')
}))