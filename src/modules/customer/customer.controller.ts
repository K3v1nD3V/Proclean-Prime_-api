import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): CustomerDto[] {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CustomerDto | undefined {
    return this.customerService.findOne(id);
  }

  @Post()
  create(@Body() dto: CustomerDto): CustomerDto {
    return this.customerService.create(dto);
  }
}
