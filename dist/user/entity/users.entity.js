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
exports.ClientModel = exports.User = void 0;
const constants_1 = require("../../shared/utils/constants");
const typegoose_1 = require("typegoose");
const base_model_1 = require("../../shared/base.model");
class User extends base_model_1.BaseModel {
    static get model() {
        return new User().getModelForClass(User, { schemaOptions: base_model_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
}
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'First name is required'],
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Last name is required'],
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Email is required'],
        unique: true,
        match: constants_1.Constants.EmailRegex,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User;
exports.ClientModel = User.model;
//# sourceMappingURL=users.entity.js.map