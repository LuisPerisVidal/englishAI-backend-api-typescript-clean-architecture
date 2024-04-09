import express from 'express';
import lessonsController from '../applications/lessons.controllers';

// Modules
	import openai from '../../../infrastructure/openai';
	import lessonsFirestore from '../infrastructure/lessons.firestore';

const Router = express.Router();

	Router.post('/', lessonsController.createLesson.bind({
		ai_model: openai,
		db: {lessons: lessonsFirestore}
	}));


	Router.get('/:id', lessonsController.getLesson.bind({ db: {lessons: lessonsFirestore} }));



export default Router;

