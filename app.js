const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/maciel'
mongoose.connect(url_db)
.then (()=>{
    console.log('Conexion exitosa')
})
.catch((err)=>{
    console.log('Conexion fallida')
})

const esquema_maestros=new mongoose.Schema({
name:{
    type:String
},
last_name:{
    type:String
},
apepate:{
    type:String
},
number:{
    type:Number
}
})
const maestros=new mongoose.model('Tabla de maestros',esquema_maestros)

maestros.create(
{
    name:'Jorge',
    last_name:'Alejandro',
    apepate:'Wong',
    number: 4491953728
}
)