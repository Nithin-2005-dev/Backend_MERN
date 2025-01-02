function delay(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}
async function calldelay(name) {
    await delay(2000);
    console.log(name);
}
calldelay("Nithin")
console.log("end");