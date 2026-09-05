import express, {} from 'express';
import * as personalServices from '../services/personalServices.js';
//activamos las rutas
const router = express.Router();
//http://localhost:3001/api/personal/
router.get('/', async (_req, res) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
});
//http://localhost:3001/api/personal/1
router.get('/:id', async (req, res) => {
    let idPersona = Number(req.params.id);
    let personal = await personalServices.encuentraPersonal(idPersona);
    res.send(personal);
});
//insertar nuevo personal
router.post('/', async (req, res) => {
    try {
        const { nombre, direccion, telefono, estatus } = req.body;
        const nuevo = await personalServices.agregaPersonal({ nombre, direccion, telefono, estatus });
        res.send(nuevo);
    }
    catch (error) {
        res.status(400).send('Error en datos enviados');
    }
});
export default router;
