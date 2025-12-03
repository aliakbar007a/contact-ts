import { Router } from 'express'
//import { getAllContacts } from '../controllers/show'
import { deleteContact } from '../controllers/delete'

export const deleteRouter = Router()
deleteRouter.delete('/:token', deleteContact)
