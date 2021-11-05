
const express = require('express')
const morgan = require('morgan')
const app = express()
 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(morgan('tiny'))

const PORT = 8081



// Custom Middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
//     next();
// })

// app.get('/home', (req, res) => {
    //     res.send('get request')
    // })
    
    app.post('/home', (req, res) => {
        res.json({javascript: 'asdываываыasd',  body: req.body})
    })

// app.delete('/home', (req, res) => {
//     res.send('delete reuest')
// })

// app.use((req, res) => {
//     res.status(500).json({javascript: 'asdasd'})
// })

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error at a server launch', err);
    }
    console.log(`Server work at port ${PORT}`);
})