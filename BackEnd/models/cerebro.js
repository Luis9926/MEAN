var mongoose = require('mongoose');
var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        enum: ["Chicharron", "Vainilla"],
        required: ["Escoja un sabor valido"]
    },
    description: {
        type: String,
        minlength: [6, "La descripcion es muy corta"],
        maxlength: [20, "La descripcion es muy larga"]
    },
    iq: {
        type: Number,
        required: "Indique un iq valido"
    },
    picture: {
        type: String
    }
});
var cerebro = mongoose.model("cerebro", modelSchema);
module.exports = cerebro;