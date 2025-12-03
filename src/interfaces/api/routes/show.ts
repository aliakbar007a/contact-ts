import { Router } from 'express'
import { getAllContacts } from '../controllers/show'

export const showRouter = Router()
showRouter.get('/users', getAllContacts)
