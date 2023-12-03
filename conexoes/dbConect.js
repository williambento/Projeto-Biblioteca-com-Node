const mongoose = require("mongoose")

async function conectMongo() {
    const uri = process.env.DB_CONECTION
    mongoose.connect(uri);

    const connection = mongoose.connection

    connection.on("error", () => {
        console.error("erro ao conectar no mongoDB")
    })

    connection.on("open", () => {
        console.log("conectado ao mongo db")
    })
}

module.exports = conectMongo
