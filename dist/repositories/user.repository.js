"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, assessmentRepositoryGetter) {
        super(models_1.User, dataSource);
        this.assessmentRepositoryGetter = assessmentRepositoryGetter;
        this.assessments = this.createHasManyRepositoryFactoryFor('assessments', assessmentRepositoryGetter);
        this.registerInclusionResolver('assessments', this.assessments.inclusionResolver);
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.grades')), tslib_1.__param(1, repository_1.repository.getter('AssessmentRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.GradesDataSource, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map