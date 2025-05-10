import express from 'express';

import { createAvatar, createElement, createMap, updateElement } from '../controller/admin';
import { adminMiddleware } from '../middleware/admin';

export const adminRouter = express.Router();

adminRouter.post('/avatar', adminMiddleware,createAvatar);
adminRouter.post('/element', adminMiddleware, createElement);
adminRouter.post('/map', adminMiddleware, createMap);
adminRouter.put('/element/:elementId', adminMiddleware, updateElement);