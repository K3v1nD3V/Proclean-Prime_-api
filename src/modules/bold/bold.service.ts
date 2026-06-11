import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

import { CreateOrderDto } from './dto/create-order.dto';
import { calculatePrice } from './utils/pricing';

@Injectable()
export class BoldService {
  constructor(private readonly configService: ConfigService) {}

  createOrder(dto: CreateOrderDto) {
    console.log('Received order data:', dto);
    const reference = `PCP-${Date.now()}`;

    const secretKey = this.configService.get<string>('BOLD_SECRET_KEY');
    const publicKey = this.configService.get<string>('BOLD_PUBLIC_KEY');

    const pricing = calculatePrice(dto.fechas.length, dto.planServicio);

    const amount = Math.round(pricing.finalPrice);

    const currency = 'COP';

    const signatureString = `${reference}${amount}${currency}${secretKey}`;

    const integritySignature = crypto
      .createHash('sha256')
      .update(signatureString)
      .digest('hex');
    console.log({
      reference,
      amount,
      currency,
      publicKey,
      signatureString,
      integritySignature,
    });
    return {
      identityKey: publicKey,
      reference,
      amount,
      currency,
      integritySignature,
    };
  }
}
