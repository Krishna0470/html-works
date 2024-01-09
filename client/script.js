async function getData(){
    console.log("Hello world");
    let data = await fetch ('http://localhost:3000/getData');
    console.log("data :",data);

    let parsedData = await data.json();
    console.log("parsedData:",parsedData);

    let content = document.getElementById("content");
    console.log("content:",content);

    let rows ="";

    for (let i=0; i<parsedData.length;i++){
        rows=rows+ `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td>${parsedData[i].first_name}</td>
        <td>${parsedData[i].last_name}</td>
        <td>${parsedData[i].username}</td>
        <td>${parsedData[i].email_address}</td>
        <td>${parsedData[i].password}</td>
        </tr>
        `
    }

    content.innerHTML=rows;
}

getData();