const sequelize = require("../_database");
const Sequelize = require("sequelize");

const Evento = sequelize.define("evento", {
    nome: {
        type: Sequelize.STRING
    },
})

module.exports = Evento

const Participante = require("./participante");
Evento.belongsToMany(Participante, {through: 'evento_participante'})