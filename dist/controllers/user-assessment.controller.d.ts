import { Count, Filter, Where } from '@loopback/repository';
import { User, Assessment } from '../models';
import { UserRepository } from '../repositories';
export declare class UserAssessmentController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: number, filter?: Filter<Assessment>): Promise<Assessment[]>;
    create(id: typeof User.prototype.id, assessment: Omit<Assessment, 'id'>): Promise<Assessment>;
    patch(id: number, assessment: Partial<Assessment>, where?: Where<Assessment>): Promise<Count>;
    delete(id: number, where?: Where<Assessment>): Promise<Count>;
}
