import { EntryClass } from "./entryclass";
import { EntryTable } from "./entrytable";

export class Symtable {

    public top: EntryTable;
    public scope: number;
    public levelUp: EntryClass;
    constructor(up?: EntryClass) {
        this.scope = 0;
        this.top = undefined;
        if (up !== undefined) {
            this.levelUp = up;
        }

    }
    public add(entry: EntryTable) {
        entry.next = this.top;
        this.top = entry;
        entry.scope = this.scope;
        entry.mytable = this;
    }
    public beginScope(): void {
        this.scope++;
    }
    public endScope(): void {
        while ( this.top !== undefined && this.top.scope === this.scope) {
            this.top = this.top.next;
        }
        this.scope--;
    }
   /* public classFindUp(name: string): EntryTable {
        let p = this.top;
        while ( p !== null) {
            if (p instanceof EntryClass)
        }
    }*/
}
