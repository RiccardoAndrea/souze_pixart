const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');

function dati_google(nome, cognome, email){
    
    this.nome= nome;
    this.cognome= cognome;
    this.email= email;
};

let dati_presi = new dati_google();

//questo serve a recuperare l'informazione da mandare al cookie
//per mantenere la sessione dell'utente
//nel nostro caso il cookie riceve solo l'email
//è necessario utilizzare un cookie in moda tale da poter criptare
//la chiave con il quale viene utilizzato
passport.serializeUser((email,done) =>{ 
    done(null,email)
});


//necessario per andare avanti, serve a ritornare le informazioni dell'utente dalla mail se necessario
passport.deserializeUser((email,done) =>{ 
    done(null,email)
});


passport.use(
    new GoogleStrategy({ 
        //google strategies prende come parametro gli oggetti le strategy
        //nel nostro caso client id e client secret sono creati dalla
        //google api console e urlcallback è l'url settato
        //dove deve ritornare dopo il login
        callbackURL:'/auth/google/redirect',
        clientID:'1023726762526-lg0365jdc0kh34aa7vl3lc19a3dqec6f.apps.googleusercontent.com',
        clientSecret:'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'
    //la funzione richiede 4parametri
    //1 il accesstoken che ci viene restituito da google
    //2 il refresctoken, aggiorna il token se spariche
    //3 le informazioni di profilo
    //4 errore di chiamata
    },(accessToken,refrescToken,profile,done)=>{
        dati_presi.nome = profile.name.givenName;
        dati_presi.cognome = profile.name.familyName;
        email = profile.emails[0]
        dati_presi.email = email.value
        console.log('sono nome',dati_presi.nome)
        console.log('sono cognome',dati_presi.cognome)
        console.log('sono email',dati_presi.email)

        module.exports=(dati_presi)
        //done in questo caso ci fa passare al prossimo step
        //email in questo momento ancora non è pronta per essere passata ma devo ancora finirla di estrarre
        //NON C'è CONTROLLO SUL DB IN QUANTO NON RIESCO AD ENTRARCI
        


        done(null,dati_presi)
          //in questa parte di codice scriviamo la funzione che passport
          //deve eseguire con i dati di callback
          //questa funzione parte nel momento in cui l'utente preme
          //sul suo account di google
      

    }
))

passport.use(
    new FacebookStrategy({
        clientID : "566157304949561",
        clientSecret: "f2bf1c1383605d7a09665e5a9abbf79e",
        callbackURL: "/auth/facebook/redirect",
        profileFields: ['id','displayName','name','gender','email']
    },(token, refrescToken, profile,done)=>{
         console.log(profile);
         dati_presi.nome = profile.name.familyName;
         dati_presi.cognome = profile.name.givenName;
         email = profile.emails[0];
         dati_presi.email = email.value
         console.log('sono nome', dati_presi.nome)
         console.log('sono cognome',dati_presi.cognome)
         console.log('sono email',dati_presi.email)
         done(null,dati_presi)


    }
))


