import OpenAI from 'openai';
import openaiKey from '../credentials/openai.json';

class chatGPT{

	public openai: OpenAI;

	constructor(){
		this.openai = new OpenAI(openaiKey);
	}

	async getSentences(tenses: string[], topic: string){

		try {

			const tensesString = tenses.join(', ');
			
			const chatCompletion = await this.openai.chat.completions.create({
				messages: [{ role: 'user', content: `Create for me in JSON format 20 sentences in English ${tensesString} leaving the gap for me to fill them, I want the sentences to have the theme "${topic}", it is important that you ALWAYS return the word you have removed in the solution field, example of format:
				[{sentence:"She ___ (like) futbol",solution:"likes", verb:"present simple"}, {sentence:"I ___ (lose) my sandwich at work",solution:"lost", verb:"past simple"},{ "sentence": "Nelson ___ (laugh) at others' misfortune", "solution": "laughs", "verb": "present simple" }, { "sentence": "Hans Moleman ___ (drive) his car into various obstacles", "solution": "drove", "verb": "past simple" }]` }],
				model: 'gpt-3.5-turbo',
			});
	
			if(typeof chatCompletion.choices[0].message.content === 'string'){
				return JSON.parse(chatCompletion.choices[0].message.content);
			}

			return false;

		} catch (error) {

			console.log(error);

			return false;
			
		}

	}

}

export default new chatGPT;