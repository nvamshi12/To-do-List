const addTaskBtn = document.querySelector(".add-task--btn");
const taskInput = document.querySelector(".task-input");
const tasksDiv = document.querySelector(".tasks-div");
const incompletedTasksDiv = document.querySelector(".incompleted-tasks");
const completedTasksDiv = document.querySelector(".completed-tasks");
const incompletedTasksH3 = document.querySelector(".h3-incompleted-tasks");
const completedTasksH3 = document.querySelector(".h3-completed-tasks");
const addIconIncompletedTasks = document.querySelector(
  ".add-icon-incompleted-tasks"
);
const addIconCompletedTasks = document.querySelector(
  ".add-icon-completed-tasks"
);
const crossMark = document.querySelector(".crossmark");
const inputTask = document.querySelector("#input-task");
const crossMarkCompleted = document.querySelector(".crossmark-completed");
const inputTaskForCompleted = document.querySelector("#input-task-completed");
const infoText = document.querySelector(".information-text");
const resetBtn = document.querySelector(".reset-btn");
let tasksArr = [];
let id = 0;

let completedTasksArr = [];
let incompleteTasksArr = [];
let retrievedCompletedTasksArr;
let retrievedIncompleteTasksArr;
let retrievedIdCount;
window.addEventListener("load", function () {
  retrievedCompletedTasksArr = JSON.parse(
    localStorage.getItem("completedTasks")
  );
  retrievedIncompleteTasksArr = JSON.parse(
    localStorage.getItem("incompletedTasks")
  );
  retrievedIdCount = JSON.parse(localStorage.getItem("currentIdCount"));
  if (retrievedCompletedTasksArr) {
    console.log(retrievedCompletedTasksArr);
    retrievedCompletedTasksArr.forEach((task) => {
      const html = task.taskElement;
      crossMarkCompleted.insertAdjacentHTML("afterend", html);
      completedTasksArr.push(task);
    });
  }
  if (retrievedIncompleteTasksArr) {
    console.log(retrievedIncompleteTasksArr);
    retrievedIncompleteTasksArr.forEach((task) => {
      const html = task.taskElement;
      crossMark.insertAdjacentHTML("afterend", html);
      incompleteTasksArr.push(task);
    });
  }
  if (retrievedIdCount) {
    console.log(retrievedIdCount);
    id = retrievedIdCount;
  }
});
console.log(completedTasksArr);
console.log(incompleteTasksArr);
// // when 'add a task' button is clicked
// addTaskBtn.addEventListener("click", function (e) {
//   taskInput.classList.remove("hidden");
//   taskInput.focus();
// });

// // capture user entered task data
// taskInput.addEventListener("keydown", function (e) {
//   taskInput.style.fontWeight = "600"; // Bold the user entered text for visibility
//   console.log(e);
//   // When enter key is pressed, consider the user submitted the task.
//   if (e.key === "Enter") {
//     if (!taskInput.value) return;
//     id++;
//     console.log(id);
//     console.log(taskInput.value);

//     // insert the task entered as a list
//     const HTMLToInsert = `<div class="task-row"><input class="checkbox-input" id="checkbox-input-${id}" type="checkbox" /><label for="checkbox-input-${id}" id="task-content-${id}" class="task-content">${taskInput.value}</label></div>`;
//     incompletedTasksH3.insertAdjacentHTML("afterend", HTMLToInsert);
//     checkbox = document.querySelector(".checkbox-input");
//     taskContent = document.querySelector(".task-content");
//     // add info to the array
//     tasksArr.push({ taskId: id, taskInput: taskInput.value });
//     incompleteTasksArr.push({ taskId: id, taskElement: HTMLToInsert });
//     // hide the input and remove the entered value/text
//     taskInput.classList.add("hidden");
//     taskInput.value = "";
//   }
// });

// input for 'incomplete' tasks - 'todo' tasks
inputTask.addEventListener("keydown", function (e) {
  inputTask.style.fontWeight = "600"; // Bold the user entered text for visibility
  console.log(e);
  // When enter key is pressed, consider the user submitted the task.
  if (e.key === "Enter") {
    if (!inputTask.value) return;
    id++;
    console.log(id);
    console.log(inputTask.value);

    // insert the task entered as a list
    const HTMLToInsert = `<div class="task-row"><input class="checkbox-input" id="checkbox-input-${id}" type="checkbox" /><label for="checkbox-input-${id}" id="task-content-${id}" class="task-content">${inputTask.value}</label></div>`;
    crossMark.insertAdjacentHTML("afterend", HTMLToInsert);

    // add info to the array
    tasksArr.push({ taskId: id, taskInput: inputTask.value });
    incompleteTasksArr.push({ taskId: id, taskElement: HTMLToInsert });
    // hide the input and remove the entered value/text
    inputTask.classList.add("hidden");
    crossMark.classList.add("hidden");
    inputTask.value = "";
  }
});

// input for 'completed' tasks
inputTaskForCompleted.addEventListener("keydown", function (e) {
  inputTask.style.fontWeight = "600"; // Bold the user entered text for visibility
  console.log(e);
  // When enter key is pressed, consider the user submitted the task.
  if (e.key === "Enter") {
    if (!inputTaskForCompleted.value) return;
    id++;
    console.log(id);
    console.log(inputTaskForCompleted.value);

    // insert the task entered as a list
    const HTMLToInsert = `<div class="task-row"><input class="checkbox-input" id="checkbox-input-${id}" type="checkbox" checked /><label for="checkbox-input-${id}" id="task-content-${id}" class="task-content">${inputTaskForCompleted.value}</label></div>`;
    crossMarkCompleted.insertAdjacentHTML("afterend", HTMLToInsert);

    const taskContent = document.querySelector(`#task-content-${id}`);
    taskContent.style.textDecoration = "line-through";
    // add info to the array
    completedTasksArr.push({ taskId: id, taskElement: HTMLToInsert });
    // hide the input and remove the entered value/text
    inputTaskForCompleted.classList.add("hidden");
    crossMarkCompleted.classList.add("hidden");
    inputTaskForCompleted.value = "";
  }
});

// listen for events on the whole tasks-div
tasksDiv.addEventListener("click", function (e) {
  console.log(`CLICKED ON TASKS DIV`);

  // if add task icon is clicked for 'incomplete' tasks
  if (e.target === addIconIncompletedTasks) {
    inputTask.classList.remove("hidden");
    crossMark.classList.remove("hidden");
    inputTask.focus();
  }
  // if add task icon is clicked for 'completed' tasks
  if (e.target === addIconCompletedTasks) {
    inputTaskForCompleted.classList.remove("hidden");
    crossMarkCompleted.classList.remove("hidden");
    inputTaskForCompleted.focus();
  }
  // if crossMark icon is clicked for 'incomplete' tasks
  if (e.target === crossMark) {
    inputTask.classList.add("hidden");
    crossMark.classList.add("hidden");
    inputTask.value = "";
  }
  // if crossMark icon is clicked for 'completed' tasks
  if (e.target === crossMarkCompleted) {
    inputTaskForCompleted.classList.add("hidden");
    crossMarkCompleted.classList.add("hidden");
    inputTaskForCompleted.value = "";
  }

  // if the click happened on the checkbox - when checkbox is checked/unchecked
  if (e.target.classList.contains("checkbox-input")) {
    console.log(`CHECKBOX CLICKED`);

    console.log(e.target.id.at(-1));
    const retrievedId = e.target.id.at(-1);
    const taskContent_ = document.querySelector(`#task-content-${retrievedId}`);

    // falls under 'incomplete' tasks
    if (taskContent_.style.textDecoration === "line-through") {
      taskContent_.style.textDecoration = "none";
      // To make the 'text-decoration:line-through/none' work we defined the below variables twice in if-else blocks.
      const checkedTask = document.getElementById(
        `task-content-${retrievedId}`
      );
      const checkedCheckbox = document.getElementById(
        `checkbox-input-${retrievedId}`
      );
      const taskHTML = `<div class="task-row"><input class="checkbox-input" id="checkbox-input-${retrievedId}" type="checkbox" />${checkedTask.outerHTML}</div>`;
      crossMark.insertAdjacentHTML("afterend", taskHTML);

      incompleteTasksArr.push({ taskId: retrievedId, taskElement: taskHTML });
      let completedTaskObj;
      let completedTaskIndex;
      // get the required element we want to delete from incompleted tasks array.
      completedTasksArr.forEach((item, i) => {
        if (item.taskId == retrievedId) {
          completedTaskObj = item;
          completedTaskIndex = i;
        }
      });
      completedTasksArr.splice(completedTaskIndex, 1);
      checkedTask.remove();
      checkedCheckbox.remove();
    }
    // falls under 'completed' tasks
    else {
      taskContent_.style.textDecoration = "line-through";

      // To make the 'text-decoration:line-through/none' work we defined the below variables twice in if-else blocks.
      const checkedTask = document.getElementById(
        `task-content-${retrievedId}`
      );
      const checkedCheckbox = document.getElementById(
        `checkbox-input-${retrievedId}`
      );
      const taskHTML = `<div class="task-row"><input class="checkbox-input" id="checkbox-input-${retrievedId}" type="checkbox" checked />${checkedTask.outerHTML}</div>`;

      // add the checked task to completed tasks div
      crossMarkCompleted.insertAdjacentHTML("afterend", taskHTML);
      completedTasksArr.push({ taskId: retrievedId, taskElement: taskHTML });
      let requiredObj;
      let requiredIndex;
      // get the required element we want to delete from incompleted tasks array.
      incompleteTasksArr.forEach((item, i) => {
        if (item.taskId == retrievedId) {
          requiredObj = item;
          requiredIndex = i;
        }
      });

      incompleteTasksArr.splice(requiredIndex, 1);

      // remove the checked task from incompleted task list
      checkedTask.remove();
      checkedCheckbox.remove();
    }
  }
});

resetBtn.addEventListener("click", function () {
  localStorage.removeItem("completedTasks");
  localStorage.removeItem("incompletedTasks");
  localStorage.removeItem("currentIdCount");
  document.querySelectorAll(".task-row").forEach((element) => element.remove());
  incompleteTasksArr = [];
  completedTasksArr = [];
  id = 0;
  console.log("resetBtn clicked");
});

// When page is closed/tab is changed..etc
document.addEventListener("visibilitychange", function () {
  // Save the data to local storage
  if (document.visibilityState === "hidden") {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasksArr));
    localStorage.setItem(
      "incompletedTasks",
      JSON.stringify(incompleteTasksArr)
    );
    localStorage.setItem("currentIdCount", JSON.stringify(id));
  }
});

// display information about the add icon
addIconIncompletedTasks.addEventListener("mouseover", function (e) {
  console.log(e);
  const addIconIncompleteTasksPosition =
    addIconIncompletedTasks.getBoundingClientRect();
  console.log(addIconIncompleteTasksPosition);

  infoText.style.top = `${addIconIncompleteTasksPosition.bottom - 4}px`;
  infoText.style.left = `${addIconIncompleteTasksPosition.left}px`;
  infoText.style.opacity = 1;
});
addIconIncompletedTasks.addEventListener("mouseleave", function (e) {
  infoText.style.opacity = 0;
});

// display information about the add icon
addIconCompletedTasks.addEventListener("mouseover", function (e) {
  console.log(e);
  const addIconCompleteTasksPosition =
    addIconCompletedTasks.getBoundingClientRect();

  infoText.style.top = `${addIconCompleteTasksPosition.bottom - 4}px`;
  infoText.style.left = `${addIconCompleteTasksPosition.left}px`;
  infoText.style.opacity = 1;
});
addIconCompletedTasks.addEventListener("mouseleave", function (e) {
  infoText.style.opacity = 0;
});
