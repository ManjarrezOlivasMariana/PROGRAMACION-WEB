import { z } from "zod";
//validacion con Zod - construir un schema
export const personalSchema = z.object({
    nombre: z.string().min(2, 'minimo 2 caracteres').max(200, 'máximo 200 caracteres'),
    direccion: z.string().min(2).max(300),
    telefoono: z.string().min(10).max(15),
    estatus: z.number('solo numeros').int().positive('solo numeros positivos').min(1).max(2),
});
