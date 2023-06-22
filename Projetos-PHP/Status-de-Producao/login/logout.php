<?php
session_start();

$_SESSION = array();

// Exclua o cookie de token, se estiver definido
if (isset($_COOKIE["token"])) {
    setcookie("token", "", time() - 3600, "/");
}

// Destrua a sessão
session_destroy();

// Redirecione o usuário para a página de login
header("Location: ../login/login.php");
exit();
?>
