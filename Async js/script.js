let a = 6;
let timeout = setTimeout(() => {
  console.log("hello");
}, 1000);
// a=5
if (a == 5) {
  clearTimeout(timeout);
}
let count = 0;
let interva = setInterval(() => {
  if (count === 5) {
    clearInterval(interva);
  }
  console.log(count++);
}, 300);

fetch("https://randomuser.me/api/")
  .then((raw) => raw.json())
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

axios.get("https://randomuser.me/api/").then((res) => {
  console.log(res.data);
});

//callback
function fatchData(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then((res) => callback(res));
}

fatchData("https://randomuser.me/api/", (res) => {
  console.log(res);
});

//promises

let prom = new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api/")
    .then((raw) => raw.json())
    .then((res) => resolve(res));
});

prom
.then(res => {
console.log(res);
})
.catch(reject=>{
  console.log(reject);
  
})


//async await

async function getData(url){
  let raw= await fetch(url)
  let res=await raw.json()
  console.log(res)
}

getData("https://randomuser.me/api/")




function* print(){
  console.log("hello1")
  yield "ist";
  console.log("hello2")
  yield "2nd";
  console.log("hello3")
  yield 3;
  console.log("hello7")
  console.log("hello7")
  console.log("hello7")
  console.log("hello7")
  console.log("hello7")
  console.log("hello7")

}
const generator=print()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next())



const arr=Array.from({length:100000},(_,a)=>a+1)
const worker=new Worker("worker.js")
worker.postMessage(arr)
worker.onmessage=function(res){
  console.log(res.data)
}