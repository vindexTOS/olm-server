import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { QueryDataDto } from './dto/queryData.dt';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    create(createPropertyDto: CreatePropertyDto): Promise<{
        id: string;
        ownerId: string;
        status: import(".prisma/client").$Enums.PropertyStatus;
        propertyName: string;
        propertyType: import(".prisma/client").$Enums.PropertyType;
        featureType: import(".prisma/client").$Enums.FeatureType;
        price: number;
        buildYear: number;
        mainPicture: string;
        location: string;
        sqArea: number;
        description: string;
        uploadetAt: Date;
    }>;
    findAll(query: QueryDataDto): Promise<{
        data: {
            id: string;
            ownerId: string;
            status: import(".prisma/client").$Enums.PropertyStatus;
            propertyName: string;
            propertyType: import(".prisma/client").$Enums.PropertyType;
            featureType: import(".prisma/client").$Enums.FeatureType;
            price: number;
            buildYear: number;
            mainPicture: string;
            location: string;
            sqArea: number;
            description: string;
            uploadetAt: Date;
        }[];
        totalPages: number;
        dataLength: number;
    }>;
    findOne(id: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        phoneNumber: string;
        pictures: {
            id: string;
            picturePath: string;
            propertyId: string;
        }[];
        ownerId: string;
        status: import(".prisma/client").$Enums.PropertyStatus;
        propertyName: string;
        propertyType: import(".prisma/client").$Enums.PropertyType;
        featureType: import(".prisma/client").$Enums.FeatureType;
        price: number;
        buildYear: number;
        mainPicture: string;
        location: string;
        sqArea: number;
        description: string;
        uploadetAt: Date;
    }>;
}
