"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentsControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AssessmentsControllerController = class AssessmentsControllerController {
    constructor(assessmentRepository) {
        this.assessmentRepository = assessmentRepository;
    }
    async create(assessment) {
        return this.assessmentRepository.create(assessment);
    }
    async count(where) {
        return this.assessmentRepository.count(where);
    }
    async find(filter) {
        return this.assessmentRepository.find(filter);
    }
    async updateAll(assessment, where) {
        return this.assessmentRepository.updateAll(assessment, where);
    }
    async findById(id, filter) {
        return this.assessmentRepository.findById(id, filter);
    }
    async updateById(id, assessment) {
        await this.assessmentRepository.updateById(id, assessment);
    }
    async replaceById(id, assessment) {
        await this.assessmentRepository.replaceById(id, assessment);
    }
    async deleteById(id) {
        await this.assessmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/assessments', {
        responses: {
            '200': {
                description: 'Assessment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Assessment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Assessment, {
                    title: 'NewAssessment',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/assessments/count', {
        responses: {
            '200': {
                description: 'Assessment model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Assessment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/assessments', {
        responses: {
            '200': {
                description: 'Array of Assessment model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Assessment, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Assessment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/assessments', {
        responses: {
            '200': {
                description: 'Assessment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Assessment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Assessment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Assessment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/assessments/{id}', {
        responses: {
            '200': {
                description: 'Assessment model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Assessment, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Assessment, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/assessments/{id}', {
        responses: {
            '204': {
                description: 'Assessment PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Assessment]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/assessments/{id}', {
        responses: {
            '204': {
                description: 'Assessment PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Assessment]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/assessments/{id}', {
        responses: {
            '204': {
                description: 'Assessment DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AssessmentsControllerController.prototype, "deleteById", null);
AssessmentsControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AssessmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AssessmentRepository])
], AssessmentsControllerController);
exports.AssessmentsControllerController = AssessmentsControllerController;
//# sourceMappingURL=assessments-controller.controller.js.map