const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Insha Allah, i will be a Full stack Developer one day.')
});
const users = [
    { id: 1, name: "eru", adress: "bd" },
    { id: 2, name: "hru", adress: "bd" },
    { id: 3, name: "emou", adress: "bd" },
    { id: 4, name: "tusau", adress: "bd" },
    { id: 5, name: "rahul", adress: "bd" },
    { id: 6, name: "caenii", adress: "bd" },
]



app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port)
});