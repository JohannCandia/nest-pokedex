import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value, metadata) ;
    if (!isValidObjectId(value)) {
      throw new   BadRequestException(`Validation failed, ${value} is not mongo ID `);
    }

    return value;
  }

}
