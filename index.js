var x = 10;
console.log('hello');
var y = 20;
function Mouse(name) {
    this.name = name;
}

Mouse.prototype.eat = function(name) {
    name = 'DOG';
};

function Cat(nameCat) {
    this.stomach = [];
}

console.log('Cat');