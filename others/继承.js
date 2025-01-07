// 继承的方式


// 1.原型链继承
function Parent() {
  this.name = 'parent';
  this.play = [1, 2, 3];
}
function Child() {
  this.type = 'child';
}
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.play.push(4);
console.log(child1.play, child2.play); // [1, 2, 3, 4] [1, 2, 3, 4]

// 2.构造函数继承
function Parent() {
  this.name = 'parent';
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
var child1 = new Child();
var child2 = new Child();
child1.name = 'child1';
console.log(child1.name); // child1
console.log(child2.name); // parent


// 3.组合继承，原型链继承和构造函数继承的组合，因为原型链继承会导致原型对象的引用类型属性被所有实例共享，所以需要在构造函数中继承属性
function Parent() {
  this.name = 'parent';
  this.play = [1, 2, 3];
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.play.push(4);
console.log(child1.play, child2.play); // [1, 2, 3, 4] [1, 2, 3]

// 4.寄生组合继承，组合继承的优化，不用每次都调用父类构造函数
function Parent() {
  this.name = 'parent';
  this.play = [1, 2, 3];
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
var child1 = new Child();
var child2 = new Child();
child1.play.push(4);
console.log(child1.play, child2.play); // [1, 2, 3, 4] [1, 2, 3]