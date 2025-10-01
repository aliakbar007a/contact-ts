import { askName } from "../../../interfaces/cli/prompts/askName";
import { askPhone } from "../../../interfaces/cli/prompts/askPhone";
import { askTag } from "../../../interfaces/cli/prompts/askTag";

export async function input(): Promise<{name: string; phone: string; tag: string}>{
    const name = await askName();
    const phone = await askPhone();
    const tag = await askTag();
    return {name, phone, tag}
}