const { Pool } = require('pg');
const connectionString =
    'postgres://ovnpmhqwmqiufe:6d0bc8ecf3d40b0f5d0e32a24e990f8f2b8f37009e191789b5d4f566c36df785@ec2-54-163-97-228.compute-1.amazonaws.com:5432/ddvtlgumarrlie';
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = class postgres {
    static init() {
        return pool.query(
            `
                DROP TABLE IF EXISTS SGL_users;
                CREATE TABLE SGL_users (
                    id SERIAL primary key,
                    Name VARCHAR not null
                );
            `,
        );
    }


    static Adduser(Name) {
        return pool.query(
            `
                INSERT INTO SGL_users
                (Name)
                VALUES
                ($1)
            `,
            [Name],
        );
    }

    static GETusers() {
        return pool.query(
            `
                SELECT Name 
                From SGL_users
                WHERE 1 = 1
            `,
            

           
        );
    }

}

