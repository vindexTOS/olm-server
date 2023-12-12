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
exports.PropertyInformation = exports.OwnerInformation = exports.CreatePropertyDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreatePropertyDto {
}
exports.CreatePropertyDto = CreatePropertyDto;
class OwnerInformation {
}
exports.OwnerInformation = OwnerInformation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5, {
        message: 'owner full name should be at least 5 characters long',
    }),
    __metadata("design:type", String)
], OwnerInformation.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OwnerInformation.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OwnerInformation.prototype, "phoneNumber", void 0);
class PropertyInformation {
}
exports.PropertyInformation = PropertyInformation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, {
        message: 'propertyName should be at least 3 characters long',
    }),
    __metadata("design:type", String)
], PropertyInformation.prototype, "propertyName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.FeatureType, { message: 'Invalid FeatureType' }),
    __metadata("design:type", String)
], PropertyInformation.prototype, "featureType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'price should be a positive number' }),
    __metadata("design:type", Number)
], PropertyInformation.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1800, { message: 'buildYear should be at least 1800' }),
    __metadata("design:type", Number)
], PropertyInformation.prototype, "buildYear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PropertyInformation.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'sqArea area should be a positive number' }),
    __metadata("design:type", Number)
], PropertyInformation.prototype, "sqArea", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10, {
        message: 'description should be at least 10 characters long',
    }),
    __metadata("design:type", String)
], PropertyInformation.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PropertyInformation.prototype, "status", void 0);
//# sourceMappingURL=create-property.dto.js.map