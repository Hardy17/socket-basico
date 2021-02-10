let socket = io();
//los on son para escuchar
socket.on("connect", function () {
  console.log("conectado al servidor");
});
//codigo que ejecutamos cuando perdemos coneccion con el servidor
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

//son para enviar informacion los emit
//dentro del emit podemos mandar varios parametros dentro de los cuales es el nombre de emit, el objeto a mandar o string y podemos madar igualmente
//una funcion o callback
socket.emit(
  "enviarMensaje",
  {
    usuario: "Jardy",
    mesaje: "Hola Mundo",
  },
  function (res) {
    console.log(res);
  }
);

//Escuchar informacion
socket.on("enviarMensaje", (res) => {
  console.log("Respuesta del server:", res);
});