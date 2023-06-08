import { IsEmail } from 'class-validator';
import {
  Body,
  InternalServerErrorException,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators';
import API from '@/utils';

class JoinWaitlistDto {
  @IsEmail()
  email!: string;
}

class JoinWaitlistHandler {
  @Post()
  async joinWaitlist(@Body(ValidationPipe) dto: JoinWaitlistDto) {
    try {
      await API.post(
        `${process.env.CONVERTKIT_API_BASE_URL}/forms/${process.env.CONVERTKIT_WAITLIST_FORM_ID}/subscribe`,
        { api_key: process.env.CONVERTKIT_API_KEY, email: dto.email }
      );
      return null;
    } catch (err) {
      console.error('JoinWaitlistHandler-POST', err);
      throw new InternalServerErrorException(
        'Oops!!!, Something went wrong. Try again'
      );
    }
  }
}

export default createHandler(JoinWaitlistHandler);
