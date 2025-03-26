let bool=false;
let contp;
let kp=0;
// ARRAY CONTATORE DOVE VENGONO PIAZZATE IL NUMERO DI TUTTE LE OCCORRENZE TROVATE DALLA CHIAVE
let contatore=[0,0,0,0];
// ARRAY CONTENTE TUTTI GLI INDIRIZZI DELLE PAGINE HTML
let array_html=['biglietti-da-visita.html','brochure.html','buste.html','calendari-agende.html','campionario.html','cartelline.html','cartellini.html','cartoline.html','grande-formato.html','materiale-elettorale.html','notes.html','pannelli.html','piccolo-formato.html','promo.html','adesivi.html','striscioni.html'];
// ARRAY CONTENENTE TUTTE LE MACRO CONTENENTI I PRODOTTI
let risultato=["biglietti da visita","brochure","buste","calendari e agende","campionari","cartelline","cartellini","cartoline","grande formato","materiale elettorale","notes","pannelli","piccolo formato","promozioni","sticker","striscioni pubblicitari"];

// ARRAY CONTENENTE CODICE HTML DI CIO' CHE DEVE PRODURRE AL VISITATORE DELLA PAGINA QUANDO DIGITA SULLA TASTIERA NELLA BARRA DI RICERCA
let ris_cerca =[` <div class = "blocco" > 

<br> <br> 
<a href="biglietti-da-visita.html" class="flet" ><img src="immagini/bigliettini_da_sostituire.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>


<span class="color-aqua"> BIGLIETTI DA VISITA </span> <p> 

    
   Sempre caro mi fu quest'ermo colle,
   E questa siepe, che da tanta parte
   Dell'ultimo orizzonte il guardo esclude.
   Ma sedendo e mirando, interminati
   Spazi di là da quella, e sovrumani
   Silenzi, e profondissima quiete
   Io nel pensier mi fingo; ove per poco
   Il cor non si spaura. E come il vento
   </p>
   <br> 
   <br> 
</div>`,` <div class="blocco">
<a href="brochure.html" class="flet" ><img src="immagini/bruchure.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> BROCHURE</span><p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div></p><br> <br>
</div>`,`<div class = "blocco" >
<a href="buste.html" class="flet" ><img src="immagini/bags.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> BUSTE</span> <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div></p> <br> <br>
</div>`,`<div class = "blocco" >
<a href="calendari-agende.html" class="flet" ><img src="immagini/calendari-agende.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>   
    <span class="color-aqua"> CALENDARI E AGENDE</span> <p>
    <div>
       
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div></p><br> <br>
</div>`,`<div class = "blocco" >
<a href="campionario.html" class="flet" ><img src="immagini/campionario.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> CAMPIONARI</span> <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>        </div></p> <br> <br>`,`<div class = "blocco" >
<a href="Cartelline.html" class="flet" ><img src="immagini/cartelline.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>   
    <span class="color-aqua"> CARTELLINE</span> <p>
    <div>
       
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>       </div></p><br> <br>`,`<div class = "blocco" >
<a href="cartellini.html" class="flet" ><img src="immagini/cartellini.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a> 
    <span class="color-aqua"> CARTELLINI</span>   <p>
    <div>
       
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>       </div></p> <br> <br>`,`<div class = "blocco" >
<a href="cartoline.html" class="flet" ><img src="immagini/cartoline.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> CARTOLINE</span> <p>
    <div>
       
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div></p> <br> <br>
</div>`,`<div class = "blocco" >
    <a href="grande-formato.html" class="flet" ><img src="immagini/grande-formato.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> GRANDE FORMATO </span> <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div></p><br> <br>
</div>`,`<div class = "blocco" >
    <a href="materiale-elettorale.html" class="flet" ><img src="immagini/materiale-elettorale.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a> 
    <span class="color-aqua"> MATERIALE ELETTORALE</span> <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
    </div ></p> <br> <br>
</div>`,`<div class = "blocco" >
<a href="notes.html" class="flet" ><img src="immagini/notes.png" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> NOTES </span> <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>       </div></p> <br> <br>`,` <div class = "blocco" >
<a href="pannelli.html" class="flet" ><img src="immagini/pannelli.jpg" alt="" width="150px" height="150px" class="contain w3-round"></a> 
    <span class="color-aqua"> PANNELLI</span>  <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>        </div></p> <br> <br>`,` <div class = "blocco" >
    <a href="piccoloformato.html" class="flet" ><img src="immagini/piccolo-formato.jpg" alt="" width="150px" height="160px" class="contain w3-round "></a> 
    <span class="color-aqua"> PICCOLO FORMATO </span>  <p>
    <div>
        
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>       </div></p><br> <br>`,`<div class = "blocco" >
    <a href="promo.html" class="flet" ><img src="immagini/promozione.png" alt="" width="150px" height="150px" class="contain w3-round "></a> 
    <span class="color-aqua"> PROMOZIONI </span> <p>
    <div>
    
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>      </div></p> <br> <br>`,` <div class = "blocco" >

<a href="adesivi.html" class="flet" ><img src="immagini/stricker-adesivi.jpg" alt="" width="150px" height="150px" class="contain w3-round"></a>   
    <span class="color-aqua"> STRICKER E ADESIVI </span> <p>
    <div>
    
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>            </div></p><br> <br>`,`    <div class = "blocco" >
<a href="striscioni.html" class="flet" ><img src="immagini/striscioni_pubblicitari_da_sostituire.jpg" alt="" width="150px" height="150px" class="contain w3-round "></a>  
    <span class="color-aqua"> STRISCIONI PUBBLICITARI </span>  <p>
    <div>
    
       Sempre caro mi fu quest'ermo colle,
       E questa siepe, che da tanta parte
       Dell'ultimo orizzonte il guardo esclude.
       Ma sedendo e mirando, interminati
       Spazi di là da quella, e sovrumani
       Silenzi, e profondissima quiete
       Io nel pensier mi fingo; ove per poco
       Il cor non si spaura. E come il vento
       
</div>        </div></p> <br> <br>`  ];


// converte in stringa minuscola. per prende valore di input in stringa direttamente basta usae input.target.value
function converti(x){
    let stringa = x.toLowerCase(); 
    return stringa;

       
}

//LA FUNZIONA EFFETTUA UNA RICERCA BINARIA RICORSIVA. SI E'SCELTO QUEST'ALGORITMO PER LA COMPLESSITA' LOGARITMICA RESTITUISCE UN INDICE.
function ricerca(chiave,ax,inizio,fine){
    let mediano;
    let temp; 
    temp =(inizio+fine)/2;
    mediano=Math.floor(temp);
   
    if(chiave==ax[mediano]){
        return mediano;
    }
    else if(inizio>=fine){
        return -1;
    } 

    else if(chiave <ax[mediano])
    {
       fine = mediano;
       return ricerca(chiave,ax,inizio,fine);
    }
    else if(chiave > ax[mediano])
    {
        inizio=mediano+1;
        return ricerca(chiave,ax,inizio,fine);
    }
  
    
}


//LA FUNZIONE ESEGUE UN MATCH E RESTITUISCE UN ARRAY CONTATORE CONTENENTE IL NUMERO DI ITERAZIONE PER OGNI PAROLA DELL'ARRAY DI SRINGHE TROVATE.

function string_matching(chiave,ax){
    let cont,i,j;
    cont=0;
    for(i=0; i<ax.length; i++){
        cont=0;
        for(j=0; j<chiave.length;j++){
            if(chiave[j]==ax[i][j]){
                    cont++;}
            
            
        }
        contatore[i]=cont;
    }
    
    return contatore;
    
        
    }


    // QUESTA FUNZIONE RICHIAMA LE DUE FUNZIONI IMPLEMENTATE SOPRA TIRANDO FUORI UN'ALGORITMO IBRIDO. 
    //SE CHIAVE NON VIENE TROVATA CON ALGORITMO DI RICERCA BINARIA SI RICHIAMA STRINGH MATCHING E NE SI PRELEVA SOLO IL MASSIMO
    
    function binario_matching(){
        let max;
        let size,temp=0;
        let x=ricerca(converti(input.value),risultato,0,risultato.length-1);
        if(x==-1){
            let matching=string_matching(converti(input.value),risultato);
            size=matching.length;
            for (i=0; i<size; i++){
                if(temp<matching[i]){
                    
                    temp=matching[i];
                    max=i;
                    
                }
            }
            
            return max;
        }
        else{
            
            return x;
        }

      
    }

    // OLTRE AL RISULTATO DELLA BARRA DI RICERCA SI EFFETTUA UNA RICERCA ANCHE SULLA LISTA NELL HTML DA NOI IMPLEMENTATA 
    function ricerca_su_lista(){
        //var lista;
        var voci;
        var x;
        var i;
        var testo;
        //lista = document.getElementById("menu");// prendiamo la tabella
        voci = menu.getElementsByTagName("li");// prendiamo i li della tabella

        for (i = 0; i < voci.length; i++) {
            x = menu.getElementsByTagName("li")[i];
            testo = x.textContent || x.innerText; // prendiamo il testo degli elementi e salviamole come stringhe
            if (testo.toLowerCase().indexOf(converti(input.value)) > -1) // prendiamo testo ed input.value e rendiamoli minuscoli indx of fa ricerca
            {
                voci[i].style.display = "";
                
            } 
            else {
                voci[i].style.display = "none";
            }
        }
        
    }
    // QUESTA FUNZIONE E' RICHIAMATA IN ALTRE FUNZIONI PER RESTITUIRE L'INDICE DELLA CHIAMATA DELL'ALGORITMO DI RICERCA BINARIO
    function variabile_ricerca(){
        indice= ricerca(converti(input.value),risultato,0,risultato.length-1);
        return indice;
    }
// nascosto è l'id della parola menu
    function nascondi(nasc){
                            
        if (nasc.matches) { // If media query matches
            
            nascosto.classList.remove('none');
        } else {
            nascosto.classList.add('none');
        }
    }

/*LA FUNZIONE VIENE RICHIAMATA DENTRO UN CICLO FOR 
  ED AGGIORNA CIO' CHE DEVE RESTITUIRE OGNI QUALVOTA L'EVENTO E' RICHIAMATO*/
    function seleziona(array_id,i){
        //let ap=[];
        //ap[0]=bool;
        if(bool===false){
            array_id[i].style.border="1.5px solid #999";
            bool=true;
            contp=i;
            
        }
        else{
            array_id[contp].style.border="none";
            bool=false;
        }
        
    }
  
// MOSTRA A SCHERMO INFORMAZIONI QUANDO L'ICONA INFO VIENE CLICCATA 
function mostra_info(){
    if(!kp){
        kp=1;
        temporaneo.classList.remove('none');
    }
    else{
        temporaneo.classList.add('none');
        kp=0;

    }
}
 
