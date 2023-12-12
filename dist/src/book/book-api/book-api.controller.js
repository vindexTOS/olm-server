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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookApiController = void 0;
const common_1 = require("@nestjs/common");
const book_api_service_1 = require("./book-api.service");
let BookApiController = class BookApiController {
    constructor(bookApiService) {
        this.bookApiService = bookApiService;
    }
    async getAllBooks(requestBody) {
        return this.bookApiService.getAllBooks(requestBody);
    }
    async getOneBook(id) {
        const book = await this.bookApiService.getOneBook(id);
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
    async createBook(requestBody) {
        return this.bookApiService.createBook(requestBody);
    }
    async deleteBook(id) {
        await this.bookApiService.deleteBook(id);
        return { message: 'Book deleted successfully' };
    }
};
exports.BookApiController = BookApiController;
__decorate([
    (0, common_1.Post)('get-all'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookApiController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)('get-one/:id'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookApiController.prototype, "getOneBook", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookApiController.prototype, "createBook", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookApiController.prototype, "deleteBook", null);
exports.BookApiController = BookApiController = __decorate([
    (0, common_1.Controller)('book-api'),
    __metadata("design:paramtypes", [book_api_service_1.BookApiService])
], BookApiController);
//# sourceMappingURL=book-api.controller.js.map