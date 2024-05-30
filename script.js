// --------------------- CODIGO CÓPIA ABAIXO--------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const addItem = document.querySelector('#addTaskButton');
    addItem.addEventListener('click', addTask);  
    
});

    const currentDateTime = new Date();
    const dateTime = `${currentDateTime.getDate()}/${currentDateTime.getMonth()+1}/${currentDateTime.getFullYear()}  `;

    const showDate = document.querySelector('.date-stamp');
    showDate.textContent = dateTime;


function addTask(){
   const taskInput = document.querySelector('#taskInput');
         taskValue = taskInput.value.trim();
         if(taskValue === ''){
            alert("Please, insert a task!")
            return;}

    const listItem = document.querySelector('#taskList');
    const taskItem = document.createElement('li');
    
    const spanItem = document.createElement('span');
    spanItem.className = 'span';
    spanItem.textContent = taskValue;

    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox-done';
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', () => taskDone(spanItem));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(deleteButton));

    taskItem.appendChild(checkBox);
    taskItem.appendChild(spanItem);
    taskItem.appendChild(deleteButton);
    listItem.appendChild(taskItem);

    taskInput.value = '';     

}

function deleteItem(button){
    const deleteTask = button.parentElement;
    deleteTask.remove();
}

function taskDone(done){
    done.classList.toggle('strike-through');
    doneColor = done.parentElement;
    doneColor.classList.toggle('background-done-task')
}

// // ------------- CODIGO CÓPIA (localStorage())-------------//

// function saveTasks() {
//     // Line 1: Select all task items
//     const tasks = [...taskList.querySelectorAll('li')].map(taskItem => ({
//         value: taskItem.querySelector('.span').textContent, // Get the task text
//         done: taskItem.querySelector('.checkbox-done').checked // Get the task's done status
//     }));
//     // Line 2: Save tasks to localStorage
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function loadTasks() {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     savedTasks.forEach(task => addTask(task.value, task.done));
// }
// --------------------- CODIGO CÓPIA ACIMA--------------------------//
