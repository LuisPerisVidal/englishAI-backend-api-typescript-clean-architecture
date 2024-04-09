import Connection from '../../../infrastructure/firestore';;

class Sitemap{

  async getAll(){

	const data = await Connection.collection("lessons").select("topic", "__name__", "tenses").get();

	const dataReturn = data.docs.map(d => { return { id: d.id, ...d.data() }});


	return dataReturn;
}

}

export default new Sitemap;