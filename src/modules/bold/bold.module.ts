import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BoldController } from './bold.controller';
import { BoldService } from './bold.service';

@Module({
  imports: [ConfigModule],
  controllers: [BoldController],
  providers: [BoldService],
})
export class BoldModule {}
