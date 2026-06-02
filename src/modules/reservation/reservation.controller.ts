import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDto } from './dto/reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  findAll(): ReservationDto[] {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ReservationDto | undefined {
    return this.reservationService.findOne(id);
  }

  @Post()
  create(@Body() dto: ReservationDto): ReservationDto {
    return this.reservationService.create(dto);
  }
}
