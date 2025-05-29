export function deleteContactResult (isDeleted: boolean):void{
    if(isDeleted){
     console.log('Contact deleted successfully.');
    } else {
      console.log('Contact not found.');
    }
}