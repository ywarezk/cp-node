
const fs = require('fs');



try {
    fs.readFile('./hello1.txt', function(err, data) {
        if (err) {
            // return console.log(err.message);
            err
        }
        console.log(data.toString());
    });
}
catch(err) {
    console.log(err.message);
}


setInterval(() => {

}, 1000);