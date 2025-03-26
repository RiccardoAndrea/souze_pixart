const reg = require('express').Router();
const bodyParser=require('body-parser');
reg.use(bodyParser.urlencoded({ extended: false }));
reg.post('/accesso',(req,res)=>{
    console.log('RICHIESTA RICEVUTA');
    console.log(req.body);
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.cognome);
    console.log(req.body.password);
    console.log(req.body.telefono);
    res.redirect('/');
})


module.exports=reg;