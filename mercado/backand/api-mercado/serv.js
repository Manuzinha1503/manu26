const express = require("express");
const mysql = require("mysql2");
const app = express();
const porta = 3000


app.listen(porta, ()=> {console.log("Abrio o frefire " + porta)})