import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../entities/User';

interface RequestDTO {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: RequestDTO): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) throw new Error('Você passou alguma informação errada');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new Error('Você passou alguma informação errada');

    const token = sign({}, '7fd39d791d9e874d8e5a8bab4b4d6233', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
