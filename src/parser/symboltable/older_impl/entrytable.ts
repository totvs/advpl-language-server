import { Symtable } from "./symtable";

export abstract class EntryTable {
    public name: string;
    public next: EntryTable;
    public scope: number;
    public mytable: Symtable; // entrada aponta para a tabela da qual ela é parte

}
