import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const createUser = new CreateUserService();

    const newUser = await createUser.execute(request.body);

    return response.json(newUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
