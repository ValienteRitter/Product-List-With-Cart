// Main sections
const appContainer = document.querySelector('.app-container');
const main = document.querySelector('main');

// Product list section
const productList = document.querySelector('.product-list');
const productItems = document.querySelectorAll('.product-item'); // all product items

// Dialog 
const orderDialog = document.querySelector('dialog');
const orderConfirmedMenu = document.querySelector('.order-confirmed-menu');
const orderedProductsList = document.querySelector('.ordered-products-list');
const orderConfirmedMenuButton = document.querySelector('.order-confirmed-menu button');

// Cart section
const cart = document.querySelector('.cart');
const cartHeading = document.querySelector('.cart h2');
const cartEmptyImage = document.querySelector('.cart img');
const cartEmptyMessage = document.querySelector('.cart p');


const products = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg"
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg"
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg"
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg"
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg"
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg"
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg"
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.50
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg"
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50
  }
];

function renderProducts(data) {
    data.forEach(({image, category, name, price}) => {
        productList.insertAdjacentHTML("beforeend",
            `<div class="product-item">
                    <div class="product-item-image">
                        <img src="${image.desktop}" alt="">
                        <button>Add to Cart</button>
                    </div>
                    <div class="product-item-info">
                        <span class="category">${category}</span>
                        <h2 class="product-name">${name}</h2>
                        <p class="price">$${price}</p>
                    </div>
                </div>`
        )
    })
}

renderProducts(products)

