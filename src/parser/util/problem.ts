export enum ProblemCategory {
    ERROR,
    WARNING }
export class  Problem {
    private fileName: string;
    private startPosition: number;
    private endPosition: number;
    private line: number;
    private column: number;
    private message: string;
    private category: ProblemCategory;

    constructor(fileName: string, message: string, line: number) {
        this.fileName = fileName;
        this.message = message;
        this.line = line;
    }
    public setCategory(cat: ProblemCategory) {
        this.category = cat;
    }

}
