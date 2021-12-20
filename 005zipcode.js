
let code1 = "1215" //true
let code2 = "12155" //false for maxiam value error




let zipcode = /^[0-9]{4}$/;


console.log(`---------------005 Bangladesh zipcode pattern---`);

console.log(`Tejgaon Post code ${code1} is true`);
console.log(zipcode.test(code1));
console.log(`Tejgaon Post code ${code2} is ${zipcode.test(code2)} for one more digit`);
console.log(zipcode.test(code2)); 