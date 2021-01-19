//1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// const numero = parseInt(prompt("inserire un numero"));
//
// if (numero % 2 == 0){
//   document.getElementById('primo-snack').innerHTML= numero;
// } else{
//   document.getElementById('primo-snack').innerHTML= numero +1 ;
// }
//
//
// console.log(numero);




//***************************************************
//2) Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeri = [0,1,2,3,4,5,6,7,8,9];
let pari = [];
let dispari = [];
let verde = "green";
var rosso = "red";

for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] % 2 == 0){
  pari.push([i]);
} else {
  dispari.push([i]);
}
}
// console.log(pari);
// console.log(dispari);

document.getElementById('pari').innerHTML =
`
    <div class="${verde}">
      ${pari}
 `;

document.getElementById('dispari').innerHTML = `
   <div class="${rosso}">
     ${dispari}
   </div>
`;



//***************************************************
//3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaUno = prompt("inserisci prima parola");
const parolaDue = prompt("inserisci seconda parola");

if (parolaUno.length > parolaDue.length) {
  document.getElementById('snack-3').innerHTML = parolaUno;
} else if (parolaDue.length > parolaUno.length) {
  document.getElementById('snack-3').innerHTML = parolaDue;
} else {
  document.getElementById('snack-3').innerHTML = parolaUno + "," + parolaDue
}
