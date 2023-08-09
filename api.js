
const client = require('./connection.js')
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

app.get('/proveedores', (req, res)=>{
    client.query(`Select * from proveedores`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/proveedores/:id', (req, res)=>{
    client.query(`Select * from proveedores where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/proveedores', (req, res)=> {
    const proveedores = req.body;
    console.log('Insert Query:', proveedores);
    
    let insertQuery = `INSERT INTO proveedores(nombre, ruc, direccion, ciudad, email, plazoentrega)
        VALUES( '${proveedores.nombre}', ${proveedores.ruc}, '${proveedores.direccion}', '${proveedores.ciudad}', '${proveedores.email}', '${proveedores.plazoentrega}')`
        console.log('Insert Query:', insertQuery); // Add this line for logging
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


client.connect();

