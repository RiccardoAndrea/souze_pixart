const log = require('express').Router();
const bodyParser=require('body-parser');

log.use(bodyParser.urlencoded({ extended: false }));
log.post('/accesso',(req,res)=>{
    console.log('RICHIESTA RICEVUTA');
    console.log(req.body);
    console.log(req.body.uname);
    console.log(req.body.psw);
    console.log(req.body.remember);
    const oracledb = require('oracledb');
async function run() {

    let connection;

        //try{
            connection = await oracledb.getConnection({ user: "admin", password: "ciaociao", connectionString: "(DESCRIPTION =(ADDRESS =  (PROTOCOL = TCP)(HOST = database-1.ckadziaaikbf.eu-west-2.rds.amazonaws.com)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))" 
            });
  
            console.log("Successfully connected to Oracle Database");
            let result3=await connection.execute('select * from CLIENTE');
            let result =await connection.execute('SELECT EMAIL,PASSWORD FROM CLIENTE WHERE EMAIL =:uname AND PASSWORD =:psw  ',[req.body.uname,req.body.psw]);
            
            console.log('la tabella cliente e:',result3);
            console.log('SONO RESULT',result);
            console.log('SONO rows',result.rows[0][0]);
            console.log('SONO rows',result.rows[0][1]);
            if(result.rows[0][0] && result.rows[0][1]){
                console.log('accesso eseguito');
                res.redirect('/');
            }
            else{
                console.log('nome utente o password errata');
                res.sendFile('Portami_home.html',{root: __dirname});
            }
            
            
            
        //}
        /*catch{
            console.log('SONO NEL ERROR CATCH');
        }*/
}
run();
    
    
    
    
})



module.exports=log;