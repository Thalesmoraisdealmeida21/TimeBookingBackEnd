import ISocietyRepository from '@modules/Society/infra/repositories/ISocietyRepository';
import Societyrepository from '@modules/Society/infra/typeorm/repository/SocietyRepository';
import { container } from 'tsyringe';

container.registerSingleton<ISocietyRepository>(
  'SocietyRepositories',
  Societyrepository,
);
