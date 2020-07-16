"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAssessmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserAssessmentController = class UserAssessmentController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.assessments(id).find(filter);
    }
    async create(id, assessment) {
        return this.userRepository.assessments(id).create(assessment);
    }
    async patch(id, assessment, where) {
        return this.userRepository.assessments(id).patch(assessment, where);
    }
    async delete(id, where) {
        return this.userRepository.assessments(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/assessments', {
        responses: {
            '200': {
                description: 'Array of User has many Assessment',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Assessment) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAssessmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/users/{id}/assessments', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Assessment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Assessment, {
                    title: 'NewAssessmentInUser',
                    exclude: ['id'],
                    optional: ['userId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAssessmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/users/{id}/assessments', {
        responses: {
            '200': {
                description: 'User.Assessment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Assessment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Assessment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAssessmentController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/users/{id}/assessments', {
        responses: {
            '200': {
                description: 'User.Assessment DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Assessment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserAssessmentController.prototype, "delete", null);
UserAssessmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserAssessmentController);
exports.UserAssessmentController = UserAssessmentController;
//# sourceMappingURL=user-assessment.controller.js.map