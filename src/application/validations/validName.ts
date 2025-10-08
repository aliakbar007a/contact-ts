export function validateName(name: string) {
  if (!name || name.trim().length < 2) {
    throw new Error("نام باید حداقل ۲ کاراکتر باشد.");
  }
}