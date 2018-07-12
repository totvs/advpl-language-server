import { AdvplSymbol } from "./advplSymbol";
/**
 * Baseado no "Language Implementation Patterns"
 */
export interface IScope {

    addChild?(child: IScope);

    getScopeName(): string;
    /**
     * Where to look next for symbols; superclass or enclosing scope
     */
    getParentScope(): IScope ;
    /**
     *  Scope in which this scope defined. For global scope, it's null
     */
    getEnclosingScope(): IScope ;
    /**
     * Define a symbol in the current scope
     */
    define(syb: AdvplSymbol);
    /**
     * Look up name in this scope or in parent scope if not here
     */
    resolve(name: string): AdvplSymbol;

    existLocalScope(name: string): boolean;
}
