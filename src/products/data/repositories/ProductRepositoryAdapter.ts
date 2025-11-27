import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { Product } from '../../domain/entities/Product';

@Injectable()
export class ProductRepositoryAdapter implements IProductRepository {
  private readonly products: Product[] = [
    new Product('1', 'Laptop', 999.99, 'High performance laptop'),
    new Product('2', 'Mouse', 29.99, 'Wireless mouse'),
    new Product('3', 'Keyboard', 79.99, 'Mechanical keyboard'),
    new Product('4', 'Monitor', 299.99, '27 inch 4K monitor'),
    new Product('5', 'Headphones', 149.99, 'Noise cancelling headphones'),
  ];

  async getAll(): Promise<Product[]> {
    return this.products;
  }
}
