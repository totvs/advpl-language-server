import { AdvplSymbol } from "./advplSymbol";
import { IType } from "./type";

export class BuiltInTypeSymbol extends AdvplSymbol implements IType {
    constructor(nameType: string) {
        super(nameType);
        this.setRawType(nameType);
    }
}
