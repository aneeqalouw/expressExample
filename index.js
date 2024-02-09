import express from 'express'

//create an express app
const app = express()
const port = +process.env.PORT || 4000

//setting up router
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'Ayo'
    })
})

app.get('/about', (req,res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About ayo'
    })
})

app.all('*', (req,res)=>{
    res.json({
        status: 404,
        msg: '404 ayo'
    })
})
app.listen(port) 
