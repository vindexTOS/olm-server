import {
  Controller,
  Body,
  Post,
  UseGuards,
  Req,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
 import { JwtAuthGuard } from 'src/guard/jwtAuthGuard';
 import { PropertyService } from 'src/property/property.service';
 
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly PropertyService: PropertyService,
  ) {}

  @Post('login')
  login(@Body() body: any) {
    console.log(body);
    return this.adminService.findAdmin(body);
  }
  @Post('createProperty')
  @UseGuards(JwtAuthGuard)
  async createProperty(@Body() body: any) {
    const PropertyOwnerId = await this.PropertyService.createPropertyOwner(
      body.OwnerInformation,
    );
    return this.PropertyService.createProperty(
      PropertyOwnerId,
      body.propertyInformation,
    );
  }
  @Patch('updateProperty/:id')
  @UseGuards(JwtAuthGuard)
  updateProperty(@Param('id') PropertyId: string, @Body() body: any) {
    return this.PropertyService.updateProperty(PropertyId, body);
  }
  @Delete('updateDelete/:id')
  @UseGuards(JwtAuthGuard)
  deleteProperty(@Param('id') PropertyId: string) {
    return this.PropertyService.remove(PropertyId);
  }
}
