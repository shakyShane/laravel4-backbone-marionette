<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Backbone Gallery & Cart</title>
</head>
<body>

@yield('content')

<?php
  global $env;
//  $env = 'prod';
?>

@if($env !== 'local')
  <script src="/js/dist/combined.min.js"></script>
@else
  <script src="/js/dist/deps.min.js"></script>
  <script data-main="/js/src/main.js" src="/components/requirejs/require.js"></script>
@endif

</body>

</html>
