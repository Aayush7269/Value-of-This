// *****************// (value of this)******************

//in global is window**********************
console.log(this);

//   function  is window**********************
function abc(){
    console.log(this);
}
abc();
// inside method is the same object****************
var obj= {
    name: function(){
        console.log(this) // function inside the method is object
        
    },
    age: 26
}
obj.name();// running the method

// ***********************************************//in function inside the method is window (es5)
var obj2 ={
    sayName: function(){
        function childFnc(){
            console.log(this);//we cannot access this.something inside here(function inside method)because the value of this in here is window because it rebinds the value
        }
        childFnc();
    }
}
obj2.sayName();
// ****************************************************************
// arrow function inside the method is window (es6) is obj 
var obj3 ={
    saName: function(){
        const child=()=>{
     console.log(this);// its obj we can access this.something inside here(arrow function inside method )because the arrow function gets the value from the parent so it gets the value from method where the value of this is object
        }
        child();
    }
}
obj3.saName();
  
function add(){
    console.log(this);////////the value of this inside the constructor function is 
}
  const ans= new add(); // if you call the function using new 
// *************************************************
// the value of this in eventlistener is the element itself("buton")its html 
  const button = document.querySelector("button")
   button.addEventListener("click", function(){
    console.log(this);
   })
