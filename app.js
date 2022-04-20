const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("public"));

app.listen(3001, () => {
    console.log("Servidor iniciado")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/register.html'));
})