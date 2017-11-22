window.onload = function() {

          //DEFAULT PARAMETERS

  // function log(num=10){
  //   console.log(num);
  // }
  // log();  //console.logs 10 by default
  // log(5);  //console.logs 5

  // function logNinja(name="john", belt="Red", age=25){
  //   console.log("My name is " + name + " and my belt colour is " + belt + " and my age is " + age);
  // }
  // logNinja();  //console.logs default parameters
  // logNinja("Arthur", "white", 30);


          // CONSTANTS

  // const pi = 3.142;
  //
  // function calcArea(r){
  //   const pi = 10;  //defines only inside the function scoope
  //   console.log("The area is: " + pi * r * r);
  // }
  //
  // console.log(pi);
  // calcArea(5);


          // THE LET KEYWORD

  // var x = 10;
  //
  // if(x > 5){
  //   let x = 5;  //defines only inside the function scoope
  //   console.log("inside: " + x);
  // }
  //
  // console.log("outside: " + x);


            // LET vs VAR

  //   var items = document.getElementsByTagName("li");
  //
  //   var y = 5;
  //
  //   for(let x = 0; x < items.length; x++){  //if VAR used, x is always 4(items length)
  //     items[x].onclick = function(){
  //       console.log(x);
  //     }
  //   }
  // console.log(y); // VAR is global scope variable, LET is not


          // THE SPREAD OPERATOR

    // var nums1 = [1,2,3];
    // var nums2 = [nums1, 4,5,6];
    //
    // console.log(nums2);  // console.logs [Array[3], 4, 5, 6]
    //
    // var nums2 = [...nums1, 4,5,6];  //spred operator used
    //
    // console.log(nums2);  // console.logs [1, 2, 3, 4, 5, 6]

    // var nums = [3,4,9];
    //
    // function addNums(a,b,c){
    //   console.log(a+b+c);
    // }
    //
    // addNums(nums);  //logs 3,4,9undefinedundefined (expects 3 elements, not 1 array)
    // addNums(...nums);  //logs 16(sum of nums)


            //TEMPLATE STRINGS (use ``)

    // var temp = `hello,
    //
    //  my name is Arthur`; //NOT A SINGLE QUOTE '', ``
    //
    //  console.log(temp); //LOGS WITH SPACES AND EMPTY LINES
    //
    //  function greeting(name, age){
    //    console.log(`my name is ${name}
    //      my age is ${age}, next year will be ${age+1}`);
    //  }
    //  greeting("Arthur", 30);


            //NEW STRING METHODS

    // var str = "I'm a striiing ";
    //
    // console.log(str.repeat(5));
    //
    // console.log(str.startsWith("I'm")); //RETURNS TRUE
    //
    // console.log(str.endsWith("striii", str.length - 3)); //RETURNS TRUE
    //
    // console.log(str.includes("striiing")); //RETURNS TRUE


    // var youSay = "goodbye";
    // if (youSay.startsWith("goodbye")){  //EXAMPLE OF USE
    //   var iSay = "hello";
    // }
    // console.log(`you say ${youSay}, I say ${iSay}`);


            //ARROW FUNCTIONS =>

    var greeting = function(){ //INITIAL FUNCTION
      console.log("Heeyya");
    }
    greeting();

    var greeting = () => console.log("Whassap"); //ES6 SYNTAX
    greeting();

    var greeting = name => console.log(`${name} says wassap`);
    greeting("Arthur");


}
