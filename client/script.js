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
        <td><input type="text" date="date" id="date-${parsedData[i]._id}" value="${parsedData[i].date}" disabled=true></td>
        <td><input type="text" time="time" id="time-${parsedData[i]._id}" value="${parsedData[i].time}" disabled=true></td>
        <td><input type="text" top_priorities="top_priorities" id="top_priorities-${parsedData[i]._id}" value="${parsedData[i].top_priorities}" disabled=true></td>
        <td><input type="text" daily_schedule="daily_schedule" id="daily_schedule-${parsedData[i]._id}"  value="${parsedData[i].daily_schedule}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        </tr>
        `
    }

    content.innerHTML=rows;
}

getData();

function handleEdit(id){
    console.log("id:",id);

    let date = document.getElementById(`date-${id}`);
    console.log("date:",date);
    date.disabled =false;

    let time = document.getElementById(`time-${id}`);
    console.log("time:",time);
    time.disabled =false;

    let top_priorities = document.getElementById(`top_priorities-${id}`);
    console.log("top_priorities:",top_priorities);
    top_priorities.disabled =false;



    let daily_schedule = document.getElementById(`daily_schedule-${id}`);
    console.log("daily_schedule:",daily_schedule);
    daily_schedule.disabled =false;


}

async function handleSave(id){
    console.log("id:",id);
    let dateTag = document.getElementById(`date-${id}`);
    console.log("dateTag:",dateTag);
    let date =dateTag.value;
    console.log("date",date);

    let timeTag = document.getElementById(`time-${id}`);
    console.log("timeTag:",timeTag);
    let time =timeTag.value;
    console.log("time",time);

    let top_prioritiesTag = document.getElementById(`top_priorities-${id}`);
    console.log("top_prioritiesTag:",top_prioritiesTag);
    let top_priorities =top_prioritiesTag.value;
    console.log("top_priorities",top_priorities);



    let daily_scheduleTag = document.getElementById(`daily_schedule-${id}`);
    console.log("daily_scheduleTag:",daily_scheduleTag);
    let daily_schedule =daily_scheduleTag.value;
    console.log("daily_schedule",daily_schedule);


    let data = {
        id,
        date,
        time,
        top_priorities,
        daily_schedule,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData:",jsonData);

    let response = await fetch('http://localhost:3000/editData',{
        method : "PUT",
        headers : {
            "Content-Type": "application/json",
        },
        body :jsonData,
    });

    console.log("response :",response);
    let parsed_response = await response.text();

    if(parsed_response == "success") {
        alert("Updation success");
    }else  {
        alert ("Updation failed");
    }
    getData();
}

async function handleDelete(id){
    console.log("id:",id);
   
       let dateTag = document.getElementById(`date-${id}`);
       console.log("dateTag:",dateTag);
       let date =dateTag.value;
       console.log("date",date);

       let timeTag = document.getElementById(`time-${id}`);
       console.log("timeTag:",timeTag);
       let time =timeTag.value;
       console.log("time",time);
   
       let top_prioritiesTag = document.getElementById(`top_priorities-${id}`);
       console.log("top_prioritiesTag:",top_prioritiesTag);
       let top_priorities =top_prioritiesTag.value;
       console.log("top_priorities",top_priorities);
   
   
   
       let daily_scheduleTag = document.getElementById(`daily_schedule-${id}`);
       console.log("daily_scheduleTag:",daily_scheduleTag);
       let daily_schedule =daily_scheduleTag.value;
       console.log("daily_schedule",daily_schedule);
   
   
   
       let data = {
           id,
           date,
           time,
           top_priorities,
           daily_schedule,
       }
   
       let jsonData = JSON.stringify(data);
       console.log("jsonData:",jsonData);
   
       let response = await fetch('http://localhost:3000/deleteData',{
           method : "DELETE",
           headers : {
               "Content-Type": "application/json",
           },
           body :jsonData,
       });
   
       console.log("response :",response);
       let parsed_response = await response.text();
   
       if(parsed_response == "deleted") {
           alert("Deleted success");
       }else  {
           alert ("failed");
       }
       getData();
   }