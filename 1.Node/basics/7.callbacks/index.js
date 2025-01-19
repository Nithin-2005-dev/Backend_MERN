//callbacks are functions which are passes as arguments to other functions



function person(name, callback) {
  console.log(`hello ${name}`);
  callback();
}
function address() {
  console.log("address");
}
person("nithin",address);