
// task 1 -------------------
// Parašykite f-ją, kuri išvestu masyvo elementus konsolėje

let names = ['Jonas', 'Petras', 'Veronika', 'Giedrius', 'Antanina']
function name_list(){
    names.forEach(name => console.log(name));
}

name_list();

//task 2 --------------------------

// x Sukurkite tuščią masyvą 
// x Įdėkite 4 elementus į masyvą 
// x Pridėkite 1 elementą į masyvo galą 
// x Ištrinkite vidurinį elementą ir išveskite jį į consolę 
// x Išveskite į consolę masyvą pasirašytos f-jos pagalba. 
// x Pakeiskite 2 elementą nauja reikšme 
// x Pridėkite du naujus elementus į masyvo pradžią 
// Išveskite į consolę masyvą pasirašytos f-jos pagalba.

let flowers = [];
flowers = ['roze', 'lelija', 'gvazdikas', 'pinavija'];
console.log(flowers)
flowers.push('begonija');
console.log(flowers)
let middle_item = flowers.splice(2, 1); //index, count. can add or remove items
console.log(flowers)
console.log(middle_item);

function show_flowers(){
    flowers.map(flower => console.log(flower));
}

show_flowers();

flowers[1] = 'ramune';
console.log(flowers);

flowers.unshift('neuzmirstuole', 'pluke');
console.log(flowers);

show_flowers();
