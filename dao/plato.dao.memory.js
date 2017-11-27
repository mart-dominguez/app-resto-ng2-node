var listaPlatos = [];
platosDao = {
	insertar: function(plato,fxCallback){
        listaPlatos.push(plato);
        fxCallback(true);
	},
	borrar: function(unId,fxCallback){
        let indice = listaPlatos.findIndex(function(elemento){
            return elemento.id === unId;
        });
        if(indice>=0) listaPlatos.slice(indice,1);
        fxCallback(true);
	},
	actualizar: function(unId,platoNuevo,fxCallback){
        let indice = listaPlatos.findIndex(function(elemento){
            return elemento.id === unId;
        });
        if(indice>=0) listaPlatos.slice(indice,1,platoNuevo);
        fxCallback(true);

    },
    listar:function(fxCallback){
        fxCallback(listaPlatos);
    },
    buscarPorId:function(unId,fxCallback){
        let plato = listaPlatos.find(function(elemento){
            return elemento.id === unId;
        });
        fxCallback(plato);
    }
}

module.exports = platosDao;