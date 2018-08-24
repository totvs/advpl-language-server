// Generated from ./src/parser/grammar/Advpl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ObjectAttribAccessContext } from './AdvplParser';
import { CallContext } from './AdvplParser';
import { VarArrayAccessContext } from './AdvplParser';
import { ParensContext } from './AdvplParser';
import { ObjectMethodAccessContext } from './AdvplParser';
import { VarContext } from './AdvplParser';
import { ClassConstructorContext } from './AdvplParser';
import { MacroExecucaoContext } from './AdvplParser';
import { IfCallContext } from './AdvplParser';
import { LitContext } from './AdvplParser';
import { CallWithAttContext } from './AdvplParser';
import { NumberCHSayContext } from './AdvplParser';
import { AssumeContext } from './AdvplParser';
import { ArrayOrBlockContext } from './AdvplParser';
import { LiteralStringDuplaContext } from './AdvplParser';
import { LiteralLogicalContext } from './AdvplParser';
import { LiteralNilContext } from './AdvplParser';
import { LiteralNumberContext } from './AdvplParser';
import { LiteralStringSimplesContext } from './AdvplParser';
import { ExprPrimaryContext } from './AdvplParser';
import { ExprIncrPosContext } from './AdvplParser';
import { AssignmentContext } from './AdvplParser';
import { ExprIncrPreContext } from './AdvplParser';
import { AliasAssignmentContext } from './AdvplParser';
import { ExprLogicalContext } from './AdvplParser';
import { ExprCompContext } from './AdvplParser';
import { ExprPlusContext } from './AdvplParser';
import { ExprNotContext } from './AdvplParser';
import { ExprMulContext } from './AdvplParser';
import { BlockInitializerContext } from './AdvplParser';
import { ArrayInitializerContext } from './AdvplParser';
import { ProgramContext } from './AdvplParser';
import { DirectivesContext } from './AdvplParser';
import { IncludeDeclarationContext } from './AdvplParser';
import { IfDefContext } from './AdvplParser';
import { ElseDefContext } from './AdvplParser';
import { EndifDefContext } from './AdvplParser';
import { DefineDeclarationContext } from './AdvplParser';
import { UndefineDeclarationContext } from './AdvplParser';
import { ClassDeclarationContext } from './AdvplParser';
import { DataDefinitionContext } from './AdvplParser';
import { MethodDefinitionContext } from './AdvplParser';
import { ModifiersMethodContext } from './AdvplParser';
import { MethodBodyContext } from './AdvplParser';
import { FuncDeclarationContext } from './AdvplParser';
import { SuperCallContext } from './AdvplParser';
import { InitFuncOrMethodContext } from './AdvplParser';
import { VariableDeclarationStatementContext } from './AdvplParser';
import { ModifiersFunctionContext } from './AdvplParser';
import { FormalParametersContext } from './AdvplParser';
import { FormalParameterContext } from './AdvplParser';
import { IdentifierContext } from './AdvplParser';
import { StaticVariableDeclarationStatementContext } from './AdvplParser';
import { PrivateVariableDeclarationStatementContext } from './AdvplParser';
import { PublicVariableDeclarationStatementContext } from './AdvplParser';
import { BlockContext } from './AdvplParser';
import { StatementContext } from './AdvplParser';
import { IfStatementContext } from './AdvplParser';
import { ForStatementContext } from './AdvplParser';
import { ForInitContext } from './AdvplParser';
import { DoStatementContext } from './AdvplParser';
import { WhileStatementContext } from './AdvplParser';
import { DocaseStatementContext } from './AdvplParser';
import { ReturnStatementContext } from './AdvplParser';
import { ExitOrLoopStatementContext } from './AdvplParser';
import { ExpressionContext } from './AdvplParser';
import { ArgumentsContext } from './AdvplParser';
import { ExpressionListContext } from './AdvplParser';
import { OptionalExpressionContext } from './AdvplParser';
import { ArrayAccessContext } from './AdvplParser';
import { MethodAccessLoopContext } from './AdvplParser';
import { Primary_refContext } from './AdvplParser';
import { PrimaryContext } from './AdvplParser';
import { AtxCommandContext } from './AdvplParser';
import { ArrayOrBlockInitializerContext } from './AdvplParser';
import { BlockParamsContext } from './AdvplParser';
import { LiteralContext } from './AdvplParser';
import { IfFunctioncallContext } from './AdvplParser';
import { ChStatementContext } from './AdvplParser';
import { DefineChContext } from './AdvplParser';
import { ActivateChContext } from './AdvplParser';
import { SetsChContext } from './AdvplParser';
import { ParamTypeContext } from './AdvplParser';
import { ClassExceptionContext } from './AdvplParser';
import { CrlfContext } from './AdvplParser';
import { CrlfEmptyContext } from './AdvplParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AdvplParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AdvplVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ObjectAttribAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectAttribAccess?: (ctx: ObjectAttribAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `Call`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by the `VarArrayAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarArrayAccess?: (ctx: VarArrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parens`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectMethodAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectMethodAccess?: (ctx: ObjectMethodAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `Var`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by the `ClassConstructor`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassConstructor?: (ctx: ClassConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `MacroExecucao`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroExecucao?: (ctx: MacroExecucaoContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfCall`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCall?: (ctx: IfCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `lit`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLit?: (ctx: LitContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallWithAtt`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallWithAtt?: (ctx: CallWithAttContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumberCHSay`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberCHSay?: (ctx: NumberCHSayContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assume`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssume?: (ctx: AssumeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayOrBlock`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayOrBlock?: (ctx: ArrayOrBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralStringDupla`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralStringDupla?: (ctx: LiteralStringDuplaContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralLogical`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralLogical?: (ctx: LiteralLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralNil?: (ctx: LiteralNilContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralNumber`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralNumber?: (ctx: LiteralNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralStringSimples`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralStringSimples?: (ctx: LiteralStringSimplesContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprPrimary`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprPrimary?: (ctx: ExprPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprIncrPos`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprIncrPos?: (ctx: ExprIncrPosContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprIncrPre`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprIncrPre?: (ctx: ExprIncrPreContext) => Result;

	/**
	 * Visit a parse tree produced by the `AliasAssignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasAssignment?: (ctx: AliasAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprLogical`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprLogical?: (ctx: ExprLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprComp`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprComp?: (ctx: ExprCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprPlus`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprPlus?: (ctx: ExprPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprNot`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprNot?: (ctx: ExprNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprMul`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprMul?: (ctx: ExprMulContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockInitializer?: (ctx: BlockInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectives?: (ctx: DirectivesContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.includeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.ifDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfDef?: (ctx: IfDefContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.elseDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseDef?: (ctx: ElseDefContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.endifDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndifDef?: (ctx: EndifDefContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.defineDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineDeclaration?: (ctx: DefineDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.undefineDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndefineDeclaration?: (ctx: UndefineDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.dataDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataDefinition?: (ctx: DataDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.methodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDefinition?: (ctx: MethodDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.modifiersMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersMethod?: (ctx: ModifiersMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.funcDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDeclaration?: (ctx: FuncDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.superCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperCall?: (ctx: SuperCallContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.initFuncOrMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitFuncOrMethod?: (ctx: InitFuncOrMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.modifiersFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersFunction?: (ctx: ModifiersFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.staticVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariableDeclarationStatement?: (ctx: StaticVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.privateVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivateVariableDeclarationStatement?: (ctx: PrivateVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.publicVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicVariableDeclarationStatement?: (ctx: PublicVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.docaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocaseStatement?: (ctx: DocaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.exitOrLoopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitOrLoopStatement?: (ctx: ExitOrLoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.optionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalExpression?: (ctx: OptionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.methodAccessLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodAccessLoop?: (ctx: MethodAccessLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.primary_ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_ref?: (ctx: Primary_refContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.atxCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtxCommand?: (ctx: AtxCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayOrBlockInitializer?: (ctx: ArrayOrBlockInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.blockParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockParams?: (ctx: BlockParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.ifFunctioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfFunctioncall?: (ctx: IfFunctioncallContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.chStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChStatement?: (ctx: ChStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.defineCh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineCh?: (ctx: DefineChContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.activateCh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivateCh?: (ctx: ActivateChContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.setsCh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetsCh?: (ctx: SetsChContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.paramType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamType?: (ctx: ParamTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.classException`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassException?: (ctx: ClassExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.crlf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrlf?: (ctx: CrlfContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.crlfEmpty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrlfEmpty?: (ctx: CrlfEmptyContext) => Result;
}

