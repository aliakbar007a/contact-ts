import * as fs from 'fs';
import * as readline from "readline";

const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})
type contect = {
    name: string,
    phoneNamber: string,
}
function addToContect (name: string, phoneNamber: string): void{
    if(name.length < 3 || name.length >= 10){
        console.log("name is invalid");
        return;
    }else if(!(phoneNamber.length == 11)){
        console.log("phone number is invalid");
        return;
    }
   
    const newContact = {name, phoneNamber}
    const file = "./contact.json"

    let contacts: contect[] = [];
    
    if(fs.existsSync(file)){
        const data = fs.readFileSync(file, 'utf-8');
        if(data){
            contacts = JSON.parse(data);
        }
    }
    
    contacts.push(newContact)
    console.log("successful");
    fs.writeFileSync(file, JSON.stringify(contacts, null , 2));
}
function askUser(): void{
    reader.question('inter name (خروج با وارد کردن exit) :', (name: string)=>{
        if(name.toLowerCase() === "exit"){
            reader.close();
            return;
        }
        reader.question("inter phone number :", (phoneNamber: string)=>{
            addToContect(name, phoneNamber)
           askUser()
        });
    });
}
askUser()