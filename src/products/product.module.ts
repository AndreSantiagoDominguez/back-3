import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { ProductRepositoryAdapter } from './data/repositories/ProductRepositoryAdapter';
import { PRODUCT_REPOSITORY } from './domain/repositories/IProductRepository';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: ProductRepositoryAdapter,
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
