import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Assessment} from '../models';
import {GradesDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AssessmentRepository} from './assessment.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly assessments: HasManyRepositoryFactory<Assessment, typeof User.prototype.id>;

  constructor(
    @inject('datasources.grades') dataSource: GradesDataSource, @repository.getter('AssessmentRepository') protected assessmentRepositoryGetter: Getter<AssessmentRepository>,
  ) {
    super(User, dataSource);
    this.assessments = this.createHasManyRepositoryFactoryFor('assessments', assessmentRepositoryGetter,);
    this.registerInclusionResolver('assessments', this.assessments.inclusionResolver);
  }
}
