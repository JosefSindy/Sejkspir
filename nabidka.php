<?php include "includes/menu.php" ?>

<section class="offer">
  <div class="offer__intro">
    <h1>Naše nabídka</h1>
    <p>Vyber si svůj oblíbený shake – z čerstvých surovin, bez přidaného cukru a s plnou chutí.</p>
  </div>

  <div class="offer__grid">

    <div class="offer__item" data-shake="choco">
      <img src="shake1.jpg" alt="Čokoládový Shake">
      <h3>Čokoládový Shake</h3>
      <p>Sladká klasika s kakaem, banánem a mandlovým mlékem.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="vanilla">
      <img src="shake2.jpg" alt="Vanilkový Shake">
      <h3>Vanilkový Shake</h3>
      <p>Jemná chuť vanilky s ovsem a kapkou medu.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="fruit">
      <img src="shake3.jpg" alt="Ovocný Shake">
      <h3>Ovocný Shake</h3>
      <p>Osvěžující kombinace lesních plodů a jogurtu.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="coffee">
      <img src="shake4.jpg" alt="Kávový Shake">
      <h3>Kávový Shake</h3>
      <p>Energie z kávy, bílkovin a kokosového mléka v jednom.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

        <div class="offer__item" data-shake="choco">
      <img src="shake1.jpg" alt="Čokoládový Shake">
      <h3>Čokoládový Shake</h3>
      <p>Sladká klasika s kakaem, banánem a mandlovým mlékem.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="vanilla">
      <img src="shake2.jpg" alt="Vanilkový Shake">
      <h3>Vanilkový Shake</h3>
      <p>Jemná chuť vanilky s ovsem a kapkou medu.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="fruit">
      <img src="shake3.jpg" alt="Ovocný Shake">
      <h3>Ovocný Shake</h3>
      <p>Osvěžující kombinace lesních plodů a jogurtu.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="coffee">
      <img src="shake4.jpg" alt="Kávový Shake">
      <h3>Kávový Shake</h3>
      <p>Energie z kávy, bílkovin a kokosového mléka v jednom.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="coffee">
      <img src="shake4.jpg" alt="Kávový Shake">
      <h3>Kávový Shake</h3>
      <p>Energie z kávy, bílkovin a kokosového mléka v jednom.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>

    <div class="offer__item" data-shake="coffee">
      <img src="shake4.jpg" alt="Kávový Shake">
      <h3>Kávový Shake</h3>
      <p>Energie z kávy, bílkovin a kokosového mléka v jednom.</p>
      <button class="detail-btn">Detail</button>
      <button class="order-btn">Objednat</button>
    </div>
  </div>
</section>
 <?php include "includes/footer.php" ?>
<!-- ===== MODÁLNÍ OKNO ===== -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="shakeTitle"></h2>
    <p id="shakeDesc"></p>
    <p><strong>Složení:</strong> <span id="shakeIngredients"></span></p>
    <p><strong>Kalorie:</strong> <span id="shakeCalories"></span></p>
    <p><strong>Energie:</strong> <span id="shakeEnergy"></span></p>
    <p><strong>Cena:</strong><br>
       0,3 l – <span id="shakePriceSmall"></span><br>
       0,5 l – <span id="shakePriceLarge"></span>
    </p>
  </div>
</div>


 <!-- Výběr velikosti -->
  <div id="sizeModal" class="modal">
    <div class="modal-content size-modal">
      <span class="close close-size">&times;</span>
      <h2 id="sizeTitle">Vyber velikost</h2>
      <div id="sizeOptions"></div>
    </div>
  </div>


  <!-- Košík -->
  <div id="cartModal" class="modal">
    <div class="modal-content cart-content">
      <span class="close close-cart">&times;</span>
      <h2>Tvůj košík</h2>
      <div id="cartItems"></div>
      <p id="cartTotal"></p>

      <h3>Odesílací údaje</h3>
      <form id="orderForm">
        <input type="text" id="name" placeholder="Jméno a příjmení" required>
        <input type="text" id="address" placeholder="Adresa" required>
        <input type="email" id="email" placeholder="E-mail" required>
        <button type="submit" class="order-btn">Odeslat objednávku</button>
      </form>
    </div>
 <script src="js/script.js"></script>

