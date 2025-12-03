import {Router} from 'express'
import { showRouter } from './show';
import { addRouter } from './add';
import { deleteRouter } from './delete';
import { updateRouter } from './update'; 

export const Routers:Array<[string, Router]> = [
    ['/', showRouter],
    ['/add', addRouter],
    ['/delete', deleteRouter],
    ['/update', updateRouter]
]


