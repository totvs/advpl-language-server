import { AdvplSymbol } from "./advplSymbol";
import { IHashSymbol } from "./IHashSymbol";
import { IScope } from "./scope";
import { ScopedSymbol } from "./scopedSymbol";
import { IType } from "./type";

export class ClassSymbol extends ScopedSymbol implements IScope, IType {
    private superClass: ClassSymbol;
    private members: IHashSymbol = {};
    constructor(name: string, enclosingScope: IScope , superClass: ClassSymbol ) {
        super(name,  null , enclosingScope);
        this.superClass = superClass;
    }
    public getParentScope(): IScope {
        if (this.superClass === undefined) {
            return this.enclosingScope;
        }
        return this.getEnclosingScope();
    }
    public resolveMember(name: string): AdvplSymbol {
        if (this.members.hasOwnProperty(name)) {
            return this.members[name];
        }
        if (this.superClass !== undefined ) {
            return this.superClass.resolveMember(name);
        }
        return undefined;
    }
    public getMembers(): IHashSymbol {
        return this.members;
    }
    public addMember(name: string, syb: AdvplSymbol ) {
        this.members[name] = syb;
    }
    public toString(): string {
        return "class " + this.name;
    }
}
