
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


//task 3
// Parašykite f-ją kur konvertuotų masyvą į stringą 
// x arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456" 
// x arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef" 
// x arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

let skaiciai = [1, 2, 3, 4, 5, 6];
let raides = ["a", "b", "c", "d", "e", "f"];
let ivairus = [1, 2, 3, "a", "s", "dAAAA"];

function array_to_string (array_name){
    return array_name.join('');
} 
console.log(array_to_string(skaiciai));
console.log(array_to_string(raides));
console.log(array_to_string(ivairus));

//task 4
// Parašykite f-ją kuri apverstų masyvą
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1] 
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9] 
// reverse([]) ➞ []

let array_1 = [1, 2, 3, 4];
let array_2 = [9, 9, 2, 3, 4];
let array_3 = [];

function reversed_array (array_name){
    return array_name.reverse();
}

let rev_array_1 = array_1.reverse()
let rev_array_2 = array_2.reverse()
let rev_array_3 = array_3.reverse()
console.log(rev_array_1)
console.log(rev_array_2)
console.log(rev_array_3)
