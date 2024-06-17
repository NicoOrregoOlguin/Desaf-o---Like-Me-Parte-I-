import pkg from 'pg';
const { Pool } = pkg;

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: '1234',  // Cambia esta línea si tu contraseña es diferente
  port: 5432,
});

export default pool;
