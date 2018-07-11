import { BuiltInTypeSymbol } from "./builtInTypeSymbol";
import { GlobalScope } from "./globallScope";

export class SymbolTable {
    public globals: GlobalScope = new GlobalScope();

    constructor() {
        this.initTypeSystem();
    }
    public toString() {
        return this.globals.toString();
    }
    protected initTypeSystem(): void {
        this.globals.define(new BuiltInTypeSymbol("number"));
        this.globals.define(new BuiltInTypeSymbol("string"));
        this.globals.define(new BuiltInTypeSymbol("date"));
        this.globals.define(new BuiltInTypeSymbol("memo"));
        this.globals.define(new BuiltInTypeSymbol("object"));
        this.globals.define(new BuiltInTypeSymbol("block"));
        this.globals.define(new BuiltInTypeSymbol("logic"));
        this.globals.define(new BuiltInTypeSymbol("nil"));
    }
}
