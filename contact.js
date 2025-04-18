"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function addToContect(name, phoneNamber) {
    if (name.length < 3 || name.length >= 10) {
        console.log("name is invalid");
        return;
    }
    else if (!(phoneNamber.length == 11)) {
        console.log("phone number is invalid");
        return;
    }
    else if (name.length == 0) {
        console.log("name is empty");
        return;
    }
    var newContact = { name: name, phoneNamber: phoneNamber };
    var file = "./contact.json";
    var contacts = [];
    if (fs.existsSync(file)) {
        var data = fs.readFileSync(file, 'utf-8');
        if (data) {
            contacts = JSON.parse(data);
        }
    }
    contacts.push(newContact);
    console.log("successful");
    fs.writeFileSync(file, JSON.stringify(contacts, null, 2));
}
function askUser() {
    reader.question('inter name (خروج با وارد کردن exit) :', function (name) {
        if (name.toLowerCase() === "exit") {
            reader.close();
            return;
        }
        reader.question("inter phone number :", function (phoneNamber) {
            addToContect(name, phoneNamber);
            askUser();
        });
    });
}
askUser();
