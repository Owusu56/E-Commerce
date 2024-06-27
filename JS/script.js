

// function kay(input){

// value =prompt(input)
// return value

// }

// kay("Go away")
// alert("HI, Its either you stay or " + kay)



// practical();

//     function practical(){

//       user = prompt("What is your name?")
//       alert("Hi, your name is " + user)

//    }


   // let kay= prompt('What is your name?');

   //    console.log(kay);
   //       document.body.style = 'background:greenyellow; font-size:100px';
   //        // alert('name')
   //       //  let Integer;
   //        let myInteger;
   // //  myInteger =89;
   // //  myInteger =true;
   // //  myInteger ='A';
   // //  myInteger ="Kay";
   // //  myInteger =9.455;
   //  myInteger =[true,89,'A',"Kay",9.455]

   //  console.log(myInteger[4]);



// Operators and IF Statement

// Relational or comparison operator

// --> == , != , > ,< ,  ===,  >= , <=

// Arithmetic Operator

// --> + , - , / , * 

// Logical Operator

// --> OR(||) NOT(!) AND(&&)\

// Assignment Operator

// --> i+=(i = i + 1)  , *= , /= , -= ,++i(i = i + 1) ,--i(i = i - 1), =




// let login = document.getElementById("login");

// login.addEventListener("click",(event)=>{

//    event.preventDefault()
//    console.log("You clicked green button");

//    let username = document.getElementById("email");
//    console.log("username: "+username.value)

//    let email = document.getElementById("email");
//    console.log("email: "+email.value)


//    let password = document.getElementById("password");
//    console.log("password: "+password.value)

//    if(username.value=='Nana' && email.value == "Admin@gmail.com" && password.value == "123456789" && age.value == "18"){

//       window.location.href('need.html');

//    }else{

//       console.log("Sorry, you cant vote")

//    }
// })



// let bool =false ;

// pin1 = 3;

// if(pin1 ==0){

//    console.log("You can vote.")

// }else{

//    console.log("Sorry, you can't vote.")

// }

// let age;
// age = 19;

// if(age >= 18){

// console.log("You can vote");

// }else{

// console.log("Sorry, you cant vote");

// }

// let num1=10;
// let num2=20;
// let num3=30;

// if (num1 > num2 && num1 > num3){

//    console.log("The first number is the greatest");
// }
// else if(num2 > num3 && num2 > num11){

//    console.log("The second number is the greatest");
// }
// else{

//    console.log("The third number is the greatest");
// }

// let Option = 'a'

// switch(Option){
//   case 'a' :console.log("ONE");
//   break;
//   case 'b' :console.log("TWO");
//   break;
//   case 'c' :console.log("THREE");
//   break;
//   case 'd' :console.log("FOUR");
//   break;
//   default :console.log("Wrong Input");
//   break;

// }

// let children = 100;
// let women = 300;
// let men = 400;

// let age =140;
// let gender = "female";

// if (age < 18){

//   console.log("Congratulations, you recieve $100")
// }
// else if(age >= 18 && gender == "male"){

//   console.log("You are a man, you recieve $400 ")
// }
// else if(age >=18 && gender == "female"){

//   console.log("You are a woman, hence you recieve $300")
// }


// LOOPING DATA

// for loop
// while loop
// do while loop

   // FOR LOOP
// for(initial,condition,update){

//    code to loop
// }

// let MyArray = ['Me','You','Agadoo','let','me','see','the','waakye','agadoo']

// for(var Giscard = 0; Giscard < 10; Giscard = Giscard + 1){

//     console.log(MyArray[Giscard])
//     console.log('Giscard == ' + Giscard + ' + 1')

// }

//    //  WHILE LOOP
// initial;
// while(condition){
//    update
// }

// let Giscard = 0;
// while(Giscard < 10){

// Giscard = Giscard + 1
// console.log(MyArray[Giscard])
//     console.log('Giscard == ' + Giscard + ' + 1')
// }


// do{

// //Execute code here
// var userinput = prompt("Give something")

// console.log("Menu")
// console.log("1.Start")
// console.log("2.Pause")
// console.log("3.Resume")
// console.log("x.Quit")
// // console.log(userinput + " " +  typeof(userinput));
// switch (userinput) {
//    case "1":console.log("Starting the game");
//       break;
//    case "2":console.log("Pausing the game");
//       break;
//    case "3":console.log("Resuming the game");
//       break;
//    case "x":console.log("Enjoy your day");
//       break;

//    default:console.log("Give a valid input")
//       break;
// }


// }while(/*Condition*/0);



// <------------------TYPES OF FUNCTIONS------------------->
// Anonymous function
// Arrow function
// Function with a name


// ANONYMOUS FUNCTION
// let resultA = function (params) {

// params.target.innerHTML
// }


// // ARROW FUNCTION
// let resultB = (params) => {

// console.log("Arrow Function")
// console.log("Arrow Function")
// console.log("Arrow Function")
// }


// // FUNCTION WITH A NAME
// let resultC = function name(params){


// }



// let login = document.getElementById("Login")

// login.addEventListener("click", (event) => {

//    console.log();
//    event.target.innerText = '<h1 style = "color:red; background:blue" >Hi </h1>';
//    setTimeout(()=>{

//       event.target.innerText = '<h1 style = "color:red; background:blue" >Hi </h1>'; 
//    },10000)
//    event.target.innerText = '<h1 style = "color:red; background:blue" >Hi </h1>'; 
// console.log("Arrow Function")
// console.log("Arrow Function")
// console.log("Arrow Function")

// })

var Database = [
   {
      StudentNo:1,
      name : "Giscard",
      password : "123456789"
   },
   {
      StudentNo:1,
      name : "Jones",
      password : "12345678"
   },
   {
      StudentNo:1,
      name : "Kay",
      password : "1234567"
   }
]

Database.forEach(studio =>{
   console.log(studio.image);

   let element = document.createElement("div")

   element.innerHTML = document.querySelector(".js-display").innerHTML;

   
})

function login(username,password) {

   var i = 0;

   while (i < Database.length) {




      if(username==Database[i].name && password ==Database[i].password){


         return true
      }

      i++
   }
}

let loginButton = document.getElementById("loginButton");

loginButton.onclick = (event)=>{

   event.preventDefault();

   let username = document.getElementById("email");
   console.log(username.value);
   let password = document.getElementById("password");
   console.log(password.value);

if (login( "Giscard", "123456789")) {

   console.log("Hello");

}else {

console.log("Enter Valid Credentials")

}
}




































































































