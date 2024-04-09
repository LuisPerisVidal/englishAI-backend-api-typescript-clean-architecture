import express from 'express';
import sitemapController from '../applications/sitemap.controllers';

// Modules
	import openai from '../../../infrastructure/openai';
	import sitemapFirestore from './sitemap.firestore';

const Router = express.Router();

	Router.get('/', sitemapController.sitemap.bind({ firestore: {sitemap: sitemapFirestore} }));



export default Router;

