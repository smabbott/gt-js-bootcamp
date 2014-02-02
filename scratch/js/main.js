// var PartSelector = function(type){
//   return {
//     // data properties
//     type:type,

//     // behavior
//     select:function(e){

//     }
//   };
// };

// $(function(){

//   $('#head-selector').on('change', function(event){
//     event.preventDefault();
//     $('.workbench .head').text($(this).val());
//   });

//   $('#torso-selector').on('change', function(event){
//     event.preventDefault();
//     $('.workbench .torso').text($(this).val());
//   });

//   $('#legs-selector').on('change', function(event){
//     event.preventDefault();
//     $('.workbench .legs').text($(this).val());
//   });

// });

var PartSelector = function(type){

  this.type = type;
  return this;
};

// var createSelector = function(name){
//   $('#'+ name +'-selector').on('change', function(event){
//     event.preventDefault();
//     $('.workbench .'+ name).text($(this).val());
//   });
// };

// $(document).ready(function(){

//   createSelector('head');
//   createSelector('torso');
//   createSelector('legs');

// });

