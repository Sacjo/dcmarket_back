
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

//LISTAR PROVEEDOR POR ID

app.get('/proveedores/:id', (req, res)=>{
    client.query(`Select * from proveedores where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


// INSERTAR NUEVO PROVEEDOR

app.post('/proveedores', (req, res)=> {
    const proveedores = req.body;
    console.log('REQUEST.BODY:', proveedores);
    
    let insertQuery = `INSERT INTO proveedores(nombre, ruc, direccion, ciudad, email, plazoentrega)
        VALUES( '${proveedores[0].nombre}', ${proveedores[0].ruc}, '${proveedores[0].direccion}', '${proveedores[0].ciudad}', '${proveedores[0].email}', '${proveedores[0].plazoentrega}')`
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

