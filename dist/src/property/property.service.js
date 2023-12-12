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
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PropertyService = class PropertyService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(query) {
        try {
            const { page = 1, limit = 5, location, minPrice = 0, maxPrice = 999999999999999, featureType, propertyType, search, status, } = query;
            const skip = (+page - 1) * +limit;
            const whereClause = {
                location,
                featureType,
                propertyType,
                price: {
                    gte: +minPrice,
                    lte: +maxPrice,
                },
                propertyName: {
                    contains: search,
                    mode: 'insensitive',
                },
            };
            const selectClause = {
                uploadetAt: true,
            };
            if (!status) {
                whereClause.status = 'ACTIVE';
            }
            const filteredProperties = await this.prismaService.property.findMany({
                skip,
                take: +limit,
                where: whereClause,
                orderBy: {
                    uploadetAt: 'desc',
                },
            });
            if (status) {
                filteredProperties.forEach((property) => {
                    delete property.mainPicture;
                });
            }
            const dataLength = await this.prismaService.property.count();
            const totalPages = Math.ceil(dataLength / Number(limit));
            return { data: filteredProperties, totalPages, dataLength };
        }
        catch (error) {
            throw new common_1.HttpException(error, error.status);
        }
    }
    async updateProperty(propertyId, property) {
        try {
            const updatedProperty = await this.prismaService.property.update({
                where: { id: propertyId },
                data: property,
            });
            return updatedProperty;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOne(id) {
        try {
            const property = await this.prismaService.property.findUnique({
                where: { id },
                include: {
                    pictures: true,
                },
            });
            const owner = await this.prismaService.propertyOwner.findUnique({
                where: { id: property.ownerId },
            });
            return { ...property, ...owner };
        }
        catch (error) {
            throw new common_1.HttpException(error, error.status);
        }
    }
    async createPropertyOwner(PropertyOwner) {
        try {
            const checkPropertyOwner = await this.prismaService.propertyOwner.findUnique({
                where: {
                    email: PropertyOwner.email,
                },
            });
            if (checkPropertyOwner)
                return checkPropertyOwner.id;
            const createPropertyOwner = await this.prismaService.propertyOwner.create({
                data: PropertyOwner,
            });
            return createPropertyOwner.id;
        }
        catch (error) { }
    }
    async remove(id) {
        try {
            const photosToDelete = await this.prismaService.propertyPicture.findMany({
                where: { propertyId: id },
            });
            for (const photo of photosToDelete) {
                await this.prismaService.propertyPicture.delete({
                    where: { id: photo.id },
                });
            }
            const deletedProperty = await this.prismaService.property.delete({
                where: { id },
            });
            return deletedProperty;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async createProperty(ownerId, property) {
        try {
            const createdProperty = await this.prismaService.property.create({
                data: {
                    ...property,
                    Owner: {
                        connect: {
                            id: ownerId,
                        },
                    },
                },
                include: {
                    Owner: true,
                },
            });
            return createdProperty;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertyService);
//# sourceMappingURL=property.service.js.map