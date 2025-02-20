const body = document.querySelector("body");
const header = document.querySelector("header");
const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".image-click-modal");
const modalImage = document.querySelector(".modal-image");
const sercvice = document.querySelector(".what-do-we-do");
const gallery = document.querySelector(".gallery");
const joinUs = document.querySelector(".join-us");
const contact = document.querySelector(".contact");
const linkService = document.querySelector(".link-what-do-we-do");
const linkGallery = document.querySelector(".link-gallery");
const linkJoinUs = document.querySelector(".link-join-us");
const linkContact = document.querySelector(".link-contact");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (
    window.scrollY >= sercvice.offsetTop - 300 &&
    window.scrollY < gallery.offsetTop - 300
  ) {
    linkService.classList.add("active");
  } else {
    linkService.classList.remove("active");
  }
  if (
    window.scrollY >= gallery.offsetTop - 300 &&
    window.scrollY < joinUs.offsetTop - 300
  ) {
    linkGallery.classList.add("active");
  } else {
    linkGallery.classList.remove("active");
  }
  if (
    window.scrollY >= joinUs.offsetTop - 300 &&
    window.scrollY < contact.offsetTop - 500
  ) {
    linkJoinUs.classList.add("active");
  } else {
    linkJoinUs.classList.remove("active");
  }
  if (window.scrollY >= contact.offsetTop - 500) {
    linkContact.classList.add("active");
  } else {
    linkContact.classList.remove("active");
  }
});

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    body.style.overflow = "hidden";
    modalImage.src = e.target.src;
    modal.classList.toggle("modal-open");
  });
});

modal.addEventListener("click", () => {
  body.style.overflow = "auto";
  modal.classList.remove("modal-open");
  modalImage.src = "";
});
