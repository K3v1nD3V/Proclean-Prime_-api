import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './modules/customer/customer.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { ReservationDateModule } from './modules/reservation-date/reservation-date.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [
    CustomerModule,
    ReservationModule,
    ReservationDateModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
