//console.log('Connected');

const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// DOT NOTATION***
//Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION *****
//const password = 'password'; 
//console.log(user[password]);
//console.log(user['username']); //string, number, or variable in needed in []
//console.log(user['favoriteNumber']);
//console.log(user.favoriteNumber);

//ASSIGNING VALUES *****

const newUser = {
  isNew: true,
}

//newUser.username = 'fresh.prince'; //add new key = value (dot notation)
//newUser['password'] = 'abcd1234'; //bracket notation, add new key = value
//console.log(newUser);

//METHODS (FUNCTIONS AS VALUES)*********
const newObject = {
  username: 'Chris',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

//newObject.username = 'Aja';
//newObject.sayHello(); //need () to call the function, not just the key

//ITERATE OVER AN OBJECT****
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0897',
  lovesJavascript: true,
  favoriteNumber: 12,
}

//FOR IN LOOP******
for (let key in userTwo) {
  console.log(key); //keys
  console.log(userTwo[key]); //values
  //console.log(userTwo.key) //dot notation doesn't work
}
