import express from 'express';

import {
    addElementInSpace,
    getAllSpace,
    createSpace,
    deleteElementFromSpace,
    getSpaceWithId,
    deleteSpace
} from '../../controller/space';
import { userMiddleware } from '../../middleware/user';

export const spaceRouter = express.Router();

spaceRouter.get('/all', getAllSpace);
spaceRouter.post('/', userMiddleware, createSpace);
spaceRouter.delete('/:spaceId', userMiddleware, deleteSpace);
spaceRouter.get('/:spaceId', userMiddleware, getSpaceWithId);
spaceRouter.post('/element', userMiddleware, addElementInSpace);
spaceRouter.delete('/element', userMiddleware, deleteElementFromSpace);