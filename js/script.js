const shakes = {
  sonet: {
    title: "Sonet o mangu",
    desc: "Sladká exotika, co tě přenese na tropický ostrov.",
    ingredients: "Mango, kokosové mléko, ananas",
    calories: "210 kcal / 100 ml",
    energy: "880 kJ",
    priceSmall: "59 Kč",
    priceLarge: "89 Kč"
  },
  ruzova: {
    title: "Růžová Julie",
    desc: "Romantický mix růží a bobulí – jemný, osvěžující a voňavý.",
    ingredients: "Jahody, maliny, růžová voda, mandlové mléko",
    calories: "170 kcal / 100 ml",
    energy: "710 kJ",
    priceSmall: "59 Kč",
    priceLarge: "89 Kč"
  },
  zeleny: {
    title: "Zelený princ",
    desc: "Zdravý zelený elixír plný energie a vitamínů.",
    ingredients: "Špenát, banán, jablko, kiwi, limetka",
    calories: "190 kcal / 100 ml",
    energy: "800 kJ",
    priceSmall: "56 Kč",
    priceLarge: "85 Kč"
  },
  letni: {
    title: "Letní sen",
    desc: "Ovocná exploze, která chutná jako léto v každém doušku.",
    ingredients: "Broskev, marakuja, pomerančový džus",
    calories: "160 kcal / 100 ml",
    energy: "670 kJ",
    priceSmall: "59 Kč",
    priceLarge: "89 Kč"
  },
  tropic: {
    title: "Tropická bouře",
    desc: "Krémový a výživný tropický mix s chia sílou.",
    ingredients: "Mango, banán, kokos, ananas, chia",
    calories: "260 kcal / 100 ml",
    energy: "1090 kJ",
    priceSmall: "69 Kč",
    priceLarge: "95 Kč"
  },
  hamlet: {
    title: "Hamletův hněv",
    desc: "Intenzivní a sytý shake pro skutečné hrdiny.",
    ingredients: "Čokoláda, arašídové máslo, protein, ovesné mléko",
    calories: "410 kcal / 100 ml",
    energy: "1720 kJ",
    priceSmall: "69 Kč",
    priceLarge: "105 Kč"
  },
  macbeth: {
    title: "Macbeth Mass",
    desc: "Sladký a silný – ideální po tréninku.",
    ingredients: "Banán, datle, vanilkový protein, skořice",
    calories: "350 kcal / 100 ml",
    energy: "1470 kJ",
    priceSmall: "69 Kč",
    priceLarge: "105 Kč"
  },
  othello: {
    title: "Othellův ořech",
    desc: "Krémová čokoládovo-oříšková harmonie.",
    ingredients: "Lískový ořech, kakao, protein, rýžové mléko",
    calories: "380 kcal / 100 ml",
    energy: "1590 kJ",
    priceSmall: "75 Kč",
    priceLarge: "109 Kč"
  },
  romeo: {
    title: "Romeovo ráno",
    desc: "Sladké probuzení s chutí prvního políbení.",
    ingredients: "Jahoda, vanilka, řecký jogurt, med",
    calories: "290 kcal / 100 ml",
    energy: "1210 kJ",
    priceSmall: "69 Kč",
    priceLarge: "99 Kč"
  },
  gain: {
    title: "Shakes-gain",
    desc: "Dezertní proteinová bomba, co tě nakopne i potěší.",
    ingredients: "Cookies & cream protein, mandlové mléko, banán",
    calories: "360 kcal / 100 ml",
    energy: "1500 kJ",
    priceSmall: "75 Kč",
    priceLarge: "109 Kč"
  },
  sen: {
    title: "Sen noci čokoládové",
    desc: "Temně čokoládový sen s jemným dotekem kokosu.",
    ingredients: "Čokoláda, smetana, kokos",
    calories: "420 kcal / 100 ml",
    energy: "1760 kJ",
    priceSmall: "69 Kč",
    priceLarge: "95 Kč"
  },
  karamel: {
    title: "Karamelová tragédie",
    desc: "Hřejivý a jemný shake s přírodní sladkostí medu.",
    ingredients: "Med, vanilka, mandle, mléko",
    calories: "310 kcal / 100 ml",
    energy: "1300 kJ",
    priceSmall: "67 Kč",
    priceLarge: "92 Kč"
  },
  med: {
    title: "Medový sen",
    desc: "Zdravý zelený elixír plný energie a vitamínů.",
    ingredients: "Špenát, banán, jablko, kiwi, limetka",
    calories: "190 kcal / 100 ml",
    energy: "800 kJ",
    priceSmall: "56 Kč",
    priceLarge: "85 Kč"
  },
  laska: {
    title: "Láska na první lok",
    desc: "Krémový, sladký a nebezpečně návykový.",
    ingredients: "Jahody, bílá čokoláda, smetana",
    calories: "400 kcal / 100 ml",
    energy: "1670 kJ",
    priceSmall: "69 Kč",
    priceLarge: "95 Kč"
  },
  vegie: {
    title: "Veggie Verona",
    desc: "Krémově svěží smoothie pro lehký restart těla.",
    ingredients: "Špenát, avokádo, jablko, citron",
    calories: "220 kcal / 100 ml",
    energy: "920 kJ",
    priceSmall: "59 Kč",
    priceLarge: "89 Kč"
  },
  bio: {
    title: "Bio Bard",
    desc: "Antioxidační síla v lahodném fialovém kabátku.",
    ingredients: "Borůvky, mandlové mléko, chia semínka",
    calories: "240 kcal / 100 ml",
    energy: "1000 kJ",
    priceSmall: "67 Kč",
    priceLarge: "92 Kč"
  },
  forest: {
    title: "Forest Flow",
    desc: "Osvěžující lesní chuť s jemnou sladkostí datlí.",
    ingredients: "Lesní ovoce, kokosová voda, datle",
    calories: "200 kcal / 100 ml",
    energy: "840 kJ",
    priceSmall: "59 Kč",
    priceLarge: "89 Kč"
  },
  zen: {
    title: "Zen Shake",
    desc: "Klid v každém doušku – matcha energie a kokosová pohoda.",
    ingredients: "Matcha, kokos, banán, mandlové mléko",
    calories: "250 kcal / 100 ml",
    energy: "1040 kJ",
    priceSmall: "69 Kč",
    priceLarge: "99 Kč"
  }
};

// Otevření modálního okna
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const shakeType = btn.closest(".offer__item").dataset.shake;
    const shake = shakes[shakeType];

    document.getElementById("shakeTitle").textContent = shake.title;
    document.getElementById("shakeDesc").textContent = shake.desc;
    document.getElementById("shakeIngredients").textContent = shake.ingredients;
    document.getElementById("shakeCalories").textContent = shake.calories;
    document.getElementById("shakeEnergy").textContent = shake.energy;
    document.getElementById("shakePriceSmall").textContent = shake.priceSmall;
    document.getElementById("shakePriceLarge").textContent = shake.priceLarge;

    modal.style.display = "flex";
  });
});

// Zavření okna
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

let cart = [];
let currentShake = null;

// otevření výběru velikosti
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const shakeKey = btn.closest(".offer__item").dataset.shake;
    currentShake = shakes[shakeKey];
    const sizeModal = document.getElementById("sizeModal");
    const sizeOptions = document.getElementById("sizeOptions");
    sizeOptions.innerHTML = `
      <button data-size="0.3" data-price="${currentShake.priceSmall}">0,3 l – ${currentShake.priceSmall} Kč</button>
      <button data-size="0.5" data-price="${currentShake.priceLarge}">0,5 l – ${currentShake.priceLarge} Kč</button>
    `;
    sizeModal.style.display = "flex";
  });
});

document.querySelector(".close-size").onclick = () => (document.getElementById("sizeModal").style.display = "none");

// přidání z výběru
document.getElementById("sizeOptions").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const size = e.target.dataset.size;
    const price = parseInt(e.target.dataset.price);
    const existing = cart.find(i => i.title === currentShake.title && i.size === size);
    if (existing) existing.qty++;
    else cart.push({ title: currentShake.title, size, price, qty: 1 });
    updateCartCount();
    document.getElementById("sizeModal").style.display = "none";
  }
});

// košík
const cartModal = document.getElementById("cartModal");
document.getElementById("cartBtn").onclick = () => { renderCart(); cartModal.style.display = "flex"; };
document.querySelector(".close-cart").onclick = () => (cartModal.style.display = "none");

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) cartItems.innerHTML = "<p>Košík je prázdný.</p>";
  else cart.forEach((item, i) => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.title} (${item.size} l)</span>
        <div>
          <button onclick="changeQty(${i}, -1)">−</button>
          ${item.qty}
          <button onclick="changeQty(${i}, 1)">+</button>
          <button onclick="removeItem(${i})">🗑</button>
        </div>
      </div>`;
  });

  document.getElementById("cartTotal").textContent = "Celkem: " + total + " Kč";
}

function changeQty(i, d) { cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); renderCart(); updateCartCount(); }
function removeItem(i) { cart.splice(i, 1); renderCart(); updateCartCount(); }
function updateCartCount() { document.getElementById("cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0); }

// odesílací formulář
document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (cart.length === 0) return alert("Košík je prázdný!");
  alert("Děkujeme! Objednávka odeslána.");
  cart = [];
  renderCart();
  updateCartCount();
  e.target.reset();
  cartModal.style.display = "none";
});
// 🧭 Přepínání kategorií
const tabs = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".offer__item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // přepne aktivní tlačítko
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;
    items.forEach(item => {
      if (item.dataset.category === category) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.display = "none";
        item.style.opacity = "0";
      }
    });
  });
});

// výchozí kategorie – ovocné
document.querySelector('.tab-btn[data-category="ovocne"]').click();