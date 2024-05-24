import { Request, Response } from 'express';
import {formatSitemap} from '../domain/sitemap.domain';

class Lessons{

	public ai_model: any;
	public firestore: any;

	async sitemapTenses(req : Request, res : Response){

		try {

			const data = await this.firestore.sitemap.getAllTenses();

			const cleanData = formatSitemap(data);

			return res.json({status: true, data: cleanData});

		} catch (error) {
			return res.json({status: false});
		}

	}

	async sitemapModals(req : Request, res : Response){

		try {

			const data = await this.firestore.sitemap.getAllModals();

			const cleanData = formatSitemap(data);

			return res.json({status: true, data: cleanData});

		} catch (error) {
			return res.json({status: false});
		}

	}

}


export default new Lessons;