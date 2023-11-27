const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("dataLivro.json"))
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync("dataLivro.json"))
    const filtrado = livros.filter(livro => livro.id === id)[0]
    return filtrado
}

function insereLivro (livro){
    const livros = JSON.parse(fs.readFileSync("dataLivro.json"))
    const novoData = [ ...livros, livro]
    fs.writeFileSync("dataLivro.json", JSON.stringify(novoData))
}

function modificaLivro (modificacao, id) {
    let livros = JSON.parse(fs.readFileSync("dataLivro.json"))
    const indexModificar = livros.findIndex((livro) => livro.id === id)
    const modificando = { ...livros[indexModificar], ...modificacao }
    livros[indexModificar] = modificando
    fs.writeFileSync("dataLivro.json", JSON.stringify(livros))
}

function deletaLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("dataLivro.json"))
    const livrosNaoDeletados =  livrosAtuais.filter(livro => livro.id !== id)
    fs.writeFileSync("dataLivro.json", JSON.stringify(livrosNaoDeletados))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    modificaLivro,
    deletaLivro
}