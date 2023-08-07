const inputElement = document.querySelector(".input");
const addTaskButton = document.querySelector(".button");
const taskContainer = document.querySelector('.tarefas-container');

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        inputElement.classList.add("error");
        return;
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleClick(taskContent));

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fas', 'fa-trash');

    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent)); // Corrigido para passar o taskContent

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);

    inputElement.value = '';

    inputElement.classList.remove('error');
};

const handleClick = (taskContent) => {
    taskContent.classList.toggle("completed"); 
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    taskContainer.removeChild(taskItemContainer); 

     
    
    const tasks = taskContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            taskContainer.removeChild(task);
            break;
        }
    }
    
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", handleAddTask);
inputElement.addEventListener("change", handleInputChange);
