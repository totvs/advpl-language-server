import { AdvplTypes } from "./advplTypes";
import { AdvplVisibility } from "./advplVisibility";
import { IScope } from "./scope";
import { IType } from "./type";

export class AdvplSymbol {
    protected name: string;
    protected type: AdvplTypes;
    protected rawType: string;
    protected scope: IScope;
    protected nameinsource: string;
    protected visibility: AdvplVisibility;

    constructor(name: string, type?: AdvplTypes) {
        this.name = name;
        this.type = type;
    }
    public getName(): string {
        return this.name;
    }
    public toString(): string {
        let ret = "<" + this.name +  " | ";
        if ( this.rawType !== undefined) {
            ret += this.rawType ;
        } else {
            ret += "UNKNOW";
        }
        if ( this.visibility !== undefined ) {
            ret +=   " : " + AdvplVisibility[this.visibility]  ;
        }
        ret += ">";
        return ret ;
    }
    public getScope(): IScope {
        return this.scope;
    }
    public getType(): AdvplTypes {
        return this.type;
    }
    public getrawType(): string {
        return this.rawType;
    }
    public setScope(scope: IScope): void {
        this.scope = scope;
    }
    public setVisibility(vis: AdvplVisibility) {
        this.visibility = vis;
    }
    public setRawType(raw: string) {
        this.rawType = raw;
    }
    public setType(type: AdvplTypes) {
        this.type = type;
    }
}
