<!doctype html>
<html lang="en">
  <head>
    @include('includes.head')
  </head>
  <body>
    <header>
      @include('includes.header')
    </header>
    <div class="bg">
      <div class="modal">
        @yield('content')
      </div>
    </div>
    <footer>
      @include('includes.footer')
    </footer>
    <script src="js/app.js"></script>
  </body>
</html>