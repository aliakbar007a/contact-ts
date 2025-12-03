import { readFileSync, writeFileSync } from "node:fs";
import { readContacts } from "../../infrastructure/persistence/readContacts";

const TOKEN_PATH = "./src/infrastructure/data/tokens.txt";


function readTokenLines(): string[] {
  const content = readFileSync(TOKEN_PATH, "utf-8");
  return content
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0);
}


function writeTokenLines(lines: string[]) {
  writeFileSync(TOKEN_PATH, lines.join("\n"));
}


export async function findContactByToken(token: string) {
  const tokenLines = readTokenLines();

  const tokenIndex = tokenLines.findIndex(line => line.startsWith(token + " "));
  if (tokenIndex === -1) throw new Error("توکن معتبر نیست یا یافت نشد.");

  const tokenLine = tokenLines[tokenIndex];
  const parts = tokenLine.split(" ");
  const name = parts.slice(1).join(" ");

  const contacts = await readContacts();
  const index = contacts.findIndex(c => c.name === name);

  if (index === -1) throw new Error("مخاطب مربوط به این توکن یافت نشد.");

  return { name, tokenLines, tokenIndex, contacts, index };
}


export function updateTokenName(token: string, newName: string) {
  const tokenLines = readTokenLines();

  const tokenIndex = tokenLines.findIndex(line => line.startsWith(token + " "));
  if (tokenIndex === -1) return;

  tokenLines[tokenIndex] = `${token} ${newName}`;
  writeTokenLines(tokenLines);
}


export function deleteToken(token: string) {
  const tokenLines = readTokenLines();

  const tokenIndex = tokenLines.findIndex(line => line.startsWith(token + " "));
  if (tokenIndex === -1) return;

  const updated = tokenLines.filter((_, i) => i !== tokenIndex);
  writeTokenLines(updated);
}