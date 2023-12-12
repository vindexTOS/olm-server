import { FeatureType } from '@prisma/client';
export declare class CreatePropertyDto {
    OwnerInformation: OwnerInformation;
    propertyInformation: PropertyInformation;
    static OwnerInformation: any;
}
export declare class OwnerInformation {
    fullName: string;
    email: string;
    phoneNumber: string;
    id: any;
}
export declare class PropertyInformation {
    propertyName: string;
    propertyType: any;
    featureType: FeatureType;
    price: number;
    buildYear: number;
    location: string;
    sqArea: number;
    description: string;
    status: string;
}
