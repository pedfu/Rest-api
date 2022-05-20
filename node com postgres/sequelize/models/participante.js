const sequelize = require("../_database");
const Sequelize = require("sequelize");

const Participante = sequelize.define("participante", {
    nome: {
        type: Sequelize.STRING,
    },
})
module.exports = Participante;

const Evento = require("./evento");
Participante.belongsToMany(Evento, {through: 'evento_participante'})