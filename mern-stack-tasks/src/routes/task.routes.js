const express= require('express');
const task = require('../models/task');
const router= express.Router();

//con esta constante solicitamos el modelo que se importa desde la carpeta models
const Task= require('../models/task');
 
//escribimos una ura, ruta inicial
router.get('/',(req,res)=>{

  //para pobrar la conexion y modelo 
  Task.find(function(err, tasks){
    console.log(tasks); //imprimimos en consola las tareas pero devolvera vacio porque no hay datos 
    //si la base y tabla no existe mongodb la crea por nosotros

  });


   // res.send('Hello word');
  //devolvemos en formato json las api
  res.json({
    status:'API WORKS!'
  });
});

module.exports=router;

