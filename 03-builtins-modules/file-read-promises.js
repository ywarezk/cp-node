
const fs = require('fs').promises;

const promiseOfOurfile = fs.readFile('./hello1.txt');

// async function waitToReadFile() {
//     try {
//         const dataInFile = await promiseOfOurfile;
//         console.log(dataInFile.toString());
//     } catch(err) {

//     }
    
    
// }

promiseOfOurfile.then(
    function(data) {
        console.log(data.toString());
    },
    // function(err) {
    //     console.log(err.message);
    // }
)

setInterval(() => {

}, 1000);







