<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>TravelStar | @yield('title')</title>

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000080">
  <meta name="apple-mobile-web-app-title" content="TravelStar">
  <meta name="application-name" content="TravelStar">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheets -->
  <link href="styles/css/app.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <!-- <div class="flex-center position-ref full-height">
      @if (Route::has('login'))
        <div class="top-right links">
          @auth
            <a href="{{ url('/home') }}">Home</a>
          @else
            <a href="{{ route('login') }}">Login</a>
            <a href="{{ route('register') }}">Register</a>
          @endauth
        </div>
      @endif
    </div> -->

    <!-- Nav -->
    <nav>
      <div id="main-logo-container">
        <img id="main-logo" src="img/travelstar-logo.svg" alt="TravelStar">
        <h1 id="main-logo-txt">TravelStar</h1>
      </div>
      <ul id="menu-lg">
        <li><a href='/home'>Home</a></li>
        <li>About</li>
      </ul>
    </nav>
    <!-- /.Nav -->
    <div class="bg">
      <!-- Modal -->
      <div>
        <!-- Destination -->
        <div>

        </div>
        <!-- Dates -->
        <div>
          <!-- From -->
          <div>

          </div>
          <!-- /.From -->
          <!-- To -->
          <div>

          </div>
          <!-- /.To -->
        </div>
      </div>
      <!-- /.Modal -->
      <!-- Footer -->
      <footer>

      </footer>
      <!-- /.Footer -->
    </div>
    <!-- /.bg -->

    <script src="js/bootstrap.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
