const express = require('express')
const app = express()

const PORT = 8081

app.get('/home', (req, res) => {
    res.sendStatus(200)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error at a server launch', err);
    }
    console.log(`Server work at port ${PORT}`);
})