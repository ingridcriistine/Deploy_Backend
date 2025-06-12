const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'bs58dc64ewneyt31r7wz-mysql.services.clever-cloud.com',      // ou IP do seu servidor
  user: 'utismrkxvp9ndon9',
  password: 'XMKUidWOvt23IjR0UKaD',
  database: 'bs58dc64ewneyt31r7wz',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS agora');
    console.log('Conectado ao MySQL em:', rows[0].agora);
  } catch (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } finally {
    await pool.end();
  }
}

module.exports = { pool, testConnection };