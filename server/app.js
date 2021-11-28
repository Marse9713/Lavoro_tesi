//import the necessary functions
const express = require("express");
const bp = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

//adding use bodyparser and cors to the application
app.use(bp.urlencoded({ extended: true }));
app.use(cors({ origin:"http://localhost:5500"}));

//creation of the connection with mysql server
//caricamento delle config
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'marseroot',
  database : 'database_progetto'
});
//config end

//get all clients
app.get("/clienti", (req, res) => {

    let allQuery = 'CALL all_clients'; //get all_clients function in mysql
    let query = mysql.format(allQuery);

    pool.query(query, (err, rows) => {

        if(err){

            res.status(err);
            res.json({message: err.message})

        }

        res.send(rows);
            
    });
});

//get single cliente by id
app.get("/clienti/:id", (req, res) => {

    var id = (req.params['id']).substr(1, 5);

    let selectQuery = 'CALL select_id(?)'; //get selected_client (by:id) function in mysql
    let query = mysql.format(selectQuery, [id]);
        
    pool.query(query, (err, rows) => {

        if(err){
            
            res.status(err);
            res.json({message: err.message})

        }
        res.send(rows);

    });

});

//create new client
app.post("/clienti", (req,res) =>{

    console.log(req.body);

    let insertQuery = 'CALL insert_client(?,?,?,?,?,?)'; //post insert_client function in mysql
    let query = mysql.format(insertQuery, [req.body.nome,req.body.cognome,req.body.n_cellulare,req.body.n_casa,req.body.email_c,req.body.note]);
    pool.query(query,(err) => {

        if(err) {

            res.status(err);
            res.json({message: err.message})

        };

        res.send("Aggiunto cliente");

    });
});

//delete cliente by id
app.delete("/delete/:id", (req, res) => {

    let delQuery = "CALL delete_client(?)";
    let query = mysql.format(delQuery,[req.body.id]);

    pool.query(query,(err) => {

        if(err) {

            res.status(err);
            res.json({message: err.message})

        };

        res.send("Cliente eliminato");

    });
});

//update cliente by id
app.put("/update/:id", (req, res) => {

    var id = (req.params['id']).substr(1, 5);

    let updateQuery = 'CALL update_cliente(?, ?, ?, ?, ?, ?, ?)'; //put update_client function in mysql
    let query = mysql.format(updateQuery,[id, req.body.nome,req.body.cognome,req.body.n_cellulare,req.body.n_casa,req.body.email,req.body.note]);

    pool.query(query,(err) => {

        if(err) {

            res.status(err);
            res.json({message: err.message})

        };
        res.send("Modifica effettuata con successo");

    });
});

//get all bills
app.get("/fatture", (req, res) => {

    let billQuery = 'CALL all_fatture';
    let query = mysql.format(billQuery);

    pool.query(query, (err, rows) => {

        if(err){

            res.status(err);
            res.json({message: err.message});

        }

        res.send(rows);

    });


});

//listening port on 5000 for debugging
app.listen(5000, () => {
    console.log('Server is running at port 5000');
});