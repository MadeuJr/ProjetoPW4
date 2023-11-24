const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./repository/dbconnect.js');

const app = express();
const port = 9859;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Página inicial!'));
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
    console.log(`Access: http://localhost:${port}`);
});
