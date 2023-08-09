
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
    client.query(`SELECT id, nombre, ruc, direccion, ciudad, email, plazoentrega, to_char(fecharegistro, 'DD-MM-YYYY HH24:MI') AS fecharegistro FROM proveedores where id=${req.params.id}`, (err, result)=>{
        if(!err){
            if (result.rows.length === 0) {
                res.status(404).send('No encontrado');
            } else {
                res.send(result.rows);
            }
        }else{ console.log(err.message) }
    });
    client.end;
})


// INSERTAR NUEVO PROVEEDOR

app.post('/proveedores', (req, res)=> {
    const proveedores = req.body;
    console.log('REQUEST.BODY:', proveedores);
    
    let insertQuery = `INSERT INTO proveedores(nombre, ruc, direccion, ciudad, email, plazoentrega,fecharegistro)
        VALUES( '${proveedores[0].nombre}', ${proveedores[0].ruc}, '${proveedores[0].direccion}', '${proveedores[0].ciudad}', '${proveedores[0].email}', '${proveedores[0].plazoentrega}', '{${getCurrentTimestamp()}}')`
        console.log('Insert Query:', insertQuery); // Add this line for logging
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertado de forma exitosa')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


//Actualizar Proveedores
app.put('/proveedores/:id', (req, res)=> {
    let proveedores = req.body;
    let updateQuery = `update proveedores
                       set nombre = '${proveedores[0].nombre}',
                       ruc = '${proveedores[0].ruc}',
                       direccion = '${proveedores[0].direccion}',
                       ciudad = '${proveedores[0].ciudad}',
                       email = '${proveedores[0].email}',
                       plazoentrega = '${proveedores[0].plazoentrega}'
                       where id = ${req.params.id}`
                
    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Actualizado de forma exitosa')
        }
        else{ console.log(err.message) }
    })
    client.end;
})



//Eliminar Proveedor
app.delete('/proveedores/:id', (req, res)=> {
    let insertQuery = `delete from proveedores where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            if (result.rows.length === 0) {
                res.status(404).send('No encontrado');
            } else {
                res.send('Eliminado de forma exitosa')
            }
        }
        else{ console.log(err.message) }
    })
    client.end;
})


client.connect();






function getCurrentTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
}