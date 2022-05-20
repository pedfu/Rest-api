const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "postgres",
    port: 5432,
    dialect: "postgres",
    logging: true,
})

module.exports = sequelize

async function teste() {
    try {
        let result = await sequelize.authenticate();
        console.log("Sequelize realizou a conexao com o banco de dados com sucesso.");
    } catch(error) {
        console.log("Houve um erro.");
        console.log(error);
    }
}

teste();