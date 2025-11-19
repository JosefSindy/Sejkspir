<?php include "includes/menu.php" ?>

  <section class="custom">
    <div class="custom__intro">
      <h1>Nabídka na míru 🧡</h1>
      <p>Vytvoř si svůj vlastní shake přesně podle chuti. Vyber příchuť, mléko a přidej doplňky, které ti dodají energii na celý den!</p>
    </div>

    <form class="custom__form">

      <div class="form__group">
        <label for="flavour">Příchuť shaků:</label>
        <select id="flavour" name="flavour" required>
          <option value="">-- Vyber příchuť --</option>
          <option>Čokoládová 🍫</option>
          <option>Vanilková 🍦</option>
          <option>Ovocná 🍓🍌</option>
          <option>Kávová ☕</option>
          <option>Kokosová 🥥</option>
        </select>
      </div>

      <div class="form__group">
        <label for="milk">Typ mléka:</label>
        <select id="milk" name="milk" required>
          <option value="">-- Vyber mléko --</option>
          <option>Kravské 🐮</option>
          <option>Mandlové 🌰</option>
          <option>Sójové 🦪</option>
          <option>Kokosové 🧉</option>
          <option>Ovesné 🥣</option>
        </select>
      </div>

      <div class="form__group">
        <label>Doplňky (můžeš vybrat více):</label>
        <div class="addons">
          <label><input type="checkbox" name="addon" value="protein"> Protein 💪</label>
          <label><input type="checkbox" name="addon" value="chia"> Chia semínka 🌱</label>
          <label><input type="checkbox" name="addon" value="med"> Med 🍯</label>
          <label><input type="checkbox" name="addon" value="ovoce"> Extra ovoce 🍇</label>
          <label><input type="checkbox" name="addon" value="kakao"> Kakao 🟤</label>
        </div>
      </div>

      <div class="form__group">
        <label for="message">Poznámka k objednávce:</label>
        <textarea id="message" name="message" rows="4" placeholder="Např. bez cukru, méně ledu, více ovoce..."></textarea>
      </div>

      <button type="submit" class="submit-btn">Odeslat moji objednávku</button>
    </form>
  </section>

<?php include "includes/footer.php" ?>