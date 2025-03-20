let str: string;
let num: number;
let bool: boolean;
let arr: Array<number>;
let obj: object;

type User = {
  name: string;
  age: number;
};
let user: User;

user = {
  name: "Mykyta",
  age: 20,
};

function userFunction(user: User): string {
  return "Name:" + user.name + "\n" + "Age:" + user.age;
}

console.log(userFunction(user));
