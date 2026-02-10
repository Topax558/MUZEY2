document.addEventListener("DOMContentLoaded", () => {

  // ====== МУЗЕЙ (экспонаты) ======
  const museumImages = [
    "images/20251202_094231.jpg",

    "images/20251204_122809.jpg",
    "images/20251204_123042.jpg",
    "images/20251204_123748.jpg",
    "images/20251204_124027.jpg",
    "images/20251204_125527.jpg",

    "images/20251204_130025.png",
    "images/20251204_130113.png",
    "images/20251204_130140.png",
    "images/20251204_130209.png",
    "images/20251204_130233.png",
    "images/20251204_130301.png",
    "images/20251204_130328.png",

    "images/20251204_125355.png",
    "images/20251204_125548.png",
    "images/20251204_125709.png"
  ];

  // ====== ДОКУМЕНТЫ ======
  const documentImages = [
    "images/20251202_093915.jpg",
    "images/20251202_094416.jpg",
    "images/20251202_094708.jpg",
    "images/20251202_094955.jpg",
    "images/20251202_095041.jpg",
    "images/20251202_095130.jpg",
    "images/20251202_095140.jpg",
    "images/20251202_095151.jpg",
    "images/20251202_095240.jpg",
    "images/20251202_095328.jpg",
    "images/20251202_095544.jpg",
    "images/20251202_095635.jpg",
    "images/20251202_100136.jpg",

    "images/20251204_125627.png",
    "images/20251204_125831.png",
    "images/20251204_125903.png",
    "images/20251204_130003.png"
  ];

  // ====== LIGHTBOX ======
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImg || !closeBtn) return;

  function openLightbox(src){
    lightboxImg.src = src;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox(){
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeLightbox();
  });

  // ====== ЗАПОЛНЕНИЕ МУЗЕЯ ======
  const gallery = document.getElementById("gallery");
  if (gallery) {
    museumImages.forEach((src) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${src}" alt="">
        <p>Экспонат музея</p>
      `;
      card.addEventListener("click", () => openLightbox(src));
      gallery.appendChild(card);
    });
  }

  // ====== ЗАПОЛНЕНИЕ ДОКУМЕНТОВ ======
  const docsGrid = document.getElementById("docsGrid");
  if (docsGrid) {
    documentImages.forEach((src) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${src}" alt="">
        <p>Документ / публикация</p>
      `;
      card.addEventListener("click", () => openLightbox(src));
      docsGrid.appendChild(card);
    });
  }

});
