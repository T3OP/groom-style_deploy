"use strict";

(() => {
  var map = L.map("map").setView([51.22987575703761, 4.416229972116881], 10);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([51.22984618355502, 4.416428134938112]).addTo(map);
  var marker1 = L.marker([51.19968135983748, 4.4416245744029395]).addTo(map);
})();
