// Code your solution in this file!
let companyName = 'Scuber';

function upperCase(name) {
  if (typeof name !== "string") {
    throw TypeError("name must be a string");
  }
  return name.toUpperCase();
}