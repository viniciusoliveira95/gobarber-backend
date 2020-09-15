import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

class UserAvatarContrller {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);
    const user = await updateUserAvatar.execute({
      userId: req.user.id,
      avatarFilename: req.file.filename,
    });
    delete user.password;

    return res.json(user);
  }
}

export default UserAvatarContrller;
