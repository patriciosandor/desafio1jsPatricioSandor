// -----------------------------------------------------------------
// -----------------------------------------------------------------
                            // DESAFIO 1
// -----------------------------------------------------------------
// -----------------------------------------------------------------

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

// -----------------------------------------------------------------
// -----------------------------------------------------------------
                            // DESAFIO 2
// -----------------------------------------------------------------
// -----------------------------------------------------------------

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

// -----------------------------------------------------------------
// -----------------------------------------------------------------
                            //DESAFIO 3
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// EJEMPLO CON SWITCH

// var dia= [
//     'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado' , 'Domingo',
// ]

// function diasDeSemana() {
//     var elejirDia =  prompt ('Elegir un dia de la Semana')
//     var i=0 

//     function check(){
//         if ((i % 2 == 0) && (elejirDia === dia[0] || elejirDia === dia[2] || elejirDia === dia[4] || elejirDia === dia[6])) {
//             alert ('Elegiste un DIA PAR')
//         }
//         else{
//             alert ('Elegiste un DIA IMPAR')
//         }
//     }

//     switch (elejirDia){
//         case 'Lunes':
//             check()
//             console.log (dia[0])
//         break
//         case 'Martes':
//             check()
//             console.log (dia[1])
//         break
//         case 'Miercoles':
//             check()
//             console.log (dia[2])
//         break
//         case 'Jueves':
//             check()
//             console.log (dia[3])
//         break
//         case 'Viernes':
//             check()
//             console.log (dia[4])
//         break
//         case 'Sabado':
//             check()
//             console.log (dia[5])
//         break
//         case 'Domingo': 
//             // check()
//             alert ('Y TU CUERPO LO SABE')
//             console.log (dia[6])
//         break
//         default:
//             alert('REVISAR ORTOGRAFIA O MAYUSCULAS')
//             console.log ('TE EQUIVOCASTE !!!!!!')
//     }
// }


// EJEMPLO CON FOR

// function diasDeSemana() {
//     var elejirDia =  prompt ('Elegir un dia de la Semana')

//     for(var i=0; i<7; i++){
//             if ((i % 2 == 0) && (elejirDia === dia[0] || elejirDia === dia[2] || elejirDia === dia[4]|| elejirDia === dia[6])) {
//             console.log ('Elegiste un DIA PAR ' + ' ' + dia[i])
//         }
//             else{ 
//             console.log ('Elegiste un DIA IMPAR '+' ' + dia[i])
//         }
//     }
// }

// -----------------------------------------------------------------
// -----------------------------------------------------------------
                            // Clase 4
// -----------------------------------------------------------------
// -----------------------------------------------------------------


// -----------------------------------------------------------------
                        //EJEMPLO NUMERO 1
// -----------------------------------------------------------------


// function agregar (){
//     var numero1 = parseInt (prompt ('Elegir un numero'))
//     var numero2 = parseInt (prompt ('Elegir un numero'))
//     sumar (numero1, numero2)
//     promediar (numero1, numero2)
//     mensaje (sumar(numero1, numero2))
//     mensaje (promediar(numero1, numero2))
// }
// function sumar (n1, n2){
//     return (n1 + n2)
// }
// function promediar (n1, n2){
//     return ((n1 + n2)/2)
// }
// function mensaje (txt){
//     alert(txt)
// }

// -----------------------------------------------------------------
                        //EJEMPLO NUMERO 2
// -----------------------------------------------------------------

// var n1 = parseInt(prompt("numero1"));
// var n2 = parseInt(prompt("numero2"));
// var n3 = parseInt(prompt("numero3"));
// function calcular (){
// function promedio(num1,num2){
//   var r = (n1 + n2)/2; 
//   return r;  
// }
// console.log("el promedio de n1 y n2 es: " + promedio(n1, n2));
// var numPro = promedio(n1,n2);
// function promedioDelPromedio(numPro, num3){
//   return (numPro + num3)/2 ;
// }
// console.log("el promedio entre el resultado anterior que fue  " +numPro+ " y el 3er numero ingresado que fué " + n3 +" es: " + promedioDelPromedio(numPro, n3));
// }

// -----------------------------------------------------------------
                        //EJEMPLO NUMERO 3
// -----------------------------------------------------------------

// var n1 = parseInt(prompt("numero 1"));
// var n2 = parseInt(prompt("numero 2"));
// var n3 = parseInt(prompt("numero 3"));

// function promedio(num1,num2){
//     var r = (n1 + n2)/2; 
//     return r;  
// }
// console.log("el promedio de n1 y n2 es: " + promedio(n1, n2));
// var numPro = promedio(n1,n2);
// function promedioDelPromedio(numPro, num3){
//     return (numPro + num3)/2 ;
// }
// console.log("el promedio entre el resultado anterior que fue  " +numPro+ " y el 3er numero ingresado que fué " + n3 +" es: " + promedioDelPromedio(numPro, n3));

// -----------------------------------------------------------------
                        //EJEMPLO NUMERO 4
// -----------------------------------------------------------------

                        // CALCULADORA
// -----------------------------------------------------------------


// var n1= parseInt(prompt('Escribir un numero'))
// var n2= parseInt(prompt('Escribir un numero'))
// var cuenta= prompt('Que ecuacion vas a queres hacer suma, restar ,multiplicar o dividir.')

// calcular (n1, n2)

// function calcular(){

//     var sumando = (n1 + n2)
//     var resta = (n1 - n2)
//     var multiplicar = (n1 * n2)
//     var dividir = (n1 / n2)

//     switch(cuenta){
//         case 'suma':
//             console.log('La suma final es la sumatoria de ' + n1 + '+'+ n2 + ' y da como resultado ' + sumando)
//             break
//         case 'resta':
//         console.log('La suma final es la sumatoria de ' + n1 + '-'+ n2 + ' y da como resultado ' + resta)
//             break
//         case 'multiplicar':
//             console.log('La suma final es la sumatoria de ' + n1 + '*'+ n2 + ' y da como resultado ' + multiplicar)
//             break
//         case 'dividir':
//             console.log('La suma final es la sumatoria de ' + n1 + '/'+ n2 + ' y da como resultado ' + dividir)
//             break
//         default:
//             console.log('BOLUDO, te pedimos numero')
//     }
// }

                        // EJEMPLO DE MARTIN
// -----------------------------------------------------------------


// var num1 = parseInt(prompt("Ingrese un numero"));
// var num2 = parseInt(prompt("Ingrese otro numero"));

// function promedio(x, y){    
//     return ((x+ y) / 2)
// }
// var miNUmero =(promedio(num1, num2));
// alert (miNUmero)



// var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']  

// function diaFavorito() {  

//     for (var i = 0; i <= dias.length; i++) {
//         if (i === 4) {             
//             alert('¡Tu día favorito es el 4!')         
//         } else if (i % 2 == 4) {             
//             console.log(dias[i] + ' ¡es tu día favorito y es par!')         
//         } else {
//             console.log(dias[i] + ' es ¡Día impar!')         
//         }
//     }
// }
// diaFavorito()

                    // EJEMPLO DE = A 100
// -----------------------------------------------------------------

// function sumarNumero(a,b){
// if (a == 100 || b == 100 || (a+b == 100) ){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// }
// sumarNumero(100,40)

// var numero1 = parseInt(prompt("ingrese un numero: "));


// var numero2 = 1;
// var numero3 = 1;
// var resultado = [numero2,numero3];
// ​
//     for(var i=1; i < numero1; i= i+numero2){
//         var fibo = numero2 + numero3;
//         resultado.push(fibo);
//         numero2 = numero3;
//         numero3 = fibo;
//     }
// ​
//     if (numero1 % fibo === 0){
//         console.log(resultado);
//     } else{
//         console.log("Su numero no pertenece a la sucesión de Fibonacci");
//     }

// function agregar al carrito

// var mailRegistrado = ["emmanuelc89@gmail.com", "hola@hola.com", "mail3"];
// var nombreRegistrado = ["Emmanuel", "hola", "nombre3"];

//     function agregar(){
//         usuario = prompt ('Ingresa con tu Mail');
//         for (i=0; i < mailRegistrado.length; i++){
//         if (usuario == mailRegistrado[i]) 
//         var nombre = i
//             } 
//         if(mailRegistrado.includes(usuario) == true){
//             alert ('Bienvenido ' + nombreRegistrado[nombre] + ' el producto se agrego correctamente al carrito de compras'); 

//         } else{
//         mailRegistrado.push(usuario)
//         nuevoNombre = prompt ('Por favor ingrese un nombre de usuario');
//         nombreRegistrado.push(nuevoNombre);
//         alert ('Bienvenido ' + nuevoNombre + ' el producto se agrego correctamente al carrito de compras');
//         }
//     }

// // EJEMPLO DE LUIS
// function agregar(){
// debugger
//     var numeroA = parseInt (prompt("Ingrese su primer numero"));
//     var numeroB = parseInt (prompt("Ingrese su segundo numero"))
//     var numeroC = parseInt (prompt("Ingrese su tercer numero"))
//     var numeroD = parseInt (prompt("Ingrese su cuarto numero"))
//     var numeroE = parseInt (prompt("Ingrese su quinto numero"))

//     suma (numeroA, numeroB, numeroC, numeroD, numeroE)
//     promedio (numeroA, numeroB, numeroC, numeroD, numeroE)
//     mensaje (promedio (numeroA, numeroB, numeroC, numeroD, numeroE))

// }   
// function suma (nA, nB, nC, nD, nE) {
//     var resultado = nA + nB + nC + nD + nE;
//     console.info ("Resultado de la suma: " + resultado);
// } 
// function promedio (nA, nB, nC, nD, nE){
//     var resultado2 = ((nA + nB + nC + nD + nE)/5)
//     console.log( resultado2)
//     return ((nA + nB + nC + nD + nE)/5)
// }

// function mensaje (txt){
//     alert(txt)
// }

// -----------------------------------------------------------------
                        //EJEMPLO NUMERO 
// -----------------------------------------------------------------


// EJEMPLO 1
// -----------------------------------------------------------------

// function Producto (marca, tipo, serial){
//     this.marca = marca;
//     this.tipo = tipo;
//     this.serial = serial

//     this.getDatosPc = fuction(){
//         console.log('esta es tu compu')
//     }
// }
// var compu1 = new Producto("Sony", "Notebook", 465154135153)
// var compu2 = new Producto ("apple", '15pulgadas', 514615135)

// compu1.getDatosPc()
// compu2.getDatosPc()

// EJEMPLO 2
// -----------------------------------------------------------------


// function Computadora(marca, tipo, serial) {
//     this.marca = marca,
//     this.tipo = tipo,
//     this.serial = serial(),
//     this.getDatosPc = function () {
//         console.log(this)
//     }
        
// }

// var Pc1 = new Computadora('Sony', 'Desktop', serial);
// var Pc2 = new Computadora('HP', "Notebook", serial);
// Pc1.getDatosPc();
// Pc2.getDatosPc();

// function serial(){
//     return Math.floor((Math.random() * 10) + 1);
// }

// EJEMPLO 3
// -----------------------------------------------------------------
// function Computador(marca, tipo, serial) {
//     this.marca = marca;
//     this.tipo = tipo;
//     this.serial = serial;
//     this.getDatosPC = function () {
//         if (this.tipo == 'Desktop' || this.tipo == 'Notebook') {
//             console.log ( this.tipo + ' marca ' + this.marca);
//         }
//         else {
//             console.error(this.tipo + ' no es un tipo de computador válido')
//         }
//     }
// }
// var PC = new Computador("Dell", "Desktop", "LOQ-C10Y");
// PC.getDatosPC();

// EJEMPLO 4
// -----------------------------------------------------------------

// function Computadora (marca, tipo, serial){
//     this.marca = marca
//     this.tipo = tipo
//     this.serial = serial() 
//     this.getDatosPC = function (){
//         console.log (this)
//     }
// }
// var Pc1 = new Computadora ('Sony', 'Desktop', serial)
// var Pc2 = new Computadora ('HP', 'Notebook', serial)

// Pc1.getDatosPC()
// Pc2.getDatosPC()

// function serial(){
//     return Math.floor((Math.random() * 10) + 1)
// }


// EJEMPLO  5  declaracion PRIVADA con #
// -----------------------------------------------------------------
// class Cliente {
//     #nombre;
//     setNombre(nombre) {
//         this.#nombre = nombre;
//     }
//     getNombre() {
//         return this.#nombre;
//     }
// }
// const martin = new Cliente();
// martin.setNombre('Martin');
// console.log(martin.getNombre() );


// RESPUESTA DEL PROFESOR  UNIDAD 5 / 6
// -----------------------------------------------------------------

    // var autos = [
    // {
    //     "marca": "Ford",
    //     "modelo": "Econoline E250",
    //     "precio": 4019794
    // }, {
    //     "marca": "Suzuki",
    //     "modelo": "Samurai",
    //     "precio": 171909
    // }, {
    //     "marca": "Volkswagen",
    //     "modelo": "GTI",
    //     "precio": 2449401
    // }, {
    //     "marca": "Chevrolet",
    //     "modelo": "Corvette",
    //     "precio": 4581759
    // }, {
    //     "marca": "Lincoln",
    //     "modelo": "Town Car",
    //     "precio": 876398
    // }, {
    //     "marca": "Acura",
    //     "modelo": "MDX",
    //     "precio": 4687657
    // }, {
    //     "marca": "Cadillac",
    //     "modelo": "CTS",
    //     "precio": 4079187
    // }, {
    //     "marca": "Honda",
    //     "modelo": "Element",
    //     "precio": 1793316
    // }, {
    //     "marca": "Nissan",
    //     "modelo": "Quest",
    //     "precio": 937217
    // }, {
    //     "marca": "GMC",
    //     "modelo": "Yukon XL 1500",
    //     "precio": 3752502
    // }
    // ]

    // AYUDA DE NACHO para menu y carrito
    // ----------------------------------------------------------------

//     const menu = []
// function Comida (plato, precio, sector, codigo){
//     this.plato = plato
//     this.precio = precio
//     this.sector = sector
//     this.codigo = codigo
// }
// function pusheadoraDeMenu (plato, precio, sector, codigo){
//     menu.push(new Comida(plato, precio, sector, codigo))
// }

// function filtradoraDeMenu(sector){
//     var platosDelSector = menu.filter(comida => comida.sector === sector)
//     return platosDelSector
// }



//--------------------------------------------------------------------------
//CLASE 6 ejercicio
//--------------------------------------------------------------------------

// Ejemplo 1

// function agregar (){
//     var numero1 = [Math.floor (Math.random() * 10 + 1)]
//     var numero2 = [Math.floor (Math.random() * 40 + 1)]
//     sumar (numero1, numero2)
//     promediar (numero1, numero2)
//     mensaje (sumar(numero1, numero2))
//     mensaje (promediar(numero1, numero2))
// }
// function sumar (n1, n2){
//     return (n1 + n2)
// }
// function promediar (n1, n2){
//     return ((n1 + n2)/2)
// }
// function mensaje (txt){
//     alert(txt)
// }

// Ejemplo 2
function agregar(){
var mitadDeAnio1 = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio',
]
var mitadDeAnio2 = [
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre',
]

function unirAnios(a1, a2) {
    arrayJuntos = a1.concat(a2);
    console.log (arrayJuntos); 
}

unirAnios(mitadDeAnio1 , mitadDeAnio2);

}