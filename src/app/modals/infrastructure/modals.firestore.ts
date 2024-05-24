import Connection from '../../../infrastructure/firestore';;
import { ModalInterface } from '../domain/modals.interface';

class Modals{

	async save(lesson: ModalInterface){

		  const data = await Connection.collection("modals").add({...lesson});
		  return data.id;
	}

	async get(lessonID: string){

		const data = await Connection.collection("modals").doc(lessonID).get();

		if(data.exists){
			return data.data();
		}

		return false;
  }

  async getAll(){

	const data = await Connection.collection("modals").select("topic").get();

	const dataReturn = data.docs.map(d => d.data());

	return dataReturn;
}

}

export default new Modals;