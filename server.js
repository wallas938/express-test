const express = require('express');
const path = require('path')
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.get('/', (req, res, next) => {
    fs.readFile(path.join(__dirname, './public', 'index.html'),
    (err, content) => {
        if(err) {
            throw err;
        } else {
            res.status(200).send(content)
        }
    })
})

app.listen(PORT, () => console.log('Server is running...'))