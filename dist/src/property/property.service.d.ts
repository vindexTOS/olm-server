import { OwnerInformation, PropertyInformation } from './dto/create-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDataDto } from './dto/queryData.dt';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    updateProperty(propertyId: string, property: UpdatePropertyDto): Promise<{
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
    createPropertyOwner(PropertyOwner: OwnerInformation): Promise<string>;
    remove(id: string): Promise<{
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
    createProperty(ownerId: string, property: PropertyInformation): Promise<{
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
}
