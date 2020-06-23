console.log("JS v2");

function Galeria(galeria) {

    this.galeria = galeria;

    this.images = Array.from(galeria.querySelectorAll("img"));
    this.modal = document.querySelector(".modal");
    this.prevB = this.modal.querySelector(".prev");
    this.nextB = this.modal.querySelector(".next");

  // bind methods to the instance
  this.nextImg = this.nextImg.bind(this)
  this.prevImg = this.prevImg.bind(this)
  this.keyUp = this.keyUp.bind(this)
  this.clickCloseModal = this.clickCloseModal.bind(this)

  // --- EVENTS ----

  this.images.forEach((image) => {
    image.addEventListener("click", (event) => this.showImage(event.currentTarget));
  });

  this.images.forEach((image) => {
    image.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        console.log("holis");
        this.showImage(event.currentTarget);
      }
    });
  });

  this.modal.addEventListener("click", this.clickCloseModal);
}

// --- funciones ----

//fc: open foto
Galeria.prototype.openModal = function () {
  if (this.modal.matches(".open")) {
    return;
  }
  this.modal.classList.add("open");

  window.addEventListener("keyup", this.keyUp);
  this.nextB.addEventListener("click", this.nextImg);
  this.prevB.addEventListener("click", this.prevImg);
}

//fc: close
Galeria.prototype.closeModal = function() {
  this.modal.classList.remove("open");

  window.removeEventListener("keyup", this.keyUp);
  this.nextB.removeEventListener("click", this.nextImg);
  this.prevB.removeEventListener("click", this.prevImg);
}

Galeria.prototype.clickCloseModal = function(event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
}

//fc: showImage
Galeria.prototype.showImage = function(event) {
  if (!event) {
    console.info("No img");
    return;
  }

  this.modal.querySelector("img").src = event.src;
  this.modal.querySelector("h2").textContent = event.title;
  this.modal.querySelector("figure p").textContent = event.dataset.description;
  this.modal.querySelector("figure a").href = event.dataset.link;
  this.currentImg = event;
  this.openModal();
}

//fc: click image
Galeria.prototype.imageClik = function(event) {
  this.showImage(event.currentTarget);
}

//fc: key press

Galeria.prototype.keyUp = function(event) {
  if (event.key === "Escape") return this.closeModal();
  if (event.key === "ArrowRight") return this.nextImg();
  if (event.key === "ArrowLeft") return this.prevImg();
}

// fc: next img

Galeria.prototype.nextImg  = function() {
  this.showImage(this.currentImg.nextElementSibling || this.galeria.firstElementChild);
}

// fc: prev img

Galeria.prototype.prevImg = function() {
  this.showImage(this.currentImg.previousElementSibling || this.galeria.lastElementChild);
}




const galeria_1 = new Galeria(document.querySelector(".galeria"));
