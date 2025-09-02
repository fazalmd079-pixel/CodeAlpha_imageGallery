const images = document.querySelectorAll(".pic img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    // Open Lightbox
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
      });
    });

    // Close
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Prev
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });

    // Next
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });

    // Close on outside click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });

    // Filter function
    function filterImages(category) {
      const pics = document.querySelectorAll(".gallery .pic");
      pics.forEach(pic => {
        if (category === "all" || pic.classList.contains(category)) {
          pic.style.display = "block";
        } else {
          pic.style.display = "none";
        }
      });
    }