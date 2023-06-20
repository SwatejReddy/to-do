const addButton = document.querySelector(".add-btn");
const textBox = document.querySelector("#text-box");
var presentDiv = document.querySelector(".tasks-div");

// var tasksDivCopy = tasksDiv.cloneNode(true);
var nowDiv = tasksDiv.cloneNode(true);
var counter = 0;

// newDiv.textContent = 'This is the new div content';
function extractText() {
  return textBox.value;
}

function update(extractedText){
    tasksDiv.parentNode.appendChild(nowDiv);
    const addedTask = "<p class ='task-"+counter+"'>" + extractedText + "</p>";
    tasksDiv.classList.add(`task-${counter}-container`);
    tasksDiv.classList.remove("tasks-div");
    tasksDiv.innerHTML = addedTask;
    counter++;
}

function updateDivs(){
    tasksDiv = document.querySelector(".tasks-div");
    nowDiv = nowDiv.cloneNode(true);

}

addButton.addEventListener("click", function() {
  const extractedText = extractText();
  if(extractedText){
    tasksDiv.parentNode.appendChild(nowDiv);
    const addedTask = "<p class ='task-"+counter+"'>" + extractedText + "</p>";
    tasksDiv.innerHTML = addedTask;
    tasksDiv.classList.remove("tasks-box");
    tasksDiv.classList.add(`task-{$counter}-container`);
    counter++;
    update(extractedText);
    updateDivs();
  }
});
