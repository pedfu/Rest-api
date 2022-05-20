const db = require('./_database');

async function updateData() {
    await db.connect();

    const queryUpdate = "UPDATE participante SET nome = ($1) WHERE id = ($2)";

    await db.query(queryUpdate, ["Carlos Augusto", 1])

    await db.end();

    console.log("Dados atualizados.");
}

updateData();