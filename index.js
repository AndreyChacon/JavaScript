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

/*OBJECT ASSIGN*/
let person = {
    name:`jack` ,
    age: 18,
    sex: `male`
};
let student = {
    name:  `Bob` ,
    age: 20 ,
    xp:`2`    
};
let newstudent = Object.assign({},person, student);
console.log(person.name);

/*DUPLICADO OJETO*/

let person_1= {
    name: `jack` ,
    age: 18
};
let newperson = Object.assign({} ,person);
newperson.name = `Bob`;
console.log (person.name); // Jack
console.log(newperson.name); // Bob

/*DAR VALOR A UN OBJETO*/
let person_2=  {
    name: `jack` ,
    age: 18
};
let newperson_2= Object.assign({}, person, {name: `Bob`});

/*DESESTRUCTURACION*/

let arr = [`1`, `2`, `3`];
let [ one, two, three] = arr;
console.log(one);//1
console.log(two);//2
console.log(three);//3

/*DESCOMPONER ARRAY DEVUELTO POR UNA FUNCION*/
let ae =  ()=> {
    return [1 , 3, 2];
};
let [one1,  ,two1] = ae();
console.log(one1);
console.log(two1);

/*DESCOMPONER OBJETOS*/
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h);// 100
console.log(s);//true
let a_1, b_1;
({a_1, b_1} = {a_1: `Hello `,b_1:`Jack`});
console.log(a_1 + b_1 );// Hello Jack

let {a_2, b_2} =  {a_2:`Hello `, b_2: 
`Jack`} ;
console.log(a_2+ b_2);
 
var o = {h: 42, s: true};
var { h: foo, s: bar} =o;
//console.log(h); //Error
console.log(foo); // 42

var obj1 = {id: 42, name: "Jack"};
let {id_obj = 10, age = 20} = obj1;

console.log(id_obj); //42
console.log(age);//20


/*PARAMETROS REST Y SPREAD*/
function containsAll (arr,...nums)
{
    for(let num of nums){
        if(arr.indexOf (num)=== -1)
    {
        return false;
    }
}
    return true;
}
/*SPREAD*/
function myfunction(w, x, y, z){
    console.log(w + x + y + z) ;
}
var args = [ 1, 2, 3];
myfunction.apply(null, args.concat(4));

const myfunction1 = (w, x, y, z)=>
{
    console.log (w + x + y + z);

};
let args1 = [1, 2, 3];
myfunction(...args, 4);



/*falta codigo fecha*/
var dateFields = [1970, 0, 1]; //1 jan 1970
var date = new
Date(1970, 02, 4);
console.log(date);


/*SPREAD EN LITERALS DE OBJETOS*/
var arr3 = ["one", "two", "five"];
arr.splice(2, 0, "three");
arr.splice(3, 0, "four");
console.log(arr);
let newArr = ['three', 'four'];
let arr_3 = ['one','two',...newArr, 'five'];
console.log(arr3);

/*SPREAD EN LITERALS DE OBJETOS*/
const obj0= { foo: 'bar' , x: 42 };
const obj01= { foo: 'baz' , y: 5};
const merge = (...Object) => ({...Object});
let mergeobj = merge (obj0, obj1);
let mergeobj2=merge({},obj0,obj01);

var arr_1 = ["one", "two", "five"];
arr.splice(2, 0, "three");
arr.splice(3, 0, "four");
console.log(arr_1);

let newarr = [`three` , `four`];
let arr_2= [`one` , `two`,newarr, `five`];
console.log(arr_2)
 

const obj3 = {fooo: 'bar', x: 42};
const obj4 = { foo: 'baz', y: 5};
const merge1= (...objects) => 
({...objects});
let mergeobj3 = merge1(obj3,obj4);
//{0: {foo: 'bar' , x:42 }, 1:
{ foo: 'baz' , y; 5 } 
let mergeobj4 = merge1 ({},obj3,obj4);
//{0: {}, 1: {foo: 'bar' ,x:42},2:{foo: 'baz', y:5 } }

/*CLASES*/
class rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width
    }
}
const square_1= new rectangle(5,5);
const poster = new rectangle(2,3);

var square = class rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
var square = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};
 
/*METODOS DE CLASE*/
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area (){
        return this.calcArea();
    
    }
    calcArea() {
        return this.height * this.width
    }
}
    const _1 = new Rectangle(5,5);
    console.log(square.area); //25

/*METODO STATIC*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance (a, b){
        const  dx = a.x - b.x;
        const  dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
 const p1 = new Point (7, 2);
 const p2 = new Point (3,8);
 console.log(Point.distance(p1,p2));

 /*HERENCIA*/

 class Animal{
     constructor(name){
         this.name = name;

     }
     speak(){
         console.log(this.name + 'makes a noise');
            
     }
 }
 class Dog extends Animal {
     speak(){
         console.log(this.name + ' barks.');
     }
 }
 let dog = new Dog ('Rex');
 dog.speak();

/*se utiliza la palabra SUPER para utilizar los metodos del padre*/
 class Animalp{
     constructor(name) {
         this.name = name;
     }
 speak() {
     console.log( this.name + 'makes a noise.');
    }
}

class Dogp extends Animal {
    speak(){
        super.speak(); //super
        console.log(this.name + 'barks.');
    }
}
let dogp = new Dogp ('Rex');
dog.speak();

/*MAP Y SET*/

let map = new Map([['k1', 'v1'],['k2', 'v2']]);
console.log(map.size);//2

let map1 = new Map();
map1.set('k1', 'v1').set('k2', 'v2');
console.log(map1.get('k1'));//v1
console.log(map1.has('k2'));//true
for (let kv of map1.entries())
    console.log(kv[0] + " : " + kv[1]);


let set = new  Set([1, 2, 4, 2, 59, 9, 4, 9,1]);
console.log (set.size);//5

let set1 = new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for (let v of set.values())
console.log(v);

/*PROMISES*/

function asyncFunc (work){
    return new
Promise(function(resolve,reject)
{
    if(work === "")
    reject(Error ("Nothing"));
    setTimeout (function() {
        resolve (work);
    }, 10000);
});
}
asyncFunc("work 1") //Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error){
    console.log(error);
})
.then(function(result) {
    console.log (result);
}, function(error) {
    console.log(error);
});
console.log("End");

/*ITERADORES Y GENERADORES*/

let myIterableObj = {
    [Symbol.iterator] : function* ()
    {
    yield 1; yield 2; yield 3;
}}
    console.log([myIterableObj]);


/*EJEMPLO DE ITINADORES*/
/*falta ejemplo*/



const arr4 = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function*()
{
    for(let index of arr){
        yield`${index}`;
    }
}
};
const all = [...my_obj]
.map(i => parseInt(i,10))
.map(Math.sqrt)
.filter((i) => i <5)
.reduce((i,d) => i + d);
console.log(all);

/*MODULOS*/
/*falta ejemplo*/


/*METODOS INTEGRADOS*/
[4, 5, 1, 8, 2, 0].filter (function (x){
    return x > 3;
}) [0];

[4, 5, 1, 8, 2, 0].find (x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex (x => x > 3);

console.log(Array(3 + 1 ).join("foo")); //foofoofoo

console.log("foo".repeat(3)); //foofoofoo

"SoloLearn" .indexOf("Solo") ===
0; //true

"SoloLearn" .indexOf("Solo") ===(4
-"solo" .length);//true

"SoloLearn" .indexOf("Solo") !== -1; //true
"SoloLearn" .indexOf("olo", 1) !== -1; //true
"SoloLearn" .indexOf("olo", 2) !== -1; // false
"SoloLearn" .startsWith("Solo",0) ; // true
"SoloLearn" .endsWith("Solo",4); // true
"SoloLearn" .includes("lole");  //true
"SoloLearn" .includes("olo", 1); //true
"SoloLearn" .includes("olo", 2); //false


































