import express from 'express';
import modalsController from '../applications/modals.controllers';

// Modules
	import openai from '../../../infrastructure/openai';
	import modalsFirestore from './modals.firestore';

const Router = express.Router();

	Router.post('/', modalsController.createLessonModals.bind({
		ai_model: openai,
		db: {modals: modalsFirestore}
	}));


	Router.get('/:id', modalsController.getLessonModals.bind({ db: {modals: modalsFirestore} }));



export default Router;

