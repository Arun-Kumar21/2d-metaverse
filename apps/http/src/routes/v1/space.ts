import express from 'express';

import {
    addElementInSpace,
    getAllSpace,
    createSpace,
    deleteElementFromSpace,
    getSpaceWithId,
    deleteSpace
} from '../../controller/space';

export const spaceRouter = express.Router();

spaceRouter.get('/all', getAllSpace);
spaceRouter.post('/', createSpace);
spaceRouter.delete('/:spaceId', deleteSpace);
spaceRouter.get('/:spaceId', getSpaceWithId);
spaceRouter.post('/element', addElementInSpace);
spaceRouter.delete('/element', deleteElementFromSpace);
