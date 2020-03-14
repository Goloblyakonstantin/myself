<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="/css/main_css.css">
    <title></title>
  </head>
  <body>
    <div class="preloader">

    </div>
    <div class="text_0">
      <h1>У каждого человека свои звёзды</h1>
    </div>
    <?php
      for ($i=0; $i <17 ; $i++)
      {
        $x=rand(0,100);
        $y=rand(0,100);
        echo '<img src="img/star.png" style="left:'.$x.'vw; top:'.$y.'vh" class="star" alt="">';
      }
    ?>
    <img src="img/moon.svg" class="moon" alt="">
    <img src="img/mountain_1.svg" class="mountain_1" alt="">
    <img src="img/land_2_2.svg" class="land_2" alt="">
    <img src="img/land_1_1.svg" class="land_1" alt="">
    <img src="img/mountain_0.svg" class="mountain_0" alt="">
    <img src="img/land_0_0.svg" class="land_0" alt="">
    <img src="img/tree_0.svg" class="tree_0" alt="">
    <?php
      for ($i=0; $i <5 ; $i++)
      {
        $x=rand(0,100);
        $width=rand(10,35);
        echo '<img src="img/tree_0.png" style="left:'.$x.'vw; width:'.$width.'vw" class="tree_0" alt="">';
      }
    ?>
    <script src="https://code.jquery.com/jquery-3.4.1.js"
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous"></script>

    <script src="js/js.js" type="text/javascript"></script>
  </body>
</html>
