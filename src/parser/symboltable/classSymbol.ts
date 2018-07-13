import { AdvplSymbol } from "./advplSymbol";
import { IHashSymbol } from "./IHashSymbol";
import { IScope } from "./scope";
import { ScopedSymbol } from "./scopedSymbol";
import { IType } from "./type";

export class ClassSymbol extends ScopedSymbol implements IScope, IType {
    private superClassSymbol: ClassSymbol;
    private superClassName: string;
    private members: IHashSymbol = {};
    constructor(name: string, enclosingScope: IScope , superClassName: string ) {
        super(name, enclosingScope);
        this.superClassName = superClassName;
    }
    public getParentScope(): IScope {
        if (this.superClassSymbol === undefined) {
            return this.enclosingScope;
        }
        return this.getEnclosingScope();
    }
    public resolveMember(name: string): AdvplSymbol {
        if (this.members.hasOwnProperty(name)) {
            return this.members[name];
        }
        if (this.superClassSymbol !== undefined ) {
            return this.superClassSymbol.resolveMember(name);
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
        let ret =  "[class " + this.name;
        if (this.superClassName !== undefined) {
            ret += " extends "  + this.superClassName;
        }
        ret += "][Datas ->";
        Object.keys(this.members).forEach( (key) => ret += this.members[key].toString());
        ret += "]";
        return ret;
    }
}
