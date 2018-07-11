import { EntryTable } from "./entrytable";
import { Symtable } from "./symtable";

export class EntryClass extends EntryTable {

    public nested: Symtable;
    public parent: EntryClass;
    constructor(name: string) {
        super();
        this.name = name;
        this.nested = new Symtable(this);
        this.parent = null;
        // this.mytable = table; // TODO: Acho que é isso
    }

}
