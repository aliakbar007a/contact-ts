import { askName } from "../../../ui/askName";
import { askPhone } from "../../../ui/askPhone";
import { askPreName } from "../../../ui/askPreName";
import { askTag } from "../../../ui/askTag";

export async function input(): Promise<{preName: string; newName: string; newPhone: string; newTag: string}>{
   const preName = await askPreName();
     const newName = await askName();
     const newPhone = await askPhone();
     const newTag = await askTag();
    return {preName, newName, newPhone, newTag}
}