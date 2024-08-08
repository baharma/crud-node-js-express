const express = require('express')
const app = express();
const path  = require('path')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views')); // Note 'views' not 'view'
app.set('view engine', 'ejs');


const dataComment = [
    {
        nama:"aditya",
        text:"haiya"
    },
    {
        name:"test",
        text:"cia"
    }
]

app.get('/comments',(req,res)=>{
    res.render('coments/index',{dataComment})
})

app.get('/create',(req,res)=>{
    res.render('coments/create',{dataComment})
})

app.post('/create',(req,res)=>{
    const { nama, text } = req.body;
    dataComment.push({ nama, text });
   res.send('es')
})

app.get('/order',(req,res)=>{
    res.send("get ")
})

app.post('/order',(req,res)=>{
    console.log("res",req.body)
    res.send("get ")
})

app.listen(9000,()=>{
    console.log('listen 9000')
})