import { BookApiService } from './book-api.service';
export declare class BookApiController {
    private bookApiService;
    constructor(bookApiService: BookApiService);
    getAllBooks(requestBody: any): Promise<{
        data: any[];
        message: string;
    }>;
    getOneBook(id: string): Promise<any>;
    createBook(requestBody: any): Promise<any>;
    deleteBook(id: string): Promise<{
        message: string;
    }>;
}
