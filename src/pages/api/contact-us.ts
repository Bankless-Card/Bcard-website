import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ContactUs } from '@/database/models';
import {
  Body,
  InternalServerErrorException,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators';

class ContactUsDto {
  @IsOptional()
  @IsString()
  discordHandle!: string;
  @IsEmail()
  email!: string;
  @IsOptional()
  @IsString()
  message!: string;
  @IsOptional()
  @IsString()
  name!: string;
  @IsOptional()
  @IsString()
  organization!: string;
}

class ContactUsHandler {
  @Post()
  async contactUs(@Body(ValidationPipe) dto: ContactUsDto) {
    try {
      await ContactUs.create(dto);
      return null;
    } catch (err) {
      console.error('ContactUsHandler-POST', err);
      throw new InternalServerErrorException(
        'Oops!!!, Something went wrong. Try again'
      );
    }
  }
}

export default createHandler(ContactUsHandler);
