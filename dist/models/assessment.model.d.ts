import { Entity } from '@loopback/repository';
export declare class Assessment extends Entity {
    id?: number;
    name: string;
    qa: object[];
    studentAnswers?: string[];
    status?: string;
    result?: string;
    userId: number;
    constructor(data?: Partial<Assessment>);
}
export interface AssessmentRelations {
}
export declare type AssessmentWithRelations = Assessment & AssessmentRelations;
