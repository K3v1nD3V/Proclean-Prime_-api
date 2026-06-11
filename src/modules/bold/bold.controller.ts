import { Body, Controller, Post } from '@nestjs/common';

import { BoldService } from './bold.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('bold')
export class BoldController {
  constructor(private readonly boldService: BoldService) {}

  @Post('create-order')
  createOrder(@Body() dto: CreateOrderDto) {
    console.log('Received request to create order with data:', dto);
    return this.boldService.createOrder(dto);
  }
}
