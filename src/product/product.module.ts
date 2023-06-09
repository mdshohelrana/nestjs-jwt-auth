import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './entity/product.entity';
import { ProductCategory } from './entity/product.category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.modelName, schema: Product.model.schema },
      { name: ProductCategory.modelName, schema: ProductCategory.model.schema },
    ]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
