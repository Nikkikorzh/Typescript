var str;
var num;
var bool;
var arr;
var obj;
var user;
user = {
    name: "Mykyta",
    age: 20,
};
function userFunction(user) {
    return "Name:" + user.name + "\n" + "Age:" + user.age;
}
console.log(userFunction(user));
