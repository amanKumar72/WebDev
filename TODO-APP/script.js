let add = document.querySelector(".add");
let inpText = document.querySelector("#inptext");
let inpDate = document.querySelector("#inpdate");
let tasks = document.querySelector(".tasks");
let textErr = document.querySelector(".textErr");
let dateErr = document.querySelector(".dateErr");
let id = 0;
add.addEventListener("click", () => {
  if (inpText.value.trim() === "" && inpDate.value.trim() === "") {
    textErr.textContent = "task is missing";
    dateErr.textContent = "Date is mising";
  } else if (inpText.value.trim() === "") {
    dateErr.textContent = "";
    textErr.textContent = "task is missing";
  } else if (inpDate.value.trim() === "") {
    textErr.textContent = "";
    dateErr.textContent = "Date is mising";
  } else {
    textErr.textContent = "";
    dateErr.textContent = "";
    localStorage.setItem(`task${id}Name`,inpText.value)
    localStorage.setItem(`task${id}Date`,inpDate.value)
    let task = document.createElement("div");
    task.classList.add("task");
    task.classList.add(`task${id}`);
    task.innerHTML = `<p class="name">${inpText.value.trim()}<br>${
        inpDate.value
    }</p><button class="remove">remove</button>`;
    console.log(task.childNodes, task.childNodes[1].className);
    task.childNodes[1].onclick = () => {
        console.log(task.classList);
        removeTask(task.classList[1]);
    };
    tasks.appendChild(task);
    inpText.value = "";
    inpDate.value = "";
    id++;
}
});

const removeTask = (taskid) => {
    document.querySelector(`.${taskid}`).remove();
    localStorage.removeItem(`${taskid}Name`)
    localStorage.removeItem(`${taskid}Date`)
};
