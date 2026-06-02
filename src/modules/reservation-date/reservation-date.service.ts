import { Injectable } from '@nestjs/common';
import { ReservationDateDto } from './dto/reservation-date.dto';

@Injectable()
export class ReservationDateService {
  private items: ReservationDateDto[] = [];

  findAll(): ReservationDateDto[] {
    return this.items;
  }

  findOne(id: string): ReservationDateDto | undefined {
    return this.items.find((r) => r.id === id);
  }

  create(dto: ReservationDateDto): ReservationDateDto {
    const item = { ...dto };
    this.items.push(item);
    return item;
  }
}
