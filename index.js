const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')


const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs')


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'mail@xyz',
      pass: 'password will be here'
    }
  });
  //written nodemailer for implementing mailing service on sign-up
  // will complete it after fist evaluation of SWOC3 

transporter.verify().then(console.log).catch(console.error);


// mongoose
//   .connect('mongodb://127.0.0.1:27017/sweetGarbage')
//   .then(() => {
//     console.log('MongoDB connected!!')
//   })
//   .catch(err => {
//     console.log('Failed to connect to MongoDB', err)
//   })

  



app.get('/',(req,res)=>{
  
    res.render('home');
    
})
app.get('/sign-up',(req,res)=>{
    res.render('sign-up');
})
app.get('/sign-in',(req,res)=>{
    res.render('sign-in');
})









app.listen(3000,(res)=>{
    console.log("Server Online")
})
