const express = require('express');
const app = express();
const port = 8080;
const db = require('./connection/connection');
const userRouter =require('./routes/user');
const productRouter =require('./routes/product');
const SignupRouter =require('./routes/signup');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

userRouter(app);
productRouter(app);
SignupRouter(app);

app.listen(port, () => {
    console.log(`server started at ${port}`)
})