import express from 'express';
import sitemapController from '../applications/sitemap.controllers';

// Modules
	import openai from '../../../infrastructure/openai';
	import sitemapFirestore from './sitemap.firestore';

const Router = express.Router();

	Router.get('/', sitemapController.sitemapTenses.bind({ firestore: {sitemap: sitemapFirestore} }));
	Router.get('/modals', sitemapController.sitemapModals.bind({ firestore: {sitemap: sitemapFirestore} }));



export default Router;

