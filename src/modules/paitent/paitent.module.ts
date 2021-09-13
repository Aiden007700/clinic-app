import { Module } from '@nestjs/common';
import { PaitentService } from './paitent.service';
import { PaitentController } from './paitent.controller';

@Module({
  controllers: [PaitentController],
  providers: [PaitentService]
})
export class PaitentModule {}
