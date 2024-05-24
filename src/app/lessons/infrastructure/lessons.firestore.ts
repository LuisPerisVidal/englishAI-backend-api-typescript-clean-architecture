import Connection from '../../../infrastructure/firestore';;
import { Lesson } from '../domain/lesson.interface';

class Lessons{

	async saveLesson(lesson: Lesson){

		  const data = await Connection.collection("lessons").add({...lesson});
		  return data.id;
	}

	async getLesson(lessonID: string){

		const data = await Connection.collection("lessons").doc(lessonID).get();

		if(data.exists){
			return data.data();
		}

		return false;
  }

  async getAllLessons(){

	const data = await Connection.collection("lessons").select("topic").get();

	const dataReturn = data.docs.map(d => d.data());

	return dataReturn;
}

}

export default new Lessons;