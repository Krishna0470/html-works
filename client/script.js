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
        <td>${parsedData[i].date&time}</td>
        <td>${parsedData[i].top_priorities}</td>
        <td>${parsedData[i].tasks}</td>
        <td>${parsedData[i].daily_schedule}</td>
        <td>${parsedData[i].for_tomorrow}</td>
        </tr>
        `
    }

    content.innerHTML=rows;
}

getData();