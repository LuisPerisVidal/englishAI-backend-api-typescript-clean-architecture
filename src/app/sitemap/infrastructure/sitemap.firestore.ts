import Connection from '../../../infrastructure/firestore';;

class Sitemap{

  async getAllTenses(){

		const data = await Connection.collection("lessons").select("topic", "__name__", "tenses").get();

		const dataReturn = data.docs.map(d => { return { id: d.id, ...d.data() }});


		return dataReturn;
	}

	async getAllModals(){

		const data = await Connection.collection("modals").select("topic", "__name__").get();

		const dataReturn = data.docs.map(d => { return { id: d.id, ...d.data() }});


		return dataReturn;
	}
}

export default new Sitemap;