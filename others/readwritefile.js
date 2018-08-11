const fs = require("fs");

//const data = fs.readFileSync('input.txt');

//console.log(data.toString());
//console.log("Program Ended");

fs.readFile('input.txt', (err, data) => {
      if (err){
          console.log(err.stack);
          return;
       }
       console.log(data.toString());
});

console.log("Program Ended");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning Node!',  function(err) {
   if (err) {
      return console.error(err);
   }

   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
