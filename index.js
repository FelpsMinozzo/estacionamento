const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const placasModel = require('./model/placasModel');
const userModel = require('./model/UserModel');

app.use('/', placasModel);
app.use('/usuario', userModel);

app.listen(3000, () => {
    console.log("Tá rodando, amigo!");
});
