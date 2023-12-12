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
exports.UpdatePropertyDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_property_dto_1 = require("./create-property.dto");
class UpdatePropertyDto extends (0, mapped_types_1.PartialType)(create_property_dto_1.CreatePropertyDto) {
}
exports.UpdatePropertyDto = UpdatePropertyDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'House name should be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "propertyName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PropertyType, { message: 'Invalid property type' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "propertyType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.FeatureType, { message: 'Invalid feature type' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "featureType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Price should be a number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0, { message: 'Price should be a positive number' }),
    __metadata("design:type", Number)
], UpdatePropertyDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Build year should be a number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1800, { message: 'Build year should be at least 1800' }),
    __metadata("design:type", Number)
], UpdatePropertyDto.prototype, "buildYear", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Location should be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Square area should be a number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0, { message: 'Square area should be a positive number' }),
    __metadata("design:type", Number)
], UpdatePropertyDto.prototype, "sqArea", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description should be a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(10, {
        message: 'Description should be at least 10 characters long',
    }),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PropertyStatus, { message: 'Invalid property status' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePropertyDto.prototype, "status", void 0);
//# sourceMappingURL=update-property.dto.js.map