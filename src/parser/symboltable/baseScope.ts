import { AdvplSymbol } from "./advplSymbol";
import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";

export abstract class BaseScope implements IScope {
    protected enclosingScope: IScope;
    protected symbols: IHashSymbol = {};

    constructor(parent: IScope ) {
        this.enclosingScope = parent;
    }
    public resolve(name: string): AdvplSymbol {
        if (this.symbols.hasOwnProperty(name)) {
            return this.symbols[name];
        }
        if (this.enclosingScope !== undefined ) {
            return this.enclosingScope.resolve(name);
        }
        return undefined;
    }
    public define(sym: AdvplSymbol) {
        this.symbols[sym.getName()] = sym;
        sym.setScope(this);
    }
    public getParentScope(): IScope {
        return this.getEnclosingScope();
    }
    public getEnclosingScope(): IScope {
        return this.enclosingScope;
   }
    public getScopeName(): string {
        return "";
    }
    public existLocalScope(name: string): boolean {
        return this.symbols.hasOwnProperty(name);
    }
    public toString() {
        let ret = "";
        Object.keys(this.symbols).forEach( (key) => ret += this.symbols[key].toString());
        return ret + "\n";
    }
}
