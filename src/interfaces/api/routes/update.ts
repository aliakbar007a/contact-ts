import { Router } from 'express'
import { updateContact } from '../controllers/updata'

export const updateRouter = Router()
updateRouter.put('/:token', updateContact)
