export interface personal {
    id?:number;
    nombre:string;
    direccion:string;
    telefono:string;
    estatus:string;
}
export type personalNuevo= Omit<personal,'id'>;