import { inject, injectable } from 'tsyringe';
import ISocietyRepository from '@modules/Society/infra/repositories/ISocietyRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  closeIn: string;
  name: string;
  openIn: string;
  description: string;
}

@injectable()
class CreateSocietyService {
  constructor(
    @inject('SocietyRepositories')
    private societeRepository: ISocietyRepository,
  ) {}

  public async execute({ closeIn, name, description, openIn }: IRequest) {
    const existentSameName = await this.societeRepository.findByName(name);

    if (existentSameName) {
      throw new AppError('Ja existe um usuário com este nome :(');
    }

    const society = await this.societeRepository.createSociety({
      closeIn,
      description,
      name,
      openIn,
    });

    return society;
  }
}

export default CreateSocietyService;
