const textBox = document.querySelector(".text-box");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");
const plusBtn = document.querySelector(".plus-icon")

const taskListIds = [];
let taskCount = 1;

function extractText(){
    return textBox.value;
}

//handleKeyPress checks if the pressed button is "Enter".
//if it is "Enter", then it triggers a click event to "addBtn" which then adds the task.
function handleKeyPress(event){
    if(event.keyCode == 13){ //
        addBtn.click();
    }
}

//only when the cursor is blinking in textbox, the enter works to add the task.
//if the cursor is in textbox then upon clicking any button, it calls handleKeyPress.
textBox.addEventListener("keydown", handleKeyPress);

addBtn.addEventListener("click", function(){
    const extractedText = extractText();
    textBox.value = "";
    if(extractedText){
        const template = `<input class="checkbox" type="checkbox"><p class="task-p">Task: ${extractedText}</p><img class="del-img" src="images/delete.png" alt="">`;
        const newTask = document.createElement("div");
        newTask.className = `task`;
        newTask.id = `task-${taskCount}`;
        taskListIds.push(newTask.id);
        newTask.innerHTML = template;
        taskList.parentNode.appendChild(newTask);
        taskCount++;
        updateRemovals();
        textBox.focus();
    }
})
plusBtn.addEventListener("click", function(){
    const extractedText = extractText();
    textBox.value = "";
    if(extractedText){
        const template = `<input class="checkbox" type="checkbox"><p class="task-p">Task: ${extractedText}</p><img class="del-img" src="images/delete.png" alt="">`;
        const newTask = document.createElement("div");
        newTask.className = `task`;
        newTask.id = `task-${taskCount}`;
        taskListIds.push(newTask.id);
        newTask.innerHTML = template;
        taskList.parentNode.appendChild(newTask);
        taskCount++;
        updateRemovals();
        textBox.focus();
    }
})
function updateRemovals(){
    for(let i = 0; i<taskListIds.length; i++){
        const temp = document.getElementById(taskListIds[i]);
        const delImg = temp.getElementsByTagName("img")[0];
        const checkBox = temp.getElementsByTagName("input")[0];
        delImg.addEventListener("click", function(){
            setTimeout(() => {
                temp.parentNode.removeChild(temp);
                taskListIds.shift();
            }, 50);
        })
        checkBox.addEventListener("click", function(){
            setTimeout(() => {
                temp.parentNode.removeChild(temp);
                taskListIds.shift();
            }, 50);
        })
    }
}
