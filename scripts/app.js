const menuBtn = document.querySelector(".menu__menu-btn");
const menuList = document.querySelector(".menu__list");
const menuItem = document.querySelectorAll(".menu__item-link");
const lines = document.querySelectorAll(".btns");

const btnClick = () => {
  menuList.classList.toggle("active");
  lines.forEach((element) => {
    element.classList.toggle("btn-active");
  });
};

menuBtn.addEventListener("click", btnClick);

window.addEventListener("click", (e) => {
  for (let i = 0; i < menuItem.length; i++) {
    const element = menuItem[i];
    if (element == e.target) {
      menuList.classList.remove("active");
    } else if (menuList == e.target) {
      menuList.classList.remove("active");
    }
  }
});
