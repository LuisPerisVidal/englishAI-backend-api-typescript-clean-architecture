
class ModalsDomain {
	public lesson: Array<{sentence:string, solution:string}>
	public topic: string;
	public created: Date;

    constructor(lesson: Array<{sentence:string, solution:string}>, topic: string) {
        this.lesson = lesson;
        this.topic = topic;
		this.created = new Date();
    }

}

export default ModalsDomain;
