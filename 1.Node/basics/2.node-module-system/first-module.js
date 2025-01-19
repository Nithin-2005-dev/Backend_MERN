const add=(a,b)=>{
    return a+b;
}
const subtract=(a,b)=>{
    return a-b;
}
const multiply=(a,b)=>{
    return a*b;
}
const divide=(a,b)=>{
    if(b===0){
        throw new Error("b should not be zero");
    }
    return a/b;
}
module.exports={
    add,subtract,multiply,divide
}