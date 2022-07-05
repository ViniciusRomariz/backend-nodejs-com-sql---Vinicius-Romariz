import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {

    const startAt = process.hrtime();
    const { method, originalUrl } = request;
    const requestId: string = uuid();

    this.logger.log(`${method} ${originalUrl} - ${requestId}`);

    const send = response.send;
    response.send = (exitData) => {
      const { statusCode } = response;
      const diff = process.hrtime(startAt);
      const responseTime = diff[0] * 1e3 + diff[1] * 1e-6;
      let message = '';

      if (
        response
          ?.getHeader('content-type')
          ?.toString()
          .includes('application/json')
      ) {
        message = JSON.parse(exitData).message || '';
      }

      if (statusCode > 300) {
        this.logger.error(
          `${method} ${originalUrl} ${statusCode} ${message} ${responseTime}ms - ${requestId}`,
        );
      } else {
        this.logger.log(
          `${method} ${originalUrl} ${statusCode} ${responseTime}ms - ${requestId}`,
        );
      }

      response.send = send;
      return response.send(exitData);
    };

    next();
  }
}

