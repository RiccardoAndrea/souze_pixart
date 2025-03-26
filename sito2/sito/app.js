const express = require('express');
const pagamenti = require('./routes/payments')

//const oracledb = require('oracledb');
//const dbConfig = require('./config/dbconfig');
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

//importiamo le routes presenti nel file auth-routes
const authRouters = require('./routes/auth-routes')
const app = express();
const passportSetup = require('./config/passport-setup')
const cookieSession = require('cookie-session');
const passport = require('passport')
const dati_google = require('./autorizzazione');
const { response } = require('express');
let dati_presi;
const signup = require('./routes/signup');
const login  = require('./routes/login');
app.use('/signup',signup);
app.use('/login',login);
app.set('view engine', 'ejs');



// questa cosa funziona poihè il cookie viene generato solo quando l'utente effettua il login
app.use(cookieSession({
    //max age è la durata massima del cookie
    // in questo caso 12ore, espresso in millisecondi
    // 12 le ore x minuti x i secondi x i millisecondi in un secondo
   maxAge: 12*60*60*1000,
   //la chiave che utilizziamo per criptare il cookie
   keys: ['dwjdbwjwk']
}))
//ci serve pass port per holdare il cookie lo inizializziamo e lo utilizziamo

app.use('/payment',pagamenti);
app.use(passport.initialize());
app.use(passport.session());
// quando abbiamo /auth allora richiamiamo 
//la route necessaria all'interno di authRoutes
app.use('/auth',authRouters);
app.use(express.json());





// connetto la route principale alla home
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname+"/public"});
})


// PRENDERE DATI GOOGLE
app.get('/json',(req,res)=>{
    dati_presi=require('./config/passport-setup.js');
    res.json(dati_presi);
    console.log("I DATI SONO:",dati_presi);
    
})
pagamenti.get('/carta', (req, res) => {
    res.render('pagamento');
});








app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});

