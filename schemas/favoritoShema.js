const mongoose = require("mongoose")

const favoritoSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    valor: { type: Number},
    paginas: { type: Number}
}, { versionKey: false })

const livro = mongoose.model("favoritos", favoritoSchema);

module.exports = livro
