import { Assessment, User } from '../models';
import { AssessmentRepository } from '../repositories';
export declare class AssessmentUserController {
    assessmentRepository: AssessmentRepository;
    constructor(assessmentRepository: AssessmentRepository);
    getUser(id: typeof Assessment.prototype.id): Promise<User>;
}
