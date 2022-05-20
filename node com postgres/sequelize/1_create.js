const models = require("./models");

async function create() {
    await models.sequelize.sync({force: true});
    await models.sequelize.close();

    console.log("Banco sincronizado e tabelas recriadas");
}

create();