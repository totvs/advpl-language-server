import { AdvplVisibility } from "./advplVisibility";
import { IScope } from "./scope";
import { IType } from "./type";

export class AdvplSymbol {
    protected name: string;
    protected type: IType;
    protected scope: IScope;
    protected nameinsource: string;
    protected visibility: AdvplVisibility;

    constructor(name: string, type: IType) {
        this.name = name;
        this.type = type;
    }
    public getName(): string {
        return this.name;
    }
    public toString(): string {
        let ret = "";
        if ( this.visibility !== undefined ) {
            ret +=  "<" + this.name + ":" + AdvplVisibility[this.visibility]  + ">\n";
        } else {
            ret +=  "<" + this.name + ">\n";
        }
        return ret ;
    }
    public getScope(): IScope {
        return this.scope;
    }
    public getType(): IType {
        return this.type;
    }
    public setScope(scope: IScope): void {
        this.scope = scope;
    }
    public setVisibility(vis: AdvplVisibility) {
        this.visibility = vis;
    }
}
