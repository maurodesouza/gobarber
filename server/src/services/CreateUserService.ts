import { getRepository } from 'typeorm';

import User from '../entities/User';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute(data: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);
    const { email } = data;

    const userAlreadyExist = await userRepository.findOne({
      where: { email },
    });

    if (userAlreadyExist) throw new Error('Esse email já esta em uso!');

    const newUser = userRepository.create(data);

    await userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserService;
