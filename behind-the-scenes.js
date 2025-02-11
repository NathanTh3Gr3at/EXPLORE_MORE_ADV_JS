const hobbies=['Sports','Cooking']
hobbies.push('Reading')

// Primitve Values: Numbers,strings,booleans and more (undefined)
// Reference Values: Objects
const person={age:32}
function getAdultYears(p){
    p.age-+18;
    return p.age
}