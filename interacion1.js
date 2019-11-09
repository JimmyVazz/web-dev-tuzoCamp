let hacker1 = "Jimmy"
console.log(hacker1)
let hacker2 = "Krome"
console.log(hacker2)

//Iteracion 2
if(hacker1.length > hacker2.length){
    console.log("El conductor" + hacker1 + "es mas largo con " + hacker1.length + " caracteres") 
}else if(hacker1.length === hacker2.length){
    console.log("Tienen el mismo tamaño con " + hacker1.length + " caracteres")
}else{
    console.log("El navegador" + hacker1 + "es mas largo con " + hacker2.length + " caracteres")
}

//iteracion 3

let prueba = hacker1.split("")
let print = prueba.map(e=> e.toUpperCase()
)
let final = print.join(" ")
console.log(final)

let prueba2 = hacker2.split("").reverse();
let final2 = prueba2.join("")
console.log(final2)

if(hacker1.localeCompare(hacker2) === 1){
    console.log("hacker1 va primero")
}else if(hacker1.localeCompare(hacker2) === -1){
    console.log("hacker2 va primero " )
}else{
    console.log("tienen el mismo nombre?")
}