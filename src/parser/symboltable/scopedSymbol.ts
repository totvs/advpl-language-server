import { AdvplSymbol } from "./advplSymbol";
import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";
import { IType } from "./type";

export abstract class ScopedSymbol extends AdvplSymbol implements IScope {
    protected enclosingScope: IScope;
    protected children: IScope[] = [];

    constructor(name: string, retType?: IType, enclosingScope?: IScope ) {
        super(name, retType);
        this.enclosingScope = enclosingScope;
    }
    public addChild(child: IScope) {
        this.children.push(child);
    }
    public toString() {
        let ret = "";
        Object.keys(this.children).forEach( (key) => ret += this.children[key].toString());
        return ret + "\n";
    }
    public resolve(name: string): AdvplSymbol {
        const member = this.getMembers();
        if (member.hasOwnProperty(name)) {
            return member[name];
        }
        if (this.enclosingScope !== undefined ) {
            return this.enclosingScope.resolve(name);
        }
        return undefined;
    }
    public existLocalScope(name: string): boolean {
        return this.getMembers().hasOwnProperty(name);
    }
    public define(sym: AdvplSymbol) {
        const member = this.getMembers();
        member[sym.getName()] = sym;
    }
    public abstract getMembers(): IHashSymbol;

    public getParentScope(): IScope {
        return this.getEnclosingScope();
    }
    public getEnclosingScope(): IScope {
         return this.enclosingScope;
        }
    public getScopeName(): string {
         return this.name;
        }
}
