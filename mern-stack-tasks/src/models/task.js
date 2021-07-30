
//guardamos en una constante moongose
const mongose = require('mongoose');

//pero solo requerimos el esquema de mongoose
const {Schema} = mongose;

//guardamos en una constante el schema que vamos a crear y poder reutilizarlo luego
const TasksSchema=  new Schema ({
        tittle : {type :String, required :true},
        description : { type :String, required :true}
});

//pero lo que necesitamos es un modelo para poder reutilizarlo, pero tenemos que exportarlo para poder reutilizarlo
//de esta forma le pasamos el objeto cuando desde algun otro archivo se le llame
//en este ejemplo se le llamara desde el arhivo task.router.js
module.exports= mongose.model('Task', TasksSchema);