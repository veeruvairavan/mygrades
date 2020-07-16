import { Entity } from '@loopback/repository';
import { Assessment } from './assessment.model';
export declare class User extends Entity {
    id?: number;
    name: string;
    category: string;
    badges?: string[];
    assessments: Assessment[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
