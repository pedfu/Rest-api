const models = require("./models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

async function select() {

    const eventosComParticipantes = await models.evento.findAll({
        where: {
            nome: {
                [Op.like]: "%Node%"
            }
        },
        include: [{
            model: models.participante,
            where: {
                nome: {
                    [Op.notLike]: "%n%"
                }
            }
        }]
    });

    eventosComParticipantes.forEach((evento) => {
        console.log("Evento: " + evento.nome);
        evento.participantes.forEach((participante) => {
            console.log("Participante: " + participante.nome);
        })
    })

    await models.sequelize.close();
}

select();