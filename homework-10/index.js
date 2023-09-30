import { products } from "./data.js";

const data = JSON.parse(products);

const content = document.querySelector(".content");

data.forEach(
  ({ imgProduct, nameProduct, descriptionProduct, priceProduct }) => {
    const divProduct = document.createElement("div");
    divProduct.classList.add("product");

    const imgEl = document.createElement("img");
    imgEl.classList.add("product__img");
    imgEl.src = imgProduct;
    divProduct.appendChild(imgEl);

    const productName = document.createElement("a");
    productName.textContent = nameProduct;
    productName.classList.add("product__title");

    const productDescription = document.createElement("p");
    productDescription.textContent = descriptionProduct;
    productDescription.classList.add("product__desc");

    const productPrice = document.createElement("p");
    productPrice.textContent = priceProduct;
    productPrice.classList.add("product__price");

    const productCard = document.createElement("div");
    productCard.classList.add("product__card");
    divProduct.appendChild(productCard);
    productCard.appendChild(productName);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);
    content.appendChild(divProduct);
  }
);
