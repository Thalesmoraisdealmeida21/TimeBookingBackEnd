import ICreateSocietyDTO from '@modules/Society/dtos/ICreateSocietyDTO';
import Society from '../typeorm/entities/Society';

export default interface ISocietyRepository {
  createSociety(data: ICreateSocietyDTO): Promise<Society>;
  findById(id: string): Promise<Society | undefined>;
  findByName(name: string): Promise<Society | undefined>;
  findAll(): Promise<Society[]>;
}
