console.log(`---------------phone validation pattern---`);
console.log(`phonevalid pattern 1 `);

let phone1 = "01913918163" //true
let phone2 = "+8801913918163" //true
let phone3 = "8801913918163" //true
let phone4 = "88019139181630" // false - add a extra number
let phone5 = "+81019139181630" // false - error country code


let phonevalid = /^(01|\+8801|8801)[0-9]{9}$/;


console.log(phonevalid.test(phone1));
console.log(phonevalid.test(phone2));
console.log(phonevalid.test(phone3));
console.log(phonevalid.test(phone4));
console.log(phonevalid.test(phone5));



console.log(`phonevalid pattern 2 `);

let phone6 = "+8801913918163" 
// let phone6 = "+8801913918163" 

let phonevalid2 = /^(\+88|88)?[0-9]{11}$/;


console.log(phonevalid.test(phone6));



