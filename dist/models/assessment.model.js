"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let Assessment = class Assessment extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Assessment.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Assessment.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Assessment.prototype, "qa", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], Assessment.prototype, "studentAnswers", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Assessment.prototype, "status", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Assessment.prototype, "result", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_model_1.User),
    tslib_1.__metadata("design:type", Number)
], Assessment.prototype, "userId", void 0);
Assessment = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Assessment);
exports.Assessment = Assessment;
//# sourceMappingURL=assessment.model.js.map