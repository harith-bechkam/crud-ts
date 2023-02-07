import { Router } from 'express';
import userService from '../services/userService' 

// Constants
const router = Router();

// Setup routers
router.get('/list', userService.list);
router.post('/add', userService.add);
router.put('/update', userService.updatefun);
router.delete('/delete', userService.Deletefun);

export default router;
