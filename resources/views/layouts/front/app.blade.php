<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="assets/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link href="assets/images/blue-Logo.png" rel="apple-touch-icon">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Gothic+A1:300,regular,500,600,700,800" media="all">
    <script type="text/javascript">WebFont.load({ google: { families: ["Gothic A1:300,regular,500,600,700,800"] } });</script>
    
     <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
    integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />

    <!-- style -->
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/responsive.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/table.css')}}" rel="stylesheet" type="text/css">

    <!-- Scripts -->
    {{-- @vite(['resources/sass/app.scss', 'resources/js/app.js']) --}}
</head>
<body class="body">
    <!-- Footer -->
    @include('layouts.front._header')

    <!-- Main Content -->
    @yield('content')

    <!-- Footer -->
    @include('layouts.front._footer')

    {{-- Scripts --}}
    <script src="{{asset('assets/js/jquery-3.5.1.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets/js/script.js')}}" type="text/javascript"></script>

    @stack('scripts')
</body>
</html>
