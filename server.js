const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.listen(1234, () => {
    console.log('Server started on http://localhost:1234');
});