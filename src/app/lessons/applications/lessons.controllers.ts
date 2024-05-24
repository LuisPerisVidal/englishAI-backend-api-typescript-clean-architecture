import { Request, Response } from 'express';
import { Lesson } from '../domain/lesson.interface';
import LessonDomain from '../domain/lesson.domain';

class Lessons{

	public ai_model: any;
	public db: any;

	async createLesson(req : Request, res : Response){

		try {

			const topic = req.body.topic;
			const validTenses = LessonDomain.validateTenses(req.body.tenses);
	
			if( typeof topic !== 'string' || topic.length === 0 || topic.length > 40 || validTenses.length === 0 ){
				throw new Error("Invalid topic or tenses");
			}
	
			const ai_response = await this.ai_model.getSentences(validTenses, topic);
	
			if(ai_response){
	
				const lesson: Lesson = new LessonDomain(ai_response, validTenses, topic);
	
				const id = await this.db.lessons.saveLesson(lesson);

				return res.json({status: true, lesson, id: id});
			}
	
			throw new Error("Error creating lesson");
			

		} catch (error) {
			console.log(error);
			return res.json({status: false});
		}


	}

	async getLesson(req : Request, res : Response){
		
		try {

			const id = req.params.id;
	
			if( typeof id !== 'string' || id.length === 0 ){
				throw new Error("Invalid id");
			}
	
			const lesson = await this.db.lessons.getLesson(id);
	
			if(lesson){
				return res.json({status: true, lesson});
			}
	
			throw new Error("Error getting lesson");
			

		} catch (error) {
			return res.json({status: false});
		}

	}

}


export default new Lessons;