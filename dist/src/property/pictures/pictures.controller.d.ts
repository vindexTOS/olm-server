/// <reference types="multer" />
import { PicturesService } from './pictures.service';
import { Request } from 'express';
export declare class PicturesController {
    private readonly picturesService;
    constructor(picturesService: PicturesService);
    create(pictures: Express.Multer.File[], request: Request): Promise<{
        message: string;
        pictures: import(".prisma/client").Prisma.BatchPayload;
    }>;
    GetAllPhotos(): Promise<{
        data: {
            id: string;
            picturePath: string;
            propertyId: string;
        }[];
    }>;
}
