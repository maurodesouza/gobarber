import { getRepository } from 'typeorm';

import path from 'path';
import fs from 'fs';

import User from '../entities/User';
import AppError from '../error/AppError';
import uploadConfig from '../config/upload';

interface RequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  async execute({ user_id, avatarFileName }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user)
      throw new AppError(
        'Você precisa estar logado para alterar o seu avatar',
        401,
      );

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) await fs.promises.unlink(userAvatarFilePath);
    }

    user.avatar = avatarFileName;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
