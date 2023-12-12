import { AdminService } from './admin.service';
import { adminCredintials } from './dtos/admin.login';
import { PropertyService } from 'src/property/property.service';
import { CreatePropertyDto } from 'src/property/dto/create-property.dto';
export declare class AdminController {
    private readonly adminService;
    private readonly PropertyService;
    constructor(adminService: AdminService, PropertyService: PropertyService);
    login(body: adminCredintials): Promise<string>;
    createProperty(body: CreatePropertyDto): Promise<{
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
    updateProperty(PropertyId: string, body: any): Promise<{
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
    deleteProperty(PropertyId: string): Promise<{
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
