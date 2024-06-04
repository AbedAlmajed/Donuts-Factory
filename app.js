//task 1
// let name = prompt("Enter Your Name : ");
// let gender = prompt("Enter Your Gender : ").toLowerCase();
// if (gender === "male") {
//   alert("Welcome MR." + name);
// } else if (gender === "female") {
//   alert("Welcome MS." + name);
// } else {
//   alert("Welcome " + name);
// }

// let x = confirm("Do you want buy donuts or coffee or ice cream or bakery ??");
// if (x == true) {var order = prompt("write the order want to buy ?");
// alert("The " + order + " will prepare ");}
// console.log("My name is " + name + " " + "my order is " + order);












//====================================================================
// //task 2 
let name = prompt("Enter Your Name : ");
let gender = prompt("Enter Your Gender : ").toLowerCase();
if (gender === "male") {
  alert("Welcome MR." + name);
} else if (gender === "female") {
  alert("Welcome MS." + name);
} else {
 while(gender != "male" || gender !="female"){
  let gender = prompt("Enter Your Gender : ").toLowerCase();
  if(gender == 'male' || gender =="female")
    break;
 }
}

let x = confirm("Do you want buy donuts or coffee or ice cream or bakery ??");
if (x == true) {var order = prompt("write the order want to buy ?");
alert("The " + order + " will prepare ");}
console.log("My name is " + name + " " + "my order is " + order);


let arr=[name,gender,x,order];
arr.push(name);
arr.push(gender);
arr.push(x);
arr.push(order);
for (let index = 0; index < arr.length; index++) {
 console.log(arr);
  
}


