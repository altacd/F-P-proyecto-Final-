/rol 1 admin
//rol 2 cliente



function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));
    if(listaUsuarios == null){
        listaUsuarios = 
        [
          ['1','sabrina','caceres','sabrina@gmail.com','123','1'],
          ['2','starling','rosario','starling@gmail.com','456','2']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pContraseña){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;
    
}
