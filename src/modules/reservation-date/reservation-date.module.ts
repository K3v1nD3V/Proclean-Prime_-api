import { Module } from '@nestjs/common';
import { ReservationDateController } from './reservation-date.controller';
import { ReservationDateService } from './reservation-date.service';

@Module({
  controllers: [ReservationDateController],
  providers: [ReservationDateService],
  exports: [ReservationDateService],
})
export class ReservationDateModule {}
