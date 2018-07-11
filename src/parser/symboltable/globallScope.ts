import { ProgramContext } from "../gen/AdvplParser";
import { BaseScope } from "./baseScope";
import { IScope } from "./scope";

export class GlobalScope extends BaseScope {
    protected programContext: ProgramContext;
    constructor() {
        super(null);
    }
    public getScopeName(): string {
        return "globals";
    }
    public toString() {
        return "[Global] " + super.toString();
    }

}
