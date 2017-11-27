var express = require('express');
var router = express.Router();
var platosDao = require('../dao/plato.dao.memory');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

// Definir que para todas las peticiones se ejecute una funcion de trazabilidad y auditoria
router.use(function trazar (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// Definir las acciones de la ruta base
router.route('/')
.get(function (req, res) {
    platosDao.listar(
        function(lista){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(lista));
            res.end();
        }
    ); 
})
.post(function (req, res) {
    platosDao.insertar(
        req.body,
        function(resultado){
            if(resultado){
                res.send(201, { status: 'Creado' });
            }else{
                res.send(400, { status: 'Peticion incorrecta' });
            }
        }
    ); 
  })
.all(function (req, res, next) {  /// para todos los demás no implementado
    res.send(501, { status: 'Not implemented' });
});

// definir las acciones de una ruta que tiene ID
router.route('/:id')
.get( function (req, res) {
  res.send('buscando el plato de id '+req.params.id);
})
.put(function (req, res) {
    res.send('ACTUALIZAR  plato')
  })
.delete(function (req, res) {
    res.send('Borrar  plato')
  })
.all(function (req, res, next) {  /// para todos los demás no implementado
    res.send(501, { status: 'Not implemented' });
});
module.exports = router;