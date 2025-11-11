<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sejkspir</title>
    <link rel="stylesheet" href="css/style.css? <?php echo time(); ?>">
</head>
<body>

 <div class="menu">
        <div class="menu__logo">
            <img src="images/logoreal.png" alt="Logo">
            <span class="Logo__text">"Ať chutná, či nechutná, toť otázka"</span>
        </div>
        <div class="menu__text">
            <a href="index.php"><h2>Domů</h2></a>
            <a href="onas.php"><h2>O nás</h2></a>
            <a href="nabidka.php"><h2>Nabídka</h2></a>
            <a href="kontakt.php"><h2>Kontakt</h2></a>
            <a href="nabidkanamiru.php"><h2>Nabídka na míru</h2></a>
        </div>
              <!-- 🛒 Košík -->
      <div class="menu__cart">
        <button id="cartBtn">🛒 <span id="cartCount">0</span></button>
      </div>
  </div>