// let user = "ananda_saha484";


let user1 = "ananda_484"; //true
let user2 = "anan";    // false - minimum Characters error
let user3 = "anandakumarsaha";  // false - maximum Characters error
let user4 = "Anandakum";  // false - uppercase error


let username = /^[a-z0-9_#@\-]{6,12}$/;

console.log(`---------------002 username pattern---`);

console.log(`user name >> ${user1} is ${username.test(user1)}`);
console.log(username.test(user1));

console.log(`user name >> ${user2} is ${username.test(user2)} get minimum Characters error`);
console.log(username.test(user2));

console.log(`user name >> ${user3} is ${username.test(user3)} get maximum Characters error`);
console.log(username.test(user3));

console.log(`user name >> ${user4} is ${username.test(user4)} get uppercase error`);
console.log(username.test(user4));