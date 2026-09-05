let numeros:number = 0;
numeros = 102;
let arreglosnumeros: number[] = [1,2,3,4];
arreglosnumeros = [1,2,3,4,5,6];
let arreglosstrings: string[];
arreglosstrings = ['cadena','otracadena','algo'];
let decisiones: boolean;
decisiones = false;
let arreglosbooleanos: boolean[];
arreglosbooleanos = [true, false, false];
function info(a:number,b:string,c:boolean,d?:number):void{
    console.log(a+" "+b+" "+c+" "+(d == undefined ? '-' : d));
}
info(1,'cadena',false,100);

enum TipoUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario = {
    nombre:string,tipo:TipoUsuario,autoriza:boolean
}
type UsuarioRedes = Usuario & { //extendiendo el tipo
    ip?:string;
}
function usuarios(usuario: UsuarioRedes):void{
    console.log(usuario.nombre+" "+usuario.tipo+" "+usuario.autoriza);
}
usuarios({nombre:'Martin',tipo:TipoUsuario.Administrador,autoriza:true});
usuarios({nombre:'Leonardo',
          tipo:TipoUsuario.Moderador,
          autoriza:true,
          ip:'192.168.1.4'});

//Tipos que solo existen en TS
let tiempo:number = 76_000_000;
let animal:string = "dinosaurio";
let exitinto: boolean = true;
