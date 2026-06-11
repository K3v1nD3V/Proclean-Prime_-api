import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  customerName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  phone!: string;

  @IsArray()
  fechas!: string[];

  @IsString()
  planServicio!: string;

  reservationData!: Record<string, unknown>;
}
