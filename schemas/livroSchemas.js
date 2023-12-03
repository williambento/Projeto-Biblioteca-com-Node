const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    valor: { type: Number},
    paginas: { type: Number}
}, { versionKey: false })

const livro = mongoose.model("livros", livroSchema);

module.exports = livro
