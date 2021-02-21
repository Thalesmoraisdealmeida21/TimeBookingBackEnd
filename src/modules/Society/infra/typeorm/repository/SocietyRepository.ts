import { getRepository, Repository } from 'typeorm';
import ICreateSocietyDTO from '@modules/Society/dtos/ICreateSocietyDTO';
import Society from '../entities/Society';
import ISocietyRepository from '../../repositories/ISocietyRepository';

class Societyrepository implements ISocietyRepository {
  private ormRepository: Repository<Society>;

  constructor() {
    this.ormRepository = getRepository(Society);
  }

  public async createSociety(data: ICreateSocietyDTO): Promise<Society> {
    const society = this.ormRepository.create(data);

    await this.ormRepository.save(society);

    return society;
  }

  public async findById(id: string): Promise<Society | undefined> {
    const society = await this.ormRepository.findOne(id);

    return society;
  }

  public async findByName(name: string): Promise<Society | undefined> {
    const society = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return society;
  }

  public async findAll(): Promise<Society[]> {
    const societies = await this.ormRepository.find();

    return societies;
  }
}

export default Societyrepository;
