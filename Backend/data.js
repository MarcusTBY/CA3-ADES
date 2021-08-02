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
                DROP TABLE IF EXISTS magic_number_game_tab;
                CREATE TABLE magic_number_game_tab (
                    id SERIAL primary key,
                    Name VARCHAR not null,
                );
            `,
        );
    }
}