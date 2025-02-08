"use strict";

(() => {
  function randomUsers() {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => response.json())
      .then((data) => {
        const users = data.results;
        const usersContainer = document.querySelector("#users");

        users.forEach((user) => {
          const userCard = document.createElement("div");
          userCard.classList.add("userBox");

          userCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
            <p>${user.location.city}, ${user.location.country}</p>
          `;

          usersContainer.appendChild(userCard);
        });
      })
      .catch((error) => {
        console.error("Fout bij ophalen van users", error);
      });
  }

  randomUsers();
})();
