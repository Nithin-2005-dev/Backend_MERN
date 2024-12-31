const fs=require('fs');
//callback hell:more number of nested callbacks
fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        throw new Error(err.message)
    }
    console.log(data);
    const modifiyFileData=data.toUpperCase();
    fs.writeFile('output.txt',modifiyFileData,()=>{
        if(err){
            throw new Error(err.message)
        }
        fs.readFile('output.txt','utf-8',(err,data)=>{
            console.log(data);
        })
    })
})