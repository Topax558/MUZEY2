document.addEventListener("DOMContentLoaded", () => {

  // ====== МУЗЕЙ (экспонаты) ======
  const museumImages = [
    "20251202_094231.jpg",

    "20251204_122809.jpg",
    "20251204_123042.jpg",
    "20251204_123748.jpg",
    "20251204_124027.jpg",
    "20251204_125527.jpg",

    "20251204_130025.png",
    "20251204_130113.png",
    "20251204_130140.png",
    "20251204_130209.png",
    "20251204_130233.png",
    "20251204_130301.png",
    "20251204_130328.png",

    "20251204_125355.png",
    "20251204_125548.png",
    "20251204_125709.png"
  ];

  // ====== ДОКУМЕНТЫ ======
  const documentImages = [
    "20251202_093915.jpg",
    "20251202_094416.jpg",
    "20251202_094708.jpg",
    "20251202_094955.jpg",
    "20251202_095041.jpg",
    "20251202_095130.jpg",
    "20251202_095140.jpg",
    "20251202_095151.jpg",
    "20251202_095240.jpg",
    "20251202_095328.jpg",
    "20251202_095544.jpg",
    "20251202_095635.jpg",
    "20251202_100136.jpg",

    "20251204_125627.png",
    "20251204_125831.png",
    "20251204_125903.png",
    "20251204_130003.png"
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
