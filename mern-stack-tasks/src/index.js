const express=require('express'); //framework de nodejs
const morgan=require('morgan');  // permite ver las peticiciones del cliente
const path= require('path');  //para saber la ruta de los archivos

const { Mongoose } =require('./database');
const app= express();
//apuntes
/*  
https://www.youtube.com/watch?v=DqpL5UtJHus&t=2596s
el codigo react al final se convierte en javascript mediante el webpack
se crea una carpeta en cualquier parte de la computadora
se abre el vs code , se jala al centro la carpeta para que se coloque en el vscode
se crean las carpetas src --> app, models, public, routes. 
se crean los archivos src--> index.js, src-->database.js, models-->task.js, routes--> task.routes.js, public--> index.html
luego abrimos una consola integrada al proyecto con CTrl + Shif + P y tipeamos terminal integrado
lo primero que hacemos es inicialiar el proyecto, en la consolo se tipea npm init --yes
ese comando crea el archivo package.json
luego instalamos el express con el comando 
npm install express   
Express es el framework de nodejs, tiene un grado de calidad alto
En el package.json en la seccion de script creamos una linea para que cuando iniciemos el server solo llamar a npm start y no node src/index.js
 "start": "node src/index.js"
Entonces ahora para iniciar el servser se hace con npm start 
se instala nodemon para que reinicialice en automatico el server cada vez que guardamos un cambio
el -D es para que lo instale como modo de Dependencia de desarrollo pero no de la aplicacion para su ejecucion
npm install nodemon -D 
se crea en el package.json una linea "dev": "nodemon src/index.js" para que sea llamado por la consola
cuando queremos llamar al scritp se coloca 
npm run dev
cuando quermos llamar a start, en la consoloca colocamos
npm start 
Todo llada a un script que no sea start se llama con run
-se configura el puerto como parametro
-se instala morgan permite ver por consola las peticiones del cliente (npm install morgan)
-se instala mongoose  permite conectanos a la base datos y al mismotiempo definri como a lucir los datos dentro de la base datos
-configuramos el archivo database.js con el URL .. es necesario monitorear consola de mongo db para asegurarnos que la bd este inicializada
-luego se configura los modelos a usar en el archivo task.js
*/ 
//settings 
app.set('port', process.env.PORT | 4000); //cuando se migra a la nube no se puede definir el puerto y se toma el que esta configurado en el servicio


//middlewares   funciones que se ejecutan antes que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json()); // react envia datos arreglos en formato json, necesitamos decirle ue entienda esa data, cada vez que llega pasa por esta funcion para comprobar si es json

//Routes  rutas de navegacion, le agregamos al comienzo el prefijo donde queramos que apunte. puede ser cualquier nombre que deseemos
app.use('/api/tasks',require('./routes/task.routes'));

//statics files   --> esta seccion es lo que se envia al cliente es la UI
//le indica a expres donde se ubican los archivos
//express.static por defecto encuentra la carpeta public pero como esta dentro del src le tenemos que enviar la ubicacion correcta usando el modulo path
//path.join para concatenar sin tener problemas en windows o linux , multiplataforma
app.use(express.static(path.join(__dirname,'public')));//le indicamos que carpeta se enviara

//console.log(__dirname + '/public'); //nodejs nos da la constante _dirname
//console.log(path.join(__dirname,'public')); //es la forma correcta de definir la ruta de los archivos estadicos


//starting server
/*
app.listen(4001,()=>{
    console.log('servidor inicializado en puerto 4001');
});
*/
// se usan las tildes de javascript
app.listen(app.get('port'),()=>{ 
    console.log(`server on port ${app.get('port')}`);
});
