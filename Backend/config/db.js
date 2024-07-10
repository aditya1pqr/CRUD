const mongoose = require("mongoose")

const connnetToDB = ()=>{

mongoose.connect(process.env.MONGO_URI).then((conn)=>{
    console.log(`connected to DB: ${conn.connection.host}`)
}).catch((error)=>{
    console.log(error.message)
}
)

}
 module.exports = connnetToDB;