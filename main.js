//console.log('Connected');

function greetingOne(arg) {
  return `Hello ${arg}!`;
}

function greetingTwo(arg) {
  return `Goodbye ${arg}!`;
}

//A FUNCTION THAT TAKES IN A FUNCTION AS AN ARGUMENT
function response(arg, cb) {
  return cb(arg); //cb is a taco (a place holder)
}


//CONSOLE LOGGING THE RETURN STATEMENTS OF EACH CALLBACK
console.log(response('Chris', greetingOne));
console.log(response('Chris', greetingTwo));
