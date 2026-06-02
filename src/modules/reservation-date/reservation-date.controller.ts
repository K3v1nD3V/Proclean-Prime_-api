import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationDateService } from './reservation-date.service';
import { ReservationDateDto } from './dto/reservation-date.dto';

@Controller('reservation-dates')
export class ReservationDateController {
  constructor(
    private readonly reservationDateService: ReservationDateService,
  ) {}

  @Get()
  findAll(): ReservationDateDto[] {
    return this.reservationDateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ReservationDateDto | undefined {
    return this.reservationDateService.findOne(id);
  }

  @Post()
  create(@Body() dto: ReservationDateDto): ReservationDateDto {
    return this.reservationDateService.create(dto);
  }
}
