-- --------------------------------------------------------
-- Servidor:                     192.168.0.12
-- Versão do servidor:           5.6.44 - MySQL Community Server (GPL)
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              11.0.0.5975
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para status_carregamento_tmi
CREATE DATABASE IF NOT EXISTS `status_carregamento_tmi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `status_carregamento_tmi`;

-- Copiando estrutura para tabela status_carregamento_tmi.carregamentos
CREATE TABLE IF NOT EXISTS `carregamentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idOrdem` int(11) DEFAULT NULL,
  `data_chegada` date DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `id_transportador` int(11) DEFAULT NULL,
  `ordemProd` varchar(50) DEFAULT NULL,
  `id_produto` int(11) DEFAULT NULL,
  `especie` varchar(30) DEFAULT NULL,
  `quantidade` varchar(4) DEFAULT NULL,
  `status_carregamento` varchar(50) DEFAULT NULL,
  `cif_fob` varchar(5) DEFAULT NULL,
  `n_pedido` int(11) DEFAULT NULL,
  `produtor` varchar(50) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  `hora_fim` time DEFAULT NULL,
  `nf_retorno` varchar(30) DEFAULT NULL,
  `ticket` varchar(50) DEFAULT NULL,
  `nf_venda` varchar(30) DEFAULT NULL,
  `doc_nf_retorno` varchar(250) DEFAULT NULL,
  `doc_ticket` varchar(250) DEFAULT NULL,
  `doc_nf_venda` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carregamentos_transportador` (`id_transportador`),
  KEY `fk_carregamentos_produto` (`id_produto`),
  CONSTRAINT `fk_carregamentos_produto` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`),
  CONSTRAINT `fk_carregamentos_transportador` FOREIGN KEY (`id_transportador`) REFERENCES `transportador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela status_carregamento_tmi.metamensal
CREATE TABLE IF NOT EXISTS `metamensal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valorDaMeta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela status_carregamento_tmi.produto
CREATE TABLE IF NOT EXISTS `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela status_carregamento_tmi.transportador
CREATE TABLE IF NOT EXISTS `transportador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(50) DEFAULT NULL,
  `razao_social` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela status_carregamento_tmi.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel_acesso` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_validade` int(11) DEFAULT NULL,
  `sobre_nome` varchar(100) DEFAULT NULL,
  `empresa` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `imagem` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

-- Exportação de dados foi desmarcado.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
