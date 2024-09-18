const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, "inicio")));

app.use('/assets', express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "inicio", "inicio.html"));
});

app.listen(8888, () => {
    console.log("Servidor Web Iniciado");
});