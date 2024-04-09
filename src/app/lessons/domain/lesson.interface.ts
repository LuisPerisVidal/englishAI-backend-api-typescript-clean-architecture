export interface Lesson {
    lesson: Array<{sentence:string, solution:string, verb:string}>;
	tenses: Array<string>;
	topic: string;
    created: Date;
}