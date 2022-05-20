const models = require("./models");

async function insert() {
    const eventoNode = await models.evento.create({nome: "Evento de Node.js"});
    const eventoPostgres = await models.evento.create({nome: "Evento de Postgres"});

    const carlos = await models.participante.create({nome: "Carlos"});
    const augusto = await models.participante.create({nome: "Augusto"});
    const janaina = await models.participante.create({nome: "Janaina"});
    const rafael = await models.participante.create({nome: "Rafael"});

    await eventoNode.setParticipantes([carlos, augusto, janaina], {through: 'evento_participante'});
    await eventoPostgres.setParticipantes([janaina, rafael], {through: 'evento_participante'});

    await models.sequelize.close();

    console.log("Dados inseridos");
}

insert();