//objects ->handle binary data
//file system operations,cryptography,image processing
const BufferOne = Buffer.alloc(10); //allocate a buffer of 10 bytes ->zeros
console.log(BufferOne);
const bufferFromString = Buffer.from("Hello");
console.log(bufferFromString);
const bufferFromArrayOfIntegers = Buffer.from([1, 2, 3, 4]);
console.log(bufferFromArrayOfIntegers);
BufferOne.write("Node js");
console.log(BufferOne.toString());
