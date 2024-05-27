var a =console.log("hello")
console.error("error")
console.warn("warning")
console.info('info')

// var alert=alert("hello")
// var email=prompt("email ")
// console.log(a ,alert,email)




//data types
var i=98//int
var fl=89.6//float
var b=true//boolean
var s1="string";//string not mutable
var arr=[]
var s={}
var f=function(){}
console.log(typeof(i),typeof(fl),typeof(b),typeof(s1),typeof(arr),typeof(s),typeof(f))


//we can modify reference related variables if they are constant or variables ex array,string,set


console.log(this)
const obj={
    fname:function(){
        console.log(this)//OBJ
        function child(){
            console.log(this)//WINDOW
        }
        child()
    }
}
obj.fname()

const obj1={
    fname:()=>{
        console.log(this)
         function child(){
            console.log(this)
        }
        child()
    }
}
obj1.fname()

const obj2={
    fname:function(){
        console.log(this)//OBJ
        const child=()=>{
            console.log(this)//WINDOW
        }
        child()
    }
}
obj2.fname()

const obj3={
    fname:()=>{
        console.log(this)
         const child=()=>{
            console.log(this)
        }
        child()
    }
}
obj3.fname()
