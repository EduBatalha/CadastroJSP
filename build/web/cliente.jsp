<%-- 
    Document   : cliente
    Created on : 14/09/2023, 20:15:24
    Author     : alunos
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List" %>
<%@page import="java.text.*" import="java.lang.*"%>
<%@page import="java.sql.*"%>
<%@page import="Controller.Usuario"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Controle de Clientes</title>
    </head>
    <body>
        <h1>Clientes</h1>
        <%
             // Recebendo dados
        String nome = request.getParameter("nome");
        String dataNasc = request.getParameter("datanasc");
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");
        String endereco = request.getParameter("endereco");
        String cidade = request.getParameter("cidade");
        String estado = request.getParameter("estado");
        String cep = request.getParameter("cep");
        String telefone = request.getParameter("telefone");
        String cpf = request.getParameter("cpf");

        //GRAVAR!
        try {
            Class.forName("com.mysql.jdbc.Driver"); //registra
            Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/cadastro", "root", ""); // abre Conn

            // Use PreparedStatement para inserir dados com segurança
            String sql = "INSERT INTO clientes (nome, dataNasc, email, senha, endereco, cidade, estado, cep, telefone, cpf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstmt = conexao.prepareStatement(sql);
            pstmt.setString(1, nome);
            pstmt.setString(2, dataNasc);
            pstmt.setString(3, email);
            pstmt.setString(4, senha);
            pstmt.setString(5, endereco);
            pstmt.setString(6, cidade);
            pstmt.setString(7, estado);
            pstmt.setString(8, cep);
            pstmt.setString(9, telefone);
            pstmt.setString(10, cpf);

            pstmt.executeUpdate();
            pstmt.close(); // Feche o PreparedStatement

            conexao.close(); //fecha

            out.println("<b> Registro - Clientes </b>");
            out.println("<br> Nome: " + nome);
            out.println("<br> Data nascimento: " + dataNasc);
            out.println("<br> Email: " + email);
            out.println("<br> Senha: " + senha);
            out.println("<br> Endereco: " + endereco);
            out.println("<br> Cidade: " + cidade);
            out.println("<br> Estado: " + estado);
            out.println("<br> Cep: " + cep);
            out.println("<br> Telefone: " + telefone);
            out.println("<br> CPF: " + cpf);
            out.println("Registrado com sucesso");
        } catch (Exception ex) {
            ex.printStackTrace();
            out.println("Erro: " + ex.toString());
        }
    %>
</body>
</html>