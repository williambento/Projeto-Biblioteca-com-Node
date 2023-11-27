const express = require("express")
const rotaLivro = require("./routes/livros")

const app = express()

app.use(express.json()) // para o express aceitar requisicoes JSON
app.use("/livros", rotaLivro)

const porta = 8000

app.listen(porta, () => {
    console.log(`escutando na porta ${porta}`)
})