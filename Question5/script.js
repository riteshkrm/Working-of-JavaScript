{
  console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
  let myVariable = "Hello, TDZ!";
  console.log(myVariable); // Hello, TDZ!
}
