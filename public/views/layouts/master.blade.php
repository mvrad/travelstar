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
        @yield('home')
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>