const express = require("express");
const app = express();
const porta = 3000;
const produtos = require("./galera.json");


let usuarios =[
    {
        id:1,nome:"Emanuelli"
    },
    {
        id:2,nome:"Emanuela"
    }
]
app.get("/", (req,res) =>{
    res.send("<h1>Oloko meu<h1>")
})
app.get("/produtos",(req, res) =>{
    res.json(produtos);
})
app.get("/contatos", (req,res)=>{
    res.send("<h1>O que foi em piranha? <h1>")
})
app.get("/usuarios", (req,res)=>{
    res.send("<h1>Denise sai da live filha ninguem te chamou aqui krl<h1>")
})
app.get("/usuarios/:id", (req,res) =>{
    const id = Number(req.params.id)
    const usuario = usuarios.find((item) =>{
    return item.id===id;
    })
    if(item.length === 0){
        return res.status(404).json({mensagem: "ERRO"})
    }
    res.status(200).json(usuario);
})
app.listen(porta, () => {
    console.log("Nossa titia que maneiro " + porta)
})