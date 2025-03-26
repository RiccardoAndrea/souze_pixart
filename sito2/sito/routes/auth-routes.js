const router = require('express').Router();
const passport = require('passport');
//router è un instanza router (per i percorsi) che possiamo esportare


//return al login con goole
router.get('/login',(req,res)=>{
   res.render('login')
});

//return al login con google
//sarà passport ad interfacciarsi con google
//con il parametro google lo reinderiziamo alla schermata di google

//IN QUESO PUNTO OTTENIAMO IL CODICE NECESSARIO PER LEGGERE I DATI
router.get('/google',passport.authenticate('google',{
    scope:['profile email']
}));

//pagina di logout

router.get('/logout',(red,res)=>{
        //gestito con passport
    res.send('logout con successo')
})


//chiamata indietro di google
//IN QUESTO PUNTO ABBIAMO GIA' IL CODICE NECESSARIO PER LEGGERE I DATI
// E LI LEGGIAMO
router.get('/google/redirect',passport.authenticate('google'),(req,res) =>{
    res.redirect('/');
    
})
router.get('/facebook',passport.authenticate('facebook',{
    scope:['email']
}));

router.get('/facebook/redirect',passport.authenticate('facebook'),(req,res) =>{
    res.redirect('/');
})
module.exports = router;

