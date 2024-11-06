import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
   @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    if (num <= 1) return { isPrime: false };
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return { isPrime: false };
    }
    return { isPrime: true };
  }
