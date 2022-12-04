const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
const port = process.env.port || 5000;

const doctors = require('./data/doctors.json');

app.get("/", (req, res) => {
    res.send('Im ApI And IM running')
})

app.get("/doctors", (req, res) => {
    res.send(doctors)
})

app.get('/doctors/:id', (req, res) => {
    const id = req.params.id
    const currentDoctor = doctors.find(d => d.id === id)
    res.send(currentDoctor)
})

app.listen(port, () => { console.log('port is running', port) })
