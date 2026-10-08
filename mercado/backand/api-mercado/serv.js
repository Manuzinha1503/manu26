const express = require("express");
const mysql = require("mysql2");
const app = express();
const porta = 3000;
 
const status500 = "Erro ao estabelecer conexão!";
const status200 = "Tudo ok!";
const status201 = "Cadastro realizado com sucesso!"
const status404 = "Não encontrado!"
const status400 = "Preencha todos os campos!"
const status401 = "E-mail ou senha incorreta!"
 
 
const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mercado"
})
 
conexao.connect((erro)=>{
    if(erro){
        console.log(status500)
    }
    else{
        console.log(status200)
    }
})
 
app.get("/", (req, res)=>{
    return res.status(200).json({mensagem: status200})
})
app.get("/usuarios", (req, res)=>{
    const sql = "SELECT * FROM usuarios";
    conexao.query(sql, (erro, resultado)=>{
        if(erro){
            return res.status(500).json({mensagem: status500})
        }
        else{
            return res.status(200).json(resultado)
        }
    })
 
})
 
app.get("/usuarios/:id", (req, res)=>{
const id = Number(req.params.id);
const sql = "SELECT * FROM usuarios WHERE id_usuario = ?"
    conexao.query(sql, [id], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({mensagem: status500})
        }
        if(resultado.length === 0){
            return res.status(404).json({mensagem: status404})
        }
        return res.status(200).json(resultado)
    })
})
app.listen(porta, ()=>{console.log("Servidor rodando na porta: " + porta)})