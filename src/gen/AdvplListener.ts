// Generated from ./src/grammar/Advpl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
	 * Enter a parse tree produced by the `MacroExecucaoIdentifier`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterMacroExecucaoIdentifier?: (ctx: MacroExecucaoIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `MacroExecucaoIdentifier`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitMacroExecucaoIdentifier?: (ctx: MacroExecucaoIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpressionListInConchete`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterExpressionListInConchete?: (ctx: ExpressionListInConcheteContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpressionListInConchete`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitExpressionListInConchete?: (ctx: ExpressionListInConcheteContext) => void;

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
	 * Enter a parse tree produced by the `EmbbedExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterEmbbedExpression?: (ctx: EmbbedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EmbbedExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitEmbbedExpression?: (ctx: EmbbedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `XCommandExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	enterXCommandExpression?: (ctx: XCommandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `XCommandExpression`
	 * labeled alternative in `AdvplParser.primary`.
	 * @param ctx the parse tree
	 */
	exitXCommandExpression?: (ctx: XCommandExpressionContext) => void;

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
	 * Enter a parse tree produced by the `LiteralArrobaNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteralArrobaNil?: (ctx: LiteralArrobaNilContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralArrobaNil`
	 * labeled alternative in `AdvplParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteralArrobaNil?: (ctx: LiteralArrobaNilContext) => void;

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
	 * Enter a parse tree produced by the `ExprPrimaryBadFormed`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprPrimaryBadFormed?: (ctx: ExprPrimaryBadFormedContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprPrimaryBadFormed`
	 * labeled alternative in `AdvplParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprPrimaryBadFormed?: (ctx: ExprPrimaryBadFormedContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.linePreProcessor`.
	 * @param ctx the parse tree
	 */
	enterLinePreProcessor?: (ctx: LinePreProcessorContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.linePreProcessor`.
	 * @param ctx the parse tree
	 */
	exitLinePreProcessor?: (ctx: LinePreProcessorContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.idMarker`.
	 * @param ctx the parse tree
	 */
	enterIdMarker?: (ctx: IdMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.idMarker`.
	 * @param ctx the parse tree
	 */
	exitIdMarker?: (ctx: IdMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.sources`.
	 * @param ctx the parse tree
	 */
	enterSources?: (ctx: SourcesContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.sources`.
	 * @param ctx the parse tree
	 */
	exitSources?: (ctx: SourcesContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.staticVariable`.
	 * @param ctx the parse tree
	 */
	enterStaticVariable?: (ctx: StaticVariableContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.staticVariable`.
	 * @param ctx the parse tree
	 */
	exitStaticVariable?: (ctx: StaticVariableContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.fromClass`.
	 * @param ctx the parse tree
	 */
	enterFromClass?: (ctx: FromClassContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.fromClass`.
	 * @param ctx the parse tree
	 */
	exitFromClass?: (ctx: FromClassContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.dataDescription`.
	 * @param ctx the parse tree
	 */
	enterDataDescription?: (ctx: DataDescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.dataDescription`.
	 * @param ctx the parse tree
	 */
	exitDataDescription?: (ctx: DataDescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.dataModifiers`.
	 * @param ctx the parse tree
	 */
	enterDataModifiers?: (ctx: DataModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.dataModifiers`.
	 * @param ctx the parse tree
	 */
	exitDataModifiers?: (ctx: DataModifiersContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.wsDataType`.
	 * @param ctx the parse tree
	 */
	enterWsDataType?: (ctx: WsDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.wsDataType`.
	 * @param ctx the parse tree
	 */
	exitWsDataType?: (ctx: WsDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.qsDeclaration`.
	 * @param ctx the parse tree
	 */
	enterQsDeclaration?: (ctx: QsDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.qsDeclaration`.
	 * @param ctx the parse tree
	 */
	exitQsDeclaration?: (ctx: QsDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.qsMethod`.
	 * @param ctx the parse tree
	 */
	enterQsMethod?: (ctx: QsMethodContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.qsMethod`.
	 * @param ctx the parse tree
	 */
	exitQsMethod?: (ctx: QsMethodContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.staticVariableBeforeLocal`.
	 * @param ctx the parse tree
	 */
	enterStaticVariableBeforeLocal?: (ctx: StaticVariableBeforeLocalContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.staticVariableBeforeLocal`.
	 * @param ctx the parse tree
	 */
	exitStaticVariableBeforeLocal?: (ctx: StaticVariableBeforeLocalContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.beginSequenceStatement`.
	 * @param ctx the parse tree
	 */
	enterBeginSequenceStatement?: (ctx: BeginSequenceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.beginSequenceStatement`.
	 * @param ctx the parse tree
	 */
	exitBeginSequenceStatement?: (ctx: BeginSequenceStatementContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.returnvalues`.
	 * @param ctx the parse tree
	 */
	enterReturnvalues?: (ctx: ReturnvaluesContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.returnvalues`.
	 * @param ctx the parse tree
	 */
	exitReturnvalues?: (ctx: ReturnvaluesContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.expressionListComa`.
	 * @param ctx the parse tree
	 */
	enterExpressionListComa?: (ctx: ExpressionListComaContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.expressionListComa`.
	 * @param ctx the parse tree
	 */
	exitExpressionListComa?: (ctx: ExpressionListComaContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	enterIfCondition?: (ctx: IfConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	exitIfCondition?: (ctx: IfConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.elseIfCondition`.
	 * @param ctx the parse tree
	 */
	enterElseIfCondition?: (ctx: ElseIfConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.elseIfCondition`.
	 * @param ctx the parse tree
	 */
	exitElseIfCondition?: (ctx: ElseIfConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.elseIfBlock`.
	 * @param ctx the parse tree
	 */
	enterElseIfBlock?: (ctx: ElseIfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.elseIfBlock`.
	 * @param ctx the parse tree
	 */
	exitElseIfBlock?: (ctx: ElseIfBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	enterElseBlock?: (ctx: ElseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	exitElseBlock?: (ctx: ElseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	enterIfBlock?: (ctx: IfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	exitIfBlock?: (ctx: IfBlockContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.forToExpression`.
	 * @param ctx the parse tree
	 */
	enterForToExpression?: (ctx: ForToExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.forToExpression`.
	 * @param ctx the parse tree
	 */
	exitForToExpression?: (ctx: ForToExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.forStepExpression`.
	 * @param ctx the parse tree
	 */
	enterForStepExpression?: (ctx: ForStepExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.forStepExpression`.
	 * @param ctx the parse tree
	 */
	exitForStepExpression?: (ctx: ForStepExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.forBlock`.
	 * @param ctx the parse tree
	 */
	enterForBlock?: (ctx: ForBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.forBlock`.
	 * @param ctx the parse tree
	 */
	exitForBlock?: (ctx: ForBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.lostExpression`.
	 * @param ctx the parse tree
	 */
	enterLostExpression?: (ctx: LostExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.lostExpression`.
	 * @param ctx the parse tree
	 */
	exitLostExpression?: (ctx: LostExpressionContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.whileCondition`.
	 * @param ctx the parse tree
	 */
	enterWhileCondition?: (ctx: WhileConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.whileCondition`.
	 * @param ctx the parse tree
	 */
	exitWhileCondition?: (ctx: WhileConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.whileBlock`.
	 * @param ctx the parse tree
	 */
	enterWhileBlock?: (ctx: WhileBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.whileBlock`.
	 * @param ctx the parse tree
	 */
	exitWhileBlock?: (ctx: WhileBlockContext) => void;

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
	 * Enter a parse tree produced by `AdvplParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	enterCaseCondition?: (ctx: CaseConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	exitCaseCondition?: (ctx: CaseConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.otherWiseBlock`.
	 * @param ctx the parse tree
	 */
	enterOtherWiseBlock?: (ctx: OtherWiseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.otherWiseBlock`.
	 * @param ctx the parse tree
	 */
	exitOtherWiseBlock?: (ctx: OtherWiseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AdvplParser.arrobaDefine`.
	 * @param ctx the parse tree
	 */
	enterArrobaDefine?: (ctx: ArrobaDefineContext) => void;
	/**
	 * Exit a parse tree produced by `AdvplParser.arrobaDefine`.
	 * @param ctx the parse tree
	 */
	exitArrobaDefine?: (ctx: ArrobaDefineContext) => void;

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

