let email1 = "ananda.saha484@gmail.com";
let email2 = "orders@orders.daraz.com.bd";
let email3 = "personal_info@domain.com";
let erroremail1 = "Personal_info@domain.com";
let erroremail2 = "-orders@orders.daraz.com.bd";
let erroremail3 = "@ananda.saha484@gmail.com";

// cannot receive with start . , ^ . -+!`\ / ,? @ & ( ) _ tab * [] \^]




let emailpattern = /^([^\.\-\+\!\`\\\/\,\?@&()_\     \*\[\]\^A-Z]{1}[a-z0-9_\.]{3,30})@[a-z0-9\-\.]{2,30}\.[a-z]{2,5}$/;
// let emailpattern = /^[a-z0-9-_\.]*@[a-z0-9-]*\.[a-z]{2,15}$/;


console.log(`---------------email pattern---`);
console.log(emailpattern.test(email1));
console.log(emailpattern.test(email2));
console.log(emailpattern.test(email3));
console.log(`--------------error-email---`);
console.log(emailpattern.test(erroremail1));
console.log(emailpattern.test(erroremail2));
console.log(emailpattern.test(erroremail3));



