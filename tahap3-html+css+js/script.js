const images = document.querySelectorAll(".gallery-img");
const headingElement = document.querySelector(".gallery-text h2");
const descriptionElement = document.querySelector(".caption p");
const wrapper = document.querySelector(".image-wrapper");

const imageData = [
  {
    heading: "Membuat Karakter 3D",
    description:
      "Saya pernah bekerja dengan Blender untuk membuat karakter 3D, mulai dari desain konsep hingga model siap pakai untuk game dan animasi.",
  },
  {
    heading: "Penyusunan animasi",
    description:
      "Dengan Blender juga saya pernah membuat animasi singkat dari karakter yang saya kembangkan sebelumnya.",
  },
  {
    heading: "Mengembangkan Aplikasi AR",
    description:
      "Saya pernah membuat aplikasi mobile AR, menggunakan Unity untuk memberikan pengalaman pengguna yang optimal.",
  },
];

let currentIndex = 0;

// Fungsi untuk update teks berdasarkan gambar aktif
function updateText(index) {
  headingElement.textContent = imageData[index].heading;
  descriptionElement.textContent = imageData[index].description;
}

// Fungsi untuk mengubah gambar yang aktif
function updateActiveImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  updateText(index);
}

images.forEach((img, index) => {
  img.addEventListener("click", function () {
    // Perbarui indeks gambar yang diklik
    currentIndex = index;

    // Perbarui tampilan gambar dan teks
    updateActiveImage(currentIndex);

    // Geser gambar ke tengah layar
    this.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });
});

// Event Listener untuk swipe (geser) di layar sentuh
let startX = 0;

wrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

wrapper.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    // Geser ke kiri (Next)
    currentIndex = (currentIndex + 1) % images.length;
  } else if (diff < -50) {
    // Geser ke kanan (Prev)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  updateActiveImage(currentIndex);
});

// Event Listener untuk swipe dengan mouse (Desktop)
let isDragging = false;
let startMouseX = 0;

wrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  startMouseX = e.clientX;
});

wrapper.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  let endMouseX = e.clientX;
  let diff = startMouseX - endMouseX;

  if (diff > 50) {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (diff < -50) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  updateActiveImage(currentIndex);
});

// Inisialisasi tampilan awal
updateActiveImage(currentIndex);

// Smooth Scroll untuk Navbar
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);

    if (targetId === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top:
            targetSection.offsetTop -
            document.querySelector(".navbar").offsetHeight +
            40,
          behavior: "smooth",
        });
      }
    }
  });
});
