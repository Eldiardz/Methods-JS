let str = "For the Emperor"
console.log(str.charAt(8));  // "E"


let str2 = "For the Emperor"
console.log(str2.includes("Emperor")); // true


let str3 = "For the Emperor"
console.log(str3.replace("Emperor", "Chaos")); // "For the Chaos"


let str4 = "For the Emperor"
console.log(str4.slice(0, 9)); // "For the E"


let str5 = "for the emperor"
console.log(str5.toUpperCase()); // "FOR THE EMPEROR"


let str6 = "a,b,c,d"
console.log(str6. split(",")); // ["a", "b", "c", "d"]


let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]


let arrr3 = [1, 2, 3, 4]
console.log(arrr3.filter(num => num > 2)) // [3, 4]

let arrr4 = [1, 2, 3, 4]
console.log(arrr4.find(num => num > 3)); // 4


let arrr5 = [1, 2, 3, 4]
console.log(arrr5.map(num => num * 15)); // [15, 30, 45, 60]

let arrr6 = [1, 2];
arrr6.push(3);
console.log(arrr6);  // [1, 2, 3]

let arrr7 = [1, 2, 3];
arrr7.pop();
console.log(arrr7); // [1, 2]

let peremoga = { Z: 1}
let goida = { V: 2}
Object.assign(peremoga, goida)
console.log(peremoga) // {Z: 1}, V: 2}

let gol = {a: 1, b: 2}
console.log(Object.keys(gol)); // ['a', 'b']

let gol1 = {a: 1, b: 2}
console.log(Object.values(gol1)); // [1, 2]

let zzz = {a: 1, b: 2}
console.log(Object.entries(zzz))