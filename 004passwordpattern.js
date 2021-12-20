
let password1 = "ajaffde_-02" //true
let password2 = "ajaff" // false -  minimum value error
let password3 = "ajaffg_vAA.-" // true
let password4 = "ajaffg_vAAdghAERG" // false - maximum value error



let passwordpattern = /^[a-zA-Z0-9\._#\-@]{8,16}$/;


console.log(`---------------004 password validation pattern---`);
console.log(`--004.1 ${password1} is true pattern`);
console.log(passwordpattern.test(password1));
console.log(`--004.2 ${password2} is false -  minimum value error`);
console.log(passwordpattern.test(password2));
console.log(`--004.3 ${password3} is true`);
console.log(passwordpattern.test(password3));
console.log(`--004.4 ${password4} is false -  maximum value error`);
console.log(passwordpattern.test(password4));
