import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../entities/User';

interface RequestDTO {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: RequestDTO): Promise<{ user: User }> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) throw new Error('Você passou alguma informação errada');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new Error('Você passou alguma informação errada');

    return { user };
  }
}

export default AuthenticateUserService;
