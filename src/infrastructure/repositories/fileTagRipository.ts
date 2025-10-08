import { promises as fs } from "fs";
import { TagRepository } from "../../domain/model/tagRepository";
import { Tag } from "../../domain/type";
import path from "path";

const filePath = path.join(__dirname, "../data/tags.json");

export function createFileTagRepository(): TagRepository {
  async function read(): Promise<Tag[]> {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data) as Tag[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        return [];
      }
      throw error;
    }
  }

  async function writeAll(tags: Tag[]): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(tags, null, 2), "utf-8");
  }

  async function add(tag: Tag): Promise<void> {
    const tags = await read();
    tags.push(tag);
    await writeAll(tags);
  }

  return { read, writeAll, add };
}