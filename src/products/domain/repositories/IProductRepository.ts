import { Product } from '../entities/Product';

export interface IProductRepository {
  getAll(): Promise<Product[]>;
}

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';
