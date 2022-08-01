import {Router} from 'express'
import PlayController from '../controllers/playController'

const router: Router = Router()


router.get('/move', PlayController.move)