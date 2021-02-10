const{io} =require('../server')

io.on('connection',(client)=>{
    console.log('Usuario conectado');
    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicacion'
    })
    
    client.on('disconnect',()=>{
        console.log('Usuario desconetado');
    });
    //Escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{
    console.log(data);
    //el broadcast nos sirve para emitir la respuesta del server a  todos los clientes
    
    client.broadcast.emit('enviarMensaje',data);
    // if(mensaje.usuario){

    //     callback({
    //         resp:'Todo salio bien'
    //     });
    // }
    // else{
    //     callback({
    //         resp:'Todo salio mal'
    //     });
    // }
    });

})