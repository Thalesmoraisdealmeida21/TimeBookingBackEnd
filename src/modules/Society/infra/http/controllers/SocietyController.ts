import { Response, Request } from 'express';
import { container } from 'tsyringe';
import CreateSocietyService from '../../../services/CreateSocietyService';
import ListAllSocietiesService from '../../../services/ListAllSocietiesService';

export default class CollectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createSociety = container.resolve(CreateSocietyService);

    const { name, openIn, closeIn, description } = request.body;

    const society = await createSociety.execute({
      closeIn,
      description,
      name,
      openIn,
    });

    return response.status(201).json(society);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAll = container.resolve(ListAllSocietiesService);

    const societies = await listAll.execute();

    return response.status(201).json(societies);
  }
}
