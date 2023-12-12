/// <reference types="multer" />
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PicturesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    deletePicture(pictureId: any): Promise<{
        id: string;
        picturePath: string;
        propertyId: string;
    }>;
    transformedPictures(pictures: Express.Multer.File[], propertyId: string): Promise<{
        picturePath: string;
        propertyId: string;
    }[]>;
    create(transformedPictures: {
        picturePath: string;
        propertyId: string;
    }[]): Promise<{
        message: string;
        pictures: import(".prisma/client").Prisma.BatchPayload;
    }>;
    getAll(): Promise<{
        data: {
            id: string;
            picturePath: string;
            propertyId: string;
        }[];
    }>;
}
