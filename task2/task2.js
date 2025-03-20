function printPerson(p) {
    console.log("Name: ".concat(p.name));
    console.log("Age: ".concat(p.age));
    console.log("Address: ".concat(p.address ? p.address : "Not provided"));
}
var person = {
    name: "Mykyta",
    age: 20,
    address: "Street 1"
};
printPerson(person);
