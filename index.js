// Code your solution in this file!
let companyName = 'Scuber';

function Scuber() {
  if (typeof name !== "string") {
    throw TypeError("name must be a string");
  }
  return name.toUpperCase();
}