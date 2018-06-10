// Generated from ./src/grammar/Advpl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ObjectAttribAccessContext } from './AdvplParser';
import { CallContext } from './AdvplParser';
import { VarArrayAccessContext } from './AdvplParser';
import { ParensContext } from './AdvplParser';
import { ObjectMethodAccessContext } from './AdvplParser';
import { VarContext } from './AdvplParser';
import { MacroExecucaoIdentifierContext } from './AdvplParser';
import { ExpressionListInConcheteContext } from './AdvplParser';
import { ClassConstructorContext } from './AdvplParser';
import { MacroExecucaoContext } from './AdvplParser';
import { IfCallContext } from './AdvplParser';
import { LitContext } from './AdvplParser';
import { CallWithAttContext } from './AdvplParser';
import { AssumeContext } from './AdvplParser';
import { EmbbedExpressionContext } from './AdvplParser';
import { XCommandExpressionContext } from './AdvplParser';
import { ArrayOrBlockContext } from './AdvplParser';
import { LiteralArrobaNilContext } from './AdvplParser';
import { LiteralStringDuplaContext } from './AdvplParser';
import { LiteralLogicalContext } from './AdvplParser';
import { LiteralNilContext } from './AdvplParser';
import { LiteralNumberContext } from './AdvplParser';
import { LiteralStringSimplesContext } from './AdvplParser';
import { BlockInitializerContext } from './AdvplParser';
import { ArrayInitializerContext } from './AdvplParser';
import { ExprPrimaryContext } from './AdvplParser';
import { ExprIncrPosContext } from './AdvplParser';
import { AssignmentContext } from './AdvplParser';
import { ExprIncrPreContext } from './AdvplParser';
import { ExprPrimaryBadFormedContext } from './AdvplParser';
import { AliasAssignmentContext } from './AdvplParser';
import { ExprLogicalContext } from './AdvplParser';
import { ExprCompContext } from './AdvplParser';
import { ExprPlusContext } from './AdvplParser';
import { ExprNotContext } from './AdvplParser';
import { ExprMulContext } from './AdvplParser';
import { ProgramContext } from './AdvplParser';
import { LinePreProcessorContext } from './AdvplParser';
import { IdMarkerContext } from './AdvplParser';
import { SourcesContext } from './AdvplParser';
import { ModifiersFunctionContext } from './AdvplParser';
import { StaticVariableContext } from './AdvplParser';
import { ClassDeclarationContext } from './AdvplParser';
import { DataDefinitionContext } from './AdvplParser';
import { FromClassContext } from './AdvplParser';
import { MethodDefinitionContext } from './AdvplParser';
import { DataDescriptionContext } from './AdvplParser';
import { DataTypeContext } from './AdvplParser';
import { DataModifiersContext } from './AdvplParser';
import { ModifiersMethodContext } from './AdvplParser';
import { WsDataTypeContext } from './AdvplParser';
import { QsDeclarationContext } from './AdvplParser';
import { QsMethodContext } from './AdvplParser';
import { FuncDeclarationContext } from './AdvplParser';
import { FunctionDefinitionContext } from './AdvplParser';
import { SuperCallContext } from './AdvplParser';
import { FormalParametersContext } from './AdvplParser';
import { FormalParameterContext } from './AdvplParser';
import { InitFuncOrMethodContext } from './AdvplParser';
import { StaticVariableBeforeLocalContext } from './AdvplParser';
import { LocalVariableDeclarationStatementContext } from './AdvplParser';
import { StaticVariableDeclarationStatementContext } from './AdvplParser';
import { PublicVariableDeclarationStatementContext } from './AdvplParser';
import { PrivateVariableDeclarationStatementContext } from './AdvplParser';
import { ArrayOrBlockInitializerContext } from './AdvplParser';
import { BlockParamsContext } from './AdvplParser';
import { BlockContext } from './AdvplParser';
import { StatementContext } from './AdvplParser';
import { BeginSequenceStatementContext } from './AdvplParser';
import { ReturnStatementContext } from './AdvplParser';
import { ReturnvaluesContext } from './AdvplParser';
import { StatementExpressionContext } from './AdvplParser';
import { ExpressionContext } from './AdvplParser';
import { PrimaryContext } from './AdvplParser';
import { IdentifierContext } from './AdvplParser';
import { ArrayAccessContext } from './AdvplParser';
import { MethodAccessLoopContext } from './AdvplParser';
import { ArgumentsContext } from './AdvplParser';
import { ExpressionListContext } from './AdvplParser';
import { OptionalExpressionContext } from './AdvplParser';
import { ExpressionListComaContext } from './AdvplParser';
import { LiteralContext } from './AdvplParser';
import { IfFunctioncallContext } from './AdvplParser';
import { IfStatementContext } from './AdvplParser';
import { IfConditionContext } from './AdvplParser';
import { ElseIfConditionContext } from './AdvplParser';
import { ElseIfBlockContext } from './AdvplParser';
import { ElseBlockContext } from './AdvplParser';
import { IfBlockContext } from './AdvplParser';
import { ForStatementContext } from './AdvplParser';
import { ForToExpressionContext } from './AdvplParser';
import { ForStepExpressionContext } from './AdvplParser';
import { ForBlockContext } from './AdvplParser';
import { LostExpressionContext } from './AdvplParser';
import { DoStatementContext } from './AdvplParser';
import { ExitOrLoopStatementContext } from './AdvplParser';
import { WhileStatementContext } from './AdvplParser';
import { WhileConditionContext } from './AdvplParser';
import { WhileBlockContext } from './AdvplParser';
import { DocaseStatementContext } from './AdvplParser';
import { CaseConditionContext } from './AdvplParser';
import { CaseBlockContext } from './AdvplParser';
import { OtherWiseBlockContext } from './AdvplParser';
import { ArrobaDefineContext } from './AdvplParser';
import { ForInitContext } from './AdvplParser';
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
	 * Visit a parse tree produced by the `MacroExecucaoIdentifier`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroExecucaoIdentifier?: (ctx: MacroExecucaoIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpressionListInConchete`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListInConchete?: (ctx: ExpressionListInConcheteContext) => Result;

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
	 * Visit a parse tree produced by the `Assume`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssume?: (ctx: AssumeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EmbbedExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmbbedExpression?: (ctx: EmbbedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `XCommandExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXCommandExpression?: (ctx: XCommandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayOrBlock`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayOrBlock?: (ctx: ArrayOrBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralArrobaNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralArrobaNil?: (ctx: LiteralArrobaNilContext) => Result;

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
	 * Visit a parse tree produced by the `ExprPrimaryBadFormed`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprPrimaryBadFormed?: (ctx: ExprPrimaryBadFormedContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.linePreProcessor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinePreProcessor?: (ctx: LinePreProcessorContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.idMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdMarker?: (ctx: IdMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.sources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSources?: (ctx: SourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.modifiersFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersFunction?: (ctx: ModifiersFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.staticVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariable?: (ctx: StaticVariableContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.fromClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClass?: (ctx: FromClassContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.methodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDefinition?: (ctx: MethodDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.dataDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataDescription?: (ctx: DataDescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.dataModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifiers?: (ctx: DataModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.modifiersMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersMethod?: (ctx: ModifiersMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.wsDataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWsDataType?: (ctx: WsDataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.qsDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQsDeclaration?: (ctx: QsDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.qsMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQsMethod?: (ctx: QsMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.funcDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDeclaration?: (ctx: FuncDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.superCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperCall?: (ctx: SuperCallContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.initFuncOrMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitFuncOrMethod?: (ctx: InitFuncOrMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.staticVariableBeforeLocal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariableBeforeLocal?: (ctx: StaticVariableBeforeLocalContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.staticVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariableDeclarationStatement?: (ctx: StaticVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.publicVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicVariableDeclarationStatement?: (ctx: PublicVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.privateVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivateVariableDeclarationStatement?: (ctx: PrivateVariableDeclarationStatementContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.beginSequenceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeginSequenceStatement?: (ctx: BeginSequenceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.returnvalues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnvalues?: (ctx: ReturnvaluesContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.expressionListComa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListComa?: (ctx: ExpressionListComaContext) => Result;

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
	 * Visit a parse tree produced by `AdvplParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.ifCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCondition?: (ctx: IfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.elseIfCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfCondition?: (ctx: ElseIfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.elseIfBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfBlock?: (ctx: ElseIfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.elseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBlock?: (ctx: ElseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.ifBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlock?: (ctx: IfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forToExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForToExpression?: (ctx: ForToExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forStepExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStepExpression?: (ctx: ForStepExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForBlock?: (ctx: ForBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.lostExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLostExpression?: (ctx: LostExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.exitOrLoopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitOrLoopStatement?: (ctx: ExitOrLoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.whileCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileCondition?: (ctx: WhileConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.whileBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileBlock?: (ctx: WhileBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.docaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocaseStatement?: (ctx: DocaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.caseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondition?: (ctx: CaseConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.caseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseBlock?: (ctx: CaseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.otherWiseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherWiseBlock?: (ctx: OtherWiseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.arrobaDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrobaDefine?: (ctx: ArrobaDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `AdvplParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

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

