// let user = "ananda_saha484";


let user1 = "ananda_484"; //true
let user2 = "anan";    // false - minimum Characters error
let user3 = "anandakumarsaha";  // false - maximum Characters error
let user4 = "Anandakum";  // false - uppercase error



// let username = /[a-z0-9_]{5,16}/; //get error result
let username = /^[a-z0-9_]{5,12}$/;

console.log(`---------------username pattern---`);
console.log(username.test(user1));
console.log(username.test(user2));
console.log(username.test(user3));
console.log(username.test(user4));