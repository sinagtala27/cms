<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>CHED HOTLINE PORTAL</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>

    <div id="app">
         @yield('content')
    </div>
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>
</html>


