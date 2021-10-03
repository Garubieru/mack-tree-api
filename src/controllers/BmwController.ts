import { Request, Response } from 'express';
import { TreeService } from '@services/TreeService';

import { BmwQueryRequest } from '@interfaces/DTO/BmwQuery';

export class BmwController {
  static show = (req: Request, res: Response) => {
    const params = req.query as unknown as BmwQueryRequest;

    const tree = TreeService.filter(params);
    return res.status(200).json(tree);
  };
}
