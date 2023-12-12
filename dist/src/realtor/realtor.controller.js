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
exports.RealtorController = void 0;
const common_1 = require("@nestjs/common");
const realtor_service_1 = require("./realtor.service");
const jwtAuthGuard_1 = require("../guard/jwtAuthGuard");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
let RealtorController = class RealtorController {
    constructor(realtorService) {
        this.realtorService = realtorService;
    }
    async create(picture, request) {
        const createRealtor = request.body;
        const fileContent = await fs_1.promises.readFile(picture[0].path);
        const base64Image = Buffer.from(fileContent).toString('base64');
        return this.realtorService.createRealtor({
            ...createRealtor,
            picturePath: base64Image,
        });
    }
    findAll() {
        return this.realtorService.findAll();
    }
    remove(id) {
        return this.realtorService.remove(id);
    }
};
exports.RealtorController = RealtorController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('picture')),
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Request]),
    __metadata("design:returntype", Promise)
], RealtorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RealtorController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RealtorController.prototype, "remove", null);
exports.RealtorController = RealtorController = __decorate([
    (0, common_1.Controller)('realtor'),
    __metadata("design:paramtypes", [realtor_service_1.RealtorService])
], RealtorController);
//# sourceMappingURL=realtor.controller.js.map