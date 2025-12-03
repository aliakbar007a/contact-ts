//import { getAllContacts } from '../controllers/show'
import { Router } from 'express'
import { addContact } from '../controllers/add'

export const addRouter = Router()
addRouter.post('/add', addContact)
