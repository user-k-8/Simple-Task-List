// Adding Tasks
document.getElementById("addTask").addEventListener("click",
function(event){
    addTask();
    
});

let listArray = []

function addTask(){
    
         let task = prompt('Add a Task');
         listArray.push(task)
         let output= document.getElementById("output");
         let myList = document.createElement("ul");
         let newTask = task;
         let listItem = document.createElement("li");
         let textNode= document.createTextNode(newTask);
         listItem.appendChild(textNode);
         myList.appendChild(listItem);
         output.style.color ="rgb(54, 184, 239)"
         output.style.fontSize="20px";
         output.appendChild(myList);
  
}

// Removing Tasks
document.getElementById("remove-task-buttons").addEventListener("click",
function(event){
    
    buttonId = event.target.id;
    switch(buttonId){
        case "removeFirstTask":
            listArray.shift();
            break;
        
        case "removeLastTask":
            listArray.pop();
            break;
        
        case "removeSpecificTask":
             let position = Number(prompt('Enter list item number to remove: '));
             listArray.splice(position-1,1) 
             break;    
    }


        let newList = document.createElement("ul");
        output.innerHTML="";
        for(let i=0; i<listArray.length; i++){
    
           let newTask = listArray[i];
           let listItem = document.createElement("li");
           let textNode= document.createTextNode(newTask);
           listItem.appendChild(textNode);
           newList.appendChild(listItem);
    
       }
       output.style.lineHeight = "40px"
       output.style.color = " rgb(54, 184, 239)"
       output.style.fontSize="20px"
       output.appendChild(newList);
    
});

