import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  private items: CustomerDto[] = [];

  findAll(): CustomerDto[] {
    return this.items;
  }

  findOne(id: string): CustomerDto | undefined {
    return this.items.find((c) => c.id === id);
  }

  create(dto: CustomerDto): CustomerDto {
    const item = { ...dto };
    this.items.push(item);
    return item;
  }
}
