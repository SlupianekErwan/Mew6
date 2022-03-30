<header class="banner container2">
  <div class="container flex">
    <a class="brand" href="{{ home_url('/') }}">
      <img src="{!! App::getHeaderLogo() !!}" alt="">
    </a>
    {{-- {{ $header_image }} --}}
    {{-- <a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a> --}}
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif
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
