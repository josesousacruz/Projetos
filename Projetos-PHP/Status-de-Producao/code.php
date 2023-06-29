<?php
include('includes/config.php');
session_start();
date_default_timezone_set('America/Bahia');


////////////////////////Registrar carregamento//////////////////////////
if (isset($_POST['btnregistrar'])) {

    $data_Cota = $_POST['dataParaCota'];
    $transportadora = $_POST['id_transportador'];
    $cif_fob = $_POST['cif_fob'];
    $motorista = $_POST['motorista'];
    $placa = $_POST['placa'];
    $cliente = $_POST['cliente'];
    $pedido = $_POST['n_pedido'];
    $produto = $_POST['id_produto'];
    $especie = $_POST['especie'];
    $quantidade = $_POST['quantidade'];

    try {
        $query = "INSERT INTO carregamentos (idOrdem ,data_programado, placa, id_transportador, 
        id_produto, especie, quantidade, status_carregamento, cif_fob, n_pedido, produtor, motorista)
        VALUES (:idOrdem, :data_programado, :placa, :id_transportador, :id_produto, :especie,
        :quantidade, :status_carregamento, :cif_fob, :n_pedido, :produtor,:motorista)";

        $stmt = $conection->prepare($query);

        $stmt->bindValue(':idOrdem', 999);
        $stmt->bindParam(':data_programado', $data_Cota);
        $stmt->bindParam(':placa', $placa);
        $stmt->bindParam(':id_transportador', $transportadora);
        $stmt->bindParam(':id_produto', $produto);
        $stmt->bindParam(':especie', $especie);
        $stmt->bindParam(':quantidade', $quantidade);
        $stmt->bindValue(':status_carregamento', 'Programado');
        $stmt->bindParam(':cif_fob', $cif_fob);
        $stmt->bindParam(':n_pedido', $pedido);
        $stmt->bindParam(':produtor', $cliente);
        $stmt->bindParam(':motorista', $motorista);



        $stmt->execute();
    } catch (PDOException $e) {
        echo "Erro ao conectar ao banco de dados:" . $e->getMessage();
    }


    if ($stmt) {
        $_SESSION['success'] = "Processo adicionado";
        header('Location: index.php');
    } else {
        $_SESSION['status'] = "Processo não foi adicionado";
        header('Location: index.php');
    }
    ;
}


////////////////////Editar carregamento/////////////////////////

if (isset($_POST['updatebtn'])) {

    $id = $_POST['edit_id'];
    $data_chegada = $_POST['edit_data_chegada'];
    $placa = $_POST['edit_placa'];
    $transportadora = $_POST['edit_transportadora'];
    $ordem = $_POST['edit_ordem'];
    $produto = $_POST['edit_produto'];
    $especie = $_POST['edit_especie'];
    $quantidade = $_POST['edit_quantidade'];
    $status_carregamento = mb_convert_encoding($_POST['edit_status_carregamento'], 'UTF-8');
    $cif_fob = $_POST['edit_cif_fob'];
    $pedido = $_POST['edit_pedido'];
    $produtor = $_POST['edit_produtor'];
    $data_inicio = $_POST['edit_data_inicio'];
    $data_fim = $_POST['edit_data_fim'];
    $nf_inter = $_POST['edit_nf_inter'];
    $ticket = $_POST['edit_ticket'];
    $nf_venda = $_POST['edit_nf_venda'];
    $ajust_peso = $_POST['ajust_peso'];
    $user = $_POST['user_username'];


    try {

        
        $query = 'INSERT INTO eventos (evento,data_evento,id_carregamento, usuario) 
        VALUES (:evento,:data_evento,:id_carregamento,:usuario)';
        $stmt2 = $conection->prepare($query);
        $stmt2->bindValue(':evento','Editou');
        $stmt2->bindValue(':data_evento', date('Y-m-d H:i:s'));
        $stmt2->bindParam(':id_carregamento',$id);
        $stmt2->bindParam(':usuario',$user);
        $stmt2->execute();

        // Verifica se o status é o primeiro quando o veiculo adentra ao terminal!
        if ($status_carregamento == 'Aguardando OP') {

            $query = 'SELECT COUNT(*) FROM status_temp WHERE id_carregamentos=?';
            $stmt = $conection->prepare($query);
            $stmt->execute([$id]);
            $results = $stmt->fetchColumn();

            // Caso atenda, vai verificar se tem duplicidade na operação 
            // E insere um registro na tabela status_temp onde vai ser registrado tds os horarios da operação
            if ($results == 0) {
                $query = "INSERT INTO status_temp (id_carregamentos, data_st_chegada_patio)
        VALUES (:id_carregamentos, :data_st_chegada_patio)";

                $stmt = $conection->prepare($query);

                $stmt->bindParam(':id_carregamentos', $id);
                $stmt->bindParam(':data_st_chegada_patio', $data_chegada);

                $stmt->execute();
            }

        }


        // Status e a coluna correspondente na tabela
        $colunas = 
        [
            'Patio' => 'data_st_ag_op',
            'Em carregamento' => 'data_st_inicio',
            'Carregado' => 'data_st_carregado',
            'Ajuste de peso' => 'data_st_ajus_peso',
            'Liberado' => 'data_st_liberado',
            'Aguardando NF' => 'data_st_aguard_NF'
        ];

        // Faz a inserção na tabela de acordo com o status
        if (isset($colunas[$status_carregamento])) {
            $coluna = $colunas[$status_carregamento];

            $query = "UPDATE status_temp SET $coluna = :data WHERE id_carregamentos = :id";
            $stmt = $conection->prepare($query);

            $stmt->bindParam(':id', $id);
            $stmt->bindValue(':data', date('Y-m-d H:i:s'));

            $stmt->execute();
        }



        $query = "UPDATE carregamentos SET  data_chegada=:data_chegada, placa=:placa,
        id_transportador=:id_transportador, ordemProd=:ordemProd, id_produto=:id_produto, especie=:especie, quantidade=:quantidade,
        status_carregamento=:status_carregamento, cif_fob=:cif_fob, n_pedido=:n_pedido,
        produtor=:produtor, data_inicio =:data_inicio, data_fim=:data_fim,
        nf_retorno=:nf_retorno, ticket=:ticket, nf_venda=:nf_venda, 
        doc_nf_venda=:doc_nf_venda, doc_nf_retorno=:doc_nf_retorno, doc_ticket=:doc_ticket, ajust_peso=:ajust_peso
        WHERE id=:id ";


        $caminhoNfVenda = "includes/documentos/doc_NF_venda/" . $nf_venda . '.pdf';
        $caminhoNfRetorno = "includes/documentos/doc_NF_venda/" . $nf_inter . '.pdf';
        $caminhoTicket = 'includes/documentos/doc_ticket/' . $ticket . '.pdf';



        $stmt = $conection->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':data_chegada', $data_chegada);
        $stmt->bindParam(':placa', $placa);
        $stmt->bindParam(':id_transportador', $transportadora);
        $stmt->bindParam(':ordemProd', $ordem);
        $stmt->bindParam(':id_produto', $produto);
        $stmt->bindParam(':especie', $especie);
        $stmt->bindParam(':quantidade', $quantidade);
        $stmt->bindParam(':status_carregamento', $status_carregamento);
        $stmt->bindParam(':cif_fob', $cif_fob);
        $stmt->bindParam(':n_pedido', $pedido);
        $stmt->bindParam(':produtor', $produtor);
        $stmt->bindParam(':data_inicio', $data_inicio);
        $stmt->bindParam(':data_fim', $data_fim);
        $stmt->bindParam(':nf_retorno', $nf_inter);
        $stmt->bindParam(':ticket', $ticket);
        $stmt->bindParam(':nf_venda', $nf_venda);
        $stmt->bindParam(':doc_nf_venda', $caminhoNfVenda);
        $stmt->bindParam(':doc_nf_retorno', $caminhoNfRetorno);
        $stmt->bindParam(':doc_ticket', $caminhoTicket);
        $stmt->bindParam('ajust_peso', $ajust_peso);



        if (isset($_FILES['arquivoPdf_nfVenda'])) {
            $nomeArquivoVenda = $nf_venda . '.pdf';
            $caminhoDestinoVenda = "includes/documentos/doc_NF_venda/" . $nomeArquivoVenda;
            move_uploaded_file($_FILES['arquivoPdf_nfVenda']['tmp_name'], $caminhoDestinoVenda);
        }

        if (isset($_FILES['arquivoPdf_nfRetorno'])) {
            $nomeArquivoRetorno = $nf_inter . '.pdf';
            $caminhoDestinoRetorno = "includes/documentos/doc_NF_retorno/" . $nomeArquivoRetorno;
            move_uploaded_file($_FILES['arquivoPdf_nfRetorno']['tmp_name'], $caminhoDestinoRetorno);
        }

        if (isset($_FILES['arquivoPdf_ticket'])) {
            $nomeArquivoTicket = $ticket . '.pdf';
            $caminhoDestinoTicket = "includes/documentos/doc_ticket/" . $nomeArquivoTicket;
            move_uploaded_file($_FILES['arquivoPdf_ticket']['tmp_name'], $caminhoDestinoTicket);
        }

    } catch (PDOException $e) {
        echo "Erro ao conectar ao banco de dados:" . $e->getMessage();
    }





    if ($stmt->execute()) {
        $_SESSION['success'] = "Editado";
        header('Location: index.php');
    } else {
        $_SESSION['status'] = "ERROR";
        header('index.php');
    }
}
;



///////////////////Deletar carregamento///////////////

if (isset($_POST['btndelete'])) {
    $id = $_POST['delete_id'];

    $query = 'SELECT status_carregamento FROM carregamentos WHERE id=:id';
    $stmt = $conection->prepare($query);
    $stmt->execute(['id' => $id]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($results[0]['status_carregamento'] == 'Programado') {
        $query = "DELETE FROM carregamentos WHERE id = :id";
        $stmt = $conection->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    } else {
        $query = 'UPDATE carregamentos SET status_carregamento = :status WHERE id = :id';
        $stmt = $conection->prepare($query);
        $stmt->bindValue(':status', 'Cancelado');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }




    if ($stmt->execute()) {
        $_SESSION['success'] = "Processo deletado";
        header('Location: index.php');
    } else {
        $_SESSION['status'] = "Processo não foi deletado";
        header('Location: index.php');
    }
}


///////////////////UPDATE META////////////////
if (isset($_POST['btnSalvar_metaMental'])) {

    $meta = $_POST['metaMensal'];

    $query = "UPDATE metamensal SET valorDaMeta = :meta";
    $stmt = $conection->prepare($query);
    $stmt->bindParam(':meta', $meta);
    $stmt->execute();

    if ($stmt) {
        $_SESSION['success'] = "Meta foi alterada";
        header('Location: index.php');
        exit();
    } else {
        $_SESSION['status'] = "FALHA AO ALTERAR META";
        header('Location: index.php');
    }
}

// Inserir produto
if (isset($_POST['btnSalvar_novoProd'])) {

    $produto = $_POST['nomeProd'];

    $query = "INSERT INTO produto (nome) 
    VALUES (:nome)";

    $stmt = $conection->prepare($query);
    $stmt->bindParam(':nome', $produto);
    $stmt->execute();

    if ($stmt) {
        $_SESSION['success'] = "Produto foi inserido";
        header('Location: gerenciador.php');
    } else {
        $_SESSION['status'] = "FALHA AO inserir produto";
        header('Location: index.php');
    }
}

//Inserir Transportador
if (isset($_POST['btnSalvar_novaTransp'])) {

    $razaoSocial = $_POST['razaoSocial'];
    $cnpj = $_POST['cnpj'];

    $query = "INSERT INTO transportador (razao_social, cnpj) 
    VALUES (:razao_social,:cnpj)";

    $stmt = $conection->prepare($query);
    $stmt->bindParam(':razao_social', $razaoSocial);
    $stmt->bindParam(':cnpj', $cnpj);
    $stmt->execute();

    if ($stmt) {
        $_SESSION['success'] = "Transportador foi inserido";
        header('Location: gerenciador.php');
    } else {
        $_SESSION['status'] = "FALHA AO inserir transportador";
        header('Location: index.php');
    }
}

/////////////Update perfil///////////////
if (isset($_POST['btnUpdatePerfil'])) {
    $id = $_POST['perfil_id'];

    $username = $_POST['inputUsername'];
    $senha = $_POST['inputSenha'];
    $nome = $_POST['inputFirstName'];
    $sobrenome = $_POST['inputLastName'];
    $empresa = $_POST['inputEmpresa'];
    $telefone = $_POST['inputPhone'];
    $email = $_POST['inputEmail'];

    $hashedPassword = password_hash($senha, PASSWORD_DEFAULT);

    $query = "UPDATE usuarios SET  username=:username, senha=:senha, nome=:nome, sobre_nome=:sobrenome, 
    empresa=:empresa, telefone=:telefone, email=:email WHERE id=:id ";

    $stmt = $conection->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':senha', $hashedPassword);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':sobrenome', $sobrenome);
    $stmt->bindParam(':empresa', $empresa);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    if ($stmt) {
        $_SESSION['success'] = "Usuario editado";
        header('Location: index.php');
    } else {
        $_SESSION['status'] = "ERROR";
        header('index.php');
    }
}
;

/// imagem////////

if (isset($_FILES['perfil_imagem'])) {
    $id = $_POST['idUser'];
    $arquivo = $_FILES['perfil_imagem']['tmp_name'];

    // Lê o conteúdo do arquivo
    $conteudo = file_get_contents($arquivo);

    $stmt = $conection->prepare("UPDATE usuarios SET imagem=:imagem WHERE id=:id");
    $stmt->bindParam(':id', $id);

    $stmt->bindParam(':imagem', $conteudo, PDO::PARAM_LOB);

    $stmt->execute();

    if ($stmt) {
        $_SESSION['success'] = "Imagem modificada";
        header('Location: perfil.php');
    } else {
        $_SESSION['status'] = "ERRO";
        header('index.php');
    }
}


