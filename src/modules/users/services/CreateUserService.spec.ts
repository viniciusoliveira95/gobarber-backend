import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Vinicius Oliveira',
      email: 'vinicius@email.com',
      password: 'senha',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Vinicius Oliveira');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const email = 'vinicius@email.com';

    await createUser.execute({
      name: 'Vinicius Oliveira',
      email,
      password: 'senha',
    });

    await expect(
      createUser.execute({
        name: 'Vinicius Oliveira',
        email,
        password: 'senha',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
