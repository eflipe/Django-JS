console.log("JS v2");

function Galeria(galeria) {

  const images = Array.from(galeria.querySelectorAll("img"));

  const modal = document.querySelector(".modal");
  const prevB = document.querySelector(".prev");
  const nextB = document.querySelector(".next");
  let currentImg;

  // --- funciones ----

  //fc: open foto
  function openModal() {

    if (modal.matches(".open")) {

      return;
    }
    modal.classList.add("open");

    window.addEventListener("keyup", keyUp);
    nextB.addEventListener("click", nextImg);
    prevB.addEventListener("click", prevImg);
  }

  //fc: close
  function closeModal() {
    modal.classList.remove("open");

    window.removeEventListener("keyup", keyUp);
    nextB.removeEventListener("click", nextImg);
    prevB.removeEventListener("click", prevImg);
  }

  function clickCloseModal(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  //fc: showImage
  function showImage(event) {
    if (!event) {
      console.info("No img");
      return;
    }
    console.log(event);
    modal.querySelector("img").src = event.src;
    modal.querySelector("h2").textContent = event.title;
    modal.querySelector("figure p").textContent = event.dataset.description;
    modal.querySelector("figure a").href = event.dataset.link;
    currentImg = event;
    openModal();
  }

  //fc: click image
  function imageClik(event) {
    showImage(event.currentTarget);
  }

  //fc: key press

  function keyUp(event) {
    if (event.key === "Escape") return closeModal();
    if (event.key === "ArrowRight") return nextImg();
    if (event.key === "ArrowLeft") return prevImg();
  }

  // fc: next img

  function nextImg() {
    showImage(currentImg.nextElementSibling || galeria.firstElementChild);
  }

  // fc: prev img

  function prevImg() {
    showImage(currentImg.previousElementSibling || galeria.lastElementChild);
  }

  // --- EVENTS ----

  images.forEach((image) => {
    image.addEventListener("click", (event) => showImage(event.currentTarget));
  });

  images.forEach((image) => {
    image.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        console.log('holis');
        showImage(event.currentTarget);
      }
    });
  });

  modal.addEventListener("click", clickCloseModal);
}

const galeria_1 = Galeria(document.querySelector(".galeria"));
