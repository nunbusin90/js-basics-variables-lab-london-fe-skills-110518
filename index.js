// Code your solution in this file!
let companyName = 'Scuber';

function Scuber() {
  if (companyName != ('Scuber')) {
    throw TypeError("TypeError");
  }
}

expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);