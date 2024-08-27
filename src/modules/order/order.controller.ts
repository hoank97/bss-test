import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AddToCardDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('add-to-cart')
  addToCard(@Body() body: AddToCardDto) {
    // decode from jwt
    const dummyUserId = 1;
    return this.orderService.addToCard(body, dummyUserId);
  }

  // Get product by id
  @Get('id')
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }
}
