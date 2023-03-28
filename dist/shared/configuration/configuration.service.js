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
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
let ConfigurationService = class ConfigurationService {
    constructor() {
        this.logger = new common_1.Logger('ConfigurationService');
        this.currentEnv = process.env.NODE_ENV || 'development';
        const result = dotenv.config();
        if (result.error) {
            throw result.error;
        }
    }
    get(key) {
        return process.env[key];
    }
    get port() {
        return process.env.PORT || 3000;
    }
    get isDevelopment() {
        return this.currentEnv === 'development';
    }
    static get mongoUri() {
        return process.env.MONGO_URI;
    }
    static get JWT() {
        return {
            Key: process.env.JWT_KEY || 'DEMO_KEY',
            AccessTokenTtl: parseInt(process.env.ACCESS_TOKEN_TTL, 10) || 60 * 5,
            RefreshTokenTtl: parseInt(process.env.ACCESS_TOKEN_TTL, 10) || 30,
        };
    }
};
ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConfigurationService);
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map