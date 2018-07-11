
import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";
import { ScopedSymbol } from "./scopedSymbol";
import { IType } from "./type";
export class MethodSymbol extends ScopedSymbol {

    protected arguments: IHashSymbol = {};
    private className: string;
    constructor(name: string, retType: IType, parent: IScope ) {
        super(name, retType, parent);
    }
    public getClassName(): string {
        return this.className;
    }
    public setClassName(s: string): void {
        this.className = s ;
    }
    public getName(): string {
        return this.name + "(" + JSON.stringify(this.arguments) + ")";
    }
    public getMembers(): IHashSymbol {
        return this.arguments;
    }
}
