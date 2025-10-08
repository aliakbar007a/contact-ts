export function validatePhone(phone: string): void {
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error("شماره تلفن نامعتبر است.");
  }
}