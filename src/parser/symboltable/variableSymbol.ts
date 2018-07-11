import { AdvplSymbol } from "./advplSymbol";
import { IType } from "./type";
/**
 * Represents a variable definition (name,type) in symbol table
 */
export class VariableSymbol extends AdvplSymbol {
    constructor(name: string ) {
        super(name, null);
    }
    public getScopeName(): string {
        return this.name;
    }
}
