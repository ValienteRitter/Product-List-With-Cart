// Main sections
const appContainer = document.querySelector(".app-container");
const main = document.querySelector("main");

// Product list section
let productList = document.querySelector(".product-list");
let productItems = document.querySelectorAll(".product-item"); // all product items
let buttons = document.querySelectorAll("selector");

// Dialog
const orderDialog = document.querySelector("dialog");
const orderConfirmedMenu = document.querySelector(".order-confirmed-menu");
const orderedProductsList = document.querySelector(".ordered-products-list");
const orderConfirmedMenuButton = document.querySelector(
    ".order-confirmed-menu button"
);

// Cart section
const cartSection = document.querySelector(".cart");
const cartHeading = document.querySelector(".cart h2");
const cartEmptyImage = document.querySelector(".cart img");
const cartEmptyMessage = document.querySelector(".cart p");

const confirmButton = document.createElement("button");

const products = [
    {
        image: {
            thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: "./assets/images/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg",
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "./assets/images/image-macaron-desktop.jpg",
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "./assets/images/image-tiramisu-desktop.jpg",
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "./assets/images/image-baklava-desktop.jpg",
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "./assets/images/image-meringue-desktop.jpg",
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "./assets/images/image-cake-desktop.jpg",
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "./assets/images/image-brownie-desktop.jpg",
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "./assets/images/image-panna-cotta-desktop.jpg",
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
    },
];

class Cart {
    constructor() {
        this.list = [];
        this.total = 0;
    }

    orderProduct(e) {
        this.list.push(
            products.find(
                ({ name }) => name === e.target.closest(".product-item").id
            )
        );
    }

    calculateTotal() {
        this.total = this.list.reduce((acc, { price }) => acc + price, 0);
    }

    getProductCount(productName) {
        return this.list.filter(({ name }) => name === productName).length;
    }
}

const cart = new Cart();

function renderProducts(data) {
    data.forEach(({ image, category, name, price }) => {
        productList.insertAdjacentHTML(
            "beforeend",
            `<div class="product-item" id="${name}">
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
        );
    });
    productList = document.querySelector(".product-list");
    productItems = document.querySelectorAll(".product-item");
    buttons = productList.querySelectorAll("button");
}

renderProducts(products);

function createOrder({ name, price }) {
    const orderContainer = document.createElement("div");
    const nameP = document.createElement("p");
    const countP = document.createElement("p");
    const priceP = document.createElement("p");
    const totalPriceP = document.createElement("p");

    orderContainer.classList.add("order");
    nameP.classList.add("name");

    nameP.textContent = name;
    countP.textContent = cart.getProductCount(name) + 'x';
    priceP.textContent = "$" + price;
    totalPriceP.textContent = "$" + (cart.getProductCount(name) * price);
    orderContainer.append(nameP, countP, priceP, totalPriceP);

    return orderContainer;
}

buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
        cart.orderProduct(e);
        cart.calculateTotal();
        cartSection.innerHTML = `<h2>Your cart (${cart.list.length})</h2>`;
        const dataSet = new Set(cart.list);
        console.log(dataSet);
        dataSet.forEach((product) => {
            cartSection.append(createOrder(product));
            cartSection.lastElementChild.insertAdjacentHTML("afterend", `<hr></hr>`)
        });
        cartSection.insertAdjacentHTML(
            "beforeend",
            `
        <div class='total'>
            <p>Order Total</p>
            <p>$${cart.total}</p>
        </div>
        `
        );
        cartSection.appendChild(confirmButton);
        console.log(cart.list);
        console.log(cart.total);
    })
);

confirmButton.addEventListener("click", () => {
    const dataSet = new Set(cart.list);
    dataSet.forEach(({name, price, image}) => {
        orderedProductsList.insertAdjacentHTML('beforeend', 
            `
            <div class='order-item'>
                <div class='order-img'>
                    <img src='${image.desktop}'>
                    <div class='order-info'>
                        <p>${name}</p>
                        <div class='order-count'>
                            <p>${cart.getProductCount(name)}x</p>
                            <p>$${price}</p>
                        </div>
                    </div>
                </div>
                <p>$${price * cart.getProductCount(name)}</p>
            </div>
            <hr>
            `
        )
    });
    orderedProductsList.insertAdjacentHTML("beforeend", 
        `
            <div class='total-price'>
                <p>Order Total</p>
                <p>$${cart.total}</p>
            </div>
        `
    )
    orderDialog.showModal();
});

confirmButton.textContent = "Confirm Order";
confirmButton.style.backgroundColor = "hsl(14, 86%, 42%)";
confirmButton.style.borderRadius = "10px";
confirmButton.style.border = "none";
confirmButton.style.padding = "1rem";
confirmButton.style.color = 'white'
