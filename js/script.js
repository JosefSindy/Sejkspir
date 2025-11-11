const shakes = {
  choco: {
    title: "Čokoládový Shake",
    desc: "Sladká klasika s kakaem, banánem a mandlovým mlékem.",
    ingredients: "Banán, kakao, mandlové mléko, oves, protein, med",
    calories: "220 kcal / 100 ml",
    energy: "920 kJ",
    priceSmall: "65 Kč",
    priceLarge: "85 Kč"
  },
  vanilla: {
    title: "Vanilkový Shake",
    desc: "Jemná chuť vanilky s ovsem a kapkou medu.",
    ingredients: "Vanilkový protein, oves, mléko, med, špetka skořice",
    calories: "180 kcal / 100 ml",
    energy: "755 kJ",
    priceSmall: "60 Kč",
    priceLarge: "80 Kč"
  },
  fruit: {
    title: "Ovocný Shake",
    desc: "Osvěžující kombinace lesních plodů a jogurtu.",
    ingredients: "Jahody, borůvky, jogurt, med, chia semínka",
    calories: "160 kcal / 100 ml",
    energy: "670 kJ",
    priceSmall: "55 Kč",
    priceLarge: "75 Kč"
  },
  coffee: {
    title: "Kávový Shake",
    desc: "Energie z kávy, bílkovin a kokosového mléka v jednom.",
    ingredients: "Espresso, kokosové mléko, protein, med, led",
    calories: "190 kcal / 100 ml",
    energy: "800 kJ",
    priceSmall: "65 Kč",
    priceLarge: "85 Kč"
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