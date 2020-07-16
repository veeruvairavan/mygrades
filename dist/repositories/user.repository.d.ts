import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { User, UserRelations, Assessment } from '../models';
import { GradesDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { AssessmentRepository } from './assessment.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected assessmentRepositoryGetter: Getter<AssessmentRepository>;
    readonly assessments: HasManyRepositoryFactory<Assessment, typeof User.prototype.id>;
    constructor(dataSource: GradesDataSource, assessmentRepositoryGetter: Getter<AssessmentRepository>);
}
