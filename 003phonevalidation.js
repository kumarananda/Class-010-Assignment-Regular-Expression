console.log(`---------------003 phone validation pattern---`);
console.log(`phonevalid pattern 1 `);

let phone1 = "01913918163" //true
let phone2 = "+8801913918163" //true
let phone3 = "8801913918163" //true
let phone4 = "88019139181630" // false - add a extra number
let phone5 = "+81019139181630" // false - error country code


let phonevalid = /^(01|\+8801|8801)[0-9]{9}$/;

console.log(`no. ${phone1} is ${phonevalid.test(phone1)}`);
console.log(phonevalid.test(phone1));

console.log(`no. ${phone2} is ${phonevalid.test(phone2)}`);
console.log(phonevalid.test(phone2));

console.log(`no. ${phone3} is ${phonevalid.test(phone3)} `);
console.log(phonevalid.test(phone3));

console.log(`no. ${phone4} is ${phonevalid.test(phone4)} for add a extra number`);
console.log(phonevalid.test(phone4));

console.log(`no. ${phone5} is ${phonevalid.test(phone5)} for error country code`);
console.log(phonevalid.test(phone5));



console.log(`phonevalid pattern 2 `);

let phone6 = "+8801913918163" 
// let phone6 = "+8801913918163" 

let phonevalid2 = /^(\+88|88)?[0-9]{11}$/;


console.log(phonevalid.test(phone6));



