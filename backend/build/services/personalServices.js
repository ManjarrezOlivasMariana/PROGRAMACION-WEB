import mysql from 'mysql2/promise';
import { error } from 'console';
import { personalSchema } from '../Schema/personal.Schema.js';
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "pw12001300"
});
export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal");
        return results;
    }
    catch (error) {
        return { error: "no se puede obtener la lista de resulltados" };
    }
};
export const encuentraPersonal = async (id) => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal WHERE id=? LIMIT 1", [id]);
        return results;
    }
    catch (error) {
        return { error: "no se puede obtener la lista de resulltados" };
    }
};
export const agregaPersonal = async (nuevo) => {
    try {
        const validacion = personalSchema.safeParse(nuevo);
        if (!validacion.success) {
            return { error: validacion.error };
        }
        const [results] = await conexion.query("INSERT INTO personal (nombre,direccion,telefono,estatus) VALUES (?,?,?,?)", [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    }
    catch (error) {
        return { error: "no se puede agregar el personal" };
    }
};
