const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/test', (req, res) => res.send('test route'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));