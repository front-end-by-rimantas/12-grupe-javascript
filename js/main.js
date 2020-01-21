"use strict";

// iniciavimo budai: var, let, const
// kintamojo pavadinimas:
//      - pavadini kaip nori, bet...
//      - negali prasideti skaiciumi
//      - negali buti minuso zenklo

var x = 5;
let y = 'a';
const PI = 3.1415;

console.log(y);
console.log(PI);

x = 8;

x += 8;
x = x + 8;
console.log(x);

/* tipai:
    - skaiciai = [1, 2, 3.5, 4] (number)
    - tekstas (string)
    const zmogus = {
        vardas: 'Vardenis',
        amzius: amzius
    }
    - logine reiksme (boolean)
    - sarasas (array)
    - objektas (object)
    - null
    - undefined
    - funkcijos (function)
*/

var r = null;
console.log(r);

// function sum(a) {
//     return 8 + a;
// }
// const sum = function(a) {
//     return 8 + a;
// }
// const sum = (a) => {
//     return 8 + a;
// }
const sum = a => 8 + a;

console.log( sum(9) );

console.log( typeof(5) );
console.log( typeof('5') );
console.log( typeof(false) );

// let amzius = 19;
// amzius++;
// amzius = amzius + 1;
// amzius += 1;

// amzius = 'dvydesimt';
// // amzius++;
// amzius = amzius + 1;
// amzius += 1;

// console.log(amzius);

console.log( 1+2+3+'4' );
console.log( 1+2+3+'4'+5*6 );

const skaiciai = [1, 2, 3.5, 4]
console.log(skaiciai);

const vardas = 'Vardenis';
const amzius = 20;
const lytis = 'turiu';

const zmogus = { vardas, amzius, lytis }
console.log(zmogus);




const suma = (a, b) => a + b;
const skirtumas = (a, b) => a - b;
const sandauga = (a, b) => a * b;
const dalmuo = (a, b) => a / b;
const liekana = (a, b) => a % b;


function operacija( operation, numb1, numb2 ) {
    return operation(numb1, numb2);
}

console.log( operacija( suma, 7, 5) );
console.log( operacija( skirtumas, 7, 5) );
console.log( operacija( sandauga, 7, 5) );
console.log( operacija( dalmuo, 7, 5) );
console.log( operacija( liekana, 7, 5) );



function arGalima( params ) {
    // ar galima eiti i lauka
        // jei lyja, tai tik su skeciu
        // jei sninga, tai tik su kepure
        // jei labai karsta, tai turek vandens
    console.log(params);

    // const krituliai = params.krituliai;
    // const temperatura = params.temperatura;

    const {krituliai, temperatura} = params;

    if ( krituliai === 'lyja' ) {
        return 'gali eiti tik su skeciu';
    }
    if ( krituliai === 'sninga' ) {
        return 'gali eiti tik su kepure';
    }
    if ( temperatura > 25 ) {
        return 'gali eiti, bet turek vandens';
    }
    return 'eik drasiai';
}

const ejimoSalygos = {
    krituliai: false,
    temperatura: 29,
    asd: 'asd'
};

console.log( arGalima(ejimoSalygos) );


/*
OPERATORIAI:
    matematiniai: +, -, *, /, %
    loginiai: ||, &&, >, <, >=, <=, ==, ===, !=, !==, !
    kita: , = ...
    ir t.t.
*/



/*
CIKLAI:
    - for
    - while
    - do..while
    - foreach
    - for-in
    - for-of
    - map
    - filter
    - reduce
*/

// FOR: [0..5)
const abc = ['a', 'b', 'c', 'd', 'e'];
let i=0;

const palyginimas = p => p < abc.length;

for ( ; palyginimas(i); ) {
    console.log(i, '->', abc[i]);
    i++;
}

// WHILE: 
let age = 50;
while ( age < 21 ) {
    console.log(age, 'neparduoda...');
    age++;
}

// DO..WHILE:
let ugis = 220;
do {
    console.log(ugis, 'netinki i krepsininkus...');
    ugis++;
} while (ugis < 200);


const numbers = [8, 7, 5, 9, 2, 3];

// FOREACH
let numbersSuma = 0;
numbers.forEach( n => numbersSuma += n )
console.log(numbersSuma);

console.log('-------------');
// FOR-IN
for ( let n in numbers ) {
    console.log(n);
}

console.log('-------------');
// FOR-OF
for ( let n of numbers ) {
    console.log(n);
}

console.log('-------------');
// MAP
const numbersAfterMap = numbers.map(n => n*2);
console.log(numbersAfterMap);

console.log('-------------');
// FILTER
const numbersAfterFilter = numbers.filter(n => n <= 5);
console.log(numbersAfterFilter);

console.log('-------------');
// FILTER + MAP
const numbersCombo = numbers.filter(n => n<=5)
                            .map(n => n*2)
console.log(numbers);
console.log(numbersCombo);

console.log('-------------');
const amziai = [{a:1}, {a:9}, {a:7}, {a:3}, {a:5}]
// REDUCE
const numbersAfterReduce = numbers.reduce((s, n) => s+n, 0 )
console.log(numbersAfterReduce);

const amziuSuma = amziai.reduce( (t, n) => t + n.a, 0 )
console.log(amziuSuma);



console.log('-------------');
// LOGINES ISRAISKOS

// if, switch, ?

if ( 4 < 0 ) {
    console.log('4>2');
} else {
    if ( true ) {
        console.log(true);
    } else {
        console.log(false);
    }
}

if ( true ) {
    //
}

console.log('--------');

// 5
if ( -Infinity < 0 ||
     5 > Infinity &&
     4 > 2 ) {
    console.log('taip');
}

const gerimas = 'Arbata';
// const gerimas = '';

function geriam( gerimoPavadinimas = 'Pienas' ) {
    // if ( gerimoPavadinimas === '' ) {
    //     return console.error('Nieko negersi?..')
    // }
    return `"${gerimoPavadinimas}" yra labai skanu.`
}

console.log( geriam(gerimas) );
console.log( geriam() );


function x(a = 'a', b = 'b', c = 'c') {
    return;
}

const diena = 'sesta';
const galune = 'dienis';
switch (diena) {
    case 'sesta':
    case 'sekma':
        console.log('SAVAITGALIS!!!');
        break;
    
    case 'pirma':
    case 'antra':
    case 'trecia':
    case 'ketvirta':
    case 'penkta':
        console.log(diena+galune);
        break;
        
    default:
        console.log('tokios dienos nera');
        break;
}

console.log('-----------');

const dienos = ['pirma', 'antra', 'trecia', 'ketvirta', 'penkta', 'sesta', 'sekma'];

const savDiena = 'sesta';

if ( dienos.indexOf(savDiena) >= 0 ) {
    console.log(savDiena+galune);
    if ( savDiena === 'sesta' ||
         savDiena === 'sekma' ) {
        console.log('SAVAITGALIS!!!');
    }
} else {
    console.log('tokios dienos nera');
}

const aa = 4;
const bb = 2;
const cc = 7;
console.log( aa > bb ? 
                aa > cc ? 
                    `${aa} yra daugiau uz ${bb} ir ${cc}`
                    : `${aa} yra daugiau uz ${bb}, bet ne ${cc}`
                : `${aa} ne daugiau uz ${bb}` );
