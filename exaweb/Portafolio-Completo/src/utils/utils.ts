export const loadScroll = () => {
  const elementosSticky = document.querySelectorAll(".sticky-top");
  elementosSticky.forEach(function (elemento) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        elemento.classList.add("bg-degradado");
      } else {
        elemento.classList.remove("bg-degradado");
      }
    });
  });
};

export const loadScrollModal = () => {
  const modalProject = document.querySelector(".modal-project");
  const elementosSticky = document.querySelectorAll(".sticky-top");

  modalProject?.addEventListener("scroll", function () {
    if (modalProject.scrollTop > 0) {
      elementosSticky.forEach(function (elemento) {
        elemento.classList.add("bg-degradado");
      });
    } else {
      elementosSticky.forEach(function (elemento) {
        elemento.classList.remove("bg-degradado");
      });
    }
  });
};

export const scrollToElement = (event: React.MouseEvent<HTMLAnchorElement>) => {
  console.log(event);
  const href = event.currentTarget.getAttribute("href");
  const offsetTop = document.getElementById(
    href?.substring(1) || ""
  )?.offsetTop;
  event.preventDefault();
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};

const turnNavBarIntoFixed = () => {
  const nav = document.querySelector(".to-fixed");
  const navImg = document.querySelector(".img-navbar") as HTMLImageElement;
  if (window.scrollY >= window.innerHeight * 0.85) {
    nav?.classList.add("fixed-header");
    if (navImg) {
      navImg.style.opacity = "1";
    }
  } else {
    nav?.classList.remove("fixed-header");
    if (navImg) {
      navImg.style.opacity = "0";
    }
  }
};

const manageScroll = () => {
  loadScroll();
  turnNavBarIntoFixed();
};

window.addEventListener("scroll", manageScroll);
