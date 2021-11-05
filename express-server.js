
const express = require('express')
const morgan = require('morgan')
const got = require('got');
const app = express()
const {router} = require("./Router")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(morgan('tiny'))
// app.use('/api', router)

const PORT = process.env.PORT || 8081
const baseURL = "http://api.weatherbit.io/v2.0/current/"

app.get('/api/weather', async (req, res) => {
    try {
        const response = await got(baseURL, {searchParams: {
            key: 'node',
            lat: '50.09636106685113',
            lon: '29.55367209692578',
        },
        responseType: 'json'
    });
        responseType: 'json'
        res.json({response: response.body})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Custom Middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
//     next();
// })

// app.get('/home', (req, res) => {
    //     res.send('get request')
    // })
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