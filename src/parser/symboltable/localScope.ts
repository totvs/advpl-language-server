import { BaseScope } from "./baseScope";
import { IScope } from "./scope";

export class LocalScope extends BaseScope {
    constructor(parent: IScope ) {
        super(parent);
    }
    public getScopeName(): string {
        return "local";
    }
    public toString() {
        return "[Local] " + super.toString();
    }
}
