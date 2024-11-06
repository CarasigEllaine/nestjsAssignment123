import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const count = parseInt(n, 10);
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < count; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }
    return { sequence };
  }
