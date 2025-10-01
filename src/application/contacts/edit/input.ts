import { askName } from "../../../interfaces/cli/prompts/askName";
import { askPhone } from "../../../interfaces/cli/prompts/askPhone";
import { askPreName } from "../../../interfaces/cli/prompts/askPreName";
import { askTag } from "../../../interfaces/cli/prompts/askTag";

export async function input(): Promise<{preName: string; newName: string; newPhone: string; newTag: string}>{
     const preName = await askPreName();
     const newName = await askName();
     const newPhone = await askPhone();
     const newTag = await askTag();
    return {preName, newName, newPhone, newTag}
}