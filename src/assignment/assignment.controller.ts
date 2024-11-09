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

  @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    if (num <= 1) return { isPrime: false };
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return { isPrime: false };
    }
    return { isPrime: true };
}

@Get('factorial/:number')
getFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return { factorial: result };
}


}
