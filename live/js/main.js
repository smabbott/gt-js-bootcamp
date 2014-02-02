var somethingWasClicked = function(){
  console.log('something was clicked');
  console.log(this);
};
  

window.onload = function(){

  var ixd = document.getElementById('IxD');
  ixd.addEventListener('click', somethingWasClicked);
  var wrapper = document.getElementById('wrapper');
  wrapper.addEventListener('click', somethingWasClicked);
};








// var wasClicked = function(){
//   console.log('something was clicked');
// };

// window.onload = function(){

//   document.getElementById('outer').addEventListener('click', wasClicked);

// };

