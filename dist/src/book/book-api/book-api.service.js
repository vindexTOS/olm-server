"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookApiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BookApiService = class BookApiService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllBooks(requestBody) {
        try {
            let data = [];
            if (!requestBody.searchTerm) {
                data = await this.prismaService.books.findMany();
            }
            if (requestBody.searchTerm) {
                console.log(requestBody);
                data = await this.prismaService.books.findMany({
                    where: {
                        OR: [
                            {
                                author: {
                                    contains: requestBody.searchTerm,
                                },
                            },
                            {
                                title: {
                                    contains: requestBody.searchTerm,
                                },
                            },
                            {
                                releaseYear: {
                                    contains: requestBody.searchTerm,
                                },
                            },
                        ],
                    },
                });
            }
            if (!data) {
                throw new common_1.ConflictException({
                    message: 'it does not exists',
                    error: 'Bad Request',
                    statusCode: 400,
                });
            }
            return { data, message: 'data recived' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Internal Server Error');
        }
    }
    async getOneBook(id) {
        try {
            return this.prismaService.books.findUnique({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Internal Server Error');
        }
    }
    async createBook(data) {
        try {
            const existingBook = await this.prismaService.books.findFirst({
                where: { title: data.title },
            });
            if (existingBook) {
                throw new common_1.ConflictException({
                    message: `Book with title '${data.title}' already exists`,
                    error: 'Bad Request',
                    statusCode: 400,
                });
            }
            return this.prismaService.books.create({
                data,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Internal Server Error');
        }
    }
    async deleteBook(id) {
        try {
            const book = await this.prismaService.books.findUnique({
                where: { id },
            });
            if (!book) {
                throw new common_1.NotFoundException(`Book with ID ${id} not found`);
            }
            await this.prismaService.books.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Internal Server Error');
        }
    }
};
exports.BookApiService = BookApiService;
exports.BookApiService = BookApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookApiService);
//# sourceMappingURL=book-api.service.js.map