#from requests_html import HTMLSession
import json

from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
import lxml
#pip install -U flask-cors
#from flask_cors import CORS


app = Flask(__name__)
#cors = CORS(app, Access-Control-Allow-Origin: *)

@app.route("/prova")
async def prova():
     print('sono partito')
     URL = "https://www.pixartprinting.it/piccolo-formato/stampa-cartoline-inviti/"
     chrome_options = Options()
     chrome_options.add_argument("--headless") #apre in background
     with Chrome(options=chrome_options) as browser:
      browser.get(URL)
      html = browser.page_source

     soup = BeautifulSoup(html,'html.parser')
     prezzi = soup.find_all("span",{"class":"netto"})
     stringa = ""
     esempio = ""
     fd = open('prezzi.txt', 'w')
     print('ho scritto i prezzi')
     for i in prezzi:
         esempio = esempio+i.text

     esempio = esempio.replace('-',"")
     esempio = esempio+'€'
     print(esempio)
     esempio = json.dumps(esempio)
     return jsonify(esempio)

@app.route("/logingoogle")
def logingoogle():
    return render_template("logingoogle.html")

@app.route("/prova2")
def prova2():
    print('hello')
    return jsonify('hello')



     #r = request.urlopen(URL)
     #genera una sessione html
     #soup = BeautifulSoup(r.read().decode(),"lxml")
     #soup.renderContents()
     #prezzi = soup.find("span",{"class":"netto"})
     # print(prezzi.text)
     #return (prezzi.text)
     #stinga = ""
     #for i in stinga:
        #stinga = stinga+i.text
     #return (stinga)

    #s = HTMLSession()
                         # colleghiamo la sessione alla richiesta
    #r = s.get(URL)
                      # eseguiamo la lettura della pagina
    #r.html.render()

    # first = true ci permette di ritornare solo il primo elemento
    #products = r.html.xpath('//*[@class="netto"]')
    #stringa =""
    #for i in products:
        #stringa = stringa + i.text
    #stringa = stringa.replace("€", "")
    #return jsonify(stringa)

if __name__ == '__main__':
    app.run()





