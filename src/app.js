//Load express 

const express = require('express');
const path =require('path');
const hbs = require('hbs');

const app = express();

const templates = path.join(__dirname,'../views')

app.set('view engine','hbs')
app.set('views',templates)
const partials = path.join(__dirname,'../views/partials' );
console.log(partials)
hbs.registerPartials(partials)
app.get('',(req,res)=>{
    // res.render('index',{message:'Frequently'});
    console.log(app.get('views'))
    res.render('index',{message:'this is the message file'})
})

app.get('/help',(req,res)=>{
  
    res.send("drone")
    
})

app.get('/about',(req,res)=>{
   
   res.send([
       {array:'array1'},
       {array2:'array2'}
   ])
})

app.get('/weather',(req,res)=>{
    res.send({
        latitude:'latitude',
        longitude:'longitude'
    })
})

app.get('*',(req,res)=>{
    // res.setHeader("accept-encoding","json")
    res.send('Error !!')
  
    
})


app.listen(3000,()=>{
 
  
    console.log('Server has started at 3000')
})


