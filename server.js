const express = require('express');
var cors = require('cors');
const app = express();

var platos = require('./logica/platos.logica');


app.get('/', (req, res) => res.send('Hello World!'));
app.use(cors());
app.use('/plato',platos);

app.listen(5000, () => console.log('Example app listening on port 3000!'));