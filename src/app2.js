const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const log = console.log;
const geoCode = require('./../utils/geocode');
const getForecast = require('./../utils/forecast');
const request = require('request')
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server is up and listening at 3000')
})

let parials = path.join(__dirname,'./../views/partials')

app.use(express.static(path.join('__dirname','../public')))

app.use(express.json())

app.set('view engine','hbs')
hbs.registerPartials(parials,()=>{
    console.log("partials have benn connected")
})




app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    // res.send('<h1>Drone</h1>')
    res.render('header')
})


app.get('/status',(req,response)=>{
    
    
    geoCode(req.query.search,(error,res)=>{
        console.log(res)
        var url = 'https://api.darksky.net/forecast/919e188f634310a7acdf94702692f9fc/' + res.latitude+ ','  + res.longitude;
        console.log(url)
       request({url:url,headers:{'Content-Type':'application/json'},json:true},(error,res)=>{
           response.send(res.body)
       })
        
    })
    


    
    console.log(req.query.search)
})

//handlebars

//nodemon app2.js -e js,hbs

