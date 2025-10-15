import { Contact } from "../../domain/type";

let cache: Contact[] | null = null;
let isDirty = false;

// 🧠 گرفتن داده از کش
export function getCache(): Contact[] | null {
  return cache;
}

// 📝 تنظیم داده جدید در کش
export function setCache(data: Contact[]): void {
  cache = data;
  isDirty = true;
}

// 🔍 بررسی اینکه آیا داده تغییر کرده
export function hasChanged(): boolean {
  return isDirty;
}

// 🔄 علامت‌گذاری به عنوان ذخیره‌شده (پس از نوشتن در فایل)
export function markSaved(): void {
  isDirty = false;
}