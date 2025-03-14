import { Request, Response } from 'express';

class BoilerplateController {
  public async find(req: Request, res: Response) {
    return res.json({
      message: 'Projetos - Boilerplate',
    });
  }
}

export const boilerplateController = new BoilerplateController();
