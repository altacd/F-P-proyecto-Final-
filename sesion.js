document.querySelector('#sesion').addEventListener('click', 
iniciarSesion);

function iniciarSesion(){
    var sCorreo = '';
    var sContraseña = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').Value;
    sContraseña = document.querySelector('#password').Value;
 

    bAcceso = validarCredenciales(sCorreo, sContraseña);
    if(bAcceso == true){
        ingresar();
    }
}
function ingresar(){
    var rol = sessionStorage.setItem('rolUsuarioActivo');
    switch(rol){
case '1':
    window.location.href = 'admin.html';
    break;

    case '2':
    window.location.href = 'ventas.html';
    break;
    default:

    window.location.href = 'login.html';
         
    break;
    }
}
