{
    let but = document.getElementById("but");
    but.addEventListener("click",function(){
        let para= document.getElementsByClassName("para");
         para[0].textContent ="There are a few different types of paragraphs one can write, and well get into that. Just know that no matter what type of paragraph you are writing, the action you are undertaking is called paragraphing."
    });
}


{
   function  addli()
   {
    let add =document.getElementById("add").value,
       listNode=document.getElementById("list"),
       liNode= document.createElement("LI"),
       addNode=document.createTextNode(add); 

       liNode.appendChild(addNode);
       listNode.appendChild(liNode);
   }
       
    
}

{
    function validateForm() {
        var a = document.forms["error"]["name"].value;
        if (a == null || a == "") {
            alert("Name must be filled out");
            return false;
        }
         var b = document.forms["error"]["email"].value;
         if (b == null || b == "") {
            alert("Email must be filled out");
            return false;
        }
        
         var c = document.forms["error"]["password"].value;
         if (c == null || c == "") {
            alert("Password must be filled out");
            return false;
        }
         
    }
}



{

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');

let images = [img1, img2, img3, img4];

let i = 0;

let left = document.getElementById('left-arrow');
left.addEventListener('click', function(event) {
    event.preventDefault()
    if (i > 0) {
        i = i - 1;
        updateZIndex();
    }
});

let right = document.getElementById('right-arrow');
right.addEventListener('click', function(event) {
    event.preventDefault()
    if (i < images.length - 1) {
        i = i + 1;
        updateZIndex();
    }
});

function updateZIndex() {
    for (let j = 0; j < images.length; j++) {
        images[j].style.zIndex = (j === i) ? 4 : 3;
    }
}

}

{
    let icon=document.getElementsByClassName("icon");
    let para=document.getElementById("p1");
    let para1=document.getElementById("p2");
    let para2=document.getElementById("p3");
    icon[0].addEventListener("click",function(){
        para.textContent="Log in";
        para1.textContent="Contact";
        para2.textContent="About";
    })


}

{
   let myform=document.getElementById('myform');

   myform.addEventListener('submit',function(e){
    e.preventDefault();
    
   })
    
}



