import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "roundhouse.proxy.rlwy.net",
  user: "root",
  password: "aozhMSJIJOoxpGOymAUOkUPvljsLFiFU",
  database: "railway",
  port: 19333,
  connectTimeout: 20000
});

export function conectar(){
  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a la base de datos: ", err);
      return;
    }
    console.log('conectado :)');
  });
}
export function desconectar(){
  connection.end((err) => {
    if (err) {
      console.error("Error al cerrar la conexión a la base de datos:", err.message);
      return;
    }
    console.log('Conexión cerrada correctamente');
  });
}

//module.exports={conectar, desconectar,connection};