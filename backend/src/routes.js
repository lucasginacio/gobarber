import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
// rota de teste
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Lucas Inácio',
//     email: 'lucasgabrielinacio1@gmail.com',
//     password_hash: '123',
//   });

//   return res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use('/users', authMiddleware);

routes.put('/users', UserController.update);

export default routes;
