import {
  Controller,
  Delete,
  Patch,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  HttpException,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { JwtAuthGuard } from 'src/guard/jwtAuthGuard';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  //  creating Properties
  @Post()
  async create(@Body() createPropertyDto: any) {
    try {
      const PropertyOwnerId = await this.propertyService.createPropertyOwner(
        createPropertyDto.OwnerInformation,
      );
      return this.propertyService.createProperty(
        PropertyOwnerId,
        createPropertyDto.propertyInformation,
      );
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  //  getAll Properties
  @Get()
  findAll(@Query() query: any) {
    return this.propertyService.findAll(query);
  }

  // get Single Property
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }
}
