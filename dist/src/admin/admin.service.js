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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_stategy_1 = require("../JWT/jwt.stategy");
let AdminService = class AdminService {
    constructor(prismaService, jwtStrategy) {
        this.prismaService = prismaService;
        this.jwtStrategy = jwtStrategy;
    }
    async findAdmin(data) {
        try {
            const admin = await this.prismaService.admin.findUnique({
                where: { userName: data.userName, password: data.password },
            });
            if (!admin)
                throw new common_1.HttpException('admin is not Exist', common_1.HttpStatus.NOT_FOUND);
            admin.password = null;
            return this.jwtStrategy.generateToken(admin);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_stategy_1.JwtStrategy])
], AdminService);
//# sourceMappingURL=admin.service.js.map