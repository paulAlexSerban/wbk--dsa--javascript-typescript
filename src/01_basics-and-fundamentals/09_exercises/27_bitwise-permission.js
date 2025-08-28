const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// add permission by using the Bitwise OR operator " | "
myPermission = myPermission | writePermission;
console.log({ myPermission });

// check permission using the Bitwise AND operator " & "
let message = myPermission & readPermission ? 'yes' : 'no';
console.log({ message });
