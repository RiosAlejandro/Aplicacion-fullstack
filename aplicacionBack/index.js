const express = require('express');
const router = require('./router/indexRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

const port = 7000;

app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});
