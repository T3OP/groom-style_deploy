"use strict";

(() => {
  const toggleWinkelmandBtn = document.querySelector(".toggle-winkelmand");
  const winkelmand = document.querySelector(".winkelmand");
  const closeBtn = document.querySelector(".close_winkelmand");
  const winkelmandElement = document.querySelector(".listCart");
  const addCartButtons = document.querySelectorAll(".addCart");
  const subtotaalElement = document.querySelector("#subtotaal");
  const wishlistButtons = document.querySelectorAll(".wishlist-btn");

  const cart = [];

  toggleWinkelmandBtn.addEventListener("click", () => {
    winkelmand.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    winkelmand.classList.remove("active");
  });

  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const img = button.dataset.img;

      const existingItem = cart.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, img, quantity: 1 });
      }

      updateWinkelmand();
    });
  });

  function updateWinkelmand() {
    winkelmandElement.innerHTML = "";

    cart.forEach((item) => {
      const productHTML = `
        <div class="item">
          <div class="image"><img src="${item.img}" alt="${item.name}" /></div>
          <div class="name">${item.name}</div>
          <div class="totalPrice">€${(item.price * item.quantity).toFixed(
            2
          )}</div>
          <div class="quantity">
            <button class="decrease" data-name="${item.name}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-name="${item.name}">+</button>
            <button class="remove" data-name="${item.name}">&times;</button>
          </div>
        </div>
      `;
      winkelmandElement.innerHTML += productHTML;
    });

    addQuantityButtons();
    updateSubtotaal();
  }

  function addQuantityButtons() {
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const removeButtons = document.querySelectorAll(".remove");

    increaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.name;
        const item = cart.find((item) => item.name === name);
        if (item) {
          item.quantity += 1;
          updateWinkelmand();
        }
      });
    });

    decreaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.name;
        const item = cart.find((item) => item.name === name);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          cart.splice(cart.indexOf(item), 1);
        }
        updateWinkelmand();
      });
    });

    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.name;
        const itemIndex = cart.findIndex((item) => item.name === name);
        if (itemIndex !== -1) {
          cart.splice(itemIndex, 1);
        }
        updateWinkelmand();
      });
    });
  }
  // subtot berekening
  function updateSubtotaal() {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    subtotaalElement.textContent = `€${subtotal.toFixed(2)}`;
  }
  // wishlist hart
  document.addEventListener("DOMContentLoaded", () => {
    const wishlistBtn = document.querySelector(".wishlist-btn");

    // vult hart bij elke product
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("filled");
      });
    });
  });
})();
