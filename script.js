// --------------------- CODIGO CÓPIA ABAIXO--------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const addItem = document.querySelector('#addTaskButton');
    addItem.addEventListener('click', addTask);  

    document.querySelector('.dark-light-mode').addEventListener('click', darkMode)

    loadTasks();
});

    const currentDateTime = new Date();
    const dateTime = `${currentDateTime.getDate()}/${currentDateTime.getMonth()+1}/${currentDateTime.getFullYear()}  `;

    const showDate = document.querySelector('.date-stamp');
    showDate.textContent = dateTime;


function addTask(){
   const taskInput = document.querySelector('#taskInput');
         taskValue = taskInput.value.trim();
         if(!taskValue){ //<--- the exclamation mark means, if NO TASKVALUE(what the user should type inside input), alert"bla, bla, bla"
            alert("Please, insert a task!")
            return;
        }

    const listItem = document.querySelector('#taskList');
    const taskItem = document.createElement('li');    


    const spanItem = document.createElement('span');
    spanItem.className = 'span';
    spanItem.textContent = taskValue;
    spanItem.setAttribute('contenteditable','true')
    spanItem.addEventListener('keyup', saveTasks)

    
    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox-done';
    checkBox.setAttribute('type','checkbox');
    // checkBox.type = 'checkbox';
    checkBox.addEventListener('click', () => taskDone(spanItem));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(deleteButton));

    taskItem.append(checkBox, spanItem, deleteButton);
    listItem.appendChild(taskItem);

    taskInput.value = '';     

    saveTasks();
}

function darkMode(){
    const bodyColor = document.querySelector('body');
    const btnLight = document.querySelector('.dark-light-mode');
    const imgLight = document.querySelector('.img-Light-btn');

    bodyColor.classList.toggle('JS-body-dark-mode')
    btnLight.classList.toggle('JS-dark-mode')
    imgLight.classList.toggle('JS-light-btn-hidden')

    // bodyColor.classList.toggle('JS-body-dark-mode') ? localStorage.setItem('DarkModeOn', 'true') : localStorage.setItem('DarkModeOn', 'false')
    // btnLight.classList.toggle('JS-dark-mode') ? localStorage.setItem('DarkModeOn', 'true') : localStorage.setItem('DarkModeOn', 'false')
    // imgLight.classList.toggle('JS-light-btn-hidden') ? localStorage.setItem('DarkModeOn', 'true') : localStorage.setItem('DarkModeOn', 'false')
    
    saveTasks();
}

function deleteItem(button){
    const deleteTask = button.parentElement;
    deleteTask.remove();
    saveTasks();
}

function taskDone(done){
    done.classList.toggle('strike-through');
    doneColor = done.parentElement;
    doneColor.classList.toggle('background-done-task')
    saveTasks();
}

// ---------(localStorage())---------//



function saveTasks() {

    const tasks = [];                              //here, taskItem it's just a parameter, you can use ANY name here.                       
    document.querySelectorAll('#taskList li').forEach(taskItem => { //<--- for each 'li'(taskItem), execute a function inside the curly braces(=>{})
        const task = {
            text: taskItem.querySelector('.span').textContent,
            done: taskItem.querySelector('.checkbox-done').checked
        };
        tasks.push(task);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    // const bodyColor = document.querySelector('body');
    // const btnLight = document.querySelector('.dark-light-mode');
    // const imgLight = document.querySelector('.img-Light-btn');

//     if(localStorage.getItem('DarkModeOn') == 'true'){
//         bodyColor.classList.add('JS-body-dark-mode')
//     }else {bodyColor.classList.remove('JS-body-dark-mode')
// } 
    // if(localStorage.getItem('DarkModeOn') == 'true'){
    //     btnLight.classList.add('JS-dark-mode')
    // }
    // if(localStorage.getItem('DarkModeOn') == 'true'){
    //     imgLight.classList.add('JS-light-btn-hidden')
    // }

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const listItem = document.querySelector('#taskList');
        const taskItem = document.createElement('li');
        const spanItem = document.createElement('span');
        const checkBox = document.createElement('input');
        const deleteButton = document.createElement('button');
        
        
        spanItem.className = 'span';
        spanItem.textContent = task.text;
        spanItem.setAttribute('contenteditable','true')
        spanItem.addEventListener('keyup', saveTasks)
        
        checkBox.className = 'checkbox-done';
        checkBox.type = 'checkbox';
        checkBox.checked = task.done;
        checkBox.addEventListener('click', () => {taskDone(spanItem)});
        
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {deleteItem(deleteButton)});


        if (task.done) {
            spanItem.classList.add('strike-through');
            taskItem.classList.add('background-done-task');
        }

        
        taskItem.append(checkBox, spanItem, deleteButton);
        listItem.appendChild(taskItem);
    });
}


// --------------------- CODIGO CÓPIA ACIMA--------------------------//

