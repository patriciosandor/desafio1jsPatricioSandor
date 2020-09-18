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
//--------------------------------------------------------------------------
                        //CLASE 6 
//--------------------------------------------------------------------------
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
// function agregar(){
// var mitadDeAnio1 = [
//     'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio',
// ]
// var mitadDeAnio2 = [
//     'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre',
// ]

// function unirAnios(a1, a2) {
//     arrayJuntos = a1.concat(a2);
//     console.log (arrayJuntos); 
// }

// unirAnios(mitadDeAnio1 , mitadDeAnio2);

// }

//-------------------------------
// EJEMPLO 1 DE CLASE PARA CARRITO
//-------------------------------
// let carrito = [];
// let buscarProducto = (carrito, buscado) => {
// 	for (let i = 0; i < carrito.length; i++) {
// 		if (carrito[i].descripcion === buscado) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };
// let agregarCarrito = (descripcion, precio) => {
// 	let posicion = buscarProducto(carrito, descripcion);
// 	if (posicion >= 0) {
// 		carrito[posicion].cantidad++;
// 	} else {
// 		const producto = {
// 			descripcion: descripcion,
// 			precio: precio,
// 			cantidad: 1,
// 		};
// 		carrito.push(producto);
// 	}
// };
// agregarCarrito("Televisor", 1500);
// agregarCarrito("Celular", 2500);
// agregarCarrito("Televisor", 2500);
// agregarCarrito("Celular", 2500);
// agregarCarrito("Celular", 2500);
// agregarCarrito("Notebook", 1500);
// console.table(carrito);


// //-------------------------------
// // EJEMPLO 1 DE CLASE PARA CARRITO
// //-------------------------------

// var carrito = [];
// agregarAlCarrito('Televisor', 25000)
// agregarAlCarrito('Celular', 55000)
// agregarAlCarrito('Celular', 55000)
// agregarAlCarrito('Monitor', 65000)
// agregarAlCarrito('Teclado', 65000)
// agregarAlCarrito('Televisor', 25000)
// agregarAlCarrito('Televisor', 25000)
// agregarAlCarrito('Teclado', 65000)
// agregarAlCarrito('Teclado', 65000)
// agregarAlCarrito('Teclado', 65000)
// agregarAlCarrito('Teclado', 65000)
// sacarDelCarrito('Televisor', 25000)
// /* Agregar al carrito METODO 1 */
// // Funcion agregar al carrito con ciclo FOR comun
// function agregarAlCarrito(nombre, precio) {
//     // Verificar si un producto existe con ciclo FOR comun
//     if (carrito.length > 0) {
//         for (let i = 0; i < carrito.length; i++) {
//             if (carrito[i].nombre == nombre) {
//                 // Si el producto existe, le sumo 1 a la cantidad y salgo de la function con return
//                 carrito[i].cant++;
//                 return
//             }
//         }
//         // Si recorrio todo el arreglo y no encontro el producto, lo agregamos al carrito
//         producto = {
//             nombre: nombre,
//             precio: precio,
//             cant: 1
//         }
//         carrito.push(producto);
//     } else {
//         // Si el carrito esta vacio agrego el producto
//         producto = {
//             nombre: nombre,
//             precio: precio,
//             cant: 1
//         }
//         carrito.push(producto);
//     }
// }
// console.table(carrito)
// /* Agregar al carrito METODO 2 */
// // Funcion agregar al carrito con funcion some() o find()
// function agregarAlCarrito(nombre, precio) {
//     // Busca si existe algun elemento (objeto) del arreglo "carrito" que tenga la propiedad nombre igual al parametro nombre que le pasamos a la funcion
//     // y devuelve ese elemento (si existe)
//     var resultado = carrito.find(producto => producto.nombre == nombre)
//     if (resultado) {
//         // Si la funcion find() encuentra un elemento que cumpla la condicion, aumentamos la cantidad en uno
//         resultado.cant++;
//     } else {
//         // Si no se encuentra el producto en el carrito, se agrega una unidad del mismo 
//         const productoCarrito = {
//             nombre: nombre,
//             precio: precio,
//             cant: 1
//         }
//         carrito.push(productoCarrito)
//     }
// }
// /* Agregar al carrito METODO 3 */
// function agregarAlCarrito(nombre, precio) {
//     const producto = {
//         nombre: nombre,
//         precio: precio,
//         cant: 1
//     }
//     // Revisa si un elemento ya existe en el carrito (El metodo find() devuelve TRUE o FALSE)
//     const existe = carrito.some(producto => producto.nombre === nombre);
//     if (existe) {
//         // El metodo map() itera sobre el arreglo pero devuelve como resultado un arreglo nuevo con el resultado de la función aplicad a cada uno de sus elementos.
//         const carritoProductos = carrito.map(producto => {
//             if (producto.nombre === nombre) {
//                 // Retorna el item duplicado
//                 producto.cant++;
//                 return producto;
//             } else {
//                 // Retorna los que no estan repetidos
//                 return producto;
//             }
//         });
//         // El arreglo carrito productos ahora contiene todos los mismos productos que antes, pero se le modifico la cantidad al producto agregado (si corresponde)
//         carrito = [...carritoProductos];
//     } else {
//         // Si el producto no existe, se agrega al arreglo de carrito
//         carrito = [...carrito, producto];
//     }
// }
// // Sacar del carrito un producto
// function sacarDelCarrito(nombre) {
//     var resultado = carrito.find(elemento => elemento.nombre == nombre)
//     if (resultado) {
//         // console.log("true")
//         resultado.cant--;
//     }
// }
// console.table(carrito)

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
                        //CLASE 7
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------



// /* Metodos para localStorage (Para sessionStorage es igual) */
// localStorage.setItem('nombre', 'Mi nombre') // Inserto un dato con setItem
// localStorage.curso = 'Javascript' // Inserto un dato con sintaxis de punto

// var curso = localStorage.getItem('curso') // Leo un valor con getItem('clave')
// var nombre = localStorage.nombre // Leo un valor con la sintaxis de punto


// // Creo una variable, arreglo de objetos
// var objeto = [{
// 	"id": 1,
// 	"first_name": "Ellis"
// }, {
// 	"id": 2,
// 	"first_name": "Reinwald"
// }, {
// 	"id": 3,
// 	"first_name": "Timmy"
// }, {
// 	"id": 4,
// 	"first_name": "Christophe"
// }, {
// 	"id": 5,
// 	"first_name": "Cass"
// }, {
// 	"id": 6,
// 	"first_name": "Greg"
// }, {
// 	"id": 7,
// 	"first_name": "Simonette"
// }, {
// 	"id": 8,
// 	"first_name": "Sheelagh"
// }, {
// 	"id": 9,
// 	"first_name": "James"
// }, {
// 	"id": 10,
// 	"first_name": "Lane"
// }]

// // Convierto mi variable a formato JSON (Texto plano)
// var json = JSON.stringify(objeto)

// console.log(objeto)

// /* =================== Recibimos un JSON ================== */
// /* Recibo informacion en formato JSON */
// // console.log(json)

// /* Transformar el JSON a Objeto7Arreglo */
// var objetoJson = JSON.parse(json)
// // console.log(objetoJson)

// /* Funcion constructora objeto persona */
// function Persona(id, nombre) {
// 	this.id = id;
// 	this.nombre = nombre
// }

// /* Recorro el arreglo y voy creando un objeto de tipo Persona con cada componente (objeto) del arreglo */
// var arregloPersona = objetoJson.map((person) => {
// 	return new Persona(person.id, person.first_name)
// })

// // Convierto mi arreglo de objetos Persona a JSON
// var jsonPersona = JSON.stringify(arregloPersona)


// /* Lo mismo pero con forEach */
// // var arregloPersona = []
// // objetoJson.forEach(function (person) {
// // 	arregloPersona.push(new Persona(person.id, person.first_name))
// // }


//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
                        //CLASE 8
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------


// /* Manejo del DOM */

// // document -> Objeto principal (raiz del DOM) Contiene todo el documento

// /* Algunos atributos del objeto global "document" */
// document.head // Todo el contenido del <head>

// document.body // Todo el contenido del <body>

// document.domain // URL (dominio)

// document.forms // Todos los formularios

// document.characterSet // Juego de caracteres utilizados

// document.images // Todas las imagenes del documento

// document.scripts // Todos los scripts

// /* Seleccionando elementos del HTML */

// document.getElementById('idElemento') // Selecciono un elemento por su ID

// document.getElementsByClassName('claseElemento') // Selecciono elementos por clase (devuelve un objeto HTML Collection)

// document.getElementsByTagName('tagElemento') // Seleccino elementos por etiqueta HTML (devuelve un HTML Collection)

// document.querySelector('selectorCSS') // Selecciona EL PRIMER elemento que coincida con criterio

// document.querySelectorAll('selectorCSS') // Selecciona TODOS los elementos que coincidan con el criterio (Devuelve un NodeList)


// /* Manipulando elementos */

// const elemento = document.querySelector('selector') // Selecciono un elemento cualquiera

// elemento.id // Devuelve el id del elemento (Si tiene)

// elemento.className // Devuelve las clases del elemento (Si tiene)

// elemento.textContent // Lee el texto del elemento

// elemento.innerText // Lee el texto del elemento, pero si tiene "visibility = hidden" en CSS NO lo encuentra

// elemento.innerHTML // Lee el contenido del elemento INCLUYENDO el HTML

// /* TODAS LAS EXPRESIONES ANTERIORES SIRVEN TAMBIEN PARA SETEAR VALORES DE PROPIEDADES, por ej: elemento.id = "nuevoID" */


// /* Traversing en el DOM */

// const elemento = document.querySelector('selector') // Selecciono un elemento cualquiera

// elemento.childNodes // Selecciona los NODOS HIJOS (Incluye los espacios en blanco/saltos de linea)

// elemento.children // Selecciona los HIJOS (Ignorando los espacios en blanco)

// elemento.nodeName // Retorna la etiqueta o tag del nodo (h1, div, input, p, etc.)

// elemento.nodeType // Retorna el TIPO de nodo (por ej: 1 = Elementos, 2 = Atributos, 3 = TextNode, 8 = Comentarios, 9 = documento, 10 = doctype)

// elemento.parentNode // Selecciono el elemento Padre

// elemento.parentElement // Selecciono el elemento Padre (Recomendado utilizar este)

// elemento.previousElementSibling // Elemento HERMANO (mismo nivel jerarquico) previo

// elemento.nextElementSibling // Elemento HERMANO (mismo nivel jerarquico) siguiente

// /* Crear elementos */

// const elementoNuevo = document.createElement('tag') // Crear un elemento HTML ("tag" = a, h1, h2, h3, h4, h5, h6, p, div, etc.)

// elementoNuevo.className = 'nueva-clase' // Establece las clases de un elemento (BORRA LAS EXISTENTES)

// elementoNuevo.setAttribute('atributo', 'valor') // Establece el valor de un atributo a un elemento HTML (por ej: "href", "http://www...")

// elementoPadre.appendChild(elementoHijo) // Inserta el elementoHijo al final del elementoPadre

// elementoPadre.insertBefore(elementoHijo, elementoReferencia) // Inserta el elementoHijo en el elementoPadre ANTES del elementoReferencia

// /* Reemplazar elementos */

// elementoPadre.replaceChild(elementoNuevo, elementoAnterior) // Reemplaza elementoAnterior con elementoNuevo

// /* Eliminar elementos */

// elemento.remove() // Elimina elemento

// elementoPadre.removeChild(elementoHijo) // Elimina el elemento elementoHijo

// /* Agregar o Quitar Clases */

// elemento.classList.add('nueva-clase') // Agrega una nueva clase

// elemento.classList.remove('clase') // Quita una clase

// /* Manipulando Atributos */

// elemento.getAttribute('atributo') // Obtengo el valor de un atributo (id, class, value, type, etc.)

// elemento.setAttribute('atributo', 'valir') // Establecer el valor de un atributo a un elemento

// elemento.hasAttribute('atributo') // Verifica si un elemento posee un atributo (Devuelve un BOOLEANO)

// elemento.removeAttribute('atributo') // Elimina un atributo de un elemento

// /* Modificar propiedades CSS */

// elemento.style.propiedadCSS = 'valor' // Establece el valor de una propiedad CSS de un elemento


//                        //DESAFIO DE CLASE 8
// //--------------------------------------------------------------------------

// function agregar(){
//     var comida = prompt('Elegi tu comida favorita')
//     var persona = prompt('Elegi tu persona favorita')
//     var lugar = prompt('Elegi tu lgar del mundo favorito')

//     if( comida && persona && lugar != null){
//         var resultado = (`Cuando se levante la CUARENTENA tenes que salir a comer ${comida} con ${persona} en ${lugar}`)
//         var h1 = document.createElement ('t')
//         h1.setAttribute ('class', 'respuestaJuego')
//         h1.appendChild(resultado)
//         document.querySelector('sectorTexto').appendChild(h1)
//     }

//     else{
//         alert ('ALGO ESTAS HACIENDO MAL')
//     }

// // }


function agregar() {
    var comida = prompt('Elegi tu comida favorita')
    var persona = prompt('Elegi tu persona favorita')
    var lugar = prompt('Elegi tu lugar del mundo favorito')
    validar()
    function validar() {
        if (comida && persona && lugar != "") {
            const sector = document.getElementById('sectorTexto')
            const nuevoTexto = document.createElement('h1')
            nuevoTexto.textContent = (`Cuando se levante la CUARENTENA tenes que salir a comer ${comida} con ${persona} en ${lugar}`)
            nuevoTexto.classList.add('respuestaJuego')
            sector.appendChild(nuevoTexto)
        } else {
            const sector = document.getElementById('sectorTexto')
            const nuevoTexto = document.createElement('h1')
            nuevoTexto.textContent = ('PONE LO QUE TE DIGO GIL Y SI NO ENTENDES PEDILE A MAURO')
            nuevoTexto.classList.add('respuestaJuego')
            sector.appendChild(nuevoTexto)
        }
    }
}

function borro(){
    document.querySelector('.respuestaJuego').remove()
}