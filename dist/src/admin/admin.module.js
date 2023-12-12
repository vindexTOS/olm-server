"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const jwt_stategy_1 = require("../JWT/jwt.stategy");
const property_module_1 = require("../property/property.module");
const property_service_1 = require("../property/property.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, property_module_1.PropertyModule],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, jwt_stategy_1.JwtStrategy, property_service_1.PropertyService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map