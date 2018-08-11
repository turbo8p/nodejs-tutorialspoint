const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Copies the contents of `arr`
const buf = Buffer.from(arr);
// Shares memory with `arr`
const buf2 = Buffer.from(arr.buffer);
console.log(buf2);
// Prints: <Buffer 88 13 a0 0f>
let len = buf.write("Simply Easy Learning");
// Prints: <Buffer 88 a0>
console.log(`Octets written : ${len}`);

// buffer to json

const json = buf.toJSON(buf);

console.log(`buffer to JSON : ${json}`);
