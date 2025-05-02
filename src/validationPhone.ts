export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10,15}$/; 
    return phoneRegex.test(phone);
  }