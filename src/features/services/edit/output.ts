export function editContactResult (isEdited: boolean):void{
    if(isEdited){
      console.log('Contact updated successfully.');  
    } else {
      console.log('Contact not found.');
    }
}