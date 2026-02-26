const nameInput = document.querySelector("#name");
const form = document.querySelector(".form");
form.addEventListener("click", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  getCountry(name);
  document.querySelector("#loading").style.display = "block";
});

document.querySelector("#btnLocation").addEventListener("click", () => {
  if (navigator.geolocation) {
    document.querySelector("#loading").style.display = "block";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
});
function onError(err) {
  document.querySelector("#loading").style.display = "none";
  diplayErrors(err);
}
async function onSuccess(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const api_key = "d6144013e37247ea8b8c98c969164e7d";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${api_key}
`;
  const response = await fetch(url);
  const data = await response.json();
  const country = data.results[0].components.country;
  document.querySelector("#name").value = country;
  document.querySelector(".form").click();
}

async function getCountry(url) {
  document.querySelector(".dis").innerHTML = "";
  document.querySelector(".borders").innerHTML = "";
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/" + url);
    if (!response.ok) {
      throw new Error("ülke bulunamadı");
    }
    const data = await response.json();
    displayCountry(data[0]);

    const countries = data[0].borders;
    if (!countries) {
      throw new Error("Komşu Ülke Bulunamadı");
    }
    const neighbors = await (
      await fetch(
        "https://restcountries.com/v3.1/alpha?codes=" + countries.toString(),
      )
    ).json();

    displayBorderes(neighbors);
  } catch (err) {
    diplayErrors(err);
  }
}

function displayCountry(arry) {
  document.querySelector("#loading").style.display = "none";
  html = `


                <div class="col-4">
                  <img
                    src="${arry.flags.png}"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="col-8">
                  <div class="card-title"><h5>${arry.name.common}</h5></div>
                  <hr />
                  <div class="row">
                    <div class="col-4">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item border-0">Nüfus</li>
                        <li class="list-group-item border-0">Resmi Dil</li>
                        <li class="list-group-item border-0">Başkent</li>
                        <li class="list-group-item border-0">Para Birimi</li>
                      </ul>
                    </div>
                    <div class="col-8">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item border-0">${(arry.population / 1000000).toFixed(1)}</li>
                        <li class="list-group-item border-0">${Object.values(arry.languages)}</li>
                        <li class="list-group-item border-0">${arry.capital}</li>
                        <li class="list-group-item border-0">${Object.values(arry.currencies)[0].symbol}/${Object.keys(arry.currencies)}</li>
                      </ul>
                    </div>
                  </div>
                </div>


         `;

  const container = document.querySelector(".dis");
  const card = document.querySelector(".cntry");
  card.classList.remove("d-none");
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", html);
}

function displayBorderes(bor) {
  let html = "";
  let sen2 = document.querySelector(".sensen");
  sen2.classList.remove("d-none");
  for (let country of bor) {
    html += `

              <div class="col-2 mb-3">
                <div class="card">
                  <img
                    src="${country.flags.png}"
                    alt=""
                    class="card-img-top"
                    height="110px";
                  />
                  <div class="card-body">
                    <h2 class="card-title">${country.name.common}</h2>
                  </div>
                </div>
              </div>
                    `;
  }
  document.querySelector(".borders").innerHTML = html;
}

function diplayErrors(err) {
  document.querySelector("#loading").style.display = "none";
  html = `
            <div class="alert alert-danger" >${err.message}</div>
            `;
  document.querySelector("#errors").innerHTML = html;
  setTimeout(() => {
    document.querySelector("#errors").innerHTML = "";
  }, 3000);
}
