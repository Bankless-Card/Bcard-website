import { IsEmail } from 'class-validator';
import { Waitlist } from '@/database/models';
import {
  Body,
  InternalServerErrorException,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators';
import dbConnect from '@/database/connect';

class JoinWaitlistDto {
  @IsEmail()
  email!: string;
}

class JoinWaitlistHandler {
  @Post()
  async joinWaitlist(@Body(ValidationPipe) dto: JoinWaitlistDto) {
    try {
      await dbConnect();
      const email = await Waitlist.findOne({ email: dto.email });
      if (!email) {
        await Waitlist.create({ email: dto.email });
      }
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
