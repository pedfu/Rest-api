const db = require('./_database');

async function listData() {
    await db.connect();

    var result;

    result = await db.query("SELECT * FROM evento");
    console.log("EVENTOS: ");
    console.log(result.rows);

    result = await db.query("SELECT * FROM participante ORDER BY id");
    console.log("PARTICIPANTE: ");
    console.log(result.rows);

    result = await db.query("SELECT * FROM evento_participante");
    console.log("EVENTO PARTICIPANTE: ");
    console.log(result.rows);

    await db.end();
}

listData();