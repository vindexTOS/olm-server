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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_login_1 = require("./dtos/admin.login");
const jwtAuthGuard_1 = require("../guard/jwtAuthGuard");
const property_service_1 = require("../property/property.service");
const create_property_dto_1 = require("../property/dto/create-property.dto");
let AdminController = class AdminController {
    constructor(adminService, PropertyService) {
        this.adminService = adminService;
        this.PropertyService = PropertyService;
    }
    login(body) {
        console.log(body);
        return this.adminService.findAdmin(body);
    }
    async createProperty(body) {
        const PropertyOwnerId = await this.PropertyService.createPropertyOwner(body.OwnerInformation);
        return this.PropertyService.createProperty(PropertyOwnerId, body.propertyInformation);
    }
    updateProperty(PropertyId, body) {
        return this.PropertyService.updateProperty(PropertyId, body);
    }
    deleteProperty(PropertyId) {
        return this.PropertyService.remove(PropertyId);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_login_1.adminCredintials]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('createProperty'),
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createProperty", null);
__decorate([
    (0, common_1.Patch)('updateProperty/:id'),
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateProperty", null);
__decorate([
    (0, common_1.Delete)('updateDelete/:id'),
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteProperty", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        property_service_1.PropertyService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map