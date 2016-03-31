var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
    /*auth: {
      mode:'try',
      strategy:'session'
    },*/
    handler: function(request, reply) {
      console.log(request.payload);
       var newUser = new user({
         nombre : request.payload.nombre,
         apellido : request.payload.apellido,
         identidad : request.payload.identidad,
         telefono : request.payload.telefono,
         correo : request.payload.correo,
         ciudad: request.payload.ciudad,
         ubicacion: request.payload.ubicacion,
         image : request.payload.image,
         password : SHA3(request.payload.password),
         expediente : request.payload.expediente,
         especialidades : request.payload.especialidades,
         mensajes : request.payload.mensajes,
         hinicio : request.payload.hinicio,
         hfin: request.payload.hfin,
         scope : request.payload.scope

       });
       newUser.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Ya existe una cuenta con este correo'));
         }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getUsers = {
    handler: function(request, reply){
      var users = user.find({});
      reply(users);
    }
  }

  exports.getUser = {
    handler: function(request, reply){
      var user1 = user.find({correo : request.params.correo});
      reply(user1);
    }
  }

  exports.getPendientes = {
    handler: function(request,reply){
      var users = user.find({scope : ["Pendiente"]});
      reply(users);
    }
  }

  exports.getPacientes = {
    handler: function(request,reply){
      var users = user.find({scope : ["Paciente"]});
      reply(users);
    }
  }

  exports.getDoctors = {
    handler: function(request,reply){
      var users = user.find({scope : ["Doctor"]});
      reply(users);
    }
  }

  exports.updatedocadmin = {
  handler: function(request, reply){
    //console.log(request.payload);
    console.log("backend");
    user.findOneAndUpdate(
      {correo : request.payload.correo},
        {scope: ["Doctor"]},
        function(err, user){
      user.save(function(err){
        if(err){
          console.log("Shit");
        }
      });
    });
    reply("ok");
  }
}


exports.updateexpediente = {
handler: function(request, reply){
  //console.log(request.payload);
  console.log("backend");
  user.findOneAndUpdate(
    {correo : request.payload.correo},
      {expediente: request.payload.expediente},
      function(err, user){
    user.save(function(err){
      if(err){
        console.log("Shit");
      }
    });
  });
  reply("ok");
}
}

exports.updatemensajes = {
handler: function(request, reply){
  //console.log(request.payload);
  console.log("backend");
  user.findOneAndUpdate(
    {correo : request.payload.correo},
      {mensajes: request.payload.mensajes},
      function(err, user){
    user.save(function(err){
      if(err){
        console.log("Shit");
      }
    });
  });
  reply("ok");
}
}

exports.updateDoctor = {
handler: function(request, reply){
  //console.log(request.payload);
  console.log("backend");
  user.findOneAndUpdate(
    {correo : request.payload.correo},
      {
        nombre: request.payload.nombre,
        apellido: request.payload.apellido,
        telefono: request.payload.telefono,
        ciudad: request.payload.ciudad,
        ubicacion: request.payload.ubicacion,
        hinicio:request.payload.hinicio,
        hfin:request.payload.hfin,
        image:request.payload.image
      },
      function(err, user){
    user.save(function(err){
      if(err){
        console.log("Shit");
      }
    });
  });
  reply("ok");
}
}

exports.updatePaciente = {
handler: function(request, reply){
  //console.log(request.payload);
  console.log("backend");
  user.findOneAndUpdate(
    {correo : request.payload.correo},
      {
        nombre: request.payload.nombre,
        apellido: request.payload.apellido,
        telefono: request.payload.telefono,
        ciudad: request.payload.ciudad,
        image:request.payload.image
      },
      function(err, user){
    user.save(function(err){
      if(err){
        console.log("Shit");
      }
    });
  });
  reply("ok");
}
}
