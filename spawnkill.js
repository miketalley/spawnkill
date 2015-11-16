var Weapon = require('./weapon');

var sword = new Weapon();

console.log(sword.constructor, typeof sword, sword instanceof Weapon);

console.log(sword);
