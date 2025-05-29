import { askName } from '../../../ui/askName';
import { askPhone } from '../../../ui/askPhone';
import { askTag } from '../../../ui/askTag';

export async function input(): Promise<{name: string; phone: string; tag: string}>{
    const name = await askName();
    const phone = await askPhone();
    const tag = await askTag();
    return {name, phone, tag}
}