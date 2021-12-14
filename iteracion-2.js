// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv$$ = document.createElement("div");

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2$$ = document.createElement("div");
const addP$ = document.createElement("p");

newDiv$$.appendChild(addP$);
document.body.appendChild(newDiv$$);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDivSeis$$ = document.createElement("div");
for (let index = 0; index < 6; index++) {
  const addP$$ = document.createElement("p");
  newDivSeis$$.appendChild(addP$$);
}

document.body.appendChild(newDivSeis$$);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const insertTextP$$ = document.createElement("p");
insertTextP$$.textContent = "Soy dinámico!";

document.body.appendChild(insertTextP$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const newH2Text$$ = document.querySelector(".fn-insert-here");
newH2Text$$.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
//---------creo la ul
const ulList$$ = document.createElement("ul");
//---------creo for of y meto la array de apps en la nueva app
//---------creo el li
//---------meto dentro de la li la array que he metido anteriormente en la nueva app
//---------meto li dentro lu con el appendchild
for (const app of apps) {
  let newLi$$ = document.createElement("li");
  newLi$$.textContent = app;
  ulList$$.appendChild(newLi$$);
}
//---------inyecto la ul dentro del html con appendchild
document.body.appendChild(ulList$$);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
//---------selecciono todos los nodos que contengan .fn-remove-me
//---------y los guardo en delete$$, creo for of que recorre todos los
//---------nodos de delete$$ y los mete en node, elimino node.
const delete$$ = document.querySelectorAll(".fn-remove-me");
for (const node of delete$$) {
  node.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
//---------creo elemento p
const insertPenMedioDiv$$ = document.createElement("p");
//---------selecciono los div
const selectDivs$$ = document.querySelectorAll("div");
//---------doy texto
insertPenMedioDiv$$.textContent = "Voy en medio!";
//---------utilizo funcion insertBefor(new, target)
document.body.insertBefore(insertPenMedioDiv$$, selectDivs$$[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertPall$$ = document.querySelectorAll('.fn-insert-here');

for (const singleDiv of insertPall$$) {
  //---------creo nuevo elemento p
  const newP2$$ = document.createElement('p');
  //---------doy texto a p
  newP2$$.textContent = 'Voy dentro!'
  //---------appenchild dentro de la funcion para darle el texto a cada div
  singleDiv.appendChild(newP2$$);
}
 