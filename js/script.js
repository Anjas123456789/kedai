// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Data produk
const products = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Kopi ini memiliki rasa yang seimbang, memiliki dasar rasa cokelat atau kacang, dan hasil akhir yang halus.',
    price: 'IDR 30K',
    imgSrc: 'img/menu/1.jpg',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'kopi yang satu ini memiliki rasa yang sangat rich, walaupun sudah dicampur susu, rasa kopinya tetap kuat.',
    price: 'IDR 25K',
    imgSrc: 'img/menu/2.jpeg',
  },
  {
    id: 3,
    name: 'Ice Coffee',
    description: 'ice coffe ini memiliki cita rasa espresso yang kuat dan rasa kopi yang lebih lembut dengan sejuknya es yang dicampurkan.',
    price: 'IDR 20K',
    imgSrc: 'img/menu/3.jpg',
  },
  {
    id: 4,
    name: 'Galao',
    description: 'Perpaduan kopi yang pahit dan gula aren yang manis diracik sempurna oleh Galao Coffee, manisnya pas dan tidak berlebihan. Ada rasa creamy yang membuat minuman ini makin spesial dari yang lainnya.',
    price: 'IDR 30K',
    imgSrc: 'img/menu/4.jpeg',
  },
  {
    id: 5,
    name: 'Latte',
    description: 'Latte punya rasa yang lebih milky atau punya rasa susu yang lebih kuat. Cappuccino dengan perbandingan masing-masing bahan 1/3, maka rasanya akan terasa lebih foamy dan kopi yang kuat. Latte juga punya komposisi busa atau foam yang lebih tipis daripada cappuccino.',
    price: 'IDR 30K',
    imgSrc: 'img/menu/5.jpeg',
  },
  {
    id: 6,
    name: 'Mochalatte',
    description: 'Mocha latte memiliki rasa yang lebih kuat dan manis karena kandungan cokelatnya yang lebih tinggi. Sedangkan mochaccino memiliki rasa yang lebih lembut dan creamy karena kandungan susu cairnya yang lebih tinggi.',
    price: 'IDR 30K',
    imgSrc: 'img/menu/6.jpeg',
  },
  // Tambahkan data produk lain sesuai kebutuhan
];

// Referensi elemen DOM
const cartItemsContainer = document.getElementById('cart-item');

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
  const product = products.find(p => p.id == productId); // Temukan produk berdasarkan ID
  const cartItemHTML = `
    <div class="cart-item">
      <img src="${product.imgSrc}" alt="${product.name}" />
      <div class="item-detail">
        <h3>${product.name}</h3>
        <div class="item-price">${product.price}</div>
      </div>
      <i data-feather="trash-2" class="remove-item"></i>
    </div>
  `;
  
  cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML); // Tambah ke keranjang

  feather.replace(); // Replace icons to ensure the feather icons are updated
}

// Event Listener untuk tombol 'Add to Cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = button.getAttribute('data-id');
    addToCart(productId); // Tambah produk ke keranjang
  });
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const modalContent = document.querySelector(".modal-content"); // Ambil konten modal



itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    const productId = btn.getAttribute('data-id'); // Ambil id dari tombol yang diklik
    const product = products.find(p => p.id == productId); // Temukan produk berdasarkan id

    // Isi modal dengan data produk yang sesuai
    modalContent.querySelector('img').src = product.imgSrc;
    modalContent.querySelector('h3').textContent = product.name;
    modalContent.querySelector('p').textContent = product.description;
    modalContent.querySelector('.product-price').textContent = product.price;

    itemDetailModal.style.display = "flex"; // Tampilkan modal
  };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  e.preventDefault();
  itemDetailModal.style.display = "none"; // Tutup modal
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
