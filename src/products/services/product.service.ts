import { Injectable, Inject } from '@nestjs/common';
import {
  IProductRepository,
  PRODUCT_REPOSITORY,
} from '../domain/repositories/IProductRepository';
import { Product } from '../domain/entities/Product';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}
