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

window.addEventListener("scroll", loadScroll);

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
