"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function addToContect(name, phoneNamber) {
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
    fs.writeFileSync(file, JSON.stringify(contacts, null, 2));
}
reader.question('inter name :', function (name) {
    reader.question("inter phone number :", function (phoneNamber) {
        addToContect(name, phoneNamber);
        reader.close();
    });
});
