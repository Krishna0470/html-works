async function submitForm() {
    let moviename = document.getElementById('moviename').value;
    console.log("movie name : ", moviename);

    let language = document.getElementById('language').value;
    console.log("last name : ", language);

    let genre = document.getElementById('genre').value;
    console.log("genre : ", genre);

    let runtime = document.getElementById('runtime').value;
    console.log("runtime : ", runtime);

    let certification = document.getElementById('certification').value;
    console.log("certification : ", certification);

    let releasedate = document.getElementById('releasedate').value;
    console.log("releasedate : ", releasedate);

    let aboutmovie = document.getElementById('aboutmovie').value;
    console.log("aboutmovie : ", aboutmovie);

 
    let data = {
        moviename,
        language,
        genre,
        runtime,
        certification,
        releasedate,
        aboutmovie
    }
    let json_data = JSON.stringify(data);

    let response = await fetch('http://localhost:3002/submit', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,
    });

    let parsed_response = await response.json();

    if(parsed_response.success) {
        alert("Movie submitted successfully");
    }else {
        alert(parsed_response.message);
    }
}

async function getData() {

    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let content = document.getElementById("content");
    console.log("content : ", content);

    let content1 = document.getElementById("content1");
    console.log("content1 : ", content1);

    let content2 = document.getElementById("content2");
    console.log("content2 : ", content2);

    let content3 = document.getElementById("content3");
    console.log("content3 : ", content3);

    let content4 = document.getElementById("content4");
    console.log("content4 : ", content4);

    

   let getData ="";
   getData = getData + `
        
   <h3>${pd[0].moviename}</h3>
   <p>${pd[0].genre}</p>
   `;

        let getData1 ="";
        getData1 = getData1 + `
             
        <h3>${pd[1].moviename}</h3>
        <p>${pd[1].genre}</p>
        `;

        let getData2 ="";
        getData2 = getData2 + `
                  
        <h3>${pd[2].moviename}"</h3>
        <p>${pd[2].genre}</p>
        `;

            
        let getData3 ="";
        getData3 = getData3 + `
                  
        <h3>${pd[3].moviename}</h3>
        <p>${pd[3].genre}</p>
        `;
                
              
        let getData4 ="";
        getData4 = getData4 + `
                  
        <h3>${pd[4].moviename}</h3>
        <p>${pd[4].genre}</p>
        `;
            

    content.innerHTML = getData;
    content1.innerHTML = getData1;
    content2.innerHTML = getData2;
    content3.innerHTML = getData3;
    content4.innerHTML = getData4;
}

async function viewPageData() {
    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let movie1 = document.getElementById("movie1");
    console.log("movie1 : ", movie1);


    let viewdata1 = "";
             viewdata1 = viewdata1 + `
             <h1>${pd[0].moviename}</h1>
             <p>${pd[0].genre}</p>
             <p>${pd[0].language}</p>
             <p>${pd[0].runtime}</p>
             <p>${pd[0].certification}</p>
             <p>${pd[0].releasedate}</p>
             <p>${pd[0].aboutmovie}</p>
             `;

    
         movie1.innerHTML = viewdata1;
}




// async function getData() {

//     console.log("Hello World");
//     let data = await fetch('http://localhost:3002/getData');
//     console.log("data : ", data);

//     let parsedData = await data.json();
//     console.log("parsedData : ", parsedData);

//     let content = document.getElementById("content");
//     console.log("content : ", content);

//     let rows = "";

//     for(let i=0; i<parsedData.length;i++) {
//         rows = rows + `
//         <tr>
//         <td>${parsedData[i]._id}</td>
//         <td><input type="text" name="firstname" id="firstname-${parsedData[i]._id}" value=${parsedData[i].firstname}" disabled=true></td>
//         <td><input type="text" name="lastname" id="lastname-${parsedData[i]._id}" value="${parsedData[i].lastname}" disabled=true></td>
//         <td><input type="email" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
//         <td><input type="password" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
//         <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
//         <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        
//         `
//     }

//     content.innerHTML = rows;
// }

// getData();

// function handleEdit(id) {
//     console.log("id :", id);

//     let firstname = document.getElementById(`firstname-${id}`);
//     console.log("firstname : ", firstname);
//     firstname.disabled = false;

//     let lastname = document.getElementById(`lastname-${id}`);
//     console.log("lastname : ", lastname);
//     lastname.disabled = false;

//     let email = document.getElementById(`email-${id}`);
//     console.log("email : ", email);
//     email.disabled = false;

//     let password = document.getElementById(`password-${id}`);
//     console.log("password : ", password);
//     password.disabled = false;
// }

// async function handleSave(id) {
//     console.log("id : ", id);

//     let firstnameTag = document.getElementById(`firstname-${id}`);
//     console.log("firstnameTag : ", firstnameTag);
//     let firstname = firstnameTag.value;
//     console.log("firstname : ", firstname);

//     let lastnameTag = document.getElementById(`lastname-${id}`);
//     console.log("lastnameTag : ", lastnameTag);
//     let lastname = lastnameTag.value;
//     console.log("lastname : ", lastname);

//     let emailTag = document.getElementById(`email-${id}`);
//     console.log("emailTag : ", emailTag);
//     let email = emailTag.value;
//     console.log("email : ", email);

//     let passwordTag = document.getElementById(`password-${id}`);
//     console.log("passwordTag : ", passwordTag);
//     let password = passwordTag.value;
//     console.log("password : ", password);

//     let data = {
//         id,
//         firstname,
//         lastname,
//         email,
//         password,
//     }

//     let jsonData = JSON.stringify(data);
//     console.log("jsonData : ",jsonData);

//     let response = await fetch('/editData',{
//         method : 'PUT',
//         Headers : {
//             "Content-Type" : "application/json",
//         },
//         body : jsonData,
//     });

//     console.log("response : ", response);
//     let parsed_response = await response.text();

//     if(parsed_response = "success") {
//         alert("Updation Success");
//     }else{
//         alert("Updation Failed");
//     }

// }

// function validatefirstName() {
//     let firstname = document.getElementById('firstname').value;
//     console.log("firstname : ", firstname);

//     let firstname_error = document.getElementById('firstname-error');

//     let firstname_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

//     let isfirstNameValid = firstname_regex.test(firstname);
//     console.log("isfirstNameValid : ", isfirstNameValid);

//     if(!isfirstNameValid) {
//         firstname_error.innerHTML = "Invalid Name";
//         return;
//     }else {
//         firstname_error.innerHTML = "";
//         return;
//     }
// }

// function validatelastName() {
//     let lastname = document.getElementById('lastname').value;
//     console.log("lastname : ", lastname);

//     let lastname_error = document.getElementById('lastname-error');

//     let lastname_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

//     let islastNameValid = lastname_regex.test(lastname);
//     console.log("islastNameValid : ", islastNameValid);

//     if(!islastNameValid) {
//         lastname_error.innerHTML = "Invalid Name";
//         return;
//     }else {
//         lastname_error.innerHTML = "";
//         return;
//     }
// }

// function validateEmail() {
//     let email = document.getElementById('email').value;
//     console.log("email : ", email);

//     let email_error = document.getElementById('email-error');

//     let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     let isEmailvalid = email_regex.test(email);
//     console.log("isEmailvalid : ", isEmailvalid);

//     if(!isEmailvalid) {
//         email_error.innerHTML = "Invalid Email";
//         return;
//     }else {
//         email_error.innerHTML = "";
//     }
// }

// function validatePassword() {
//     let password = document.getElementById('password').value;
//     console.log("password : ", password);

//     let password_error = document.getElementById('password-error');

//     let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

//     let isPasswordvalid = password_regex.test(password);
//     console.log("isPasswordvalid : ",isPasswordvalid);

//     if(!isPasswordvalid) {
//         password_error.innerHTML = "Invalid Password";
//         return;
//     }else {
//         password_error.innerHTML = "";
//         return;
//     }
// }

async function viewPageData1() {
    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let movie2 = document.getElementById("movie2");
    console.log("movie2 : ", movie2);


       let viewdata2 = "";
             viewdata2 = viewdata2 + `
             <h1>${pd[1].moviename}</h1>
             <p>${pd[1].genre}</p>
             <p>${pd[1].language}</p>
             <p>${pd[1].runtime}</p>
             <p>${pd[1].certification}</p>
             <p>${pd[1].releasedate}</p>
             <p>${pd[1].aboutmovie}</p>
             `;

               movie2.innerHTML = viewdata2;

}


async function viewPageData2() {
    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let movie3 = document.getElementById("movie3");
    console.log("movie3 : ", movie3);

   let viewdata3 = "";
             viewdata3 = viewdata3 + `
             <h1>${pd[2].moviename}</h1>
             <p>${pd[2].genre}</p>
             <p>${pd[2].language}</p>
             <p>${pd[2].runtime}</p>
             <p>${pd[2].certification}</p>
             <p>${pd[2].releasedate}</p>
             <p>${pd[2].aboutmovie}</p>
             `;

               movie3.innerHTML = viewdata3;

}


async function viewPageData3() {
    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let movie4 = document.getElementById("movie4");
    console.log("movie4 : ", movie4);

   let viewdata4 = "";
             viewdata4 = viewdata4 + `
             <h1>${pd[3].moviename}</h1>
             <p>${pd[3].genre}</p>
             <p>${pd[3].language}</p>
             <p>${pd[3].runtime}</p>
             <p>${pd[3].certification}</p>
             <p>${pd[3].releasedate}</p>
             <p>${pd[3].aboutmovie}</p>
             `;

               movie4.innerHTML = viewdata4;

}


async function viewPageData4() {
    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let movie5 = document.getElementById("movie5");
    console.log("movie5 : ", movie5);

   let viewdata5 = "";
             viewdata5 = viewdata5 + `
             <h1>${pd[4].moviename}</h1>
             <p>${pd[4].genre}</p>
             <p>${pd[4].language}</p>
             <p>${pd[4].runtime}</p>
             <p>${pd[4].certification}</p>
             <p>${pd[4].releasedate}</p>
             <p>${pd[4].aboutmovie}</p>
             `;

               movie5.innerHTML = viewdata5;

}