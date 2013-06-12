<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laravel 4, Backbone & Marionette Boilerplate</title>
  {{-- Run [grunt compass] to generate a style.css --}}
  <link rel="stylesheet" href="/css/style.css"/>
</head>
<body>

@yield('content')

<?php
  global $env;
  // uncomment the following line to test that the correct file is loaded in production
  // $env = 'prod';
?>

@if($env !== 'local')
  {{-- Run [grunt js-all] to build this file --}}
  <script src="/js/dist/combined.clean.min.js"></script>
@else
  <script src="/js/dist/deps.min.js"></script>
  <script data-main="/js/src/main.js" src="/components/requirejs/require.js"></script>
@endif

</body>
</html>
