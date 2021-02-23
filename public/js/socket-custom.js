const lblOffiline = document.querySelector('#lblOffline');
const lblOnline   = document.querySelector('#lblOnline');
const txtMensaje  = document.querySelector('#txtMensaje');
const btnEnviar   = document.querySelector('#btnEnviar');

const socket = io();
//los on son para escuchar
socket.on("connect",()=> {
  console.log("conectado al servidor");
  lblOffiline.style.display='none';
  lblOnline.style.display='';
});
//codigo que ejecutamos cuando perdemos coneccion con el servidor
socket.on("disconnect", ()=> {
  console.log("Perdimos conexion con el servidor");
  lblOffiline.style.display='';
  lblOnline.style.display='none';
});

//son para enviar informacion los emit
//dentro del emit podemos mandar varios parametros dentro de los cuales es el nombre de emit, el objeto a mandar o string y podemos madar igualmente
//una funcion o callback
socket.on('enviar-mensaje',(payload)=>{
  console.log(payload);
})

//Escuchar informacion
socket.on("enviarMensaje", (res) => {
  console.log("Respuesta del server:", res);
});

btnEnviar.addEventListener('click',()=>{
  const mensaje= txtMensaje.value;
  const payload={
    mensaje,
    id:'1234ASD',
    fecha:new Date().getTime()
  }

  //podemos mandar tres argumentos 1 nombre del evento 2 la info a mandar 3 un callback para ejecutar alguna funcion 
  socket.emit('enviar-mensaje',payload,(id)=>{
    console.log('Desde el server',id);
  });
})