let info=document.querySelector("#info");
const obtenerUbicacion = () => {
    navigator.geolocation.getCurrentPosition(function(posicion) {
        const lat=posicion.coords.latitude;
        const lon=posicion.coords.longitude;
        info.textContent=`Latitud: ${lat} - Longitud: ${lon}`;
        notificar();
    },function(error){
        console.log('error: '+ error.message);
    })
}

let boton=document.querySelector("#ubicacion");
boton.addEventListener("click",() =>{
    obtenerUbicacion();
});


//NOTIFICACIONES
const notificar = () => {
    Notification.requestPermission()
    .then(Permissions=>{
        if(Permissions==="granted"){
            new Notification("Coordenadas Obtenidas");

            
    })
}