const tasks=[
    {title:"Estudiar JavaScript",description:"Lorem ipsum dolor sit amet.", status: "No terminada"},
    {title:"Ir de viaje",description:"Lorem ipsum dolor sit amet.", status: "Terminada"},
    {title:"Ver series",description:"Lorem ipsum dolor sit amet.", status: "No terminada"},
    {title:"Buscar trabajo",description:"Lorem ipsum dolor sit amet.", status: "Terminada"},
];
const app= document.getElementById("app");
let output=``;
tasks.forEach(task => {
    
    output+=`
    <label for='${task.title}' >
        <input 
        type='checkbox' 
        id='${task.title}' 
        title='${task.title}' 
        ${task.status==='Terminada' && 'checked'} />
        ${task.title} 
    </label>
    <p>${task.description}</p>`;
    // output+=`<li>${task.title} - ${task.status}</li>`;
});

app.innerHTML=output;