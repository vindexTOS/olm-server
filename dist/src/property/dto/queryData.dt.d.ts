import { FeatureType } from '@prisma/client';
export declare class QueryDataDto {
    page?: number;
    limit?: number;
    minPrice?: number;
    maxPrice?: number;
    location?: string;
    featureType?: FeatureType;
    propertyType?: string;
    search?: string;
    status?: boolean;
}
