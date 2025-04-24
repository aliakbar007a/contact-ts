export function isValidName(name: string): boolean {
    return name.trim().length > 3;
  }
  
  export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10,15}$/; // فقط عدد، بین 10 تا 15 رقم
    return phoneRegex.test(phone);
  }