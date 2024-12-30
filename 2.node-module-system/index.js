//module.exports->export
//require->import
const operations=require('./first-module.js');
console.log(operations.divide(1,10));
try{
console.log(operations.divide(10,0));
}catch(err){
    console.log(err.message);
}

//module wrapper
// (
//     function(exports,require,module,__filename,__dirname){
//         //your module code goes here
//     }
// )