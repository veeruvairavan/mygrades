"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AssessmentUserController = class AssessmentUserController {
    constructor(assessmentRepository) {
        this.assessmentRepository = assessmentRepository;
    }
    async getUser(id) {
        return this.assessmentRepository.user(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/assessments/{id}/user', {
        responses: {
            '200': {
                description: 'User belonging to Assessment',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.User) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentUserController.prototype, "getUser", null);
AssessmentUserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AssessmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AssessmentRepository])
], AssessmentUserController);
exports.AssessmentUserController = AssessmentUserController;
//# sourceMappingURL=assessment-user.controller.js.map