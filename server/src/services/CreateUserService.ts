import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../entities/User';
import AppError from '../error/AppError';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const userAlreadyExist = await userRepository.findOne({
      where: { email },
    });

    if (userAlreadyExist) throw new AppError('Esse email já esta em uso!');

    const hasedPassword = await hash(password, 8);

    const newUser = userRepository.create({
      name,
      email,
      password: hasedPassword,
    });

    await userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserService;
