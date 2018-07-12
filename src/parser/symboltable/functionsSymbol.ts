import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";
import { ScopedSymbol } from "./scopedSymbol";
import { IType } from "./type";
import { AdvplVisibility } from "./advplVisibility";
export class FunctionSymbol extends ScopedSymbol {
    protected startFunctionPos: number;
    protected endFunctionPos: number;

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
    public getStartFunctionPos(): number {
        return this.startFunctionPos;
    }
    public setStartFunctionPos(startFunctionPos: number) {
        this.startFunctionPos = startFunctionPos;
    }

    public getEndFunctionPos(): number {
        return this.endFunctionPos;
    }

    public setEndFunctionPos(endFunctionPos: number) {
        this.endFunctionPos = endFunctionPos;
    }
    public toString(): string {
        let ret =  "[FunctionSymbol ";
        // if ( this.visibility !== undefined ) {
        ret +=  "<" + this.name + ":" + AdvplVisibility[this.visibility]  + ">\n";
        // }
        ret += "][Arguments]";
        Object.keys(this.arguments).forEach( (key) => ret += this.arguments[key].toString());
        ret += "[Internal Symbol]";
        ret += super.toString();
        return ret;
    }
}

/*import { AdvplSymbol, SymbolType } from "./advplsymbol";
import { IHashSymbol } from "./ihashsymbol";
import { IScope } from "./scope";
import { VariableSymbol } from "./variablesymbol";

export class FunctionSymbol extends AdvplSymbol implements IScope {
    // public FunctionSymbol(String name, Type retType, Scope enclosingScope) {
    protected arguments: IHashSymbol = {};
    protected enclosingScope: IScope;
    protected startFuncionPos: number;
    protected endFuncionPos: number;
    protected paramNames = [];

    constructor(name: string, retType: SymbolType, enclosingScope: IScope ) {
        super(name, retType);
        this.enclosingScope = enclosingScope;
    }
    public resolve(name: string): AdvplSymbol {
        if (this.arguments.hasOwnProperty(name)) {
            return this.arguments[name];
        }
        if (this.enclosingScope !== undefined ) {
            return this.enclosingScope.resolve(name);
        }
        return undefined;
    }
    public existLocalScope(name: string): boolean {
        return this.arguments.hasOwnProperty(name);
    }
    public define(sym: AdvplSymbol) {
        this.arguments[sym.getName()] = sym;
    }
    public getScopeName(): string {
        return this.name;
    }
    public getEnclosingScope(): IScope {
         return this.enclosingScope;
    }
    public getStartFuncionPos(): number {
        return this.startFuncionPos;
    }
    public setStartFuncionPos(startFuncionPos: number) {
        this.startFuncionPos = startFuncionPos;
    }

    public getEndFuncionPos(): number {
        return this.endFuncionPos;
    }

    public setEndFuncionPos(endFuncionPos: number) {
        this.endFuncionPos = endFuncionPos;
    }
    public addParam(name: string) {
        this.paramNames.push(name);
    }
    public getParam() {
        return this.paramNames;
    }
    public toString(): string {
        return "function" + super.toString() + ":" + this.arguments.toString();
    }

    public getVariables(): VariableSymbol[] {
        return [];
    }
    /*
    public ArrayList<VariableSymbol> getVariables(){
		Collection<Symbol> list = arguments.values();
		Iterator<Symbol> it = list.iterator();
		ArrayList<VariableSymbol> returnList = new ArrayList<VariableSymbol> ();
		while(it.hasNext())
		{
			Symbol syb = it.next();
			if(syb instanceof VariableSymbol)
				returnList.add((VariableSymbol) syb);
		}
		return returnList;
	}

}
*/
