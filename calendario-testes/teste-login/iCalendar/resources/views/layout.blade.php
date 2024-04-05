<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Meta -->
    <meta name="author" content="" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('/images/favicon.png') }}">

    <!-- Title -->
    <title>@yield('title')</title>

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha512-rRQtF4V2wtAvXsou4iUAs2kXHi3Lj9NE7xJR77DE7GHsxgY9RTWy93dzMXgDIG8ToiRTD45VsDNdTiUagOFeZA==" crossorigin="anonymous" referrerpolicy="no-referrer" />



    <!-- Data table -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.9/css/responsive.dataTables.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.bootstrap5.min.css">
    <link rel="stylesheet" type="text/css" href="https:////cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.3.6/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/colreorder/1.5.3/css/colReorder.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/2.0.3/css/dataTables.bootstrap5.css">

    <!-- Bootstrap font icons css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/bootstrap/bootstrap-icons.css') }}">


    <!-- Main css -->
    <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">


    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/select/1.7.0/css/select.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.4.2/css/buttons.dataTables.min.css">



    <!-- Calendar CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/calendar/css/main.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/calendar/css/custom.css') }}">

    <script src="https://kit.fontawesome.com/31a35138c2.js" crossorigin="anonymous"></script>

</head>

<body>
    <div id="loading-wrapper">
        <div class="spinner">
            <span class="letter">I</span>
            <span class="letter">N</span>
            <span class="letter">T</span>
            <span class="letter">E</span>
            <span class="letter">R</span>
            <span class="letter">M</span>
            <span class="letter">A</span>
            <span class="letter">R</span>
            <span class="letter">I</span>
            <span class="letter">T</span>
            <span class="letter">I</span>
            <span class="letter">M</span>
            <span class="letter">A</span>
        </div>
    </div>

    <!-- Loading wrapper end -->
    <!-- Page wrapper start -->
    <div class="page-wrapper">

        {{-- @extends('components.sidebar') --}}
        <!-- Sidebar wrapper start -->
        <nav class="sidebar-wrapper">

            <!-- Sidebar brand starts -->
            <div class="sidebar-brand">
                <a href="index.html" class="logo">
                    <img src="{{ asset('images/logo.png') }}" />
                </a>
            </div>
            <!-- Sidebar brand starts -->

            <!-- Sidebar menu starts -->
            <div class="sidebar-menu">
                <div class="sidebarMenuScroll">
                    <ul>
                        <li class="">
                            <a href="{{ route('home') }}">
                                <i class="bi bi-house"></i>
                                <span class="menu-text">Home</span>
                            </a>
                        </li>
                        <li class="sidebar-dropdown">
                            <a>
                                <i class="bi bi-calendar-check"></i>
                                <span class="menu-text">Agendamento</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="{{ route('agendamento') }}" class="">Agendar</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="bi bi-shield-lock"></i>
                                <span class="menu-text">Controle de Acesso</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <div class="sidebar-heading">
                                        Registros
                                    </div>
                                    <li>
                                        <a href="{{ route('acesso') }}" class="fw-light">Triagem</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    <div class="sidebar-heading">
                                        Relatorios
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('relatorios', ['tipo' => 'veiculos']) }}">Veiculos no terminal</a></li>

                                    <li><a class="fw-light" id="rel-acessos" href="{{ route('relatorios', ['tipo' => 'acessos']) }}">Acessos</a></li>

                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    <div class="sidebar-heading">
                                        Gerenciamento
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('gerenciamentos', ['tipo' => 'veiculos']) }}">Veiculos</a></li>

                                    <li><a class="fw-light" id="rel-acessos" href="{{ route('gerenciamentos', ['tipo' => 'pessoas']) }}">Pessoas</a></li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                </ul>

                                
                            </div>


                        </li>
    
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-balance-scale"></i>
                                <span class="menu-text">Balança</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <div class="sidebar-heading">
                                        Registros
                                    </div>
                                    <li>
                                        <a href="{{ route('acesso') }}" class="fw-light">Pesagens</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    <div class="sidebar-heading">
                                        Relatorios
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('relatorios', ['tipo' => 'veiculos']) }}">Tickets</a></li>

                                    {{-- <li><a class="fw-light" id="rel-acessos" href="{{ route('relatorios', ['tipo' => 'acessos']) }}">Acessos</a></li> --}}

                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    {{-- <div class="sidebar-heading">
                                        Gerenciamento
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('gerenciamentos', ['tipo' => 'veiculos']) }}">Veiculos</a></li>

                                    <li><a class="fw-light" id="rel-acessos" href="{{ route('gerenciamentos', ['tipo' => 'pessoas']) }}">Pessoas</a></li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li> --}}
                                </ul>

                                
                            </div>


                        </li>

                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="bi bi-table"></i>
                                <span class="menu-text">iSef</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <div class="sidebar-heading">
                                        Operação
                                    </div>
                                    <li>
                                        <a href="{{ route('acesso') }}" class="fw-light">Status</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('acesso') }}" class="fw-light">Ocorrencias</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    <div class="sidebar-heading">
                                        Relatorios
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('relatorios', ['tipo' => 'veiculos']) }}">Dasboard</a></li>

                                    <li><a class="fw-light" id="rel-acessos" href="{{ route('relatorios', ['tipo' => 'acessos']) }}">Historico</a></li>

                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li>
                                    {{-- <div class="sidebar-heading">
                                        Gerenciamento
                                    </div>
                                    <li><a class="fw-light" id="rel-veiculos" href="{{ route('gerenciamentos', ['tipo' => 'veiculos']) }}">Veiculos</a></li>

                                    <li><a class="fw-light" id="rel-acessos" href="{{ route('gerenciamentos', ['tipo' => 'pessoas']) }}">Pessoas</a></li>
                                    <li>
                                        <hr class="dropdown-divider mt-1" />
                                    </li> --}}
                                </ul>

                                
                            </div>


                        </li>





                    </ul>
                </div>
            </div>
            <!-- Sidebar menu ends -->

        </nav>
        <!-- Sidebar wrapper end -->

        <!--  Main container start -->
        <div class="main-container">

            <!-- Page header starts -->
            <div class="page-header z-10 bg-white shadow-md dark:bg-gray-800">

                <div class="toggle-sidebar" id="toggle-sidebar"><i class="bi bi-list"></i></div>

                <!-- Breadcrumb start -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <i class="bi bi-house"></i>
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item breadcrumb-active">Calendario</li>
                </ol>
                <!-- Breadcrumb end -->

                <!-- Header actions ccontainer start -->
                <div class="header-actions-container">

                    <!-- Search container start -->
                    <div class="search-container">

                        <!-- Search input group start -->
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="pesquisa...">
                            <button class="btn" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                        <!-- Search input group end -->

                    </div>
                    <!-- Search container end -->

                    <!-- Leads start -->
                    <a href="orders.html" class="leads d-none d-xl-flex">
                        <div class="lead-details">Você tem <span class="count"> 21 </span> novas notificações </div>
                        <span class="lead-icon"><i
                                class="bi bi-bell-fill animate__animated animate__swing animate__infinite infinite"></i><b
                                class="dot animate__animated animate__heartBeat animate__infinite"></b></span>
                    </a>
                    <!-- Leads end -->

                    <!-- Header actions start -->
                    <ul class="header-actions">
                        <li class="dropdown d-none d-md-block">
                            <a href="#" id="countries" data-toggle="dropdown" aria-haspopup="true">
                                <img src="{{ asset('/images/flags/1x1/gb.svg') }}" class="flag-img"
                                    alt="AI Admin Dashboards" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end mini" aria-labelledby="countries">
                                <div class="country-container">
                                    <a href="index.html">
                                        <img src="{{ asset('/images/flags/1x1/us.svg') }}"
                                            alt="Clean Admin Dashboards" />
                                    </a>
                                    <a href="index.html">
                                        <img src="{{ asset('/images/flags/1x1/in.svg') }}" alt="Google Dashboards" />
                                    </a>
                                    <a href="index.html">
                                        <img src="{{ asset('/images/flags/1x1/br.svg') }}" alt="Admin Panels" />
                                    </a>
                                    <a href="index.html">
                                        <img src="{{ asset('/images/flags/1x1/tr.svg') }}" alt="Modern Dashboards" />
                                    </a>
                                    <a href="index.html">
                                        <img src="{{ asset('/images/flags/1x1/ca.svg') }}"
                                            alt="Best Admin Dashboards" />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#" id="userSettings" class="user-settings" data-toggle="dropdown"
                                aria-haspopup="true">
                                <span class="user-name d-none d-md-block">Usuario</span>
                                <span class="avatar">
                                    <img src="{{ asset('/images/motoristas/259.jpeg') }}" alt="Admin Templates">
                                    <span class="status online"></span>
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                                <div class="header-profile-actions">
                                    <a href="profile.html">Perfil</a>
                                    <a href="account-settings.html">Configurações</a>
                                    <a href="{{ route('logout') }}">Sair</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- Header actions end -->

                </div>
                <!-- Header actions ccontainer end -->

            </div>
            <!-- Page header ends -->

            <!-- Content wrapper scroll start -->
            <div class="content-wrapper-scroll mt-2">
                @yield('content')

            </div>
            <!-- Content wrapper scroll end -->
        </div>
        <!--  Main container end -->



    </div>
    <!-- Page wrapper end -->

</body>

@extends('components.modal');
@extends('components.scripts');

</html>
