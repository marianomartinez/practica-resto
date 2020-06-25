const path = require('path');
const fs = require('fs');

let provincia = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/provincias.json')));

let provincias = provincia.sort(function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a debe ser igual a b
    return 0;
  });

const usuariosController = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/usuarios/login'));
    },
    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/usuarios/registro'), {provincias});
    }

}
module.exports = usuariosController;
