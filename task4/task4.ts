function identity<T>(data : T) {
    return data;
}
  
console.log(identity(42));
console.log(identity("123"));
console.log(identity(false));