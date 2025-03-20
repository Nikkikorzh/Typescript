interface Person {
    name: string;
    age: number;
    address?: string;
  }
  
  function printPerson(p : Person) {
    console.log(`Name: ${p.name}`);
    console.log(`Age: ${p.age}`);
    console.log(`Address: ${p.address  ? p.address : "Not provided"}`);
  }
  const person : Person = {
    name:"Mykyta",
    age:20,
    address:"Street 1"
  }
  printPerson(person);