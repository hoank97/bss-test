import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { AddToCardDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  addToCard(body: AddToCardDto, userId: number) {
    // Check valid product id
    const product = this.findOne(body.productId);
    /**
     * Verify the stock of flash sale product using `user_product`
     * Count the total records using where conditions are: product_id and flash_sale_id
     * If total records >= 20 => OUT_OF_STOCK
     * Else => go to the next step
     */
    /**
     * Verify phone number
     * Using redis to avoid race condition
     * TODO: get the key stored in redis
     * Key format example: `${product_id}_${phone_number}_${flash_sale_id}`
     * If key exists in redis => this phone number already order this product => throw error
     * Else => store user information in DB, then create new key in redis
     */

    return 'This action adds a new order';
  }

  findOne(id: number) {
    if (id) {
      // verify product id
    }
    const currHour = dayjs().hour();
    if (currHour >= 9 && currHour < 11) {
      return {
        id: 1,
        name: 'Iphone15',
        price: 1000,
        unit: 'USD',
        flashSale: {
          id: 1,
          qty: 20,
          start: 9,
          end: 11,
        },
      };
    }
    return 'NO PRODUCT';
  }
}
