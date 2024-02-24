// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

const respuesta = prompt("¿Eres bellisim@?");

if (respuesta == "si") {
    alert("¡Ciertamente!");
}
else if(respuesta == "no"){
    alert("No te creo");
}
else{
    alert("No entendí tu respuesta");
}

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numero = Number(prompt("Ingresa un nùmero y te dire si es o no divisible entre 2 de manera exacta, usa solo nùmeros enteros"));

if(numero % 2 == 0){
    alert("El nùmero " + numero + " es divisible entre dos de manera exacta");
}
else{
    alert("El nùmero " + numero + " no es divisible entre dos de manera exacta");
}

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let esPar = Number(prompt("Ingresa un nùmero entero y te dire si es par o non"));
if(esPar % 2 == 0){
    alert("El nùmero " + esPar + " es par");
}
else{
    alert("El nùmero " + esPar + " es impar");
}

// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let numeroCliente = prompt("Ingresa un nùmero de cliente");
if(numeroCliente == "1000"){
    alert("😀 ¡ganaste un premio!");
}
else{
    alert("😔 Lo sentimos, sigue participando");
}

// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numero1 = Number(prompt("Ingresa un número"));
let numero2 = Number(prompt("Ingresa otro número"));

if(numero1 < numero2){    
    alert(numero1 + " es menor que " + numero2);
}
else if (numero2 < numero1){
    alert(numero2 + " es menor que " + numero1);
}

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let a = Number(prompt("Te voy a pedir ingresar 3 nùmeros y te dire cuál de ellos es el mayor. Ingresa el primer número"));

let b = Number(prompt("Ingresa el segùndo número"));
let c = Number(prompt("Ingresa el tercer número"));

if(a>b && a >c){
    alert(a + " es mayor que " + b + " y que " + c)
}
else if(b>a && b>c)
{
    alert(b + " es mayor que " + a + " y que " + c)
}
else if(c>a && c>b){
    alert(c + " es mayor que " + a + " y que " + b)
}
else if(a === b && a > c){
    alert(a + " y " + b + " son mayor que " + c);
}
else if(a === c && a > b){
    alert(a + " y " + c + " son mayor que " + b);
}
else if(b === c && b > a){
    alert(b + " y " + c + " son mayor que " + a);
}
else if(a === b && a < c){
    alert(c + " es mayor que " + a + " y " + b);
}
else if(a === c && a < b){
    alert(b + " es mayor que " + a + " y " + c);
}
else if(b === c && b < a){
    alert(a + " es mayor que " + b + " y " + c);
}

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaSemana = prompt("Ingresa un día de la semana");

switch (diaSemana) {
    case "lunes":
        alert("Feliz inicio de semana, vamos con todo");
        break;
    case "viernes":
        alert("Por fin es viernes, ten un gran fin de semana");
        break;
    case "sabado":
        alert("Excelente sabado a disfrutar con la familia");
        break;
    case "domingo":
        alert("A disfrutar el último día de descanso y recobrar fuerzas para la nueva semana que viene, feliz Domingo");
        break
    default:
        alert("Disfruta tu día");
        break;
}

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion = Number(prompt("Ingresa una calificación entre 1 y 10"));
if(calificacion < 1 || calificacion > 10){
    alert("Error el número no esta dentro del rango solicitado")
}
else if(calificacion < 6){
    alert("Lo siento estás reprobado");
}
else if(calificacion >= 6 && calificacion <= 8)
{
    alert("Eres regular");
}
else if (calificacion == 9){
    alert("Bien!");
}
else if(calificacion == 10){
    alert("Excelente!!");
}
else{
    alert("El valor ingresado no es un número");
}

/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. */

let topping = prompt("Bievenido a Helados Garcia, por favor escribe el topping que quieres, considera que tenemos los siguientes: sin topping, con topping de oreo, con topping de kitkat o con topping de brownie");

if(topping == "sin topping"){
    alert("Tu helado cuesta $ 50.00");
}
else if(topping == "oreo"){
    alert("Tu helado cuesta $ 50.00 + $ 10.00 del topping, total a pagar: " + (50+10));
}
else if(topping == "kitkat"){
    alert("Tu helado cuesta $ 50.00 + $ 15.00 del topping, total a pagar: " + (50+15));
}
else if(topping == "brownie"){
    alert("Tu helado cuesta $ 50.00 + $ 20.00 del topping, total a pagar: " + (50+20));
}
else{
    alert("no tenemos este topping, lo sentimos. El helado sin topping cuesta $ 50.00");
}

/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

let elegirCurso = prompt("Bienvenido al curso de desarrollo de aplicaciones. Por favor escribe que nivel deseas tomar. course, carrera o master");

const course = 4999;
const carrera = 3999;
const master = 2999;

let beca = prompt("favor de indicarme el nombre de la beca si cunetas con alguna de las siguientes: facebook, google, jesua");

const facebook = 1.2;
const google = 1.15;
const jesua = 1.5;
let mensualidad;

function costo(elegirCurso, beca){
    if(elegirCurso == "course"){
        if(beca == "facebook"){
            mensualidad = course * facebook;
        }
        else if (beca == "google"){
            mensualidad = course * google;
        }
        else if (beca == "jesua")
        {
            mensualidad = course * jesua;
        }
        else {
            mensualidad = course;
        }
    }
    else if(elegirCurso == "carrera"){
        if(beca == "facebook"){
            mensualidad = carrera * facebook;
        }
        else if (beca == "google"){
            mensualidad = carrera * google;
        }
        else if (beca == "jesua")
        {
            mensualidad = carrera * jesua;
        }
        else {
            mensumensualidadalidad = carrera;
        }
    }
    else if(elegirCurso == "master"){
        if(beca == "facebook"){
            mensualidad = master * facebook;
        }
        else if (beca == "google"){
            mensualidad = master * google;
        }
        else if (beca == "jesua")
        {
            mensualidad = master * jesua;
        }
        else {
            mensualidad = master;
        }
    }
    return mensualidad;
}

mensualidad = costo(elegirCurso,beca);

if(elegirCurso == "course"){
    alert("Tu pago mensual será de $" + mensualidad.toFixed(2) + " MXN , y tu total a pagar sera de $" + (mensualidad * 2).toFixed(2) + " MXN");
}
else if(elegirCurso == "carrera"){
    alert("Tu pago mensual será de $" + mensualidad.toFixed(2) + " MXN , y tu total a pagar sera de $" + (mensualidad * 6).toFixed(2) + " MXN");
}
else if(elegirCurso == "master"){
    alert("Tu pago mensual será de $" + mensualidad.toFixed(2) + " MXN , y tu total a pagar sera de $" + (mensualidad * 12).toFixed(2) + " MXN");
}

/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

let vehiculo = prompt("Este programa ayuda a calcular el total a pagar de acuerdo a la distancia recorrida, favor de indicar que tipo de vehículo andas, coche, moto o autobus");

let kilometros = Number(prompt("Ingresa el nùmero de km recorridos"));
let totalPagar;

if(vehiculo == "coche"){
    //.20 por km

    totalPagar = kilometros * .20;
    if(kilometros >= 0 && kilometros <= 100)
    {
        // añadir 5 al total
        totalPagar = totalPagar + 5;
    }
    else if(kilometros > 100)
    {
        //Añadir 10 al total
        totalPagar = totalPagar + 10;
    }

}
else if(vehiculo == "moto"){
    //.10 por km
    totalPagar = kilometros * .10;
    if(kilometros >= 0 && kilometros <= 100)
    {
        // añadir 5 al total
        totalPagar = totalPagar + 5;
    }
    else if(kilometros > 100)
    {
        //Añadir 10 al total
        totalPagar = totalPagar + 10;
    }
}
else if(vehiculo == "autobus"){
    //.5 por km
    totalPagar = kilometros * .50;
    if(kilometros >= 0 && kilometros <= 100)
    {
        // añadir 5 al total
        totalPagar = totalPagar + 5;
    }
    else if(kilometros > 100)
    {
        //Añadir 10 al total
        totalPagar = totalPagar + 10;
    }

}
else
{
    alert("No ingresaste un tipo de vehículo valido");
}

alert("El total a pagar por los " + kilometros + " recorridos, es de " + totalPagar);
