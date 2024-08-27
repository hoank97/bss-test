import { IsNumber, IsString, Max } from 'class-validator';

export class AddToCardDto {
  @IsString()
  @Max(20)
  phoneNumber: string;

  @IsNumber()
  productId: number;
}
