let add=document.querySelector(".add")
let inpTask=document.querySelector("#inptask")
let tasks=document.querySelector(".tasks")
let errMsg=document.querySelector(".errMsg")
let id=0;
add.addEventListener("click",()=>{
    if(inpTask.value.trim()===''){
        errMsg.textContent="Input field is empty"
    }else{
        errMsg.textContent=""
        let task=document.createElement('div')
        task.innerHTML=`<li class="name${id}">${inpTask.value.trim()}</li><button class="remove${id}">remove</button>`
        console.log(task.childNodes,task.childNodes[1].className)
        task.childNodes[1].onclick=()=>{
            removeTask(task.childNodes[1].className,task.childNodes[0].className)
        }
        tasks.appendChild(task)
        inpTask.value=''
        id++;
    }
})

const removeTask=(liId,rmId)=>{
    document.querySelector(`.${liId}`).remove()
    document.querySelector(`.${rmId}`).remove()
}


