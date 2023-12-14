console.log("from external ");
console.log(window);//global object



var i;
i="hello";
console.log("i:",i);

var a= 10;
console.log("a:",a);

var str = "this is a string";
console.log("str:",str);
console.log("type of str :", typeof str);

var num = 100;
console.log("num:",num);
console.log("type of num :", typeof num);

var bool = true;
console.log("bool:",bool);
console.log("type of bool :" ,typeof bool);

var a1 =  undefined;
console.log("str:",a1);
console.log("type of a1 :" ,typeof a1);

var b1 = null;
console.log("b1:",b1);
console.log("type of b1 :", typeof b1);

var c1 ;
console.log("c1:",c1);
console.log("type of c1 :", typeof c1);

var d1="";
console.log("d1:",d1);
console.log("type of d1 :", typeof d1);

// document.write("welcom java.......");




var str = "hello,world";

console.log("length:",str.length);
console.log("uppercase:",str.toLocaleUpperCase());
console.log("lowercase:",str.toLocaleLowerCase());
console.log(str.toUpperCase().length);
console.log(str.toLowerCase().length);
console.log(str.toUpperCase().toLowerCase().toLowerCase().toUpperCase().length);
console.log("trim:",str.trim());
console.log("trimed length:",str.trim().length);
console.log("trim start:",str.trimStart());
console.log("trim end:",str.trimEnd());
console.log("length of start trimmed string:",str.trimStart().length);
console.log("length of right trimmed string:",str.trimEnd().length);
console.log("replace:",str.replace("hello","hii"));
console.log("startwith:",str.startsWith("hello"));
console.log("endwith:",str.endsWith("world"));
console.log("split:",str.split(','));
console.log("join:",str.split(',').join(','));

//arrays

var a=10;
console.log("a:",a);

var arr=[10,20,30,"hello",'hai',true,false,undefined,null];

console.log("arr:",arr);
console.log("type of array:",typeof arr);
console.log("length:",arr .length);
console.log("join:",arr.join(''));
console.log("index:",arr.indexOf("hello"));
console.log("push element",arr.push("end"),',', "arr:",arr);
console.log("unshift element:",arr.unshift("first"),",","arr:",arr);
console.log("pop element:",arr.pop(),",","arr:",arr);
console.log("shift element:",arr.shift(),",", "arr:",arr);

//replace element in an array

arr[0]=15;
arr[3]="welcome";
console.log("arr:",arr);

//splice
arr.splice(7,2);
console.log("arr splice :",arr);

arr.splice(3,0,40);
console.log("arr:",arr);

//objects
var obj={
    firstname : "john",
    lastname : "done",
    age: 10,
    canadian:false,
    hobbies:["reading",'gaming',"drowing"]
};

console.log("obj:",obj);
console.log("firstname:",obj.firstname);
console.log("age",obj.age);
console.log("hobbies:",obj.hobbies)

obj.age=11;
console.log("age:",obj.age);

obj.mark1=50;
console.log("obj:",obj);

obj.mark2=100;
console.log("obj:",obj);

    //json string

    var obj1={
        Name : "jane",
        age : 21,
        indian: false,
    };

    var a=10;
    console.log(`a:${a}`); // another type of console.log

    var json_str = JSON.stringify(obj1);
  // converting javascript object to JSON string
    console.log(`json string: ${json_str}`);

  //parsing JSON
  var obj3 = JSON.parse(json_str);
  console.log(`object :${obj3.Name}`);

  {
    var a =10 ; //global scoped ,can be declared any where in the function
  }

  console.log("a:",a);

  //block scoped

  {
    let b; //declare
    b =15; //initialize
     
    const c =20;

    console.log("b:",b);
    console.log("c:",c);
  }

  //hoisting

  console.log("x:",x);
  var x=50;

  //consol.log("y:",y); //give error
  let y=60;

  //let y= 150; give error



  //JAVA conditions

  let num1=10;
  let num2=100;

   if(num1 > num2){
    console.log(`num1:${num1} is greater`)
   }else if(num1==num2){
    consolel.log("both are equal");
   }else{
    console.log(`num2:${num2} is greater`)

   }


   if(false){
        console.log("block 1");
   }else if(true) {
        console.log("block 2");
   }else if (true){
        console.log("block 3");
   }else{
    console.log("block 4");
   }

   if(num1==num2){
    console.log("num1 equals num2");
   }else{
    console.log("num1 not equals num2");
   }

   //+,-,*,/,%,++,--,++var,--var,var++,var--
   //&&, ||,!
   //=
   //==,===,<,>,<=,>=,<===,>==

   if (true || true || false){
    console.log("condition true");
   }else{
    console.log("condition false");
   }

   //pre increment
   let abc1=10;
   let result1 = ++abc1;
   console.log("Result1:",result1);

   //pre decrement
   let abc2=10;
   let result2 = --abc2;
   console.log("Result2:",result2);

  //post increment
   let abc3=10;
   let result3 = abc3++;
   console.log("Result3:",result3);

   //post decrement
   let abc4=10;
   let result4 = abc4--;
   console.log("Result4:",result4);


   //switch statment

   let day = 5;
    
   switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wendnesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("saturday");
      break;
    case 7:
      console.log("sunday");
      break;

    default:
      console.log("Invalid valu");
      break;
   }


   //loops

   for( var i=0 ; i<10 ; i++) {
    console.log(i)
   }

    for( var a=10 ; a>0 ; a--) {
    console.log(a)
   }

    //while loop

   {
    let i= 0;

    while(i<=10){
      console.log("hello from while loop");
      i=i+1;
    }
   
    //do while loop

    do {
      console.log("hello from do while loop");
    }while(i<=10);


    //break & continue
    for(let i=0;i<=10;i++){

      if(i==5){
        continue;
      }

      if(i==8){
        break;
      }

      console.log(i);
    }

   }

   //nested loop

   {
    let string ='';

    for(let i=0 ; i<=10 ;i++){

      //nested for loop
      
      for(let j=0; j<i ; j++){
        string = string + '#';
        
      }
      string = string + '\n';
    }
    console.log(string);
   

    //Functions

    //function definition
    function printHello(){
      //code block
      console.log("Hello")
    }
    printHello(); //function call

    //function to print sum
    function sum(a,b){ //parameter

      let sum;
      sum=a+b;
      console.log("sum:",sum)
    }

    sum(20,30);//Argument

   

    // sum of 1 to 10 numbers
    let sum1= 0;

    for(let i=0 ; i<=10;i++){
      sum1 = sum1 + i;
      // console.log(sum);
      
    }
    console.log("sum:",sum1);


   
    // print even numbers 
    let a= 0;
    while(a<=20){
        if(a%2==0) {
        console.log("a:",a)
       }
    a++;
   }
  }
    
{
      //call by vale

      let a=10;

      function update(a){
        a="new value";
        console.log("from function:",a);

    }

        update(a);
        console.log("a:",a);

        //call by reference

        let  arr=[10,20,30];
        function arrupdate(arr){
          arr[0]=100;
           console.log(" arr from function:",arr)
        }

        arrupdate(arr);
        console.log("arr:",arr);
   }  

   {
    //closure
    
    function  outerfunction () {
      const outerveriable='from outer function';

       function innerfunction () {

        function innerfunction1(){

          function innerfunction2(){

            console.log("outerveriable:",outerveriable);
          }
          return innerfunction2;
        }
        return innerfunction1;
       }

       return innerfunction;
    }


    let result= outerfunction();//inner function code
    console.log("result:",result);
    result();


    let result1= result();
      console.log("result1:",result1);
    
    let result2=result1();
    console.log("result2:",result2);
    result2();

    // A function along with its environment is  called closure
   }


   {

    let contant = document.getElementsByClassName("contant");
    contant[0].textContent="some contant"
    contant[1].textContent="another contant"

    let text = document.getElementById("text");
    text.textContent="some text"

    let para = document.getElementsByTagName("p");
    para[0].textContent=" a paragraph"

    let listtiem = document.querySelector(".container .container1  ul li");

    listtiem.textContent="List item 1"
    

   }



   {

    //TYPE OF FUNCTION

    //named function
    function printHello(){
      console.log("hello world");
    };
    printHello();


    //Anonymous function
    const  printhai = function (){
      console.log("haii");
    };
    printhai();


    //Arrow function
    const printwelcome = () =>{
      console.log("welcom");
    };
    printwelcome();

    //callback function
    function printhaiworld(a){
      a();
    }

    // const callback = function(){
    //   console.log("hai world");
    // };

    printhaiworld(function(){
      console.log("hai world");
    });
   }


   {
    let but = document.getElementById("but");
    but.addEventListener("click",function(){
      //  alert("button clicked");
    });

    but. addEventListener("mouseover", () =>{
      console.log("MouseOver event..");
    } );

    but.addEventListener("mouseout", function(){
      console.log("MouseOut event...");
    });

    but .addEventListener("mousedown", () => {
      console.log("MouseDown event....");
    } );

    but .addEventListener("mouseup", function(){
      console.log("MouseUp event.....");
    });

    but .addEventListener("mousemove", () => {
      console.log("MouseMove event.....");
    });

    let inp = document.getElementById("inp");
    inp.addEventListener("keydown",function(){
      console.log("keydown event.........");
    });

    inp.addEventListener("keyup",function(){
      console.log("keyup event.........");
    });

    // math function
    console.log(Math.sqrt(16));//4
    console.log(Math.round(10.4));//10
    console.log(Math.round(10.5));//11
    console.log(Math.ceil(10.2));//11
    console.log(Math.ceil(10.8));//11
    console.log(Math.floor(10.7));//10
    console.log(Math.floor(10.2));//10
    console.log(Math.abs(-90));//90
    console.log(Math.abs(90));//90
    console.log(Math.PI);//3.141592653589793
    console.log(Math.max(10,20,30));//30
    console.log(Math.min(10,20,30));//10
    console.log(Math.pow(2,3));//8
   }


   {

    //Time function

    // setTimeout(function(){
    //   console.log("from set time out")
    //   alert("from set time out")
    // },3000);


    // setInterval(function(){
    //   console.log("from set interval")
    // },3000);

  }

  {
    //program to show currect time

    function putzro(sec){
      return sec <10?"0"+sec:sec;
    }
    
    function show(){
      var time= document.getElementById("time");
      var dt = new Date();
      var hours =dt.getHours();

      // if(hours>12){
      //   ampm="pm";
      // } else{
      //   ampm="am";
      // }

      var ampm= hours>12?"pm":"am";
       time .innerHTML =putzro(hours%12)+":"+ putzro(dt.getMinutes())+":"+ putzro(dt.getSeconds())+ampm;
      
       setTimeout(function(){
        show();
       },1000);
    }


    show();
  }

  {

    //spread operator

    let arr =[1,2,3,4,5];
    console.log("arr:",arr);

    let arr1=[...arr,6];
    console.log("arr1:",arr1);

    let obj= {
      firstname:"Gokul",
      lastname:"krishna",
      age:21,
    }
    console.log("obj:",obj);

    let obj1={
      ...obj,mark:60
    }
    console.log("obj1",obj1);



    //Destructuring

    const [a,b,c,d,e] =arr;
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
    console.log("d:",d);
    console.log("e",e);

    const {firstname,lastname,age}=obj;
    console.log("firstname:",firstname);
    console.log("lastname:",lastname);
    console.log("age:",age);


    {

      //Nested Destructuring
       
      const matrix =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];

      const [firstrow, secondrow,thirdrow] =matrix;
      const [a,b,c]=firstrow;
      const [d,e,f]=secondrow;
      const [g,h,i]=thirdrow;

      console.log("a:",a);
      console.log("b:",b);
      console.log("c:",c);

      console.log("d:",d);
      console.log("e:",e);
      console.log("f:",f);

      console.log("g:",g);
      console.log("h:",h);
      console.log("i:",i);




      const person= {
         name:"john",
         age:23,
         address:{
          city:"new york",
          zipcode:'10001'
         },
      }

      const {name, age, address: {city,zipcode}}= person;
      console.log("name:",name);
      console.log("age",age);
      console.log("city:",city);
      console.log("zipcode:",zipcode);
    }
  }

  {

    // program to show factorial of a number

 
    function fac (){
      let fact = 4;
      for (i = 1; i < 4; i++) {
          fact *= i;
    }
    console.log(fact);
  }
  fac();
}



{
  //program to show fibonacci series

  function fibo (){
    let n1=0;
    let n2=1;
    {
      n3=n2+n1;
      n4=n3+n2;
      n5=n4+n3;
      n6=n5+n4;
      n7=n6+n5;
    }
    console.log("fibonacci:",n1,n2,n3,n4,n5,n6,n7);

  }
  fibo();
}


//or

{

  //fibonacci series

  function fibo(limit){
    let a=0;
    console.log(a);
    let b=1;
    console.log(b);
    let sum=0;

    while (sum<limit){
      sum=a+b;
      console.log(sum);

      a=b;
      b=sum;
    }
  }
  fibo(15);
}


// {
//   //
//   function sum(){
//    const arr=[2,4,6];
//    const arr1=[2,4,6];

//    const[a,b,c]=arr;

//    const[d,e,f]=arr1;

//    console.log("sum", [a+d,b+e,c+f]);
//   } 
//   sum();
// }


{
  //sum of array 
  let arr=[1,2,3];
  sum=0;
  for(var i = 0; i < arr.length; i++){
     sum = sum + arr[i];
 }
  console.log("sum:", sum);
}

{
  //sum of arry using function

  function arrsum(arr){
    sum=0;
    for(var i = 0; i < arr.length; i++){
       sum = sum + arr[i];
   }
    console.log("sum:", sum);
    return sum;
  }
  console.log("arry sum:",sum);
  let arrysumvar=sum;
  console.log("arrysumvar:",arrysumvar);

}


{
  //Average of an array
  let arr1=[2,4,6,8];
  sum=0;
  for(var i= 0; i<arr1.length;i++){
    sum=sum+arr1[i]; 
    avg=sum/arr1.length;
  }
  console.log("avg :", avg);
}
{
  //Average of an array using functio
  function arryavg(arr1){
    sum=0;
  for(var i= 0; i<arr1.length;i++){
    sum=sum+arr1[i]; 
    avg=sum/arr1.length;
  }
  console.log("avg :", avg);
  return avg;
  }
  console.log("arryavg",avg);
  let arravg=avg;
  console.log("arravg:",arravg);

}


{
  //maximum and minimum
  let arr2 =[10,20,12,50,30,75];  
   
   max = arr2[0];  
   min = arr2[0];
 
  for (let i = 0; i < arr2.length; i++) {  
      
     if(arr2[i] > max) {
      max = arr2[i]; 
     }  
     if(arr2[i]<min){
      min = arr2[i];
     }
        
  }  
  console.log("max:",  max);
  console.log("min:", min);
}

{
  //maximum and minimum using function


  function maxmin(arr2){
    max = arr2[0];  
   min = arr2[0];
 
  for (let i = 0; i < arr2.length; i++) {  
      
     if(arr2[i] > max) {
      max = arr2[i]; 
     }  
     if(arr2[i]<min){
      min = arr2[i];
     }
        
  }  
  console.log("max:",  max);
  console.log("min:", min);
  return min,max;
  }

  console.log("max1:",max);
  console.log("min1:",min);
  let max1=max;
  let min1=min;
  console.log("maxvar:",max1);
  console.log("minvar:",min1);
  


}

{

  // reverse of string using split
  
  let str= "hello";

  console.log("str",str);
  console.log ("split",str.split("") .reverse(""));
  
  }

{
  //reverse of string

  function reverse(str){
    let reve = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reve += str[i];
    }
    console.log(reve);
}
  reverse("welcome");
}

{
  //program to show pallindrome

  function reverse(str){
    let reve = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reve += str[i];
    }
    console.log(reve);

    if (str==reve)
    console.log("This is pallindrome");
    else
    consolel.log("This is not pallindrome");
  }
  reverse("malayalam");
}

{
  //Multiplication table

  for(let i=1;i<=10;i++){
    for (let j=1;j<=10;j++){
      console.log(`${i}*${j}=${i*j}\n`)
    }
  }
}


{

  //show even numbers and odd numbers & sum of even and odd 


  let sum1=0;
  let sum2=0;

  for( let n=1;n<=50;n++){
      if(n%2==0) {
      console.log("even:",n);
      sum1+=n;
     }
     else{
      console.log("odd:",n);
      sum2+=n;
     }
 }
 console.log("sum of even numbers:",sum1);
 console.log("sum of odd numbers:",sum2);

 
}


{

  function pos(arr){

  for (let i=0;i<arr.length;i++){
      if(arr[i]<0){
          arr[i]=arr[i]*-1;
      }
     else{
      arr[i]=arr[i];
     }
      }
  return arr;
}
console.log("array:",pos([-2,10,20,-4,-5]));
}

{

  // Recursive function

  let i=0;
  function printnum(){
    i++;
    while(i<=10){
      console.log(i);
      printnum();
    }
  }
  printnum();
}

{
  function countdown(n){
    if(n<=0){
      console.log("DONE");
    }
    else{
      console.log(n);
      countdown(n-1); //recursive function call
    }
  }
  countdown(6); //normal function call

  //countdown(5),countdown(4),countdown(3),countdown(2),countdown(1),countdown(0),DONE
}

{

  //Factorial using Recursive function

  function factorial (n){
    if(n==0||n==1){
      return 1;
    }
    else{
     return n* factorial(n-1);
    }
  }
  let fact= factorial(5);
  console.log("factorial:" ,fact);

}


{
  let myform=document.getElementById('myform');
  var datas={};
  let arr1=[];

  myform.addEventListener('submit', function(e){

    e.preventDefault(); //to stop default behaviour of function


    let email=document.getElementById('email');
    let email_value=email.value;
    console.log("email:",email_value);

    let password=document.getElementById('password');
    let password_value=password.value;
    console.log("password:",password_value);

    datas.email=email_value;
    datas.password=password_value;

    // console.log("datas:",datas);
    handledatas(datas);
  })

function handledatas(datas){
  console.log("Datas:",datas);

  let Message = document.getElementById('message');


  //Validation 
  if (arr1.length>0){
    for(let i=0;i<arr1.length;i++){

      if(arr1[i].email==datas.email){
        Message.innerHTML="Email already found";
        return;
      }
    }
  }

  arr1.push(datas);
  Message.innerHTML="succes";
  console.log("arr:",arr1);
 }
}


{
  let arr=[
    {
      name:"Arun",
      mark:80,
      place:"Ernakulam"
    },
    {
      name:"Aswin",
      mark:90,
      place:"Kollam"
    },
    {
      name:"Abhin",
      mark:50,
      place:"TVM"
    }
  ];

  console.log("arr:",arr);

  // Array Function

  // forEach(
    console.log("forEach ->");

    arr.forEach((item,index)=>{
      console.log(`item-${index}:`,item);
      return;
    })

    //find
    console.log("Find->");

    const x =arr.find((item)=>{
      return item.name =="Aswin";
    });

    console.log("x:",x);

    //Filter 
    console.log("Filter->");

    const arr1 =arr.filter((item,index)=>{
      return item.mark ==80
    });

    console.log("arr1:",arr1);

    // Map 
    console.log("Map->");
     const arr2= arr.map((item)=>{
      return item.name;
     });  //Return an array of same length

     console.log("arr2:",arr2);

    // Reduce
    const valu= arr.reduce((total,item)=>{
      console.log("total:",total);
      console.log("item:",item);
      return total+item.mark;

    },0);// "0" is the insulated value of total

    console.log("valu:",valu);

}

{

  //Show sum of Squares of element of a array using "forEach"

  let arr1=[];
  let sum=0;

  function squarsum(arr){

    arr.forEach((item,index)=>{
      sqr=item*item;
      sum=sum+sqr;

      arr1.push(sqr);
    });
    console.log("squared array:",arr1);
    console.log("sum:",sum);
  }
  squarsum([2,4,6]);
}


{
  //show First even number of an array using "find"


  let arr1=[];
  function evennumber(arr){
    const even =arr.find((item)=>{
      return item%2==0 ;
    });

    console.log("Even:",even);
  }
  evennumber([1,3,4,5,6]);
}

{

  //show even numbers of an array using "filter"

  let arr1=[];
  function filterarr(arr){
    const arr1 =arr.filter((item,index)=>{
      return item%2==0;
    });
    console.log("even number:",arr1);
  }
  filterarr([1,2,3,4,5,6,7,8,9,10]);
}

{
  //show  double of an array element using "map"

  let arr1=[];

  function double(arr){

    const arr1= arr.map((item)=>{
     return  [item*2];
    });
    console.log("Double:",arr1);
  }
  double([1,2,3]);

}

{
  // show product of an array using "reduce"

  let arr1=[];
   function product(arr){
    const arr1= arr.reduce((total,item)=>{
      return total*item;
    },1);
    console.log("product:",arr1);
   }
   product([1, 2, 3, 4, 5]);
  }

  {
    //write a function 'productPositive' that takes an array of numbers as input and uses the 'reduce' method to calculate the product of all posititve numbers in the array


   function productPositive(arr){
    const value= arr.reduce((total,item)=>{
      if(item>0){
        return total*item;
      }else{
        return total;
      }
    },1);
    console.log("product positive:",value);
   }
   productPositive([-2,3,4,-5,10])
  }


  {

    //1.Given an array of numbers, use the map method to create a new array where each number is doubled.
   
     function doublearr(arr){
      const arrnew= arr.map((item)=>{
        return  [item*2];
       });
       console.log("new array:",arrnew);
     }
     
     doublearr([20,30,40]);

  }

  {

    //2.Given an array of numbers, use the filter method to create a new array containing only the even numbers.


    let newarr=[];
    function filterarr(arr){
      const newarr =arr.filter((item,index)=>{
        return item%2==0;
      });
      console.log("Even Array:",newarr);
    }
    filterarr([1,2,3,4,5,6]);
  }

  {

    //3.Given an array of numbers, use the reduce method to calculate the sum of all the numbers

    let arr1=[];
   function product(arr){
    const arr1= arr.reduce((total,item)=>{
      return total+item;
    });
    console.log("sum of array:",arr1);
   }
   product([1, 2, 3, 4, 5]);
  }

  {

    //4.Given an array of numbers, use the reduce method to find the maximum value in the array.

    function product(arr){
      max=arr[0];
     const arr1= arr.reduce((total,item)=>{
       if(item > max){
        return max = item;
       }
     });
     console.log("maximum value in the array:",arr1);
    }
    product([2, 3, 4,8]);
   
  }

  {

    //5.Given an array of strings, use the map method to create a new array where each string is capitalized.

    function string (arr){
       const arrn = arr.map((item)=> {
        return item. toLocaleUpperCase();
       });
       console.log(" capitalized array:",arrn);
    }
    string(["gokul","sabin","ashik",])
  }

  {

    //6.Given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value.

     function words(arr){
      const wordarr=arr.filter(arr =>arr.length>5);
      console.log("value:",wordarr)
     }
     words(["hari","sabin","krishna","gokul","aswinajith"]);
  }
 
  {

    //7.Given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd.

    function num (arr){
      const n=arr.map((item)=>{
        if(item%2==0){
          return "even";
        }else{
          return "odd";
        }
      });
    
      console.log("even or odd:",n);
    }
    num([1,2,3,4,5,6,7,8]);
  }

  {
    // 8.Given an array, use the filter method to create a new array with only unique elements (remove duplicates).


    function unique(arr){
      const arr1=arr.filter((item,index)=>{
        return arr.indexOf(item)==index;
      });
      console.log("Unique value",arr1);
    }
    unique([1,1,3,,4,4,5,6,5]);
  }

  {
    //9.Given an array of numbers, use the sort method to sort them in ascending order.

    function ascending(arr){
      return arr.sort();
    }
    let arr1= ascending([5,1,7,3,9,6,2])
    console.log("ascending order:",arr1);
  }

  {

    //10.Given an array of objects with a name property, use the map method to create a new array containing only the names.

    function name(arr){
      const arr1= arr.map((item)=>{
        return item.name;
      })
      console.log("names:",arr1);
    }
    name([{name:"arun",mark:30},{
      name:"aswin",mark:50 },{
        name:"gokul",mark:70}])
  }

  {

    //count vowels in a string

    var count = 0;
function countVowels(str){
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
            count++;
        }
    }
    return count;

}
let a=countVowels("helloworld");
console.log("count of vowels : ",a);
  }

  {
    console.log(this);

let obj = {
    name : "john",
    getAge : function(){
        console.log(this);
    }
}
console.log(obj.name);
console.log(obj.getAge());


function greet(message,message1){
    console.log("message : ",message);
    console.log("message1 : ",message1);
    console.log("this : ",this);
    console.log("name : ",this.name);
  }

//   //call method
// // greet.call(obj,"hello","hello1");


// //bind method
let boundGreet = greet.bind(obj,"hello","hello1");
console.log("boundGreet : ",boundGreet);
boundGreet();


//apply method
greet.apply(obj,["hello","hello1"]);

 }

 {
  let obj = {
    name : "Aswin",
    age :50,
    greeting : function () {
        console.log("name : ",this.name);
        console.log("age : ",this.age);
    }

}
obj.greeting();

 }


 {
  //constructor functions

function Person(name,age){
    this.name = name;
    this.age = age;
    this.greeting = function(){
        console.log("name : ",this.name);
        console.log("age : ",this.age);
    }
}
const person1 = new Person("John",30);
console.log("person1 : ",person1);
person1.greeting();

const person2 = new Person("Jane",25);
console.log("person2 : ",person2);
person2.greeting();

//updating individual objects
person2.place = "Ernakulam";
console.log("Person2.place : ",person2.place);

Person.prototype.getMark = function(){
    return this.mark;
}

console.log("Mark of person1 : ",person1.getMark());
console.log("Mark of person2 : ",person2.getMark());



 }



 {
  

let obj = {
    name : "bmw",
    color : "red",
    greeting : function (){
        console.log("name : ",this.name);
        console.log("color : ",this.color);
    }
}
console.log("obj : ",obj);
obj.greeting();

function Car(name,color){
    this.name = name;
    this.color = color;
    this.greeting = function(){
        console.log("name : ",this.name);
        console.log("color : ",this.color);
    }
}

const car1 = new Car("benz","black");
console.log("Car1 : ",car1);
car1.greeting();

const car2 = new Car("Audi","red");
console.log("Car2 : ",car2);
car2.greeting();

}



{
  //Using Classes

  class Car{
    name;
    color;
    year;


    constructor(name, color, year){
        this.name = name;
        this.color = color;
        this.year = year;
       
    }

    greeting(){
        console.log("name : ",this.name);
        console.log("color : ",this.color);
        console.log("year : ",this.year);
      
    }
}

class Racingcar extends Car{
  speed;

  constructor(name,color,year,speed){
      super(name,color,year);
      this.speed = speed;
  }

  greeting(){
      console.log("speed : ",this.speed);
  }
}

let car1 = new Car("swift","red",2014);
console.log("car1  ",car1);
car1.greeting();

let car2 = new Car("Mustang","white",2000);
console.log("car2 : ",car2);
car2.greeting();

let car3 = new Racingcar("ferrari","red",2008,250);
console.log("car3 : ",car3);
car3.greeting();
}

{
  //Getters and Setters
  class car{

    constructor (name) {
        this.name = name;
    }

    //without using setters and getters
    //  setColor(color) {
        // this.color = color;
    // }

    // getColor(){
    //     return this.color;
    // }


    //using getters and setters
    set setColor(color) {
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

}

let myCar = new car("Benz");

//setting color
//myCar.setColor("Green"); //Without using setter
myCar.setColor = "Green"; //Using setter

console.log("myCar : ",myCar);

//Getting Color
//console.log("Color of myCar : ",myCar.getColor()); //Without using getter
console.log("Color of myCar : ",myCar.color); //Using getter

}

{

class Button {

    constructor(content) {
        this.button = document.createElement('button');
        this.button.innerHTML = content;
        document.body.appendChild(this.button);
    }

    set width(width) {
        this.button.style.width = width + "px";
    }

    set height(height) {
        this.button.style.height = height + "px";
    }

    get width(){
        return this.button.style.width;
    }

    get height(){
        return this.button.style.height;
    }

    onClick(fn) {
        this.button.onclick = fn;
    }
}

let myButton = new Button('click here');
console.log("myButton : ",myButton);

myButton.width = 200;
myButton.height = 50;

console.log("Button width : ",myButton.width);
console.log("Button height : ",myButton.height);

myButton.onClick(function () {
    console.log("My button clicked...");
});


class yellowButton extends Button{

    //Method overriding
    onClick(fn) {
        this.button.onclick = function () {
            this.button.style.background = "yellow";
            fn();
        }.bind(this);
    }
}

let myYellowButton = new yellowButton("Yellow Button");
console.log("myYellowButton : ",myYellowButton);


myYellowButton.height = 50;
myYellowButton.width = 200;

console.log("myYellowButton width : ",myYellowButton.width);
console.log("myYellowButton height : ",myYellowButton.height);

myYellowButton.onClick(function (){
    console.log("myYellowButton clicked");
});

}
 
//class paragraph
{

  class Paragraph {
  
      constructor(content) {
      this.paragraph = document.createElement('p');
      this.paragraph.innerHTML = content;
      document.body.appendChild(this.paragraph);
      }
  
      set margin(margin) {
          this.paragraph.style.margin = margin + "px";
      }
  
      set padding(padding) {
          this.paragraph.style.padding = padding + "px";
      }
  
      set fontSize(fontSize) {
          this.paragraph.style.fontSize = fontSize + "px";
      } 
  
      set lineHeight(lineHeight) {
          this.paragraph.style.lineHeight = lineHeight + "px";
      }
  
  
  }
  
  
  let myParagraph = new Paragraph("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  // console.log("myParagraph : ",myParagraph);
  
  
  myParagraph.margin = 30;
  myParagraph.padding = 20;
  myParagraph.fontSize = 20;
  myParagraph.lineHeight = 50;
  
  
  class Paragraph2 extends Paragraph {
  
      constructor(content,btncontent) {
          super(content);
          this.button = document.createElement('button');
          this.button.innerHTML = btncontent;
          document.body.appendChild(this.button);
          
      }
  
      set fontColor(fontColor) {
          this.paragraph.style.color = fontColor;
      }
  
      set background(background) {
          this.paragraph.style.background = background;
      }
  }
  
  let myButton = new Paragraph2("click me");
  
  let newParagraph = new Paragraph2("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  
  newParagraph.margin = 40;
  newParagraph.padding = 30;
  newParagraph.fontSize = 30;
  newParagraph.lineHeight = 60;
  newParagraph.fontColor = "red";
  newParagraph.background = "yellow"; 
  
  
  }
