import TENSES from '../../../constants/tenses';

export const validateTenses = (tenses : Array<string>) => {
	if(!tenses || !Array.isArray(tenses)){ return []; }

	const validTenses = tenses.filter((tense) => TENSES.includes(tense));

	return validTenses;

}