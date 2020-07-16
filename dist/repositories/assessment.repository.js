"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let AssessmentRepository = class AssessmentRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userRepositoryGetter) {
        super(models_1.Assessment, dataSource);
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
    }
};
AssessmentRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.grades')), tslib_1.__param(1, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.GradesDataSource, Function])
], AssessmentRepository);
exports.AssessmentRepository = AssessmentRepository;
//# sourceMappingURL=assessment.repository.js.map