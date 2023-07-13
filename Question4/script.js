{
  console.log(myLetVariable); // undefined
  console.log(myVarVariable); // undefined
  console.log(myConstVariable); // ReferenceError: Cannot access 'myConstVariable' before initialization

  let myLetVariable = "Let Variable";
  var myVarVariable = "Var Variable";
  const myConstVariable = "Const Variable";

  console.log(myLetVariable); // Let Variable
  console.log(myVarVariable); // undefined
  console.log(myConstVariable); // Const Variable
}
