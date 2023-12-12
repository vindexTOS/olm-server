import { CreateRealtorDto } from './dto/create-realtor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RealtorService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createRealtor(createRealtorDto: CreateRealtorDto): Promise<{
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
