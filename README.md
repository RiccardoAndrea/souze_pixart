# SouzePixart

## Autori
- **Riccardo Andrea Spinosa**
- **Alessandro Massadoro**

## Descrizione  
**SouzePixart** è un progetto sviluppato nell'ambito del corso di laurea in **Informatica** presso l'Università degli Studi di Napoli Parthenope.  
L'obiettivo è la realizzazione di un **e-commerce simulato**, in cui alcuni dati vengono raccolti tramite **web scraping**.  
L'applicazione è strutturata in modo modulare, con un **backend in Node.js**, un **server Flask in Python** per il recupero dei dati e un **database Oracle** per la gestione delle informazioni.  

L'utente può esplorare il catalogo, visualizzare prodotti e ottenere informazioni dettagliate, con un sistema che sfrutta API personalizzate per aggiornare dinamicamente i dati.  

## Tecnologie Utilizzate  
Il progetto utilizza le seguenti tecnologie:  

- **Node.js**: Per la gestione del backend dell'applicazione web.  
- **Express.js**: Framework per semplificare la gestione delle richieste HTTP nel backend.  
- **Python & Flask**:  
  - Utilizzati per il modulo di **web scraping**, che raccoglie dati da siti esterni.  
  - Flask fornisce API per rendere accessibili i dati al frontend.  
- **Oracle Database**:  
  - Gestisce le informazioni sui prodotti e sugli utenti.  
  - Il database è stato progettato con **funzioni e stored procedure** per garantire sicurezza ed efficienza.  
- **Bootstrap**: Per lo stile e il layout dell'interfaccia utente.  
- **JavaScript & AJAX**: Per aggiornamenti dinamici senza ricaricare la pagina.  

## Requisiti  
Per eseguire il progetto, è necessario installare:

- **Node.js**: Scaricabile da [Node.js Official Website](https://nodejs.org/)  
- **Python**: Scaricabile da [Python Official Website](https://www.python.org/)  
- **Oracle Localhost Database**:  
  - Installabile seguendo la guida ufficiale:  
    [Guida all'installazione](https://docs.oracle.com/en/database/oracle/oracle-database/21/xeinw/installation-guide.html#GUID-C3C5B05A-3BEB-4373-96D0-80BBADFBD6A4)  
  - Il database deve essere configurato seguendo questo documento:  
    Schema del Database reperibile nella documentazione della cartella:
    Questo file contiene le **CREATE TABLE**, le **funzioni** e le **procedure** necessarie.  

- **Flask e dipendenze Python**:  
  - È stata caricata la cartella **venv**, per una configurazione più semplice.  
  - Se non utilizzi il **venv**, installa i pacchetti con:  
    ```bash
    pip install -r requirements.txt
    ```

## Avvio del Progetto  
Per avviare correttamente il progetto, segui questi passaggi:

1. **Configurare Flask**  
   - Se sei su **Linux/Mac**, esegui:  
     ```bash
     export FLASK_APP=scraping.py
     ```  
   - Se sei su **Windows (CMD)**, esegui:  
     ```bash
     set FLASK_APP=scraping.py
     ```  

2. **Avviare il server Flask**  
   - Dopo aver configurato Flask, avvia il server con:  
     ```bash
     flask run --host=127.0.0.1 --port=3000
     ```

3. **Avviare il backend Node.js**  
   - Esegui il file **app.js** con il comando:  
     ```bash
     node app
     ```

4. **Accedere all'applicazione**  
   - Dopo questi passaggi, il sito sarà attivo e accessibile via **localhost** dal browser.  

## Note Finali  
Ricorda che questo è solo un **prototipo**, alcune funzionalità potrebbero non essere state completate.  

**Il progetto è open-source e liberamente utilizzabile!**
