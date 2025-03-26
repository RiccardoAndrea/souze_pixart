//--> RESTITUISCE IL PERCORSO DEL FILE IN CUI RICHIAMIAMO LA FINZIONE
//console.log("prova: ",__dirname)

//--> RESTITUISCE IL PERCORSO DEL FILE RICHIAMATO
//console.log("prova: ",__filename)

//--> CONSENTE DI RICHIAMARE ALTRI MODULI
//console.log("prova: ",__require)

//--> MODULO CON SUI STIAMO LAVORANDO
//console.log("prova: ", module)

//-->COSTANTI PER CAPIRE SE STIAMO PARTENDO IL NOSRO BACK-END IN LOCALE OPPURE ONLINE
//console.log("prova: ", process)



//--> PRENDIAMO LA FUNZIONE SALUTA ESPORTATA DA UN MODULO ESTERNO
/*const saluta = require('./utils');

//--> RICHIAMARE VARIABILI DEFINITE IN UN MODULO ESTERNO
const nomi = require('./var');
saluta(nomi.persona1);*/

//--> MODULO IMPORTATO DI NODEJS
//const os = require('os');

//-->RESTITUISCE INFO SULL'UTENTE COME USERNAME E HOMEDIR
//console.log(os.userInfo());

//--> RESTITUISCE DA QUANTO TEMPO E' ACCESO IL COMPUTER IN SECONDI
//console.log(os.uptime());

//--> un oggetto di funzioni os
/*const prova = {
    nome : os.type(),
    release : os.release(),
    memoria : os.totalmem(),
    disponibile: os.freemem()
}
console.log(prova);*/ 


//--> RESTITUISCE IL SEPARATORE UTILIZZATO DAL SISTEMA IN WINDOWS BACKSLASH
/*const path = require('path');
console.log(path.sep); 
*/

//--> RESTITUISCE PERCORSO SCRITTO IN JOIN
/*const path= require('path');
const percorso=path.join('/porcanna','la','madonna.txt');--> è un percorso relativo
console.log(percorso);*/ 

//--> RESTITUISCE IL NOME DEL FILE IN QUESTO CASO madonna.txt
//console.log(path.basename(percorso)) 

//--> RESTITUISCE PERCORSO ASSOLUTO
/*const path = ('path');
const percorsoassoluto = path.resolve(__dirname,'cartella','sotto-cartella','prova.txt');
*/

//-->LEGGO E SCRIVO UN FILE IN MODO SINCRONO
/*const {readFileSync, writeFileSync}=require('fs');
const prova = readFileSync('./testocasuale.txt','utf8');
writeFileSync('./testocasuale.txt',' SONO RIUSCITO A SCRIVERE', {flag: 'a'});*/

//-->LEGGO E SCRIVO UN FILE IN MODO ASINCRONO
/*const {readFile, writeFile}=require('fs');
const prova = readFile('./testocasuale.txt','utf8', (error, result)=>{
    if(error){
        console.log('Errore');
        return;
    }
    console.log(result);
});

writeFile('./testocasuale.txt','SCRIVO IN MODO ASINCRONO', {flag: 'a'},(error, result)=>{
    if(error){
        console.log('Errore');
        return;
    }
    console.log(result);
    console.log('Ho finit0');
});
console.log('passo al prossimo compito');
*/

//--> web sever sempre online in ascolto
/*const http = require('http');
const server = http.createServer((req,res)=>{
res.write("Benvenuto");
res.end();
})
server.listen(3000)
DUNQUE POSSIAMO REINDIRIZZARE CONTROLLI  GRAZIE A REQ.URL 
ALLA PAGE GIUSTA E MOSTRARE GRAZIE A RES.END CIO' CHE CI SERVE
*/

//ABBIAMO INSTALLATO ATTARVERSO IL COMANDO NPM INIT IL PACKAGE JSON E POI IMPORTATO LODASH CON NPM I LODASH
/*const _ = require('lodash')
const oggetti = [1,[2,[3,[4]]]]
const oggetti2 = _.flatMapDeep(oggetti)
console.log(oggetti2)*/
//AVEVAMO UN ARRAY DI 4 DIMENSIONE ADESSO GRAZIE A LODASH CI HA TRASFORMATO IN UN ARRAY MONO-DIMENSIONALE
/*
// RICHIEDIAMO IL MODULO EVENTS E IMPORTIAMOLO
const EventEmitter= require('events');
// CREIAMO CON NEW UN OGGETTO EVENT_EMITTER IMPORTATO PRECEDENTEMENTE ESEGUITO IN MANIERA ASINCRONA
const customEmitter = new EventEmitter();
// RICHIAMAMO ON ALL'EVENTO E DECIDIAMO COSA DEVE FARE 
customEmitter.on('messaggio',(nome,anno)=>{
    console.log(`ciao sono ${nome} e sono nato il ${anno}`);
})

customEmitter.on('messaggio',(nome)=>{
    console.log('Ciao',nome);
})
// LANCIAMO L'EVENTO DEFINITO PRIMA
customEmitter.emit('messaggio','edoardo',1999);// POSSIAMO AGGIUNGERE èARAMETRI ALLA CALL BACK E PASSARGLIELI DA QUI
console.log('MI CHIAMO RICCARDO E STO FACENDO ALTRO');*/

//CODICE ESXPRESS VISIBILE DALLA PAGINA EXPRESS

/*const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/about',(req,res)=>{
    res.send(`<h1>Ciao</h1>`);
})
app.all('*',(req, res)=>{
    res.send(`<h1>ERRORE</h1>`);
})
app.listen(3000);*/


//RESTITUIRE UN JSON 
/*app.get('/json',(req,res)=>{
    dati_presi=require('./config/passport-setup.js');
    res.json(dati_presi);
    console.log("I DATI SONO:",dati_presi);
    
})*/

//PASSARE PARAMETRI AD APP.GET
/*
const express = require('express');
const app = express();
const p = require('./var')
app.get('/',(req,res)=>{
    res.send('ciao');
})

app.get('/var/:id',(req,res)=>{
    console.log('ESEMPIO:',req.params)
    const {id}=req.params;
    const persona = p.find((persona)=>persona.id===id)
    res.json(persona);
    if(!persona){
        return.res.status(404).json(404);
    }
    
})

app.listen(3000);
*/


const express = require('express');
const app = express();
// middleware si frappone tra richiesta e risposta con il terzo parametro next e la chiamata alla sua funzione restituisce la risposta.
//per madarci alla risposta del nostro end point necessitiamo del next o rimane bloccato nel middleware
//ovviamente è possibile decidere la risposta anche con res.send tuttavia next e fondamentale per andare oltre in tutte le pagine.
//POSSIAMO INSERIRE MIDDLE IN UN FILE ESTERNO ESPORTARLO E UTILIZZARLO CON APP USE, INOLTRE POSSIAMO ELENCARE ANCHE DI UTILIZZARLO SOLO A TUTTI I '/PERSONE'
// esempio: app.use('/persone',middlewareprova)-> tutte le app.get che hanno /persone come percorso iniziale utilizzano middle
// con un array di middle in app use e possibile includere piu middle
// se vogliamo utilizzare per uno specifico root il middle basta non utilizzare app use ed includerlo passandolo come parametro


const middlewareProva=require('./middleware');
const autorizzazione=require('./autorizzazione');
//app.use([middlewareProva,autorizzazione]);
app.use(middlewareProva);

app.get('/', (req,res)=>{
    res.send('HOMEPAGE');
})

app.get('/about', (req,res)=>{
    res.send('ABOUT');
})

app.get('/areaprivata', autorizzazione, (req,res)=>{
    res.send('Area privata');
})
app.listen(3000);