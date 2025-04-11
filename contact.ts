import * as fs from 'fs';
import *as readline from "readline";

const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})
type contect = {
    name: string,
    phoneNamber: string,
}
function addToContect (name:string ,phoneNamber:string):void{
    const newContact = {name , phoneNamber}
    const file = "./contact.json"

    let contacts: contect[] = [];
    
    if(fs.existsSync(file)){
        const data = fs.readFileSync(file , 'utf-8');
        if(data){
            contacts = JSON.parse(data)
        } 
    }
    contacts.push(newContact)
    fs.writeFileSync(file , JSON.stringify(contacts,null ,2));
}
reader.question('inter name :' ,(name:string)=>{
    reader.question("inter phone number :", (phoneNamber:string)=>{
        addToContect(name , phoneNamber)
        reader.close()
    });
});
