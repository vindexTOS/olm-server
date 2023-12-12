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
exports.PicturesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const fs = require("fs/promises");
let PicturesService = class PicturesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async deletePicture(pictureId) {
        try {
            return await this.prismaService.propertyPicture.delete({
                where: { id: pictureId },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async transformedPictures(pictures, propertyId) {
        try {
            if (!pictures || !Array.isArray(pictures)) {
                return;
            }
            const uploadedPictures = await Promise.all(pictures.map(async (picture) => {
                const fileContent = await fs.readFile(picture.path);
                const base64Image = Buffer.from(fileContent).toString('base64');
                return {
                    picturePath: base64Image,
                    propertyId: propertyId,
                };
            }));
            return uploadedPictures;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async create(transformedPictures) {
        try {
            const createdPropertyPictures = await this.prismaService.propertyPicture.createMany({
                data: transformedPictures,
            });
            await this.prismaService.property.update({
                where: { id: transformedPictures[0].propertyId },
                data: { mainPicture: transformedPictures[0].picturePath },
            });
            return {
                message: 'Pictures uploaded successfully',
                pictures: createdPropertyPictures,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async getAll() {
        try {
            const photos = await this.prismaService.propertyPicture.findMany();
            return { data: photos };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.PicturesService = PicturesService;
exports.PicturesService = PicturesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PicturesService);
//# sourceMappingURL=pictures.service.js.map