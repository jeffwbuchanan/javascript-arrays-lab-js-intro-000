const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten (){
  kittens.push('Ralph');
};

function destructivelyPrependKitten (){
  kittens.unshift('Bob');
};

function destructivelyRemoveLastKitten (){
  kittens.pop();
};

function destructivelyRemoveFirstKitten (){
  kittens.shift();
};

function appendKitten (name){
  var newKittens = [. . .kittens, name];
  return newKittens;
};
