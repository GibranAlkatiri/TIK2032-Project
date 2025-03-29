const images = document.querySelectorAll(".gallery-img");
const headingElement = document.querySelector(".gallery-text h2");
const descriptionElement = document.querySelector(".caption p");

const imageData = [
  {
    heading: "Membuat Karakter 3D",
    description:
      "Saya pernah bekerja dengan Blender untuk membuat karakter 3D, mulai dari desain konsep hingga model siap pakai untuk game dan animasi.",
  },
  {
    heading: "Penyusunan animasi",
    description:
      "Dengan blender juga saya pernah membuat animasi singkat dari karakter yang saya kembangkan sebelumnya.",
  },
  {
    heading: "Mengembangkan Aplikasi AR",
    description:
      "Saya pernah membuat aplikasi mobile AR, menggunakan Unity untuk memberikan pengalaman pengguna yang optimal.",
  },
];

let currentIndex = 0;

function updateSlider() {
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });

  // Ambil elemen gambar yang sedang aktif
  const imgElement = images[currentIndex];

  // Tambahkan animasi keluar
  imgElement.classList.remove("fade-in");
  imgElement.classList.add("fade-out-left");

  setTimeout(() => {
    // Ubah teks setelah animasi keluar selesai
    headingElement.textContent = imageData[currentIndex].heading;
    descriptionElement.textContent = imageData[currentIndex].description;

    // Hapus animasi keluar & tambahkan animasi masuk
    imgElement.classList.remove("fade-out-left");
    imgElement.classList.add("fade-in");
  }, 300);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}
