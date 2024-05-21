const burgerIcon = document.querySelector(".fa-burger");
const mobileNav = document.querySelector(".navigation");

function action() {
  console.log("Amburger: You clicked me!");
  mobileNav.classList.toggle("hide");
  burgerIcon.classList.toggle("fa-x");
  burgerIcon.classList.toggle("fa-burger");
  //   mobileNav.classList.toggle("show");
}

burgerIcon.addEventListener("click", action);
