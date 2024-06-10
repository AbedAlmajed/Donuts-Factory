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
// let name = prompt("Enter Your Name : ");
// let gender = prompt("Enter Your Gender : ").toLowerCase();
// if (gender === "male") {
//   alert("Welcome MR." + name);
// } else if (gender === "female") {
//   alert("Welcome MS." + name);
// } else {
//  while(gender != "male" || gender !="female"){
//   let gender = prompt("Enter Your Gender : ").toLowerCase();
//   if(gender == 'male' || gender =="female")
//     break;
//  }
// }

// let x = confirm("Do you want buy donuts or coffee or ice cream or bakery ??");
// if (x == true) {var order = prompt("write the order want to buy ?");
// alert("The " + order + " will prepare ");}
// console.log("My name is " + name + " " + "my order is " + order);


// let arr=[name,gender,x,order];
// arr.push(name);
// arr.push(gender);
// arr.push(x);
// arr.push(order);
// for (let index = 0; index < arr.length; index++) {
//  console.log(arr);
  
// }


//==============================================================
//task 3 
// let name = prompt("Enter Your Name : ");
// function callGender(){
//   return prompt("Enter Your Gender : ").toLowerCase();
// }
// // let gender = prompt("Enter Your Gender : ").toLowerCase();
// gender=callGender();
// if (gender === "male") {
//   alert("Welcome MR." + name);
// } else if (gender === "female") {
//   alert("Welcome MS." + name);
// } else {
//  while(gender != "male" || gender !="female"){
//   // let gender = prompt("Enter Your Gender : ").toLowerCase();
//   gender=callGender();
//   if(gender == 'male' || gender =="female")
//     break;
//  }
// }

// let x = confirm("Do you want buy donuts or coffee or ice cream or bakery ??");
// if (x == true) {var order = prompt("write the order want to buy ?");
// alert("The " + order + " will prepare ");}
// console.log("My name is " + name + " " + "my order is " + order);


// let arr=[name,gender,x,order];
// // arr.push(name);
// // arr.push(gender);
// // arr.push(x);
// // arr.push(order);
// for (let index = 0; index < arr.length; index++) {
//  console.log(arr);
  
// }

//==============================================================
//task 4


// let name = prompt("Enter Your Name : ");
// let f=document.getElementsByClassName('new')[0];
// let m=document.createElement("p");
// m.innerHTML=name;
// f.appendChild(m);

// function callGender(){
//   return prompt("Enter Your Gender : ").toLowerCase();
// }
// // let gender = prompt("Enter Your Gender : ").toLowerCase();
// gender=callGender();
// if (gender === "male") {
//   alert("Welcome MR." + name);
// } else if (gender === "female") {
//   alert("Welcome MS." + name);
// } else {
//  while(gender != "male" || gender !="female"){
//   // let gender = prompt("Enter Your Gender : ").toLowerCase();
//   gender=callGender();
//   if(gender == 'male' || gender =="female")
//     break;
//  }
// }
// let ol=document.createElement("ol");
// f.appendChild(ol);
// let v=document.createElement("li");
// v.innerHTML="my gender is " + gender;
// ol.appendChild(v);
// let x = confirm("Do you want buy donuts or coffee or ice cream or bakery ??");
// if (x == true) {var order = prompt("write the order want to buy ?");
// alert("The " + order + " will prepare ");}
// console.log("My name is " + name + " " + "my order is " + order);
// let ord=document.createElement("li");
// ord.innerHTML=order;
// ol.appendChild(ord);
// let age=prompt("Enter Your Age : ");
// let ag=document.createElement("li");
// ag.innerHTML=age;
// ol.appendChild(ag);

//=========================================================================
//task 5

document.getElementById("submit").addEventListener("click",function(e){
  e.preventDefault();
  //username
  let p1=document.createElement("p");
  let userName=document.getElementById("username");
  let x=userName.value;
  p1.innerHTML="my name is "+x;
  let div=document.getElementById("newdiv");
  div.appendChild(p1);
  //gender
 let p2=document.createElement("p");
 let gender=document.getElementById("gender");
 let y=gender.value;
 p2.innerHTML=" gender :  "+y;
 div.appendChild(p2);

 //age
 let p3=document.createElement("p");
 let age=document.getElementById("age");
 let z=age.value;
 p3.innerHTML=" Age :  "+z;
 div.appendChild(p3);

 //order
 let p4=document.createElement("p");
 let order=document.getElementById("order");
 let v=order.value;
 p4.innerHTML=" order type  :  "+v;
 div.appendChild(p4);
 

 //choose drink
 let p5=document.createElement("p");
 let drink=document.querySelectorAll('input[name="radio1"]');
 let selected;
 for(let i=0;i<drink.length;i++)
  {
    if(drink[i].checked)
      {
        selected = drink[i].value;
                    break;
      }
  }
  p5.innerHTML=selected;
 div.appendChild(p5);
 document.getElementById("myForm").reset();//To clear the form after submitting
})



