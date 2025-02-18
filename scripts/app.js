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

const iconsContent = document.querySelector(".content__social");
const icons = document.querySelectorAll(".content__social-item");
const text = document.querySelector(".text");
const infoTitle = document.querySelector(".body__info-title");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const iconsTop = iconsContent.offsetTop;
  if (iconsTop > scrollPosition) {
    icons.forEach((elem) => {
      elem.classList.add("active-icon");
    });
  }

  const textTop = text.offsetTop;
  if (textTop > scrollPosition) {
    text.classList.add("active-text");
  }

  const topTitle = infoTitle.offsetTop;
  if (topTitle > scrollPosition) {
    infoTitle.classList.add("info-active");
  }
});
