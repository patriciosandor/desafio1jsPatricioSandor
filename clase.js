// DESAFIO 1
// var nombre = prompt ("Ingresar tu nombre");
// console.log("BONDIA " + nombre + " !!!!!!" + "que tengas un excelente dia ");

// var tuedad = prompt ("Ingresa tu edad");
// var unnumero = prompt ("Elegi un numero del 90 a 140");
// var edad =  parseInt (tuedad);
// var numeroal = parseInt (unnumero);
// console.log("Tu peso dentro de 5 años " + (numeroal - edad));

// var comidafavo = prompt ("Ingresa tu comida favorita ");
// var club = prompt ("Ingresa tu club de futbol ");
// alert ("BONDIA " + nombre + "FUTURO CRACK DE JS" + "\n2. Tenes " + tuedad + "\n3. Tu Peso dentro de 5 años es de " + (numeroal - edad) + "\n4 Tu comida favorita es " + comidafavo + "\n5 Y sos fan del " + club);

// DESAFIO 2
// var numero= parseInt (prompt ("Ingresa un Numero del 1 al 3000"));

// if(numero > 1000){
//     alert ("Tu numero es mas grande que 1000 y nose puede.")
// }
// else{
//     alert("Tu numero esta dentro del lo pensado")
// }

// var palabra = prompt('Ingresar un texto');

// if (palabra == "Hola") {
//     alert('El texto es igual a "Hola"');
// } else {
//     alert('Flaco fijate lo que pones, tenes que poner HOLA');
// }

// var num = parseInt(prompt('Ingrese un numero'));

// if ((num >= 10) && num <= 50) {
//     alert('SOS MIRKO?');
// } else {
//     alert('DEJA DE JUGAR CON CESAR');
// }

//DESAFIO 3

// -----------------------------------------------------------------
// -----------------------------------------------------------------
                        // EJEMPLO CON SWITCH
// -----------------------------------------------------------------
// -----------------------------------------------------------------

var dia= [
    'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado' , 'Domingo',
]

function diasDeSemana() {
    var elejirDia =  prompt ('Elegir un dia de la Semana')
    var i=0 

    function check(){
        if ((i % 2 == 0) && (elejirDia === dia[0] || elejirDia === dia[2] || elejirDia === dia[4] || elejirDia === dia[6])) {
            alert ('Elegiste un DIA PAR')
        }
        else{
            alert ('Elegiste un DIA IMPAR')
        }
    }

    switch (elejirDia){
        case 'Lunes':
            check()
            console.log (dia[0])
        break
        case 'Martes':
            check()
            console.log (dia[1])
        break
        case 'Miercoles':
            check()
            console.log (dia[2])
        break
        case 'Jueves':
            check()
            console.log (dia[3])
        break
        case 'Viernes':
            check()
            console.log (dia[4])
        break
        case 'Sabado':
            check()
            console.log (dia[5])
        break
        case 'Domingo': 
            // check()
            alert ('Y TU CUERPO LO SABE')
            console.log (dia[6])
        break
        default:
            alert('REVISAR ORTOGRAFIA O MAYUSCULAS')
            console.log ('TE EQUIVOCASTE !!!!!!')
    }
}
// -----------------------------------------------------------------
// -----------------------------------------------------------------
                        // EJEMPLO CON FOR
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// function diasDeSemana() {
//     var elejirDia =  prompt ('Elegir un dia de la Semana')

//     for(var i=0; i<7; i++){
//             if ((i % 2 == 0) && (elejirDia === dia[0] || elejirDia === dia[2] || elejirDia === dia[4]|| elejirDia === dia[6])) {
//             alert ('Elegiste un DIA PAR')
//         }
//             else{
//             alert ('Elegiste un DIA IMPAR')
//         }
//     }
// }