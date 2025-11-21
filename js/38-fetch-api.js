// binance - API

const refs1 = {
  form: document.querySelector(".js-binance-form"),
  container: document.querySelector(".js-binance-info"),
};
//!======================================================

function fetchPrice(input1) {
  const baseUrl = "https://binance43.p.rapidapi.com";
  const endPoint = "/ticker/price";
  const params = new URLSearchParams({ symbol: input1 });
  const url = `${baseUrl}${endPoint}?${params}`;
  const headers = {
    "x-rapidapi-key": "538139f258mshe885ceba6b9b829p13b9c9jsn26a257710129",
    "x-rapidapi-host": "binance43.p.rapidapi.com",
  };

  return fetch(url, { headers }).then((res) => res.json());
}

//!======================================================

function symbolTemplate(result) {
  let { symbol, price } = result;
  const icon = symbol.toLowerCase().replace("usdt", "");
  price = Number(price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${symbol}</span>
  <span class="coin-price">${price}</span>`;
}

//!======================================================

refs1.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input1 = e.target.elements.query.value;

  fetchPrice(input1)
    .then((result) => {
      const markup = symbolTemplate(result);
      refs1.container.innerHTML = markup;
    })
    .catch((err) => {
      refs1.container.innerHTML = "<h1>ERROR</h1>";
    });

  e.target.reset();
});

//!======================================================

// superheroes - API

const refs2 = {
  form: document.querySelector(".js-hero-form"),
  container: document.querySelector(".js-hero-container"),
};

//!======================================================

function fetchHero(heroName) {
  const baseUrl = "https://superhero-search.p.rapidapi.com";
  const endPoint = "/api/";
  const params = new URLSearchParams({
    hero: heroName,
  });
  const url = `${baseUrl}${endPoint}?${params}`;
  const headers = {
    "x-rapidapi-key": "538139f258mshe885ceba6b9b829p13b9c9jsn26a257710129",
    "x-rapidapi-host": "superhero-search.p.rapidapi.com",
  };
  return fetch(url, { headers }).then((res) => res.json());
}

//!======================================================

function heroTemplate(hero) {
  const { appearance, biography, name, images, powerstats } = hero;
  return `        <div class="hero-card card">
          <div class="image-container">
            <img
              src="${images.lg}"
              alt="#"
              class="hero-image"
            />
          </div>
          <div class="hero-body">
            <h4 class="hero-name">${name}</h4>

            <div class="hero-powerstats">
              <p class="hero-bio">FullName - ${biography.fullName}</p>
              <p class="hero-bio">Publisher - ${biography.publisher}</p>
              <p class="hero-bio">Alignment - ${biography.alignment}</p>
              <p class="hero-bio">Gender - ${appearance.gender}</p>
              <p class="hero-bio">Race - ${appearance.race}</p>
            </div>

            <div class="hero-powerstats">
              <span>Power - ${powerstats.power}</span>
              <span>Strength - ${powerstats.strength}</span>
              <span>Speed - ${powerstats.speed}</span>
              <span>Combat - ${powerstats.combat}</span>
            </div>
          </div>
        </div>`;
}

//!======================================================

refs2.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const heroName = e.target.elements.query.value;
  fetchHero(heroName)
    .then((res) => {
      const markup = heroTemplate(res);
      refs2.container.insertAdjacentHTML("afterbegin", markup);
    })
    .catch((error) => (refs2.container.innerHTML = "<h2>Hero not found</h2>"));
  e.target.reset();
});

//!======================================================

// IP - Location API

const refs = {
  formEl: document.querySelector(".js-location-form"),
  cardInfo: document.querySelector(".js-ip-form"),
};

refs.formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const ip = e.target.elements.userip.value.trim();
  if (!ip) {
    refs.cardInfo.innerHTML = "<p>Please enter an IP address!</p>";
    return;
  }

  try {
    // Використовуємо ipapi.co для CORS-браузер
    const res = await fetch(`https://ipapi.co/${ip}/json/`).then((r) =>
      r.json()
    );

    if (res.error) {
      refs.cardInfo.innerHTML = `<p>Invalid IP or API error!</p>`;
      return;
    }

    refs.cardInfo.innerHTML = `
      <div class="info-item">
        <img class="flag" src="https://cdn.ipapi.co/flags/${res.country_code.toLowerCase()}.svg" alt="Flag of ${
      res.country_name
    }" />
        <span class="info-label">Country:</span>
        <span class="info-value">${res.country_name}</span>
      </div>
      <div class="info-item">
        <span class="info-label">IP:</span>
        <span class="info-value">${res.ip}</span>
      </div>
      <div class="info-item">
        <span class="info-label">City:</span>
        <span class="info-value">${res.city}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Region:</span>
        <span class="info-value">${res.region}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Timezone:</span>
        <span class="info-value">${res.timezone}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Currency:</span>
        <span class="info-value">${res.currency}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Google Maps:</span>
        <a href="https://www.google.com/maps/@${res.latitude},${
      res.longitude
    },13z" target="_blank">Open</a>
      </div>
    `;
  } catch (err) {
    console.error(err);
    refs.cardInfo.innerHTML = `<p>Error fetching data!</p>`;
  }

  e.target.reset();
});
