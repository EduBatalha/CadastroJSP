# Projeto para demonstrar utilização de JSP.

## Técnologias: JSP, HTML 5, CSS, JavaScript e SQL

## script de criação do BD

CREATE DATABASE `cadastro` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `clientes` (  
  `id` int(11) NOT NULL AUTO_INCREMENT,  
  `nome` varchar(45) NOT NULL,  
  `dataNasc` date DEFAULT NULL,  
  `email` varchar(45) NOT NULL,  
  `senha` varchar(45) NOT NULL,  
  `endereco` varchar(45) NOT NULL,  
  `cidade` varchar(45) NOT NULL,  
  `estado` varchar(45) NOT NULL,  
  `telefone` varchar(45) NOT NULL,  
  `cpf` varchar(45) NOT NULL,  
  `cep` varchar(45) NOT NULL,  
  PRIMARY KEY (`id`)  
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;  
