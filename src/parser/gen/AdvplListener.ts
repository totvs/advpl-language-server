// Generated from ./src/parser/grammar/Advpl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `AdvplParser`.
 */
export interface AdvplListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ObjectAttribAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterObjectAttribAccess?: (ctx: ObjectAttribAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectAttribAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitObjectAttribAccess?: (ctx: ObjectAttribAccessContext) => void;

	/**
	 * Enter a parse tree produced by the `Call`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by the `Call`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by the `VarArrayAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterVarArrayAccess?: (ctx: VarArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `VarArrayAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitVarArrayAccess?: (ctx: VarArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by the `Parens`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `Parens`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectMethodAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterObjectMethodAccess?: (ctx: ObjectMethodAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectMethodAccess`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitObjectMethodAccess?: (ctx: ObjectMethodAccessContext) => void;

	/**
	 * Enter a parse tree produced by the `Var`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by the `Var`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by the `ClassConstructor`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterClassConstructor?: (ctx: ClassConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `ClassConstructor`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitClassConstructor?: (ctx: ClassConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `MacroExecucao`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterMacroExecucao?: (ctx: MacroExecucaoContext) => void;
	/**
	 * Exit a parse tree produced by the `MacroExecucao`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitMacroExecucao?: (ctx: MacroExecucaoContext) => void;

	/**
	 * Enter a parse tree produced by the `IfCall`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIfCall?: (ctx: IfCallContext) => void;
	/**
	 * Exit a parse tree produced by the `IfCall`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIfCall?: (ctx: IfCallContext) => void;

	/**
	 * Enter a parse tree produced by the `lit`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLit?: (ctx: LitContext) => void;
	/**
	 * Exit a parse tree produced by the `lit`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLit?: (ctx: LitContext) => void;

	/**
	 * Enter a parse tree produced by the `CallWithAtt`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterCallWithAtt?: (ctx: CallWithAttContext) => void;
	/**
	 * Exit a parse tree produced by the `CallWithAtt`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitCallWithAtt?: (ctx: CallWithAttContext) => void;

	/**
	 * Enter a parse tree produced by the `NumberCHSay`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterNumberCHSay?: (ctx: NumberCHSayContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberCHSay`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitNumberCHSay?: (ctx: NumberCHSayContext) => void;

	/**
	 * Enter a parse tree produced by the `Assume`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterAssume?: (ctx: AssumeContext) => void;
	/**
	 * Exit a parse tree produced by the `Assume`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitAssume?: (ctx: AssumeContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayOrBlock`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterArrayOrBlock?: (ctx: ArrayOrBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayOrBlock`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitArrayOrBlock?: (ctx: ArrayOrBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralStringDupla`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralStringDupla?: (ctx: LiteralStringDuplaContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralStringDupla`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralStringDupla?: (ctx: LiteralStringDuplaContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralLogical`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralLogical?: (ctx: LiteralLogicalContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralLogical`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralLogical?: (ctx: LiteralLogicalContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralNil?: (ctx: LiteralNilContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralNil?: (ctx: LiteralNilContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralNumber`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralNumber?: (ctx: LiteralNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralNumber`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralNumber?: (ctx: LiteralNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralStringSimples`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralStringSimples?: (ctx: LiteralStringSimplesContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralStringSimples`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralStringSimples?: (ctx: LiteralStringSimplesContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprPrimary`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprPrimary?: (ctx: ExprPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprPrimary`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprPrimary?: (ctx: ExprPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprIncrPos`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprIncrPos?: (ctx: ExprIncrPosContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprIncrPos`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprIncrPos?: (ctx: ExprIncrPosContext) => void;

	/**
	 * Enter a parse tree produced by the `Assignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Assignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprIncrPre`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprIncrPre?: (ctx: ExprIncrPreContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprIncrPre`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprIncrPre?: (ctx: ExprIncrPreContext) => void;

	/**
	 * Enter a parse tree produced by the `AliasAssignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAliasAssignment?: (ctx: AliasAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `AliasAssignment`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAliasAssignment?: (ctx: AliasAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprLogical`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprLogical?: (ctx: ExprLogicalContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprLogical`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprLogical?: (ctx: ExprLogicalContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprComp`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprComp?: (ctx: ExprCompContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprComp`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprComp?: (ctx: ExprCompContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprPlus`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprPlus?: (ctx: ExprPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprPlus`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprPlus?: (ctx: ExprPlusContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprNot`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprNot?: (ctx: ExprNotContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprNot`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprNot?: (ctx: ExprNotContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprMul`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprMul?: (ctx: ExprMulContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprMul`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprMul?: (ctx: ExprMulContext) => void;

	/**
	 * Enter a parse tree produced by the `blockInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	enterBlockInitializer?: (ctx: BlockInitializerContext) => void;
	/**
	 * Exit a parse tree produced by the `blockInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	exitBlockInitializer?: (ctx: BlockInitializerContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayInitializer`
	 * labeled alternative in `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.directives`.
	 * @param ctx the parse tree
	 */
	enterDirectives?: (ctx: DirectivesContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.directives`.
	 * @param ctx the parse tree
	 */
	exitDirectives?: (ctx: DirectivesContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.includeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.includeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.ifDef`.
	 * @param ctx the parse tree
	 */
	enterIfDef?: (ctx: IfDefContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.ifDef`.
	 * @param ctx the parse tree
	 */
	exitIfDef?: (ctx: IfDefContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.elseDef`.
	 * @param ctx the parse tree
	 */
	enterElseDef?: (ctx: ElseDefContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.elseDef`.
	 * @param ctx the parse tree
	 */
	exitElseDef?: (ctx: ElseDefContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.endifDef`.
	 * @param ctx the parse tree
	 */
	enterEndifDef?: (ctx: EndifDefContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.endifDef`.
	 * @param ctx the parse tree
	 */
	exitEndifDef?: (ctx: EndifDefContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.defineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDefineDeclaration?: (ctx: DefineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.defineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDefineDeclaration?: (ctx: DefineDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.undefineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUndefineDeclaration?: (ctx: UndefineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.undefineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUndefineDeclaration?: (ctx: UndefineDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.dataDefinition`.
	 * @param ctx the parse tree
	 */
	enterDataDefinition?: (ctx: DataDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.dataDefinition`.
	 * @param ctx the parse tree
	 */
	exitDataDefinition?: (ctx: DataDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	enterMethodDefinition?: (ctx: MethodDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	exitMethodDefinition?: (ctx: MethodDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.modifiersMethod`.
	 * @param ctx the parse tree
	 */
	enterModifiersMethod?: (ctx: ModifiersMethodContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.modifiersMethod`.
	 * @param ctx the parse tree
	 */
	exitModifiersMethod?: (ctx: ModifiersMethodContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.funcDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFuncDeclaration?: (ctx: FuncDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.funcDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFuncDeclaration?: (ctx: FuncDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.superCall`.
	 * @param ctx the parse tree
	 */
	enterSuperCall?: (ctx: SuperCallContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.superCall`.
	 * @param ctx the parse tree
	 */
	exitSuperCall?: (ctx: SuperCallContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.initFuncOrMethod`.
	 * @param ctx the parse tree
	 */
	enterInitFuncOrMethod?: (ctx: InitFuncOrMethodContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.initFuncOrMethod`.
	 * @param ctx the parse tree
	 */
	exitInitFuncOrMethod?: (ctx: InitFuncOrMethodContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.modifiersFunction`.
	 * @param ctx the parse tree
	 */
	enterModifiersFunction?: (ctx: ModifiersFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.modifiersFunction`.
	 * @param ctx the parse tree
	 */
	exitModifiersFunction?: (ctx: ModifiersFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.staticVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterStaticVariableDeclarationStatement?: (ctx: StaticVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.staticVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitStaticVariableDeclarationStatement?: (ctx: StaticVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.privateVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterPrivateVariableDeclarationStatement?: (ctx: PrivateVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.privateVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitPrivateVariableDeclarationStatement?: (ctx: PrivateVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.publicVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterPublicVariableDeclarationStatement?: (ctx: PublicVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.publicVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitPublicVariableDeclarationStatement?: (ctx: PublicVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.docaseStatement`.
	 * @param ctx the parse tree
	 */
	enterDocaseStatement?: (ctx: DocaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.docaseStatement`.
	 * @param ctx the parse tree
	 */
	exitDocaseStatement?: (ctx: DocaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.exitOrLoopStatement`.
	 * @param ctx the parse tree
	 */
	enterExitOrLoopStatement?: (ctx: ExitOrLoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.exitOrLoopStatement`.
	 * @param ctx the parse tree
	 */
	exitExitOrLoopStatement?: (ctx: ExitOrLoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.optionalExpression`.
	 * @param ctx the parse tree
	 */
	enterOptionalExpression?: (ctx: OptionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.optionalExpression`.
	 * @param ctx the parse tree
	 */
	exitOptionalExpression?: (ctx: OptionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess?: (ctx: ArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess?: (ctx: ArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.methodAccessLoop`.
	 * @param ctx the parse tree
	 */
	enterMethodAccessLoop?: (ctx: MethodAccessLoopContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.methodAccessLoop`.
	 * @param ctx the parse tree
	 */
	exitMethodAccessLoop?: (ctx: MethodAccessLoopContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.primary_ref`.
	 * @param ctx the parse tree
	 */
	enterPrimary_ref?: (ctx: Primary_refContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.primary_ref`.
	 * @param ctx the parse tree
	 */
	exitPrimary_ref?: (ctx: Primary_refContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.atxCommand`.
	 * @param ctx the parse tree
	 */
	enterAtxCommand?: (ctx: AtxCommandContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.atxCommand`.
	 * @param ctx the parse tree
	 */
	exitAtxCommand?: (ctx: AtxCommandContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayOrBlockInitializer?: (ctx: ArrayOrBlockInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.arrayOrBlockInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayOrBlockInitializer?: (ctx: ArrayOrBlockInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.blockParams`.
	 * @param ctx the parse tree
	 */
	enterBlockParams?: (ctx: BlockParamsContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.blockParams`.
	 * @param ctx the parse tree
	 */
	exitBlockParams?: (ctx: BlockParamsContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.ifFunctioncall`.
	 * @param ctx the parse tree
	 */
	enterIfFunctioncall?: (ctx: IfFunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.ifFunctioncall`.
	 * @param ctx the parse tree
	 */
	exitIfFunctioncall?: (ctx: IfFunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.chStatement`.
	 * @param ctx the parse tree
	 */
	enterChStatement?: (ctx: ChStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.chStatement`.
	 * @param ctx the parse tree
	 */
	exitChStatement?: (ctx: ChStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.defineCh`.
	 * @param ctx the parse tree
	 */
	enterDefineCh?: (ctx: DefineChContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.defineCh`.
	 * @param ctx the parse tree
	 */
	exitDefineCh?: (ctx: DefineChContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.activateCh`.
	 * @param ctx the parse tree
	 */
	enterActivateCh?: (ctx: ActivateChContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.activateCh`.
	 * @param ctx the parse tree
	 */
	exitActivateCh?: (ctx: ActivateChContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.setsCh`.
	 * @param ctx the parse tree
	 */
	enterSetsCh?: (ctx: SetsChContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.setsCh`.
	 * @param ctx the parse tree
	 */
	exitSetsCh?: (ctx: SetsChContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.paramType`.
	 * @param ctx the parse tree
	 */
	enterParamType?: (ctx: ParamTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.paramType`.
	 * @param ctx the parse tree
	 */
	exitParamType?: (ctx: ParamTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.classException`.
	 * @param ctx the parse tree
	 */
	enterClassException?: (ctx: ClassExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.classException`.
	 * @param ctx the parse tree
	 */
	exitClassException?: (ctx: ClassExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.crlf`.
	 * @param ctx the parse tree
	 */
	enterCrlf?: (ctx: CrlfContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.crlf`.
	 * @param ctx the parse tree
	 */
	exitCrlf?: (ctx: CrlfContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.crlfEmpty`.
	 * @param ctx the parse tree
	 */
	enterCrlfEmpty?: (ctx: CrlfEmptyContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.crlfEmpty`.
	 * @param ctx the parse tree
	 */
	exitCrlfEmpty?: (ctx: CrlfEmptyContext) => void;
}

