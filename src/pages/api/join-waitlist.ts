import { IsEmail } from 'class-validator';
import {
  Body,
  InternalServerErrorException,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators';
import axios from 'axios';

class JoinWaitlistDto {
  @IsEmail()
  email!: string;
}

class JoinWaitlistHandler {
  @Post()
  async joinWaitlist(@Body(ValidationPipe) dto: JoinWaitlistDto) {
    try {

      const API_KEY = process.env.CONVERTKIT_API_KEY;

      // Data to send in the email
      const emailData = {
        email: dto.email,
        api_key: API_KEY,
        tags: ['3960977'], //website tag
      };

      // Send email using ConvertKit API
      axios({
        method: 'post',
        url: `https://api.convertkit.com/v3/forms/4996164/subscribe`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: emailData
      })
      .then(response => {
        console.log('Email sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Failed to send email:', error.response.data);
      });

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
