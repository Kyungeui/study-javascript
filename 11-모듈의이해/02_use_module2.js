// 모듈을 통해서 참조된 객체는 Mymodule2의 모든 기능을 내장한 객첼가 된다.
var my = require("./Mymodule2");

console.log(my.name);
console.log(my.property.id);
console.log(my.property.type);

my.say();

console.log(my.home.postcode);
console.log(my.home.adress);
my.home.getAddress