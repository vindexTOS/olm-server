import { PrismaService } from 'src/prisma/prisma.service';
export declare class BookApiService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllBooks(requestBody: any): Promise<{
        data: any[];
        message: string;
    }>;
    getOneBook(id: string): Promise<any>;
    createBook(data: any): Promise<any>;
    deleteBook(id: string): Promise<void>;
}
