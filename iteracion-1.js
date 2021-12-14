// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showBtn$$ = document.body.querySelector(".showme");

console.log(showBtn$$);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showH1$$ = document.body.querySelector("#pillado");

console.log(showH1$$);

// 1.3 Usa querySelector para mostrar por consola todos los p
const showAllP$$ = document.body.querySelectorAll("p");

console.log(showAllP$$);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const showPokemonElem$$ = document.body.querySelectorAll('.pokemon');

console.log(showPokemonElem$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".
const showAllDataFun$$ = document.body.querySelectorAll('[data-function="testMe"]');

console.log(showAllDataFun$$);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const shshowAllDataFun$$ = document.body.querySelectorAll('[data-function="testMe"]');

console.log(showAllDataFun$$[2]);
 