const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use('/sorciere', (req, res, next) => {
    console.log(req.baseUrl, ' pour /sorciere')
    next();
})

app.use('/sorciere/:name', (req, res, next) => {
    console.log(req.baseUrl, ' pour /sorciere/:name')
    next();
})

app.use('/sorciere/:name/magic', (req, res, next) => {
    console.log(req.baseUrl, ' pour /sorciere/:name/magic')
    next();
})

app.use('/sorciere/:name/magic/:spell', (req, res, next) => {
    console.log(req.baseUrl, ' pour /sorciere/:name/magic/:spell')
    next();
})

app.get('/', (req, res, next) => {
    fs.readFile(path.join(__dirname, '/public', 'index.html'),
    (err, content) => {
        if(err) {
            throw err;
        } else {
            res.status(200).send(content)
        }
    })
})

app.get('/sorciere', (req, res, next) => {
    res.status(200).send('Methode: ' + req.method + ' Chemin: ' + req.path );
})

app.get('/sorciere/:name', (req, res, next) => {
    console.log(req.params)
    res.status(200).send('Methode: ' + req.method + ' Parametres: '+ req.params.name + ' Chemin: ' + req.path );
})

app.get('/sorciere/:name/magic', (req, res, next) => {
    res.status(200).send('Methode: ' + req.method + ' Parametres: '+ req.params.name + ' Chemin: ' + req.path );
})

app.get('/sorciere/:name/magic/:spell', (req, res, next) => {
    res.status(200).send('Methode: ' + req.method + ' Parametres: '+ req.params.name + ' - ' + req.params.spell + ' Chemin: ' + req.path );
})

app.listen(PORT, () => console.log('Server is running...'))