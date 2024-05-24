export interface AiInterface {
    getSentences(tenses: string[], topic: string): any;
    getModalVerbs(topic: string): any;
}
