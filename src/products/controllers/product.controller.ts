import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../domain/entities/Product';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }
}
