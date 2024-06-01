onmessage=function(res){
    let ans =res.data.reduce((acc,val)=>acc+val,0)
    postMessage(ans)
}