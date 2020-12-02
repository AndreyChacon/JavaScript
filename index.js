console.log("Hola desde index.js");

/*Variables*/

var x = 10;
var y = 55.55;

console.log ("Y =" +y+ "X =" +x)

var nombre = 'Pedro';
var text = "Mi nombre es Pedro Pérez";

console.log (nombre)
console.log (text)

var texto = 'hola a todos!\'soy Pedro un estudiante que aprende a programar.\'';

console.log (texto)
document.write (texto)

var x = 10+5;
console.log (x)

var x = 10;
console.log (x)

var y = x+5+22+1000+50;
console.log (y)

var z = x*2;
console.log (z)

var y = y/4;
console.log (y)

var d= 26%6; 
console.log (d)

var x = 10;
var y = 0;
x-=y+=9  
x=x-(y+9);
console.log (x)

var comparacion = 4==4;
console.log (comparacion)


/*OPERADORES LOGICOS*/


var booleano= (1>2)&&(10<15);
console.log (booleano)

var booleano = (1>2)||(10<15);
console.log (booleano)

var booleano = (!(1<2)) && (10<15) ;
console.log (booleano)


/*CONCATENAR */


var texto1 =  'Mi nombre es Pedro Pérez';
var texto2 = 'Aprendo JavaScript';
console.log (texto1 +' '+texto2);
document.write (texto1 +' '+texto2);

var x= '50';
var y= '200';
console.log (x+' '+y);
document.write (x+' '+y);

/*CONDICIONALES*/

var Numero1 = 15;
var Numero2 = 11;
if (Numero1 < Numero2) 
{alert ('Numero1 Menor Que Numero2')}
else {alert('Numero1 Mayor Que Numero2')}


var course = 2;
if (course == 1) {document.write ("<h1>HTMLTutorial</h1>");}
else if (course == 2) {document.write ("<h1>CSSTutorial</h1>");}
else {document.write ("<h1>JSTutorial</h1>");}


/*SWITCH EVALUAR MULTIPLES CONDICIONES*/


var day  = 4;
switch (day) {
    case 1: document.write('Lunes' + '<br/>' + '<br/>'); break;
    case 2: document.write('Martes' + '<br/>' + '<br/>'); break;
    case 3: document.write('Miercoles' + '<br/>' + '<br/>'); break;
    case 4: document.write('Jueves' + '<br/>' + '<br/>'); break;
    case 5: document.write('Viernes' + '<br/>' + '<br/>'); break;
    case 6: document.write('Sabado' + '<br/>' + '<br/>'); break;
    default: document.write('Domingo' + '<br/>' + '<br/>');
}


/*FOR*/


for (Z=1; Z<=6; Z++) {
    document.write ( Z + '<br/>');     
}


/*WHILE*/


var  z = 0
while (z<=4) {
    document.write(z + '<br/>' + '<br/>'); z++;
}


/*DO WHILE */


var a = 20;
do {
    document.write (a + '<br/>'); a++;
}
while (a <=25);


/*BUCLE (BREAK-CONTINUE)*/

for (h = 0; h <= 10; h++) {
    if (h == 5) {
        break
    }
    document.write (h + '<br/>' + '<br/>');
}


for (h = 0; h <= 10; h++) {
    if (h == 5) {
        continue
    }
    document.write (h + '<br/>');
}


/*FUNCIONES*/

function Saludo (name) {
    alert ("Hola, " + name) ;
}
Saludo ("Andrey");
//Alerts "Hola, Andrey"

function SaludoLargo (name,age) {
    document.write('Mi nombre es ' + name +' y tengo ' + age + ' años.' + '<br/>'+ '<br/>');  
}

SaludoLargo ('Andrey Chacon','29')
// Imprimir Un saludo

function MiFuncion (a,b) {
    return a*b;
}

var X = MiFuncion (12,11) 
console.log (X)
    //Retorna valor 


    /*VENTANAS DE ALERT, PROMPT, CONFIRM*/

alert ('Seguro quieres salir de esta pagina?')    

//Prompt: ventana de solicitud. Utilizada para pedir información 
//al ususario y por ende él ingresa un valor.Ejemplo:

var usuario = prompt ('Por favor ingrese su nombre');
alert (usuario)

// Confirm: ventana de confirmación. Se utiliza para permitir al usuario 
//validar o aceptar algo. El usuario puede dar ok o cancelar para continuar.
//si le da ok el valor retornado es verdadero y si cancela retornará falso. Ejemplo:

var  result = confirm ('Esta apunto de abandonar esta pagina?');
if (result == true) {
    alert ('Gracias por su visita');
}
else {
    alert ('Gracias por permanecer con nosotros');
}

var a = 10;
const b = 'hello';
let c = true;

//Ejemplo: - Diferencia entre var y let


/* function varTest () {
    var x = 1;
    if (true) {
        var x = 3; //Misma Variable
        console.log (x); //2
    }
    console.log (x); // 2
}

function letTest () {
    let x = 1;
    if (true) {
        let x = 2; // diferente variable
        console.log (x) ; // 2
    }
    console.log (x); // 1
} */

for (let i = 0; i < 3; i ++) {
    document.write (i + '<br/>')
}

// const Tiene el mismo concepto de let, solo se diferencia es que son
// inmutables; es decir, no perimiten que sean reasignadas.


let name = 'Andrey';
let msg = `Vienvenido ${name}!`;
console.log (msg);

let g = 8;
let j = 34;
let Mensaje = `La suma es ${g+j}`;
console.log (Mensaje);

let list = ['x' , 'y' , 'z']
for (let val of list) {
    console.log (val);
}

function add (x,y) {
    var suma = x + y;
    console.log (suma);
}

const adicion = (v , w) => {
    let suma = v + w;
    console.log (suma);
}

/* const prueba = (a , b = 3, c = 42) => {
    return a + b + c;
}
console.log (prueba (5)); //50 */

let tree =  {
    height: 10,
    color: 'green',
    grow () {
        this.height += 2;
    }
};
tree.grow ();
console.log (tree.height); // 12

let height = 5;
let health = 100;

let athlete = {
    height,
    health
};

let  prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop] : 'Jack',
    [`user_${id}`]: `${mobile}`
};


var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};

var param = 'size';
var config  = {
    [param]: 12,
    ['mobile' + 
param.charAt(0).toUpperCase() + 
param.slice(1)]: 4
};
console.log (config);


































