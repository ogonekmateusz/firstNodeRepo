setInterval(() => {
    let date = new Date();
    console.clear()
    console.log(date.toLocaleTimeString());
}, 1000);


const fs = require('fs');

fs.readFile("example.txt",'utf8', (err,data) => {
    if(err) console.log("Błąd podczas odczytu pliku")
    else console.log(data);
})