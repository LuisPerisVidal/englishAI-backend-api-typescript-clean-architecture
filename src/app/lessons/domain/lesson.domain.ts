import TENSES from '../../../constants/tenses';

class LessonDomain {
	public lesson: Array<{sentence:string, solution:string, verb:string}>
	public tenses: string[];
	public topic: string;
	public created: Date;

    constructor(lesson: Array<{sentence:string, solution:string, verb:string}>, tenses: string[], topic: string) {
        this.lesson = lesson;
        this.tenses = tenses;
        this.topic = topic;
		this.created = new Date();

		if( LessonDomain.validateTenses(tenses).length === 0 ){
			throw new Error("Invalid tenses");
		}

    }

	static validateTenses = (tenses : Array<string>) : Array<string> => {
		if(!tenses || !Array.isArray(tenses)){ return []; }

		const validTenses = tenses.filter((tense) => TENSES.includes(tense));

		return validTenses;
	}
}

export default LessonDomain;
