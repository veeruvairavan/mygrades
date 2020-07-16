import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Assessment, AssessmentRelations, User } from '../models';
import { GradesDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
export declare class AssessmentRepository extends DefaultCrudRepository<Assessment, typeof Assessment.prototype.id, AssessmentRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: BelongsToAccessor<User, typeof Assessment.prototype.id>;
    constructor(dataSource: GradesDataSource, userRepositoryGetter: Getter<UserRepository>);
}
