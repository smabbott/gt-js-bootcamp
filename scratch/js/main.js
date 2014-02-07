
var robot = {
  name: 'Mr. Roboto',
  legs: 4,
  materials: ['plastic', 'aluminium', 'avocados'],
  currentSpeed:0,
  mood : 'mellow',
  direction:'sideways',
  run: function(spd){
    this.currentSpeed += spd;
    this.direction = 'forward';
    this.mood = 'anxious';
  }
};

var foo = function(){
  console.log(this);
};

var r2d2 = {
  name:'r2d2',
  bar:foo
};


var bar = function(){
  var baz = 'mysterious things';
  console.log(baz);
};