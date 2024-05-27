//ques 1 change text on change 

let p=document.querySelector("p");
let btn=document.querySelector(".changetext");
btn.addEventListener("click",()=>{
    p.textContent="new text"
})

//ques 2 swap images on click
let button=document.querySelector(".swapImage");
button.addEventListener("click",()=>{
    let img1=document.querySelector("#img1");
    let img2=document.querySelector("#img2");
    [img1.src,img2.src]=[img2.src,img1.src];
})

//ques 3 form validation

let form=document.querySelector("form")
let inputs=document.querySelectorAll("input")
let errMsg=document.querySelector("#errorMsg")
form.addEventListener("submit",(details)=>{
    details.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim()===''){
            errMsg.textContent="Some input are missing"
            errMsg.style.color='red'
            break
        }  else{
            errMsg.textContent=''
        }      
    }
})