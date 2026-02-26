# 🌍 GeoAtlas - Country Explorer App

A dynamic, asynchronous JavaScript application that allows users to discover detailed information about any country in the world. Users can manually search for a country or use their browser's built-in Geolocation API to instantly fetch data about their current location.

## ✨ Features

* **Location Detection:** Uses the Geolocation API to find the user's coordinates and reverse-geocodes it to find their current country.
* **Comprehensive Data:** Displays the country's flag, common name, population (formatted in millions), official languages, capital city, and currency details.
* **Neighboring Borders:** Automatically fetches and displays the flags and names of all bordering countries.
* **Dynamic UI:** Includes an active loading spinner during API calls and robust error handling for invalid searches.
* **Responsive Design:** Fully responsive and styled using Bootstrap 5.

## 🛠️ Tech Stack

* **HTML5 & CSS3**
* **JavaScript (ES6+)**: Async/Await, Fetch API, DOM Manipulation
* **Bootstrap 5**: For rapid, responsive UI components
* **FontAwesome**: For UI icons

## 🔌 APIs Used

This project seamlessly integrates multiple APIs to aggregate data:
1.  [REST Countries API (v3.1)](https://restcountries.com/): Used to fetch primary country data and bordering nations based on country codes.
2.  [OpenCage Geocode API](https://opencagedata.com/): Used for reverse geocoding (converting latitude/longitude from the browser into a country name).

## 🧠 Project Evolution & Architecture

This project was built in two phases to demonstrate a deep understanding of JavaScript's asynchronous evolution:

* **Phase 1 (Legacy):** Initially built using the older `XMLHttpRequest` object and callback functions to understand the foundational logic of HTTP requests in the browser.
* **Phase 2 (Modern - Current):** Refactored the entire application to use modern ES6+ features, specifically the `Fetch API` combined with `async/await` and `try/catch` blocks. This resulted in cleaner, more maintainable, and highly readable code. 

By comparing the two versions, you can see the practical benefits of modern JavaScript in handling asynchronous API calls.


