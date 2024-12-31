function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
console.log("Promise lecture starts");
delay(2000).then(() => console.log("after 2 seconds promise resolved"));
console.log("end");
function divide(a,b){
return new Promise((resolve,reject)=>{
    if(b===0){
        reject("cannot perfome division by 0")
    }else{
        resolve(a/b);
    }
})
}
divide(10,0).then((ans)=>{
    console.log(ans);
}).catch((err)=>{
    console.log("Error=",err);
})