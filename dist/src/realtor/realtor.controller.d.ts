/// <reference types="multer" />
import { RealtorService } from './realtor.service';
export declare class RealtorController {
    private readonly realtorService;
    constructor(realtorService: RealtorService);
    create(picture: Express.Multer.File[], request: Request): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        data: {
            id: string;
            fullName: string;
            picturePath: string;
            Email: string;
            phoneNumber: string;
            Description: string;
        }[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
