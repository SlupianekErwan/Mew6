<header class="banner container2">
  <div class="container flex">
    <a class="brand" href="<?php echo e(home_url('/')); ?>">
      <img src="<?php echo App::getHeaderLogo(); ?>" alt="">
    </a>
    
    
    <nav class="nav-primary">
      <?php if(has_nav_menu('primary_navigation')): ?>
        <?php echo wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']); ?>

      <?php endif; ?>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
      <select name="lng" id="lng-select">
        <option value="english">🇬🇧</option>
        <option value="french">fr</option>
      </select>
    </nav>
  </div>
</header>
