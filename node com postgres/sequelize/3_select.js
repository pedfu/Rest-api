const { participante } = require("./models");
const models = require("./models");

async function select() {
    console.log("\n");

    const eventos = await models.evento.findAll();
    eventos.forEach((evento) => {
        console.log("Evento: " + evento.nome);
    })

    console.log("\n");

    const pariticipantes = await models.participante.findAll();
    pariticipantes.forEach((participante) => {
        console.log("Participante: " + participante.nome);
    })

    console.log("\n");

    const eventosComParticipantes = await models.evento.findAll({
        include: [{
            model: models.participante
        }]
    })
    eventosComParticipantes.forEach((envPart) => {
        console.log("Evento: " + envPart.nome);
        envPart.participantes.forEach((participante) => {
            console.log("-------------------> Participante: " + participante.nome);
        })
    })
    console.log("\n");

    await models.sequelize.close();
}

select();