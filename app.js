require("dotenv/config")
const express = require("express")
const rotaLivro = require("./routes/livros")
const rotaFavorito = require("./routes/favoritos")
const cors = require("cors")

const db = require("./conexoes/dbConect.js");

db()
const app = express()

app.use(express.json()) // para o express aceitar requisicoes JSON
app.use(cors({ origin: "*" }))


app.use("/livros", rotaLivro)
app.use('/favoritos', rotaFavorito)

const porta = 8000

app.listen(porta, () => {
    console.log(`escutando na porta ${porta}`)
})

