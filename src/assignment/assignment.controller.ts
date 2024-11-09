import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: number) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return { sequence: fibonacci.slice(0, n) };
  }
}
