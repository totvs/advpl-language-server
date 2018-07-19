import { FunctionSymbol } from "./functionsSymbol";
import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";

import { IType } from "./type";

export class MethodSymbol extends FunctionSymbol {

    className: string;
    constructor(className: string, name: string, parent: IScope ) {
        super(name, parent);
        this.className = className;
    }
    public getClassName(): string {
        return this.className;
    }
    public setClassName(s: string): void {
        this.className = s ;
    }
    public toString(): string {
        let ret =  "[Method from class "  + this.className;
        ret += super.toString();
        ret += "]";
        return ret;
    }

}
