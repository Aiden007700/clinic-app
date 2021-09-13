import { PartialType } from '@nestjs/mapped-types';
import { CreatePaitentDto } from './create-paitent.dto';

export class UpdatePaitentDto extends PartialType(CreatePaitentDto) {}
