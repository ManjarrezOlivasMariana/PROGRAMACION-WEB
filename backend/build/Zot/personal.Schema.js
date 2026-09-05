import { z } from "zod";
//validacion con Zod - construir un schema
esport;
const personalSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
});
