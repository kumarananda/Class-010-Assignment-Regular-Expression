
let password1 = "ajaffde02" //true
let password2 = "ajaff" // false -  minimum value error
let password3 = "ajaffg_vAA.-" // true
let password4 = "ajaffg_vAAdghAERG" // false - maximum value error




let passwordpattern = /^[a-zA-Z0-9\._\-@]{8,16}$/;


console.log(`---------------password validation pattern---`);
console.log(passwordpattern.test(password1));
console.log(passwordpattern.test(password2));
console.log(passwordpattern.test(password3));
console.log(passwordpattern.test(password4));
