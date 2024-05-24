import { Request, Response } from 'express';
import { ModalInterface } from '../domain/modals.interface';
import ModalsDomain from '../domain/modals.domain';
import { AiInterface } from '../../../infrastructure/interfaces/ai.interface';

class Modals{

	public ai_model: undefined | AiInterface;
	public db: any;

	async createLessonModals(req : Request, res : Response){

		try {

			const topic = req.body.topic;
	
			if( typeof topic !== 'string' || topic.length === 0 || topic.length > 40){
				throw new Error("Invalid topic or tenses");
			}
	
			const ai_response = await this.ai_model?.getModalVerbs(topic);

			if(ai_response){
	
				const modal: ModalInterface = new ModalsDomain(ai_response, topic);
	
				const id = await this.db.modals.save(modal);

				return res.json({status: true, modal, id: id});
			}
	
			throw new Error("Error creating lesson");

		} catch (error) {
			console.log(error);
			return res.json({status: false});
		}


	}

	async getLessonModals(req : Request, res : Response){
		
		try {

			const id = req.params.id;
	
			if( typeof id !== 'string' || id.length === 0 ){
				throw new Error("Invalid id");
			}
	
			const lesson = await this.db.modals.get(id);
	
			if(lesson){
				return res.json({status: true, lesson});
			}
	
			throw new Error("Error getting lesson modals");
			

		} catch (error) {
			console.log(error);
			return res.json({status: false});
		}

	}

}


export default new Modals;