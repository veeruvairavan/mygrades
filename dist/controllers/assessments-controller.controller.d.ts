import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Assessment } from '../models';
import { AssessmentRepository } from '../repositories';
export declare class AssessmentsControllerController {
    assessmentRepository: AssessmentRepository;
    constructor(assessmentRepository: AssessmentRepository);
    create(assessment: Omit<Assessment, 'id'>): Promise<Assessment>;
    count(where?: Where<Assessment>): Promise<Count>;
    find(filter?: Filter<Assessment>): Promise<Assessment[]>;
    updateAll(assessment: Assessment, where?: Where<Assessment>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Assessment>): Promise<Assessment>;
    updateById(id: number, assessment: Assessment): Promise<void>;
    replaceById(id: number, assessment: Assessment): Promise<void>;
    deleteById(id: number): Promise<void>;
}
