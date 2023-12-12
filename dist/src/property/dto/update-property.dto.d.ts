import { FeatureType, PropertyType, PropertyStatus } from '@prisma/client';
import { CreatePropertyDto } from './create-property.dto';
declare const UpdatePropertyDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePropertyDto>>;
export declare class UpdatePropertyDto extends UpdatePropertyDto_base {
    propertyName?: string;
    propertyType?: PropertyType;
    featureType?: FeatureType;
    price?: number;
    buildYear?: number;
    location?: string;
    sqArea?: number;
    description?: string;
    status?: PropertyStatus;
}
export {};
