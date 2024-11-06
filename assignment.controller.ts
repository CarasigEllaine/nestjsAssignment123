import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return { factorial };
  }
}
