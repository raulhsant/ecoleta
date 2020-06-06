import { Request, Response } from 'express';
import knex from '../database/connection';

// index, show, create, update, delete

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('item').select('*');
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })
    return response.json(serializedItems);
  }
}

export default ItemsController;