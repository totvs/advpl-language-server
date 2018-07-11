import { ParserRuleContext, Token } from "antlr4ts";
import { AdvplListener } from "../../gen/AdvplListener";
import { BlockContext, FormalParameterContext, FuncDeclarationContext, FunctionDefinitionContext,
    LinePreProcessorContext, ProgramContext, StaticVariableContext } from "../../gen/AdvplParser";
import { AdvplSymbol } from "../../symboltable/advplSymbol";
import { AdvplVisibility } from "../../symboltable/advplVisibility";
import { FunctionSymbol } from "../../symboltable/functionsSymbol";
import { LocalScope } from "../../symboltable/localScope";
import { IScope } from "../../symboltable/scope";
import { SymbolTable } from "../../symboltable/symbolTable";
import { VariableSymbol } from "../../symboltable/variableSymbol";
import { Problem, ProblemCategory } from "../../util/problem";

export class SymbolTableListener implements AdvplListener {
    protected symtab: SymbolTable = new SymbolTable();
    protected currentScope: IScope;
    protected problems: Problem[] = [];
    protected filename: string;
    protected sourceLine: number;

    public async debug_tblsymb() {
        console.log(this.symtab.toString());
    }
    public genericExit(): void {
        this.currentScope = this.currentScope.getEnclosingScope(); // pop scope
    }

    public defineVar(vis: AdvplVisibility , nameToken: Token, ctx: ParserRuleContext ): AdvplSymbol {
        const varName =  nameToken.text.toUpperCase();
        if (!this.currentScope.existLocalScope(varName)) {
            const variable = new VariableSymbol(nameToken.text);
            variable.setVisibility(vis);
            this.currentScope.define(variable);
            return variable;
        } else {
            this.reportProblem("redefined variable", nameToken.line - this.getPPOLineDif());
        }
        return null;
    }
    public reportProblem(msg, line) {
        const problem = new Problem(this.filename, msg, line);
        problem.setCategory(ProblemCategory.ERROR);
        this.problems.push(problem);
    }
    /**
     * Retorna a linha do fonte original e não do PPO
     */
    public getPPOLineDif(): number {
        return this.sourceLine;
    }

    exitLinePreProcessor(ctx: LinePreProcessorContext) {
        this.sourceLine =  ctx.start.line - parseInt(ctx.NUMBER().toString(), 4) + 1;
    }

    enterProgram(ctx: ProgramContext) {
        this.currentScope = this.symtab.globals;
    }
    exitProgram(ctx: ProgramContext) {
        this.currentScope = this.symtab.globals;
    }
    enterStaticVariable(ctx: StaticVariableContext) {
        const expressions = ctx.staticVariableDeclarationStatement().expression();
        for ( const element of expressions) {
            this.defineVar(AdvplVisibility.STATIC, element.start, ctx);
        }
    }
    /*exitStaticVariable(ctx: StaticVariableContext) {
        this.genericExit();
    }*/

    enterFunctionDefinition(ctx: FunctionDefinitionContext) {
        const functionName = ctx.identifier().text;
        const functionSymbol = new FunctionSymbol(functionName, null, this.currentScope);
        functionSymbol.setStartFunctionPos(ctx.start.startIndex);
        functionSymbol.setStartFunctionPos(ctx.stop.stopIndex);
        this.currentScope.define(functionSymbol);
        this.currentScope = functionSymbol;
    }
    exitFuncDeclaration(ctx: FuncDeclarationContext) {
        this.currentScope = this.currentScope.getEnclosingScope();
    }
    exitFormalParameter(ctx: FormalParameterContext) {
        this.defineVar(AdvplVisibility.ARGUMENT, ctx.identifier().start, ctx);
        if (this.currentScope instanceof FunctionSymbol) {
            console.log(ctx.identifier().text);
        }
    }
    enterBlock(ctx: BlockContext) {
        this.currentScope = new LocalScope(this.currentScope);
    }
    exitBlock(ctx: BlockContext) {
        this.genericExit();
    }

}
