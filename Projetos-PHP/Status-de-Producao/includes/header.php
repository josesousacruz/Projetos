<!DOCTYPE html>
<html lang="bt-br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="José Sousa">

    <title>SEFI</title>
    <!-- Arquivos do projeto -->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- <script src="https://kit.fontawesome.com/31a35138c2.js" crossorigin="anonymous"></script> -->
    <script src="./js/kitFontAwesome.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <!-- Custom styles for this template-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


    <!-- Chart js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.0.0/chartjs-plugin-datalabels.min.js"></script>

    <!-- Data table -->
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/responsive/2.2.9/css/responsive.dataTables.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.bootstrap5.min.css">
    <link rel="stylesheet" type="text/css" href="https:////cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/buttons/2.3.6/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/colreorder/1.5.3/css/colReorder.dataTables.min.css">

    <!-- PWA -->
    <script src="service-worker.js"></script>
    <link rel="manifest" href="manifest.json">


    <?php
    include('includes/config.php');
    session_start();
    if (!isset($_COOKIE["token"])) {
        header("Location: login/login.php");
        exit();
    }

    $token = $_COOKIE["token"];

    $stmt = $conection->prepare("SELECT * FROM usuarios WHERE token = :token AND token_validade > :expiry");
    $stmt->execute(['token' => $token, 'expiry' => time()]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        header("Location: login/login.php");
        exit();
    }
    ?>

    <script>


        // Função para definir um cookie
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        // Função para obter o valor de um cookie
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }


        // Verifique se o navegador é compatível com a instalação
        window.addEventListener('beforeinstallprompt', function (event) {
            console.log('beforeinstallprompt acionado');
            function isIos() {
                const userAgent = window.navigator.userAgent.toLowerCase();
                return /iphone|ipad|ipod/.test(userAgent) 
                // && !window.MSStream;
            }

            // Seleciona o modal
            var modal = document.getElementById('installModal');
            var appRecused = getCookie('appRecused')

            if (!appRecused && !isIos()) {
                // Exibe o modal
                $(modal).modal('show');
            }
            // Mantenha o evento para exibir o prompt de instalação mais tarde
            event.preventDefault();



            // Lidar com o evento de clique do botão "Instalar"
            document.getElementById('btn-install').addEventListener('click', function () {
                // Exibir o prompt de instalação
                event.prompt();

                $(modal).modal('hide');
                // Aguardar a escolha do usuário
                event.userChoice.then(function (choiceResult) {
                    console.log('Escolha do usuário:', choiceResult.outcome);

                    // Esconder o modal se a instalação for concluída
                    if (choiceResult.outcome === 'accepted') {
                        $(modal).modal('hide');
                    }
                });
            });
        });


        // Lidar com a mensagem do Service Worker
        navigator.serviceWorker.addEventListener('message', function (event) {
            console.log('Mensagem do Service Worker recebida:', event.data);

            // Se a PWA já está instalada, esconder o modal
            if (event.data === 'alreadyInstalled') {
                $(modal).modal('hide');
            }
        });


        function isIos() {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent) && !window.MSStream;
        }

        document.addEventListener('DOMContentLoaded', function () {
            var appRecused = getCookie('appRecused')

            if (isIos()) {
                var modal = document.getElementById('installModalIOS');
                if (!appRecused) {
                    // Exibe o modal
                    $(modal).modal('show');
                }

            }
        });




        function fecharModal() {
            setCookie('appRecused', true, 15)
            var modal = document.getElementById('installModal');
            $(modal).modal('hide');
        }

    </script>

</head>




<body id="page-top">

    <div class="modal" tabindex="-1" role="dialog" id="installModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Para melhorar sua experiencia!</h5>
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"> -->
                    <!-- <span aria-hidden="true">&times;</span> -->
                    <!-- </button> -->
                </div>
                <div class="modal-body">
                    <p>Para melhorar sua experiencia, temos a opção de utilizar o SEFI como APP</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"
                        onclick="fecharModal()">Utilizar a versão web</button>
                    <button id="btn-install" class="btn btn-success rounded-pill btn-sm" style="display:block"><svg
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-android2" viewBox="0 0 16 16">
                            <path
                                d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
                        </svg> Baixe o App</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Botão para abrir o modal -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#installModalIOS">
        Baixar e Instalar
    </button> -->

    <!-- Modal Instalar IOS-->
    <div class="modal fade" id="installModalIOS" tabindex="-1" role="dialog" aria-labelledby="installModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="installModalLabel">Baixar e Instalar o SEFI como APP</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="includes/imagens/passo1-Install-IOS.jpg" class="d-block w-100" alt="Passo 1">
                                <div class="carousel-caption">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="includes/imagens/passo2-Install-IOS.jpg" class="d-block w-100" alt="Passo 2">
                                <div class="carousel-caption">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="includes/imagens/passo3-Install-IOS.jpg" class="d-block w-100" alt="Passo 3">
                                <div class="carousel-caption">
                                </div>
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Próximo</span>
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="fecharModal()" type="button" class="btn btn-secondary"
                        data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>





    <style>
        .coin-image {
            animation: spin-coin 1.5s linear infinite;
        }

        @keyframes spin-coin {
            0% {
                transform: rotateY(0deg);
            }

            50% {
                transform: rotateY(-180deg);
            }

            100% {
                transform: rotateY(-360deg);
            }
        }


        .loader {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.61);
        }

        /* Define as propriedades da animação */
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        /* Aplica a animação ao elemento */
        .loading {
            border: 16px solid #f3f3f3;
            /* Adiciona uma borda ao elemento */
            border-radius: 50%;
            /* Arredonda as bordas do elemento */
            border-top: 16px solid #3498db;
            /* Adiciona cor à borda superior do elemento */
            width: 80px;
            /* Define o tamanho do elemento */
            height: 80px;
            /* Define o tamanho do elemento */
            animation: spin 2s linear infinite;
            /* Aplica a animação ao elemento */
        }
    </style>



    <div id="loader" class="loader">
        <div style="text-align: center; display: flex; justify-content: center; align-items: center; height: 80vh;">
            <span style="text-align: center; font-weight: bold; color: black; font-size: 20px;">
                <span style="color:white; text-align: center; animation: blink 1s linear infinite;">Carregando...
                </span>
                <div>
                    <p>
                        <center><img src="includes/imagens/load.png" class="coin-image" width=60 height=60 />
                        </center>
                </div>

        </div>
        </span>
    </div>


    <!-- Page Wrapper -->
    <div id="wrapper">