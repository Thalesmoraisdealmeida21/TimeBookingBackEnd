import { inject, injectable } from 'tsyringe';
import ISocietyRepository from '@modules/Society/infra/repositories/ISocietyRepository';

@injectable()
class CreateSocietyService {
  constructor(
    @inject('SocietyRepositories')
    private societyRepository: ISocietyRepository,
  ) {}

  public async execute() {
    const societies = this.societyRepository.findAll();

    return societies;
  }
}

export default CreateSocietyService;
