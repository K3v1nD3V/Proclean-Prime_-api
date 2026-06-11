import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './modules/customer/customer.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { ReservationDateModule } from './modules/reservation-date/reservation-date.module';
import { EmailModule } from './modules/email/email.module';
import { BoldModule } from './modules/bold/bold.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CustomerModule,
    ReservationModule,
    ReservationDateModule,
    EmailModule,
    BoldModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
