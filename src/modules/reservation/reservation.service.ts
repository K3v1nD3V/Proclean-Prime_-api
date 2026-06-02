import { Injectable } from '@nestjs/common';
import { ReservationDto } from './dto/reservation.dto';

@Injectable()
export class ReservationService {
  private items: ReservationDto[] = [];

  findAll(): ReservationDto[] {
    return this.items;
  }

  findOne(id: string): ReservationDto | undefined {
    return this.items.find((r) => r.id === id);
  }

  create(dto: ReservationDto): ReservationDto {
    const item = { ...dto };
    this.items.push(item);
    return item;
  }
}
