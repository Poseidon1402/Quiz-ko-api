import { QuestionType } from 'src/shared/enums/question-type.enum';
import { CreatedAnswerDto } from '../answers';
export declare class CreatedQuestionDto {
    id: string;
    title: string;
    description: string;
    point: number;
    type: QuestionType;
    answers: CreatedAnswerDto[];
}
