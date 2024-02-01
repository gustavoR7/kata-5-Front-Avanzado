//codigo para levantar nuestra api en expressJs
//crear un endpoint get en express que devuelva una lista de estudiantes.
//la lista de estudiantes puede ser un arreglo guardado en una variable.
//leer la presentacion con calma

const express = require('express');
const app = express();
const port = 8080;

const estudiantes= [
    {id:1, name:"jose", edad:28 ,carrera:"sistemas"},
    {id:2, name:"gustavo", edad:28 ,carrera:"sistemas"},
    {id:3, name:"axel", edad:27 ,carrera:"administracion"},
    {id:4, name:"sofia", edad:24 ,carrera:"contabilidad"},
    {id:5, name:"camila", edad:25 ,carrera:"derecho"}
];

//localhost
app.get('/', (request,response)=>{
    response.json(estudiantes);
})
app.listen(port, () =>{
    console.log('servidor inciado....');
})