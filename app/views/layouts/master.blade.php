<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laravel 4, Backbone & Marionette Boilerplate</title>
  <link rel="stylesheet" href="/css/style.css"/>
</head>
<body>

@yield('content')

<?php
  global $env;
//  $env = 'prod';
?>

@if($env !== 'local')
  <!-- Run [grunt js-all] to build this file -->
  <script src="/js/dist/combined.clean.min.js?rel=1370884274907"></script>
@else
  <script src="/js/dist/deps.min.js"></script>
  <script data-main="/js/src/main.js" src="/components/requirejs/require.js"></script>
@endif

</body>
</html>
