import mysql from 'mysql2'



export async function callProducts(query: string, data: []) {

    try {

        const db = await mysql.createConnection({

            host: "127.0.0.1",

            port: 3306,
            // port: process.env.MYSQL_PORT,

            database: "homstel_db",

            user: 'root',

            password: 'Costero23#'

        })

        const result = await db.execute(query, data);

        await db.end();

        console.log("caalled db with results", result);

        return result;

    } catch (error) {

        console.log(error);

        return error;

    }

}