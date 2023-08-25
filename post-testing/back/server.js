const express = require("express");
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.post('/sendForm', (req, res) => {
    console.log(req.body);
    res.send("Oh Hi Mark!");
    res.end();
});

app.listen(3001, () => {
    console.log(`Server Running! Port: 3001`);
});