import express from 'express';

import {updateUserMetadata, updateUsersMetadata} from '../../controller/user';
import { userMiddleware } from '../../middleware/user';

export const userRouter = express.Router();

userRouter.post('/metadata', userMiddleware, updateUserMetadata);
userRouter.post('/metadata/bulk', updateUsersMetadata);