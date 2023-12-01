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
  //show t double of an array element using "map"

  let arr1=[];

  function double(arr){

    const arr1= arr.map((item)=>{
     return  [item,item];
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