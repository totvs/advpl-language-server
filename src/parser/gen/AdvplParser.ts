// Generated from ./src/parser/grammar/Advpl.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { AdvplListener } from './AdvplListener';
import { AdvplVisitor } from './AdvplVisitor';


export class AdvplParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly MINOR=18;
	public static readonly MAJOR=19;
	public static readonly EQUALS=20;
	public static readonly MINOREQUALS=21;
	public static readonly MAJOREQUALS=22;
	public static readonly DOUBLEEQUAL=23;
	public static readonly DIF1=24;
	public static readonly DIF2=25;
	public static readonly DIF3=26;
	public static readonly CONTIDO=27;
	public static readonly PLUSPLUS=28;
	public static readonly MINUSMINUS=29;
	public static readonly PLUSEQUALS=30;
	public static readonly PLUS=31;
	public static readonly MINUS=32;
	public static readonly MULT=33;
	public static readonly DIV=34;
	public static readonly POW=35;
	public static readonly PERC=36;
	public static readonly ARROBA=37;
	public static readonly ECOMERCIAL=38;
	public static readonly BEGIN=39;
	public static readonly TRANSACTION=40;
	public static readonly SEQUENCE=41;
	public static readonly BEGIN_SQL=42;
	public static readonly ALIASACCESS=43;
	public static readonly STEP=44;
	public static readonly TO=45;
	public static readonly TRUE=46;
	public static readonly FALSE=47;
	public static readonly NIL=48;
	public static readonly DEFINE=49;
	public static readonly UNDEFINE=50;
	public static readonly IFDEF=51;
	public static readonly IFNDEF=52;
	public static readonly ELSEDEF=53;
	public static readonly ENDIFDEF=54;
	public static readonly FOR=55;
	public static readonly NEXT=56;
	public static readonly WHILE=57;
	public static readonly DO=58;
	public static readonly ELSEIF=59;
	public static readonly IF=60;
	public static readonly ELSE=61;
	public static readonly ENDI=62;
	public static readonly ENDIF=63;
	public static readonly ENDIF_DOT=64;
	public static readonly ENDDO=65;
	public static readonly ENDFOR=66;
	public static readonly END=67;
	public static readonly EXTENDED=68;
	public static readonly CASE=69;
	public static readonly ENDCASE=70;
	public static readonly OTHERWISE=71;
	public static readonly EXIT=72;
	public static readonly LOOP=73;
	public static readonly LOCA=74;
	public static readonly LOCAL=75;
	public static readonly PRIVATE=76;
	public static readonly PUBLIC=77;
	public static readonly STATIC=78;
	public static readonly USER=79;
	public static readonly WEB=80;
	public static readonly MAIN=81;
	public static readonly FUNCTION=82;
	public static readonly FUNCTIO=83;
	public static readonly PROCEDURE=84;
	public static readonly SELF=85;
	public static readonly PROJECT=86;
	public static readonly TEMPLATE=87;
	public static readonly AND=88;
	public static readonly OR=89;
	public static readonly NOT=90;
	public static readonly DEFAULT=91;
	public static readonly RETURN=92;
	public static readonly ASSUME=93;
	public static readonly CLASS=94;
	public static readonly ENDCLASS=95;
	public static readonly METHOD=96;
	public static readonly DATA=97;
	public static readonly FROM=98;
	public static readonly C_HIDDEN=99;
	public static readonly READONLY=100;
	public static readonly DESCRIPTION=101;
	public static readonly QSSTRUCT=102;
	public static readonly QSMETHOD=103;
	public static readonly MODULE=104;
	public static readonly INIT=105;
	public static readonly AS=106;
	public static readonly OF=107;
	public static readonly PRODUCES=108;
	public static readonly OPTIONAL=109;
	public static readonly REQUEST=110;
	public static readonly QUERYPARAM=111;
	public static readonly WSREST=112;
	public static readonly CAMELCASE=113;
	public static readonly PATHPARAM=114;
	public static readonly GET=115;
	public static readonly POST=116;
	public static readonly PUT=117;
	public static readonly DELETE=118;
	public static readonly BYREF=119;
	public static readonly DATASET=120;
	public static readonly PROCESS=121;
	public static readonly TITLE=122;
	public static readonly PERGUNTE=123;
	public static readonly PATH=124;
	public static readonly LPAREN=125;
	public static readonly RPAREN=126;
	public static readonly LBRACK=127;
	public static readonly RBRACK=128;
	public static readonly INCLUDE=129;
	public static readonly COMMA=130;
	public static readonly DOT=131;
	public static readonly ATTRIB_OPERATOR=132;
	public static readonly NUMBER=133;
	public static readonly IDENTIFIER=134;
	public static readonly COMMENT=135;
	public static readonly LINE_COMMENT=136;
	public static readonly LINE_COMMENT_EE=137;
	public static readonly STRING=138;
	public static readonly STRINGSIMPLE=139;
	public static readonly CRLF=140;
	public static readonly WS=141;
	public static readonly ErrorChar=142;
	public static readonly RULE_program = 0;
	public static readonly RULE_linePreProcessor = 1;
	public static readonly RULE_idMarker = 2;
	public static readonly RULE_sources = 3;
	public static readonly RULE_modifiersFunction = 4;
	public static readonly RULE_staticVariable = 5;
	public static readonly RULE_classDeclaration = 6;
	public static readonly RULE_dataDefinition = 7;
	public static readonly RULE_fromClass = 8;
	public static readonly RULE_methodDefinition = 9;
	public static readonly RULE_dataDescription = 10;
	public static readonly RULE_dataType = 11;
	public static readonly RULE_dataModifiers = 12;
	public static readonly RULE_modifiersMethod = 13;
	public static readonly RULE_wsDataType = 14;
	public static readonly RULE_qsDeclaration = 15;
	public static readonly RULE_qsMethod = 16;
	public static readonly RULE_funcDeclaration = 17;
	public static readonly RULE_functionDefinition = 18;
	public static readonly RULE_superCall = 19;
	public static readonly RULE_formalParameters = 20;
	public static readonly RULE_formalParameter = 21;
	public static readonly RULE_initFuncOrMethod = 22;
	public static readonly RULE_staticVariableBeforeLocal = 23;
	public static readonly RULE_localVariableDeclarationStatement = 24;
	public static readonly RULE_staticVariableDeclarationStatement = 25;
	public static readonly RULE_publicVariableDeclarationStatement = 26;
	public static readonly RULE_privateVariableDeclarationStatement = 27;
	public static readonly RULE_arrayOrBlockInitializer = 28;
	public static readonly RULE_blockParams = 29;
	public static readonly RULE_block = 30;
	public static readonly RULE_statement = 31;
	public static readonly RULE_beginSequenceStatement = 32;
	public static readonly RULE_returnStatement = 33;
	public static readonly RULE_returnvalues = 34;
	public static readonly RULE_statementExpression = 35;
	public static readonly RULE_expression = 36;
	public static readonly RULE_primary = 37;
	public static readonly RULE_identifier = 38;
	public static readonly RULE_arrayAccess = 39;
	public static readonly RULE_methodAccessLoop = 40;
	public static readonly RULE_arguments = 41;
	public static readonly RULE_expressionList = 42;
	public static readonly RULE_optionalExpression = 43;
	public static readonly RULE_expressionListComa = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_ifFunctioncall = 46;
	public static readonly RULE_ifStatement = 47;
	public static readonly RULE_ifCondition = 48;
	public static readonly RULE_elseIfCondition = 49;
	public static readonly RULE_elseIfBlock = 50;
	public static readonly RULE_elseBlock = 51;
	public static readonly RULE_ifBlock = 52;
	public static readonly RULE_forStatement = 53;
	public static readonly RULE_forToExpression = 54;
	public static readonly RULE_forStepExpression = 55;
	public static readonly RULE_forBlock = 56;
	public static readonly RULE_lostExpression = 57;
	public static readonly RULE_doStatement = 58;
	public static readonly RULE_exitOrLoopStatement = 59;
	public static readonly RULE_whileStatement = 60;
	public static readonly RULE_whileCondition = 61;
	public static readonly RULE_whileBlock = 62;
	public static readonly RULE_docaseStatement = 63;
	public static readonly RULE_caseCondition = 64;
	public static readonly RULE_caseBlock = 65;
	public static readonly RULE_otherWiseBlock = 66;
	public static readonly RULE_arrobaDefine = 67;
	public static readonly RULE_forInit = 68;
	public static readonly RULE_crlf = 69;
	public static readonly RULE_crlfEmpty = 70;
	public static readonly ruleNames: string[] = [
		"program", "linePreProcessor", "idMarker", "sources", "modifiersFunction", 
		"staticVariable", "classDeclaration", "dataDefinition", "fromClass", "methodDefinition", 
		"dataDescription", "dataType", "dataModifiers", "modifiersMethod", "wsDataType", 
		"qsDeclaration", "qsMethod", "funcDeclaration", "functionDefinition", 
		"superCall", "formalParameters", "formalParameter", "initFuncOrMethod", 
		"staticVariableBeforeLocal", "localVariableDeclarationStatement", "staticVariableDeclarationStatement", 
		"publicVariableDeclarationStatement", "privateVariableDeclarationStatement", 
		"arrayOrBlockInitializer", "blockParams", "block", "statement", "beginSequenceStatement", 
		"returnStatement", "returnvalues", "statementExpression", "expression", 
		"primary", "identifier", "arrayAccess", "methodAccessLoop", "arguments", 
		"expressionList", "optionalExpression", "expressionListComa", "literal", 
		"ifFunctioncall", "ifStatement", "ifCondition", "elseIfCondition", "elseIfBlock", 
		"elseBlock", "ifBlock", "forStatement", "forToExpression", "forStepExpression", 
		"forBlock", "lostExpression", "doStatement", "exitOrLoopStatement", "whileStatement", 
		"whileCondition", "whileBlock", "docaseStatement", "caseCondition", "caseBlock", 
		"otherWiseBlock", "arrobaDefine", "forInit", "crlf", "crlfEmpty"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'#LINE'", "':'", "'_OBJNEWCLASS'", "'_OBJENDCLASS'", "'_OBJCLASSDATA'", 
		"'_OBJCLASSMETHOD'", "'{'", "'}'", "'|'", "'!'", "'-='", "'*='", "'/='", 
		"'^'", "'ENDD'", "'ENDC'", "';'", "'<'", "'>'", "'='", "'<='", "'>='", 
		"'=='", "'!='", "'<>'", "'#'", "'$'", "'++'", "'--'", "'+='", "'+'", "'-'", 
		"'*'", "'/'", "'**'", "'%'", "'@'", "'&'", "'BEGIN'", "'TRANSACTION'", 
		"'SEQUENCE'", undefined, "'->'", "'STEP'", "'TO'", "'.T.'", "'.F.'", "'NIL'", 
		"'#DEFINE'", "'#UNDEF'", "'#IFDEF'", "'#IFNDEF'", "'#ELSE'", "'#ENDIF'", 
		"'FOR'", "'NEXT'", "'WHILE'", "'DO'", "'ELSEIF'", "'IF'", "'ELSE'", "'ENDI'", 
		"'ENDIF'", "'ENDIF.'", "'ENDDO'", "'ENDFOR'", "'END'", "'EXTENDED'", "'CASE'", 
		"'ENDCASE'", "'OTHERWISE'", "'EXIT'", "'LOOP'", "'LOCA'", "'LOCAL'", "'PRIVATE'", 
		"'PUBLIC'", "'STATIC'", "'USER'", "'WEB'", "'MAIN'", "'FUNCTION'", "'FUNCTIO'", 
		"'PROCEDURE'", "'SELF'", "'PROJECT'", "'TEMPLATE'", "'.AND.'", "'.OR.'", 
		"'.NOT.'", "'DEFAULT'", "'RETURN'", "'ASSUME'", "'CLASS'", "'ENDCLASS'", 
		"'METHOD'", "'DATA'", "'FROM'", "'HIDDEN'", "'READONLY'", "'DESCRIPTION'", 
		"'QSSTRUCT'", "'QSMETHOD'", "'MODULE'", "'INIT'", "'AS'", "'OF'", "'PRODUCES'", 
		"'OPTIONAL'", "'REQUEST'", "'QUERYPARAM'", "'WSREST'", "'CAMELCASE'", 
		"'PATHPARAM'", "'GET'", "'POST'", "'PUT'", "'DELETE'", "'BYREF'", "'DATASET'", 
		"'PROCESS'", "'TITLE'", "'PERGUNTE'", "'PATH'", "'('", "')'", "'['", "']'", 
		undefined, "','", "'.'", "':='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "MINOR", "MAJOR", "EQUALS", 
		"MINOREQUALS", "MAJOREQUALS", "DOUBLEEQUAL", "DIF1", "DIF2", "DIF3", "CONTIDO", 
		"PLUSPLUS", "MINUSMINUS", "PLUSEQUALS", "PLUS", "MINUS", "MULT", "DIV", 
		"POW", "PERC", "ARROBA", "ECOMERCIAL", "BEGIN", "TRANSACTION", "SEQUENCE", 
		"BEGIN_SQL", "ALIASACCESS", "STEP", "TO", "TRUE", "FALSE", "NIL", "DEFINE", 
		"UNDEFINE", "IFDEF", "IFNDEF", "ELSEDEF", "ENDIFDEF", "FOR", "NEXT", "WHILE", 
		"DO", "ELSEIF", "IF", "ELSE", "ENDI", "ENDIF", "ENDIF_DOT", "ENDDO", "ENDFOR", 
		"END", "EXTENDED", "CASE", "ENDCASE", "OTHERWISE", "EXIT", "LOOP", "LOCA", 
		"LOCAL", "PRIVATE", "PUBLIC", "STATIC", "USER", "WEB", "MAIN", "FUNCTION", 
		"FUNCTIO", "PROCEDURE", "SELF", "PROJECT", "TEMPLATE", "AND", "OR", "NOT", 
		"DEFAULT", "RETURN", "ASSUME", "CLASS", "ENDCLASS", "METHOD", "DATA", 
		"FROM", "C_HIDDEN", "READONLY", "DESCRIPTION", "QSSTRUCT", "QSMETHOD", 
		"MODULE", "INIT", "AS", "OF", "PRODUCES", "OPTIONAL", "REQUEST", "QUERYPARAM", 
		"WSREST", "CAMELCASE", "PATHPARAM", "GET", "POST", "PUT", "DELETE", "BYREF", 
		"DATASET", "PROCESS", "TITLE", "PERGUNTE", "PATH", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "INCLUDE", "COMMA", "DOT", "ATTRIB_OPERATOR", "NUMBER", 
		"IDENTIFIER", "COMMENT", "LINE_COMMENT", "LINE_COMMENT_EE", "STRING", 
		"STRINGSIMPLE", "CRLF", "WS", "ErrorChar"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AdvplParser._LITERAL_NAMES, AdvplParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return AdvplParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Advpl.g4"; }

	@Override
	public get ruleNames(): string[] { return AdvplParser.ruleNames; }

	@Override
	public get serializedATN(): string { return AdvplParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AdvplParser._ATN, this);
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AdvplParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__0) | (1 << AdvplParser.T__2) | (1 << AdvplParser.T__16))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (AdvplParser.STATIC - 78)) | (1 << (AdvplParser.MAIN - 78)) | (1 << (AdvplParser.FUNCTION - 78)) | (1 << (AdvplParser.PROCEDURE - 78)))) !== 0) || _la===AdvplParser.CRLF) {
				{
				{
				this.state = 142;
				this.sources();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.match(AdvplParser.EOF);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public linePreProcessor(): LinePreProcessorContext {
		let _localctx: LinePreProcessorContext = new LinePreProcessorContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AdvplParser.RULE_linePreProcessor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(AdvplParser.T__0);
			this.state = 152;
			this.match(AdvplParser.NUMBER);
			this.state = 153;
			this.match(AdvplParser.STRING);
			this.state = 154;
			this.match(AdvplParser.CRLF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public idMarker(): IdMarkerContext {
		let _localctx: IdMarkerContext = new IdMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AdvplParser.RULE_idMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(AdvplParser.MINOR);
			this.state = 157;
			this.identifier();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.T__1) {
				{
				this.state = 158;
				this.match(AdvplParser.T__1);
				this.state = 159;
				this.expressionList();
				}
			}

			this.state = 162;
			this.match(AdvplParser.MAJOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sources(): SourcesContext {
		let _localctx: SourcesContext = new SourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AdvplParser.RULE_sources);
		try {
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.linePreProcessor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.funcDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 167;
				this.staticVariable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 168;
				this.crlfEmpty();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modifiersFunction(): ModifiersFunctionContext {
		let _localctx: ModifiersFunctionContext = new ModifiersFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AdvplParser.RULE_modifiersFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.STATIC || _la===AdvplParser.MAIN) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public staticVariable(): StaticVariableContext {
		let _localctx: StaticVariableContext = new StaticVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AdvplParser.RULE_staticVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(AdvplParser.STATIC);
			this.state = 174;
			this.staticVariableDeclarationStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AdvplParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(AdvplParser.T__2);
			this.state = 177;
			this.match(AdvplParser.LPAREN);
			this.state = 178;
			this.identifier();
			this.state = 179;
			this.match(AdvplParser.COMMA);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AdvplParser.TRANSACTION - 40)) | (1 << (AdvplParser.SEQUENCE - 40)) | (1 << (AdvplParser.STEP - 40)) | (1 << (AdvplParser.TO - 40)) | (1 << (AdvplParser.END - 40)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (AdvplParser.LOCA - 74)) | (1 << (AdvplParser.LOCAL - 74)) | (1 << (AdvplParser.USER - 74)) | (1 << (AdvplParser.WEB - 74)) | (1 << (AdvplParser.MAIN - 74)) | (1 << (AdvplParser.SELF - 74)) | (1 << (AdvplParser.PROJECT - 74)) | (1 << (AdvplParser.TEMPLATE - 74)) | (1 << (AdvplParser.DEFAULT - 74)) | (1 << (AdvplParser.ASSUME - 74)) | (1 << (AdvplParser.CLASS - 74)) | (1 << (AdvplParser.DATA - 74)) | (1 << (AdvplParser.DESCRIPTION - 74)) | (1 << (AdvplParser.MODULE - 74)) | (1 << (AdvplParser.INIT - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.AS - 106)) | (1 << (AdvplParser.OF - 106)) | (1 << (AdvplParser.REQUEST - 106)) | (1 << (AdvplParser.GET - 106)) | (1 << (AdvplParser.POST - 106)) | (1 << (AdvplParser.PUT - 106)) | (1 << (AdvplParser.DELETE - 106)) | (1 << (AdvplParser.BYREF - 106)) | (1 << (AdvplParser.PROCESS - 106)) | (1 << (AdvplParser.TITLE - 106)) | (1 << (AdvplParser.PERGUNTE - 106)) | (1 << (AdvplParser.PATH - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)))) !== 0)) {
				{
				this.state = 180;
				this.fromClass();
				}
			}

			this.state = 183;
			this.match(AdvplParser.RPAREN);
			this.state = 184;
			this.crlf();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.T__4 || _la===AdvplParser.T__5) {
				{
				this.state = 187;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AdvplParser.T__4:
					{
					this.state = 185;
					this.dataDefinition();
					}
					break;
				case AdvplParser.T__5:
					{
					this.state = 186;
					this.methodDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.match(AdvplParser.T__3);
			this.state = 193;
			this.match(AdvplParser.LPAREN);
			this.state = 194;
			this.match(AdvplParser.RPAREN);
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.T__16:
			case AdvplParser.CRLF:
				{
				this.state = 195;
				this.crlf();
				}
				break;
			case AdvplParser.EOF:
				{
				this.state = 196;
				this.match(AdvplParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataDefinition(): DataDefinitionContext {
		let _localctx: DataDefinitionContext = new DataDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AdvplParser.RULE_dataDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(AdvplParser.T__4);
			this.state = 200;
			this.match(AdvplParser.LPAREN);
			this.state = 201;
			this.identifier();
			this.state = 202;
			this.match(AdvplParser.COMMA);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AdvplParser.TRANSACTION - 40)) | (1 << (AdvplParser.SEQUENCE - 40)) | (1 << (AdvplParser.STEP - 40)) | (1 << (AdvplParser.TO - 40)) | (1 << (AdvplParser.END - 40)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (AdvplParser.LOCA - 74)) | (1 << (AdvplParser.LOCAL - 74)) | (1 << (AdvplParser.USER - 74)) | (1 << (AdvplParser.WEB - 74)) | (1 << (AdvplParser.MAIN - 74)) | (1 << (AdvplParser.SELF - 74)) | (1 << (AdvplParser.PROJECT - 74)) | (1 << (AdvplParser.TEMPLATE - 74)) | (1 << (AdvplParser.DEFAULT - 74)) | (1 << (AdvplParser.ASSUME - 74)) | (1 << (AdvplParser.CLASS - 74)) | (1 << (AdvplParser.DATA - 74)) | (1 << (AdvplParser.DESCRIPTION - 74)) | (1 << (AdvplParser.MODULE - 74)) | (1 << (AdvplParser.INIT - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.AS - 106)) | (1 << (AdvplParser.OF - 106)) | (1 << (AdvplParser.REQUEST - 106)) | (1 << (AdvplParser.GET - 106)) | (1 << (AdvplParser.POST - 106)) | (1 << (AdvplParser.PUT - 106)) | (1 << (AdvplParser.DELETE - 106)) | (1 << (AdvplParser.BYREF - 106)) | (1 << (AdvplParser.PROCESS - 106)) | (1 << (AdvplParser.TITLE - 106)) | (1 << (AdvplParser.PERGUNTE - 106)) | (1 << (AdvplParser.PATH - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)))) !== 0)) {
				{
				this.state = 203;
				this.wsDataType();
				}
			}

			this.state = 206;
			this.match(AdvplParser.COMMA);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.C_HIDDEN || _la===AdvplParser.READONLY) {
				{
				this.state = 207;
				this.dataModifiers();
				}
			}

			this.state = 210;
			this.match(AdvplParser.COMMA);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__1) | (1 << AdvplParser.T__6) | (1 << AdvplParser.T__9) | (1 << AdvplParser.MINOR) | (1 << AdvplParser.PLUSPLUS) | (1 << AdvplParser.MINUSMINUS) | (1 << AdvplParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.MINUS - 32)) | (1 << (AdvplParser.PERC - 32)) | (1 << (AdvplParser.ARROBA - 32)) | (1 << (AdvplParser.ECOMERCIAL - 32)) | (1 << (AdvplParser.TRANSACTION - 32)) | (1 << (AdvplParser.SEQUENCE - 32)) | (1 << (AdvplParser.STEP - 32)) | (1 << (AdvplParser.TO - 32)) | (1 << (AdvplParser.TRUE - 32)) | (1 << (AdvplParser.FALSE - 32)) | (1 << (AdvplParser.NIL - 32)) | (1 << (AdvplParser.IF - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AdvplParser.END - 67)) | (1 << (AdvplParser.LOCA - 67)) | (1 << (AdvplParser.LOCAL - 67)) | (1 << (AdvplParser.USER - 67)) | (1 << (AdvplParser.WEB - 67)) | (1 << (AdvplParser.MAIN - 67)) | (1 << (AdvplParser.SELF - 67)) | (1 << (AdvplParser.PROJECT - 67)) | (1 << (AdvplParser.TEMPLATE - 67)) | (1 << (AdvplParser.NOT - 67)) | (1 << (AdvplParser.DEFAULT - 67)) | (1 << (AdvplParser.ASSUME - 67)) | (1 << (AdvplParser.CLASS - 67)) | (1 << (AdvplParser.DATA - 67)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (AdvplParser.DESCRIPTION - 101)) | (1 << (AdvplParser.MODULE - 101)) | (1 << (AdvplParser.INIT - 101)) | (1 << (AdvplParser.AS - 101)) | (1 << (AdvplParser.OF - 101)) | (1 << (AdvplParser.REQUEST - 101)) | (1 << (AdvplParser.GET - 101)) | (1 << (AdvplParser.POST - 101)) | (1 << (AdvplParser.PUT - 101)) | (1 << (AdvplParser.DELETE - 101)) | (1 << (AdvplParser.BYREF - 101)) | (1 << (AdvplParser.PROCESS - 101)) | (1 << (AdvplParser.TITLE - 101)) | (1 << (AdvplParser.PERGUNTE - 101)) | (1 << (AdvplParser.PATH - 101)) | (1 << (AdvplParser.LPAREN - 101)) | (1 << (AdvplParser.LBRACK - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (AdvplParser.NUMBER - 133)) | (1 << (AdvplParser.IDENTIFIER - 133)) | (1 << (AdvplParser.STRING - 133)) | (1 << (AdvplParser.STRINGSIMPLE - 133)))) !== 0)) {
				{
				this.state = 211;
				this.dataDescription();
				}
			}

			this.state = 214;
			this.match(AdvplParser.RPAREN);
			this.state = 215;
			this.crlf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fromClass(): FromClassContext {
		let _localctx: FromClassContext = new FromClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AdvplParser.RULE_fromClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AdvplParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(AdvplParser.T__5);
			this.state = 220;
			this.match(AdvplParser.LPAREN);
			this.state = 221;
			this.identifier();
			this.state = 222;
			this.match(AdvplParser.COMMA);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LPAREN) {
				{
				this.state = 223;
				this.arguments();
				}
			}

			this.state = 226;
			this.match(AdvplParser.COMMA);
			this.state = 227;
			this.match(AdvplParser.RPAREN);
			this.state = 228;
			this.crlf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataDescription(): DataDescriptionContext {
		let _localctx: DataDescriptionContext = new DataDescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AdvplParser.RULE_dataDescription);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AdvplParser.RULE_dataType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataModifiers(): DataModifiersContext {
		let _localctx: DataModifiersContext = new DataModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AdvplParser.RULE_dataModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.C_HIDDEN || _la===AdvplParser.READONLY) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modifiersMethod(): ModifiersMethodContext {
		let _localctx: ModifiersMethodContext = new ModifiersMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AdvplParser.RULE_modifiersMethod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(AdvplParser.STATIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public wsDataType(): WsDataTypeContext {
		let _localctx: WsDataTypeContext = new WsDataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AdvplParser.RULE_wsDataType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.identifier();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.OF) {
				{
				this.state = 239;
				this.match(AdvplParser.OF);
				this.state = 240;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qsDeclaration(): QsDeclarationContext {
		let _localctx: QsDeclarationContext = new QsDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AdvplParser.RULE_qsDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(AdvplParser.QSSTRUCT);
			this.state = 244;
			this.identifier();
			this.state = 245;
			this.match(AdvplParser.DESCRIPTION);
			this.state = 246;
			this.expression(0);
			this.state = 247;
			this.match(AdvplParser.MODULE);
			this.state = 248;
			this.expression(0);
			this.state = 249;
			this.crlf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qsMethod(): QsMethodContext {
		let _localctx: QsMethodContext = new QsMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AdvplParser.RULE_qsMethod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(AdvplParser.QSMETHOD);
			this.state = 252;
			this.match(AdvplParser.INIT);
			this.state = 253;
			this.match(AdvplParser.QSSTRUCT);
			this.state = 254;
			this.identifier();
			this.state = 255;
			this.crlf();
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.initFuncOrMethod();
				}
				break;
			}
			this.state = 259;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public funcDeclaration(): FuncDeclarationContext {
		let _localctx: FuncDeclarationContext = new FuncDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AdvplParser.RULE_funcDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.functionDefinition();
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				{
				this.state = 262;
				this.superCall();
				}
				break;
			}
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				{
				this.state = 265;
				this.initFuncOrMethod();
				}
				break;
			}
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.EOF:
				{
				this.state = 268;
				this.match(AdvplParser.EOF);
				}
				break;
			case AdvplParser.T__1:
			case AdvplParser.T__6:
			case AdvplParser.T__9:
			case AdvplParser.T__16:
			case AdvplParser.MINOR:
			case AdvplParser.PLUSPLUS:
			case AdvplParser.MINUSMINUS:
			case AdvplParser.PLUS:
			case AdvplParser.MINUS:
			case AdvplParser.PERC:
			case AdvplParser.ARROBA:
			case AdvplParser.ECOMERCIAL:
			case AdvplParser.BEGIN:
			case AdvplParser.TRANSACTION:
			case AdvplParser.SEQUENCE:
			case AdvplParser.STEP:
			case AdvplParser.TO:
			case AdvplParser.TRUE:
			case AdvplParser.FALSE:
			case AdvplParser.NIL:
			case AdvplParser.FOR:
			case AdvplParser.WHILE:
			case AdvplParser.DO:
			case AdvplParser.IF:
			case AdvplParser.END:
			case AdvplParser.CASE:
			case AdvplParser.EXIT:
			case AdvplParser.LOOP:
			case AdvplParser.LOCA:
			case AdvplParser.LOCAL:
			case AdvplParser.PRIVATE:
			case AdvplParser.PUBLIC:
			case AdvplParser.STATIC:
			case AdvplParser.USER:
			case AdvplParser.WEB:
			case AdvplParser.MAIN:
			case AdvplParser.SELF:
			case AdvplParser.PROJECT:
			case AdvplParser.TEMPLATE:
			case AdvplParser.NOT:
			case AdvplParser.DEFAULT:
			case AdvplParser.RETURN:
			case AdvplParser.ASSUME:
			case AdvplParser.CLASS:
			case AdvplParser.DATA:
			case AdvplParser.DESCRIPTION:
			case AdvplParser.MODULE:
			case AdvplParser.INIT:
			case AdvplParser.AS:
			case AdvplParser.OF:
			case AdvplParser.REQUEST:
			case AdvplParser.GET:
			case AdvplParser.POST:
			case AdvplParser.PUT:
			case AdvplParser.DELETE:
			case AdvplParser.BYREF:
			case AdvplParser.PROCESS:
			case AdvplParser.TITLE:
			case AdvplParser.PERGUNTE:
			case AdvplParser.PATH:
			case AdvplParser.LPAREN:
			case AdvplParser.LBRACK:
			case AdvplParser.NUMBER:
			case AdvplParser.IDENTIFIER:
			case AdvplParser.STRING:
			case AdvplParser.STRINGSIMPLE:
			case AdvplParser.CRLF:
				{
				this.state = 269;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AdvplParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.STATIC || _la===AdvplParser.MAIN) {
				{
				this.state = 272;
				this.modifiersFunction();
				}
			}

			this.state = 275;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.FUNCTION || _la===AdvplParser.PROCEDURE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 276;
			this.identifier();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LPAREN) {
				{
				this.state = 277;
				this.match(AdvplParser.LPAREN);
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AdvplParser.TRANSACTION - 40)) | (1 << (AdvplParser.SEQUENCE - 40)) | (1 << (AdvplParser.STEP - 40)) | (1 << (AdvplParser.TO - 40)) | (1 << (AdvplParser.END - 40)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (AdvplParser.LOCA - 74)) | (1 << (AdvplParser.LOCAL - 74)) | (1 << (AdvplParser.USER - 74)) | (1 << (AdvplParser.WEB - 74)) | (1 << (AdvplParser.MAIN - 74)) | (1 << (AdvplParser.SELF - 74)) | (1 << (AdvplParser.PROJECT - 74)) | (1 << (AdvplParser.TEMPLATE - 74)) | (1 << (AdvplParser.DEFAULT - 74)) | (1 << (AdvplParser.ASSUME - 74)) | (1 << (AdvplParser.CLASS - 74)) | (1 << (AdvplParser.DATA - 74)) | (1 << (AdvplParser.DESCRIPTION - 74)) | (1 << (AdvplParser.MODULE - 74)) | (1 << (AdvplParser.INIT - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.AS - 106)) | (1 << (AdvplParser.OF - 106)) | (1 << (AdvplParser.REQUEST - 106)) | (1 << (AdvplParser.GET - 106)) | (1 << (AdvplParser.POST - 106)) | (1 << (AdvplParser.PUT - 106)) | (1 << (AdvplParser.DELETE - 106)) | (1 << (AdvplParser.BYREF - 106)) | (1 << (AdvplParser.PROCESS - 106)) | (1 << (AdvplParser.TITLE - 106)) | (1 << (AdvplParser.PERGUNTE - 106)) | (1 << (AdvplParser.PATH - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)))) !== 0)) {
					{
					this.state = 278;
					this.formalParameters();
					}
				}

				this.state = 281;
				this.match(AdvplParser.RPAREN);
				}
			}

			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 284;
				this.match(AdvplParser.AS);
				this.state = 285;
				this.dataType();
				}
			}

			this.state = 290;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.T__16:
			case AdvplParser.CRLF:
				{
				this.state = 288;
				this.crlf();
				}
				break;
			case AdvplParser.EOF:
				{
				this.state = 289;
				this.match(AdvplParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superCall(): SuperCallContext {
		let _localctx: SuperCallContext = new SuperCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AdvplParser.RULE_superCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.match(AdvplParser.T__1);
			this.state = 293;
			this.identifier();
			{
			this.state = 294;
			this.match(AdvplParser.LPAREN);
			this.state = 295;
			this.expressionList();
			this.state = 296;
			this.match(AdvplParser.RPAREN);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AdvplParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
			case 1:
				{
				this.state = 298;
				this.match(AdvplParser.BYREF);
				}
				break;
			}
			this.state = 301;
			this.formalParameter();
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 302;
				this.match(AdvplParser.COMMA);
				this.state = 304;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
				case 1:
					{
					this.state = 303;
					this.match(AdvplParser.BYREF);
					}
					break;
				}
				this.state = 306;
				this.formalParameter();
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AdvplParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.identifier();
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 313;
				this.match(AdvplParser.AS);
				this.state = 314;
				this.wsDataType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initFuncOrMethod(): InitFuncOrMethodContext {
		let _localctx: InitFuncOrMethodContext = new InitFuncOrMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AdvplParser.RULE_initFuncOrMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 326;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AdvplParser.LOCA:
					case AdvplParser.LOCAL:
						{
						{
						this.state = 317;
						_la = this._input.LA(1);
						if ( !(_la===AdvplParser.LOCA || _la===AdvplParser.LOCAL) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 318;
						this.localVariableDeclarationStatement();
						this.state = 319;
						this.crlf();
						}
						}
						break;
					case AdvplParser.STATIC:
						{
						{
						this.state = 321;
						this.staticVariableBeforeLocal();
						this.state = 322;
						this.crlf();
						}
						}
						break;
					case AdvplParser.T__16:
					case AdvplParser.CRLF:
						{
						this.state = 324;
						this.crlfEmpty();
						}
						break;
					case AdvplParser.T__0:
						{
						this.state = 325;
						this.linePreProcessor();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 328; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public staticVariableBeforeLocal(): StaticVariableBeforeLocalContext {
		let _localctx: StaticVariableBeforeLocalContext = new StaticVariableBeforeLocalContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AdvplParser.RULE_staticVariableBeforeLocal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.staticVariable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AdvplParser.RULE_localVariableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.expression(0);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 333;
				this.match(AdvplParser.AS);
				this.state = 334;
				this.wsDataType();
				}
			}

			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 337;
				this.match(AdvplParser.COMMA);
				this.state = 338;
				this.expression(0);
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AS) {
					{
					this.state = 339;
					this.match(AdvplParser.AS);
					this.state = 340;
					this.wsDataType();
					}
				}

				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public staticVariableDeclarationStatement(): StaticVariableDeclarationStatementContext {
		let _localctx: StaticVariableDeclarationStatementContext = new StaticVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AdvplParser.RULE_staticVariableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.expression(0);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 349;
				this.match(AdvplParser.AS);
				this.state = 350;
				this.wsDataType();
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 353;
				this.match(AdvplParser.COMMA);
				this.state = 354;
				this.expression(0);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AS) {
					{
					this.state = 355;
					this.match(AdvplParser.AS);
					this.state = 356;
					this.wsDataType();
					}
				}

				}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public publicVariableDeclarationStatement(): PublicVariableDeclarationStatementContext {
		let _localctx: PublicVariableDeclarationStatementContext = new PublicVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AdvplParser.RULE_publicVariableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(AdvplParser.PUBLIC);
			this.state = 365;
			this.expression(0);
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 366;
				this.match(AdvplParser.COMMA);
				this.state = 367;
				this.expression(0);
				}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public privateVariableDeclarationStatement(): PrivateVariableDeclarationStatementContext {
		let _localctx: PrivateVariableDeclarationStatementContext = new PrivateVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AdvplParser.RULE_privateVariableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(AdvplParser.PRIVATE);
			this.state = 374;
			this.expression(0);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 375;
				this.match(AdvplParser.AS);
				this.state = 376;
				this.wsDataType();
				}
			}

			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 379;
				this.match(AdvplParser.COMMA);
				this.state = 380;
				this.expression(0);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AS) {
					{
					this.state = 381;
					this.match(AdvplParser.AS);
					this.state = 382;
					this.wsDataType();
					}
				}

				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayOrBlockInitializer(): ArrayOrBlockInitializerContext {
		let _localctx: ArrayOrBlockInitializerContext = new ArrayOrBlockInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AdvplParser.RULE_arrayOrBlockInitializer);
		let _la: number;
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,41,this._ctx) ) {
			case 1:
				_localctx = new ArrayInitializerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 390;
				this.match(AdvplParser.T__6);
				this.state = 391;
				this.expressionList();
				this.state = 392;
				this.match(AdvplParser.T__7);
				this.state = 394;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
				case 1:
					{
					this.state = 393;
					this.arrayAccess();
					}
					break;
				}
				}
				}
				break;

			case 2:
				_localctx = new BlockInitializerContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 396;
				this.match(AdvplParser.T__6);
				this.state = 397;
				this.match(AdvplParser.T__8);
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AdvplParser.TRANSACTION - 40)) | (1 << (AdvplParser.SEQUENCE - 40)) | (1 << (AdvplParser.STEP - 40)) | (1 << (AdvplParser.TO - 40)) | (1 << (AdvplParser.END - 40)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (AdvplParser.LOCA - 74)) | (1 << (AdvplParser.LOCAL - 74)) | (1 << (AdvplParser.USER - 74)) | (1 << (AdvplParser.WEB - 74)) | (1 << (AdvplParser.MAIN - 74)) | (1 << (AdvplParser.SELF - 74)) | (1 << (AdvplParser.PROJECT - 74)) | (1 << (AdvplParser.TEMPLATE - 74)) | (1 << (AdvplParser.DEFAULT - 74)) | (1 << (AdvplParser.ASSUME - 74)) | (1 << (AdvplParser.CLASS - 74)) | (1 << (AdvplParser.DATA - 74)) | (1 << (AdvplParser.DESCRIPTION - 74)) | (1 << (AdvplParser.MODULE - 74)) | (1 << (AdvplParser.INIT - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.AS - 106)) | (1 << (AdvplParser.OF - 106)) | (1 << (AdvplParser.REQUEST - 106)) | (1 << (AdvplParser.GET - 106)) | (1 << (AdvplParser.POST - 106)) | (1 << (AdvplParser.PUT - 106)) | (1 << (AdvplParser.DELETE - 106)) | (1 << (AdvplParser.BYREF - 106)) | (1 << (AdvplParser.PROCESS - 106)) | (1 << (AdvplParser.TITLE - 106)) | (1 << (AdvplParser.PERGUNTE - 106)) | (1 << (AdvplParser.PATH - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)))) !== 0)) {
					{
					this.state = 398;
					this.blockParams();
					}
				}

				this.state = 401;
				this.match(AdvplParser.T__8);
				this.state = 402;
				this.expressionList();
				this.state = 403;
				this.match(AdvplParser.T__7);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.arrayAccess();
					}
					break;
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public blockParams(): BlockParamsContext {
		let _localctx: BlockParamsContext = new BlockParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AdvplParser.RULE_blockParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.identifier();
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 410;
				this.match(AdvplParser.COMMA);
				this.state = 411;
				this.identifier();
				}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AdvplParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 423;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AdvplParser.T__1:
					case AdvplParser.T__6:
					case AdvplParser.T__9:
					case AdvplParser.MINOR:
					case AdvplParser.PLUSPLUS:
					case AdvplParser.MINUSMINUS:
					case AdvplParser.PLUS:
					case AdvplParser.MINUS:
					case AdvplParser.PERC:
					case AdvplParser.ARROBA:
					case AdvplParser.ECOMERCIAL:
					case AdvplParser.BEGIN:
					case AdvplParser.TRANSACTION:
					case AdvplParser.SEQUENCE:
					case AdvplParser.STEP:
					case AdvplParser.TO:
					case AdvplParser.TRUE:
					case AdvplParser.FALSE:
					case AdvplParser.NIL:
					case AdvplParser.FOR:
					case AdvplParser.WHILE:
					case AdvplParser.DO:
					case AdvplParser.IF:
					case AdvplParser.END:
					case AdvplParser.CASE:
					case AdvplParser.EXIT:
					case AdvplParser.LOOP:
					case AdvplParser.LOCA:
					case AdvplParser.LOCAL:
					case AdvplParser.PRIVATE:
					case AdvplParser.PUBLIC:
					case AdvplParser.STATIC:
					case AdvplParser.USER:
					case AdvplParser.WEB:
					case AdvplParser.MAIN:
					case AdvplParser.SELF:
					case AdvplParser.PROJECT:
					case AdvplParser.TEMPLATE:
					case AdvplParser.NOT:
					case AdvplParser.DEFAULT:
					case AdvplParser.RETURN:
					case AdvplParser.ASSUME:
					case AdvplParser.CLASS:
					case AdvplParser.DATA:
					case AdvplParser.DESCRIPTION:
					case AdvplParser.MODULE:
					case AdvplParser.INIT:
					case AdvplParser.AS:
					case AdvplParser.OF:
					case AdvplParser.REQUEST:
					case AdvplParser.GET:
					case AdvplParser.POST:
					case AdvplParser.PUT:
					case AdvplParser.DELETE:
					case AdvplParser.BYREF:
					case AdvplParser.PROCESS:
					case AdvplParser.TITLE:
					case AdvplParser.PERGUNTE:
					case AdvplParser.PATH:
					case AdvplParser.LPAREN:
					case AdvplParser.LBRACK:
					case AdvplParser.NUMBER:
					case AdvplParser.IDENTIFIER:
					case AdvplParser.STRING:
					case AdvplParser.STRINGSIMPLE:
						{
						this.state = 417;
						this.statement();
						this.state = 420;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.T__16:
						case AdvplParser.CRLF:
							{
							this.state = 418;
							this.crlf();
							}
							break;
						case AdvplParser.EOF:
							{
							this.state = 419;
							this.match(AdvplParser.EOF);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case AdvplParser.T__16:
					case AdvplParser.CRLF:
						{
						this.state = 422;
						this.crlfEmpty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 425; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,45,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AdvplParser.RULE_statement);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.statementExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 430;
				this.doStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 431;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 432;
				this.docaseStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 433;
				this.returnStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 434;
				this.privateVariableDeclarationStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 435;
				this.exitOrLoopStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 436;
				this.publicVariableDeclarationStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 437;
				this.staticVariable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 438;
				this.beginSequenceStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beginSequenceStatement(): BeginSequenceStatementContext {
		let _localctx: BeginSequenceStatementContext = new BeginSequenceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AdvplParser.RULE_beginSequenceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(AdvplParser.BEGIN);
			this.state = 442;
			this.match(AdvplParser.SEQUENCE);
			this.state = 443;
			this.match(AdvplParser.CRLF);
			this.state = 444;
			this.block();
			this.state = 445;
			this.match(AdvplParser.END);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.SEQUENCE) {
				{
				this.state = 446;
				this.match(AdvplParser.SEQUENCE);
				}
			}

			this.state = 450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.crlf();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AdvplParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.match(AdvplParser.RETURN);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__1) | (1 << AdvplParser.T__6) | (1 << AdvplParser.T__9) | (1 << AdvplParser.MINOR) | (1 << AdvplParser.PLUSPLUS) | (1 << AdvplParser.MINUSMINUS) | (1 << AdvplParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.MINUS - 32)) | (1 << (AdvplParser.PERC - 32)) | (1 << (AdvplParser.ARROBA - 32)) | (1 << (AdvplParser.ECOMERCIAL - 32)) | (1 << (AdvplParser.TRANSACTION - 32)) | (1 << (AdvplParser.SEQUENCE - 32)) | (1 << (AdvplParser.STEP - 32)) | (1 << (AdvplParser.TO - 32)) | (1 << (AdvplParser.TRUE - 32)) | (1 << (AdvplParser.FALSE - 32)) | (1 << (AdvplParser.NIL - 32)) | (1 << (AdvplParser.IF - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AdvplParser.END - 67)) | (1 << (AdvplParser.LOCA - 67)) | (1 << (AdvplParser.LOCAL - 67)) | (1 << (AdvplParser.USER - 67)) | (1 << (AdvplParser.WEB - 67)) | (1 << (AdvplParser.MAIN - 67)) | (1 << (AdvplParser.SELF - 67)) | (1 << (AdvplParser.PROJECT - 67)) | (1 << (AdvplParser.TEMPLATE - 67)) | (1 << (AdvplParser.NOT - 67)) | (1 << (AdvplParser.DEFAULT - 67)) | (1 << (AdvplParser.ASSUME - 67)) | (1 << (AdvplParser.CLASS - 67)) | (1 << (AdvplParser.DATA - 67)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (AdvplParser.DESCRIPTION - 101)) | (1 << (AdvplParser.MODULE - 101)) | (1 << (AdvplParser.INIT - 101)) | (1 << (AdvplParser.AS - 101)) | (1 << (AdvplParser.OF - 101)) | (1 << (AdvplParser.REQUEST - 101)) | (1 << (AdvplParser.GET - 101)) | (1 << (AdvplParser.POST - 101)) | (1 << (AdvplParser.PUT - 101)) | (1 << (AdvplParser.DELETE - 101)) | (1 << (AdvplParser.BYREF - 101)) | (1 << (AdvplParser.PROCESS - 101)) | (1 << (AdvplParser.TITLE - 101)) | (1 << (AdvplParser.PERGUNTE - 101)) | (1 << (AdvplParser.PATH - 101)) | (1 << (AdvplParser.LPAREN - 101)) | (1 << (AdvplParser.LBRACK - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (AdvplParser.NUMBER - 133)) | (1 << (AdvplParser.IDENTIFIER - 133)) | (1 << (AdvplParser.STRING - 133)) | (1 << (AdvplParser.STRINGSIMPLE - 133)))) !== 0)) {
				{
				this.state = 453;
				this.returnvalues();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnvalues(): ReturnvaluesContext {
		let _localctx: ReturnvaluesContext = new ReturnvaluesContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AdvplParser.RULE_returnvalues);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AdvplParser.RULE_statementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, AdvplParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				{
				_localctx = new ExprPrimaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 461;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new ExprPrimaryBadFormedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 462;
				this.primary();
				this.state = 463;
				this.match(AdvplParser.ECOMERCIAL);
				this.state = 464;
				this.expression(11);
				}
				break;

			case 3:
				{
				_localctx = new ExprIncrPreContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 470;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AdvplParser.PLUS:
					{
					this.state = 466;
					(_localctx as ExprIncrPreContext)._op = this.match(AdvplParser.PLUS);
					}
					break;
				case AdvplParser.MINUS:
					{
					this.state = 467;
					(_localctx as ExprIncrPreContext)._op = this.match(AdvplParser.MINUS);
					}
					break;
				case AdvplParser.PLUSPLUS:
					{
					this.state = 468;
					(_localctx as ExprIncrPreContext)._op = this.match(AdvplParser.PLUSPLUS);
					}
					break;
				case AdvplParser.MINUSMINUS:
					{
					this.state = 469;
					(_localctx as ExprIncrPreContext)._op = this.match(AdvplParser.MINUSMINUS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 472;
				this.expression(8);
				}
				break;

			case 4:
				{
				_localctx = new ExprNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 473;
				_la = this._input.LA(1);
				if ( !(_la===AdvplParser.T__9 || _la===AdvplParser.NOT) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 474;
				this.expression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 524;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 522;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
					case 1:
						{
						_localctx = new AliasAssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 477;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 478;
						this.match(AdvplParser.ALIASACCESS);
						this.state = 479;
						this.expression(10);
						}
						break;

					case 2:
						{
						_localctx = new ExprMulContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 480;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 485;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.MULT:
							{
							this.state = 481;
							(_localctx as ExprMulContext)._op = this.match(AdvplParser.MULT);
							}
							break;
						case AdvplParser.DIV:
							{
							this.state = 482;
							(_localctx as ExprMulContext)._op = this.match(AdvplParser.DIV);
							}
							break;
						case AdvplParser.PERC:
							{
							this.state = 483;
							(_localctx as ExprMulContext)._op = this.match(AdvplParser.PERC);
							}
							break;
						case AdvplParser.POW:
							{
							this.state = 484;
							(_localctx as ExprMulContext)._op = this.match(AdvplParser.POW);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 487;
						this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new ExprPlusContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 488;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 491;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.PLUS:
							{
							this.state = 489;
							(_localctx as ExprPlusContext)._op = this.match(AdvplParser.PLUS);
							}
							break;
						case AdvplParser.MINUS:
							{
							this.state = 490;
							(_localctx as ExprPlusContext)._op = this.match(AdvplParser.MINUS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 493;
						this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new ExprLogicalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 494;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 495;
						(_localctx as ExprLogicalContext)._op = this.match(AdvplParser.AND);
						this.state = 496;
						this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new ExprLogicalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 497;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 498;
						(_localctx as ExprLogicalContext)._op = this.match(AdvplParser.OR);
						this.state = 499;
						this.expression(4);
						}
						break;

					case 6:
						{
						_localctx = new ExprCompContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 500;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 511;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.MINOREQUALS:
							{
							this.state = 501;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.MINOREQUALS);
							}
							break;
						case AdvplParser.MAJOREQUALS:
							{
							this.state = 502;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.MAJOREQUALS);
							}
							break;
						case AdvplParser.MINOR:
							{
							this.state = 503;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.MINOR);
							}
							break;
						case AdvplParser.MAJOR:
							{
							this.state = 504;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.MAJOR);
							}
							break;
						case AdvplParser.EQUALS:
							{
							this.state = 505;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.EQUALS);
							}
							break;
						case AdvplParser.DOUBLEEQUAL:
							{
							this.state = 506;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.DOUBLEEQUAL);
							}
							break;
						case AdvplParser.DIF1:
							{
							this.state = 507;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.DIF1);
							}
							break;
						case AdvplParser.DIF2:
							{
							this.state = 508;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.DIF2);
							}
							break;
						case AdvplParser.DIF3:
							{
							this.state = 509;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.DIF3);
							}
							break;
						case AdvplParser.CONTIDO:
							{
							this.state = 510;
							(_localctx as ExprCompContext)._op = this.match(AdvplParser.CONTIDO);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 513;
						this.expression(3);
						}
						break;

					case 7:
						{
						_localctx = new AssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 514;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 515;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__10) | (1 << AdvplParser.T__11) | (1 << AdvplParser.T__12) | (1 << AdvplParser.T__13) | (1 << AdvplParser.PLUSEQUALS))) !== 0) || _la===AdvplParser.ATTRIB_OPERATOR) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 516;
						this.expression(2);
						}
						break;

					case 8:
						{
						_localctx = new ExprIncrPosContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 517;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 520;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.PLUSPLUS:
							{
							this.state = 518;
							(_localctx as ExprIncrPosContext)._op = this.match(AdvplParser.PLUSPLUS);
							}
							break;
						case AdvplParser.MINUSMINUS:
							{
							this.state = 519;
							(_localctx as ExprIncrPosContext)._op = this.match(AdvplParser.MINUSMINUS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					}
					} 
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AdvplParser.RULE_primary);
		let _la: number;
		try {
			let _alt: number;
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				_localctx = new ParensContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 527;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 530;
				this.match(AdvplParser.LPAREN);
				this.state = 531;
				this.expressionList();
				this.state = 532;
				this.match(AdvplParser.RPAREN);
				this.state = 534;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
				case 1:
					{
					this.state = 533;
					this.arrayAccess();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new VarArrayAccessContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 536;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 539;
				this.identifier();
				this.state = 540;
				this.arrayAccess();
				}
				break;

			case 3:
				_localctx = new CallContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 542;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 545;
				this.identifier();
				this.state = 546;
				this.arguments();
				{
				this.state = 548;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
				case 1:
					{
					this.state = 547;
					this.arrayAccess();
					}
					break;
				}
				}
				}
				break;

			case 4:
				_localctx = new ClassConstructorContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 550;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 553;
				this.identifier();
				this.state = 554;
				this.match(AdvplParser.LPAREN);
				this.state = 555;
				this.match(AdvplParser.RPAREN);
				this.state = 556;
				this.match(AdvplParser.T__1);
				this.state = 557;
				this.identifier();
				this.state = 558;
				this.arguments();
				}
				break;

			case 5:
				_localctx = new CallWithAttContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 560;
				this.identifier();
				this.state = 561;
				this.arguments();
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,64,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 562;
						this.methodAccessLoop();
						}
						} 
					}
					this.state = 567;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,64,this._ctx);
				}
				}
				break;

			case 6:
				_localctx = new ObjectAttribAccessContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 568;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 571;
				this.identifier();
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.LBRACK) {
					{
					this.state = 572;
					this.arrayAccess();
					}
				}

				this.state = 580; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 575;
						this.match(AdvplParser.T__1);
						this.state = 576;
						this.identifier();
						this.state = 578;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
						case 1:
							{
							this.state = 577;
							this.arrayAccess();
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 582; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,68,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 7:
				_localctx = new ObjectMethodAccessContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 584;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 587;
				this.identifier();
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AdvplParser.LBRACK) {
					{
					{
					this.state = 588;
					this.arrayAccess();
					}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 595; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 594;
						this.methodAccessLoop();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 597; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 8:
				_localctx = new VarContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 599;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 602;
				this.identifier();
				}
				break;

			case 9:
				_localctx = new AssumeContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 603;
				this.match(AdvplParser.ARROBA);
				this.state = 604;
				this.match(AdvplParser.ASSUME);
				this.state = 605;
				this.identifier();
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AdvplParser.T__1) {
					{
					{
					this.state = 606;
					this.match(AdvplParser.T__1);
					this.state = 607;
					this.identifier();
					}
					}
					this.state = 612;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 613;
				this.match(AdvplParser.AS);
				this.state = 614;
				this.identifier();
				}
				break;

			case 10:
				_localctx = new LitContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 617;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
				case 1:
					{
					this.state = 616;
					this.match(AdvplParser.ARROBA);
					}
					break;
				}
				this.state = 619;
				this.literal();
				}
				break;

			case 11:
				_localctx = new ArrayOrBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 620;
				this.arrayOrBlockInitializer();
				}
				break;

			case 12:
				_localctx = new IfCallContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 621;
				this.ifFunctioncall();
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,76,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 624;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.T__1:
							{
							this.state = 622;
							this.methodAccessLoop();
							}
							break;
						case AdvplParser.LBRACK:
							{
							this.state = 623;
							this.arrayAccess();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					this.state = 628;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,76,this._ctx);
				}
				}
				break;

			case 13:
				_localctx = new MacroExecucaoContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 629;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 632;
				this.match(AdvplParser.ECOMERCIAL);
				this.state = 633;
				this.expression(0);
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,80,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 642;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.LBRACK:
							{
							this.state = 634;
							this.arrayAccess();
							}
							break;
						case AdvplParser.DOT:
							{
							{
							this.state = 635;
							this.match(AdvplParser.DOT);
							this.state = 638;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
							case 1:
								{
								this.state = 636;
								this.arguments();
								}
								break;

							case 2:
								{
								this.state = 637;
								this.expression(0);
								}
								break;
							}
							}
							}
							break;
						case AdvplParser.T__1:
							{
							this.state = 640;
							this.methodAccessLoop();
							}
							break;
						case AdvplParser.LPAREN:
							{
							this.state = 641;
							this.arguments();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					this.state = 646;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,80,this._ctx);
				}
				}
				break;

			case 14:
				_localctx = new MacroExecucaoIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.ARROBA) {
					{
					this.state = 647;
					this.match(AdvplParser.ARROBA);
					}
				}

				this.state = 650;
				this.identifier();
				this.state = 651;
				this.match(AdvplParser.ECOMERCIAL);
				this.state = 652;
				this.expression(0);
				this.state = 658;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,83,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 656;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.LBRACK:
							{
							this.state = 653;
							this.arrayAccess();
							}
							break;
						case AdvplParser.DOT:
							{
							this.state = 654;
							this.match(AdvplParser.DOT);
							}
							break;
						case AdvplParser.T__1:
							{
							this.state = 655;
							this.methodAccessLoop();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					this.state = 660;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,83,this._ctx);
				}
				}
				break;

			case 15:
				_localctx = new ExpressionListInConcheteContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 661;
				this.match(AdvplParser.LBRACK);
				this.state = 665;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
				case 1:
					{
					this.state = 662;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 663;
					this.match(AdvplParser.EQUALS);
					}
					break;

				case 3:
					{
					this.state = 664;
					this.match(AdvplParser.MINUS);
					}
					break;
				}
				this.state = 667;
				this.match(AdvplParser.RBRACK);
				}
				break;

			case 16:
				_localctx = new EmbbedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 668;
				this.match(AdvplParser.PERC);
				this.state = 669;
				this.expression(0);
				this.state = 670;
				this.match(AdvplParser.T__1);
				this.state = 671;
				this.expression(0);
				this.state = 672;
				this.match(AdvplParser.PERC);
				}
				break;

			case 17:
				_localctx = new XCommandExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 674;
				this.idMarker();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AdvplParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AdvplParser.TRANSACTION - 40)) | (1 << (AdvplParser.SEQUENCE - 40)) | (1 << (AdvplParser.STEP - 40)) | (1 << (AdvplParser.TO - 40)) | (1 << (AdvplParser.END - 40)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (AdvplParser.LOCA - 74)) | (1 << (AdvplParser.LOCAL - 74)) | (1 << (AdvplParser.USER - 74)) | (1 << (AdvplParser.WEB - 74)) | (1 << (AdvplParser.MAIN - 74)) | (1 << (AdvplParser.SELF - 74)) | (1 << (AdvplParser.PROJECT - 74)) | (1 << (AdvplParser.TEMPLATE - 74)) | (1 << (AdvplParser.DEFAULT - 74)) | (1 << (AdvplParser.ASSUME - 74)) | (1 << (AdvplParser.CLASS - 74)) | (1 << (AdvplParser.DATA - 74)) | (1 << (AdvplParser.DESCRIPTION - 74)) | (1 << (AdvplParser.MODULE - 74)) | (1 << (AdvplParser.INIT - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.AS - 106)) | (1 << (AdvplParser.OF - 106)) | (1 << (AdvplParser.REQUEST - 106)) | (1 << (AdvplParser.GET - 106)) | (1 << (AdvplParser.POST - 106)) | (1 << (AdvplParser.PUT - 106)) | (1 << (AdvplParser.DELETE - 106)) | (1 << (AdvplParser.BYREF - 106)) | (1 << (AdvplParser.PROCESS - 106)) | (1 << (AdvplParser.TITLE - 106)) | (1 << (AdvplParser.PERGUNTE - 106)) | (1 << (AdvplParser.PATH - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AdvplParser.RULE_arrayAccess);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 679;
					this.match(AdvplParser.LBRACK);
					this.state = 680;
					this.expressionList();
					this.state = 681;
					this.match(AdvplParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 685; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodAccessLoop(): MethodAccessLoopContext {
		let _localctx: MethodAccessLoopContext = new MethodAccessLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AdvplParser.RULE_methodAccessLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 687;
			this.match(AdvplParser.T__1);
			{
			this.state = 688;
			this.identifier();
			}
			this.state = 690;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				{
				this.state = 689;
				this.arguments();
				}
				break;
			}
			this.state = 693;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,88,this._ctx) ) {
			case 1:
				{
				this.state = 692;
				this.arrayAccess();
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AdvplParser.RULE_arguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(AdvplParser.LPAREN);
			this.state = 696;
			this.expressionList();
			this.state = 697;
			this.match(AdvplParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, AdvplParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				{
				this.state = 699;
				this.match(AdvplParser.LBRACK);
				}
				break;
			}
			this.state = 702;
			this.optionalExpression();
			this.state = 704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
			case 1:
				{
				this.state = 703;
				this.match(AdvplParser.RBRACK);
				}
				break;
			}
			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.LBRACK || _la===AdvplParser.COMMA) {
				{
				{
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.LBRACK) {
					{
					this.state = 706;
					this.match(AdvplParser.LBRACK);
					}
				}

				this.state = 709;
				this.match(AdvplParser.COMMA);
				this.state = 710;
				this.optionalExpression();
				this.state = 712;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
				case 1:
					{
					this.state = 711;
					this.match(AdvplParser.RBRACK);
					}
					break;
				}
				}
				}
				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionalExpression(): OptionalExpressionContext {
		let _localctx: OptionalExpressionContext = new OptionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AdvplParser.RULE_optionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,94,this._ctx) ) {
			case 1:
				{
				this.state = 719;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionListComa(): ExpressionListComaContext {
		let _localctx: ExpressionListComaContext = new ExpressionListComaContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AdvplParser.RULE_expressionListComa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.match(AdvplParser.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AdvplParser.RULE_literal);
		try {
			this.state = 732;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.NUMBER:
				_localctx = new LiteralNumberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 724;
				this.match(AdvplParser.NUMBER);
				}
				break;
			case AdvplParser.STRING:
				_localctx = new LiteralStringDuplaContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.match(AdvplParser.STRING);
				}
				break;
			case AdvplParser.STRINGSIMPLE:
				_localctx = new LiteralStringSimplesContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 726;
				this.match(AdvplParser.STRINGSIMPLE);
				}
				break;
			case AdvplParser.TRUE:
				_localctx = new LiteralLogicalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 727;
				this.match(AdvplParser.TRUE);
				}
				break;
			case AdvplParser.FALSE:
				_localctx = new LiteralLogicalContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 728;
				this.match(AdvplParser.FALSE);
				}
				break;
			case AdvplParser.NIL:
				_localctx = new LiteralNilContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 729;
				this.match(AdvplParser.NIL);
				}
				break;
			case AdvplParser.ARROBA:
				_localctx = new LiteralArrobaNilContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 730;
				this.match(AdvplParser.ARROBA);
				this.state = 731;
				this.match(AdvplParser.NIL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifFunctioncall(): IfFunctioncallContext {
		let _localctx: IfFunctioncallContext = new IfFunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AdvplParser.RULE_ifFunctioncall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(AdvplParser.IF);
			this.state = 735;
			this.match(AdvplParser.LPAREN);
			this.state = 736;
			this.expression(0);
			this.state = 737;
			this.match(AdvplParser.COMMA);
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__1) | (1 << AdvplParser.T__6) | (1 << AdvplParser.T__9) | (1 << AdvplParser.MINOR) | (1 << AdvplParser.PLUSPLUS) | (1 << AdvplParser.MINUSMINUS) | (1 << AdvplParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.MINUS - 32)) | (1 << (AdvplParser.PERC - 32)) | (1 << (AdvplParser.ARROBA - 32)) | (1 << (AdvplParser.ECOMERCIAL - 32)) | (1 << (AdvplParser.TRANSACTION - 32)) | (1 << (AdvplParser.SEQUENCE - 32)) | (1 << (AdvplParser.STEP - 32)) | (1 << (AdvplParser.TO - 32)) | (1 << (AdvplParser.TRUE - 32)) | (1 << (AdvplParser.FALSE - 32)) | (1 << (AdvplParser.NIL - 32)) | (1 << (AdvplParser.IF - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AdvplParser.END - 67)) | (1 << (AdvplParser.LOCA - 67)) | (1 << (AdvplParser.LOCAL - 67)) | (1 << (AdvplParser.USER - 67)) | (1 << (AdvplParser.WEB - 67)) | (1 << (AdvplParser.MAIN - 67)) | (1 << (AdvplParser.SELF - 67)) | (1 << (AdvplParser.PROJECT - 67)) | (1 << (AdvplParser.TEMPLATE - 67)) | (1 << (AdvplParser.NOT - 67)) | (1 << (AdvplParser.DEFAULT - 67)) | (1 << (AdvplParser.ASSUME - 67)) | (1 << (AdvplParser.CLASS - 67)) | (1 << (AdvplParser.DATA - 67)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (AdvplParser.DESCRIPTION - 101)) | (1 << (AdvplParser.MODULE - 101)) | (1 << (AdvplParser.INIT - 101)) | (1 << (AdvplParser.AS - 101)) | (1 << (AdvplParser.OF - 101)) | (1 << (AdvplParser.REQUEST - 101)) | (1 << (AdvplParser.GET - 101)) | (1 << (AdvplParser.POST - 101)) | (1 << (AdvplParser.PUT - 101)) | (1 << (AdvplParser.DELETE - 101)) | (1 << (AdvplParser.BYREF - 101)) | (1 << (AdvplParser.PROCESS - 101)) | (1 << (AdvplParser.TITLE - 101)) | (1 << (AdvplParser.PERGUNTE - 101)) | (1 << (AdvplParser.PATH - 101)) | (1 << (AdvplParser.LPAREN - 101)) | (1 << (AdvplParser.LBRACK - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (AdvplParser.NUMBER - 133)) | (1 << (AdvplParser.IDENTIFIER - 133)) | (1 << (AdvplParser.STRING - 133)) | (1 << (AdvplParser.STRINGSIMPLE - 133)))) !== 0)) {
				{
				this.state = 738;
				this.expression(0);
				}
			}

			this.state = 741;
			this.match(AdvplParser.COMMA);
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__1) | (1 << AdvplParser.T__6) | (1 << AdvplParser.T__9) | (1 << AdvplParser.MINOR) | (1 << AdvplParser.PLUSPLUS) | (1 << AdvplParser.MINUSMINUS) | (1 << AdvplParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.MINUS - 32)) | (1 << (AdvplParser.PERC - 32)) | (1 << (AdvplParser.ARROBA - 32)) | (1 << (AdvplParser.ECOMERCIAL - 32)) | (1 << (AdvplParser.TRANSACTION - 32)) | (1 << (AdvplParser.SEQUENCE - 32)) | (1 << (AdvplParser.STEP - 32)) | (1 << (AdvplParser.TO - 32)) | (1 << (AdvplParser.TRUE - 32)) | (1 << (AdvplParser.FALSE - 32)) | (1 << (AdvplParser.NIL - 32)) | (1 << (AdvplParser.IF - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AdvplParser.END - 67)) | (1 << (AdvplParser.LOCA - 67)) | (1 << (AdvplParser.LOCAL - 67)) | (1 << (AdvplParser.USER - 67)) | (1 << (AdvplParser.WEB - 67)) | (1 << (AdvplParser.MAIN - 67)) | (1 << (AdvplParser.SELF - 67)) | (1 << (AdvplParser.PROJECT - 67)) | (1 << (AdvplParser.TEMPLATE - 67)) | (1 << (AdvplParser.NOT - 67)) | (1 << (AdvplParser.DEFAULT - 67)) | (1 << (AdvplParser.ASSUME - 67)) | (1 << (AdvplParser.CLASS - 67)) | (1 << (AdvplParser.DATA - 67)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (AdvplParser.DESCRIPTION - 101)) | (1 << (AdvplParser.MODULE - 101)) | (1 << (AdvplParser.INIT - 101)) | (1 << (AdvplParser.AS - 101)) | (1 << (AdvplParser.OF - 101)) | (1 << (AdvplParser.REQUEST - 101)) | (1 << (AdvplParser.GET - 101)) | (1 << (AdvplParser.POST - 101)) | (1 << (AdvplParser.PUT - 101)) | (1 << (AdvplParser.DELETE - 101)) | (1 << (AdvplParser.BYREF - 101)) | (1 << (AdvplParser.PROCESS - 101)) | (1 << (AdvplParser.TITLE - 101)) | (1 << (AdvplParser.PERGUNTE - 101)) | (1 << (AdvplParser.PATH - 101)) | (1 << (AdvplParser.LPAREN - 101)) | (1 << (AdvplParser.LBRACK - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (AdvplParser.NUMBER - 133)) | (1 << (AdvplParser.IDENTIFIER - 133)) | (1 << (AdvplParser.STRING - 133)) | (1 << (AdvplParser.STRINGSIMPLE - 133)))) !== 0)) {
				{
				this.state = 742;
				this.expression(0);
				}
			}

			this.state = 745;
			this.match(AdvplParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AdvplParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(AdvplParser.IF);
			this.state = 748;
			this.ifCondition();
			this.state = 749;
			this.crlf();
			this.state = 750;
			this.ifBlock();
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.ELSEIF) {
				{
				{
				this.state = 751;
				this.match(AdvplParser.ELSEIF);
				this.state = 752;
				this.elseIfCondition();
				this.state = 753;
				this.crlf();
				this.state = 754;
				this.elseIfBlock();
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.ELSE) {
				{
				{
				this.state = 761;
				this.match(AdvplParser.ELSE);
				this.state = 762;
				this.crlf();
				this.state = 763;
				this.elseBlock();
				}
				}
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,100,this._ctx) ) {
			case 1:
				{
				this.state = 770;
				this.match(AdvplParser.ENDIF);
				}
				break;

			case 2:
				{
				this.state = 771;
				this.match(AdvplParser.ENDIF_DOT);
				}
				break;

			case 3:
				{
				this.state = 772;
				this.match(AdvplParser.END);
				}
				break;

			case 4:
				{
				this.state = 773;
				this.match(AdvplParser.END);
				this.state = 774;
				this.match(AdvplParser.IF);
				}
				break;

			case 5:
				{
				this.state = 775;
				this.match(AdvplParser.ENDI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AdvplParser.RULE_ifCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseIfCondition(): ElseIfConditionContext {
		let _localctx: ElseIfConditionContext = new ElseIfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AdvplParser.RULE_elseIfCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseIfBlock(): ElseIfBlockContext {
		let _localctx: ElseIfBlockContext = new ElseIfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, AdvplParser.RULE_elseIfBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,101,this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseBlock(): ElseBlockContext {
		let _localctx: ElseBlockContext = new ElseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, AdvplParser.RULE_elseBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,102,this._ctx) ) {
			case 1:
				{
				this.state = 785;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifBlock(): IfBlockContext {
		let _localctx: IfBlockContext = new IfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, AdvplParser.RULE_ifBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,103,this._ctx) ) {
			case 1:
				{
				this.state = 788;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, AdvplParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.match(AdvplParser.FOR);
			this.state = 792;
			this.forInit();
			this.state = 793;
			this.match(AdvplParser.TO);
			this.state = 794;
			this.forToExpression();
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.STEP) {
				{
				this.state = 795;
				this.match(AdvplParser.STEP);
				this.state = 796;
				this.expression(0);
				}
			}

			this.state = 799;
			this.crlf();
			this.state = 800;
			this.forBlock();
			{
			this.state = 801;
			_la = this._input.LA(1);
			if ( !(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (AdvplParser.NEXT - 56)) | (1 << (AdvplParser.ENDFOR - 56)) | (1 << (AdvplParser.END - 56)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 802;
			this.lostExpression();
			}
			this.state = 805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
			case 1:
				{
				this.state = 804;
				this.crlf();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forToExpression(): ForToExpressionContext {
		let _localctx: ForToExpressionContext = new ForToExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, AdvplParser.RULE_forToExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forStepExpression(): ForStepExpressionContext {
		let _localctx: ForStepExpressionContext = new ForStepExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, AdvplParser.RULE_forStepExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forBlock(): ForBlockContext {
		let _localctx: ForBlockContext = new ForBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, AdvplParser.RULE_forBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,106,this._ctx) ) {
			case 1:
				{
				this.state = 811;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lostExpression(): LostExpressionContext {
		let _localctx: LostExpressionContext = new LostExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, AdvplParser.RULE_lostExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.T__1) | (1 << AdvplParser.T__6) | (1 << AdvplParser.T__9) | (1 << AdvplParser.MINOR) | (1 << AdvplParser.PLUSPLUS) | (1 << AdvplParser.MINUSMINUS) | (1 << AdvplParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.MINUS - 32)) | (1 << (AdvplParser.PERC - 32)) | (1 << (AdvplParser.ARROBA - 32)) | (1 << (AdvplParser.ECOMERCIAL - 32)) | (1 << (AdvplParser.TRANSACTION - 32)) | (1 << (AdvplParser.SEQUENCE - 32)) | (1 << (AdvplParser.STEP - 32)) | (1 << (AdvplParser.TO - 32)) | (1 << (AdvplParser.TRUE - 32)) | (1 << (AdvplParser.FALSE - 32)) | (1 << (AdvplParser.NIL - 32)) | (1 << (AdvplParser.IF - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AdvplParser.END - 67)) | (1 << (AdvplParser.LOCA - 67)) | (1 << (AdvplParser.LOCAL - 67)) | (1 << (AdvplParser.USER - 67)) | (1 << (AdvplParser.WEB - 67)) | (1 << (AdvplParser.MAIN - 67)) | (1 << (AdvplParser.SELF - 67)) | (1 << (AdvplParser.PROJECT - 67)) | (1 << (AdvplParser.TEMPLATE - 67)) | (1 << (AdvplParser.NOT - 67)) | (1 << (AdvplParser.DEFAULT - 67)) | (1 << (AdvplParser.ASSUME - 67)) | (1 << (AdvplParser.CLASS - 67)) | (1 << (AdvplParser.DATA - 67)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (AdvplParser.DESCRIPTION - 101)) | (1 << (AdvplParser.MODULE - 101)) | (1 << (AdvplParser.INIT - 101)) | (1 << (AdvplParser.AS - 101)) | (1 << (AdvplParser.OF - 101)) | (1 << (AdvplParser.REQUEST - 101)) | (1 << (AdvplParser.GET - 101)) | (1 << (AdvplParser.POST - 101)) | (1 << (AdvplParser.PUT - 101)) | (1 << (AdvplParser.DELETE - 101)) | (1 << (AdvplParser.BYREF - 101)) | (1 << (AdvplParser.PROCESS - 101)) | (1 << (AdvplParser.TITLE - 101)) | (1 << (AdvplParser.PERGUNTE - 101)) | (1 << (AdvplParser.PATH - 101)) | (1 << (AdvplParser.LPAREN - 101)) | (1 << (AdvplParser.LBRACK - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (AdvplParser.NUMBER - 133)) | (1 << (AdvplParser.IDENTIFIER - 133)) | (1 << (AdvplParser.STRING - 133)) | (1 << (AdvplParser.STRINGSIMPLE - 133)))) !== 0)) {
				{
				this.state = 814;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, AdvplParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(AdvplParser.DO);
			this.state = 820;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.WHILE:
				{
				this.state = 818;
				this.whileStatement();
				}
				break;
			case AdvplParser.CASE:
				{
				this.state = 819;
				this.docaseStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exitOrLoopStatement(): ExitOrLoopStatementContext {
		let _localctx: ExitOrLoopStatementContext = new ExitOrLoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, AdvplParser.RULE_exitOrLoopStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.EXIT || _la===AdvplParser.LOOP) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, AdvplParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.match(AdvplParser.WHILE);
			this.state = 825;
			this.whileCondition();
			this.state = 826;
			this.crlf();
			this.state = 827;
			this.whileBlock();
			this.state = 837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.ENDDO:
				{
				this.state = 828;
				this.match(AdvplParser.ENDDO);
				}
				break;
			case AdvplParser.END:
				{
				this.state = 829;
				this.match(AdvplParser.END);
				this.state = 834;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AdvplParser.DO:
					{
					this.state = 830;
					this.match(AdvplParser.DO);
					}
					break;
				case AdvplParser.WHILE:
					{
					this.state = 831;
					this.match(AdvplParser.WHILE);
					}
					break;
				case AdvplParser.LPAREN:
					{
					{
					this.state = 832;
					this.match(AdvplParser.LPAREN);
					this.state = 833;
					this.match(AdvplParser.RPAREN);
					}
					}
					break;
				case AdvplParser.EOF:
				case AdvplParser.T__16:
				case AdvplParser.CRLF:
					break;
				default:
					break;
				}
				}
				break;
			case AdvplParser.T__14:
				{
				this.state = 836;
				this.match(AdvplParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
			case 1:
				{
				this.state = 839;
				this.crlf();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileCondition(): WhileConditionContext {
		let _localctx: WhileConditionContext = new WhileConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, AdvplParser.RULE_whileCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileBlock(): WhileBlockContext {
		let _localctx: WhileBlockContext = new WhileBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, AdvplParser.RULE_whileBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,112,this._ctx) ) {
			case 1:
				{
				this.state = 844;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public docaseStatement(): DocaseStatementContext {
		let _localctx: DocaseStatementContext = new DocaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, AdvplParser.RULE_docaseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this.match(AdvplParser.CASE);
			this.state = 848;
			this.crlf();
			this.state = 854; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 849;
				this.match(AdvplParser.CASE);
				this.state = 850;
				this.caseCondition();
				this.state = 851;
				this.crlf();
				this.state = 852;
				this.caseBlock();
				}
				}
				this.state = 856; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===AdvplParser.CASE );
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.OTHERWISE) {
				{
				this.state = 858;
				this.match(AdvplParser.OTHERWISE);
				this.state = 859;
				this.otherWiseBlock();
				}
			}

			this.state = 868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.T__15:
				{
				this.state = 862;
				this.match(AdvplParser.T__15);
				}
				break;
			case AdvplParser.ENDCASE:
				{
				this.state = 863;
				this.match(AdvplParser.ENDCASE);
				}
				break;
			case AdvplParser.END:
				{
				{
				this.state = 864;
				this.match(AdvplParser.END);
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.DO || _la===AdvplParser.CASE) {
					{
					this.state = 865;
					_la = this._input.LA(1);
					if ( !(_la===AdvplParser.DO || _la===AdvplParser.CASE) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,117,this._ctx) ) {
			case 1:
				{
				this.state = 870;
				this.crlf();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseCondition(): CaseConditionContext {
		let _localctx: CaseConditionContext = new CaseConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, AdvplParser.RULE_caseCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, AdvplParser.RULE_caseBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,118,this._ctx) ) {
			case 1:
				{
				this.state = 875;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public otherWiseBlock(): OtherWiseBlockContext {
		let _localctx: OtherWiseBlockContext = new OtherWiseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, AdvplParser.RULE_otherWiseBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				{
				this.state = 878;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrobaDefine(): ArrobaDefineContext {
		let _localctx: ArrobaDefineContext = new ArrobaDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, AdvplParser.RULE_arrobaDefine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(AdvplParser.ARROBA);
			this.state = 882;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, AdvplParser.RULE_forInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.identifier();
			this.state = 885;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.EQUALS || _la===AdvplParser.ATTRIB_OPERATOR) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 886;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public crlf(): CrlfContext {
		let _localctx: CrlfContext = new CrlfContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, AdvplParser.RULE_crlf);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.CRLF:
				{
				this.state = 889; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 888;
						this.match(AdvplParser.CRLF);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 891; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,120,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case AdvplParser.T__16:
				{
				this.state = 893;
				this.match(AdvplParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public crlfEmpty(): CrlfEmptyContext {
		let _localctx: CrlfEmptyContext = new CrlfEmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, AdvplParser.RULE_crlfEmpty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.CRLF:
				{
				this.state = 897; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 896;
						this.match(AdvplParser.CRLF);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 899; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case AdvplParser.T__16:
				{
				this.state = 901;
				this.match(AdvplParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 36:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);

		case 7:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x90\u038B\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v\x02"+
		"\x03\x02\x05\x02\x98\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\xA3\n\x04\x03\x04\x03\x04\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xAC\n\x05\x03\x06\x03\x06\x03"+
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xB8\n\b\x03\b"+
		"\x03\b\x03\b\x03\b\x07\b\xBE\n\b\f\b\x0E\b\xC1\v\b\x03\b\x03\b\x03\b\x03"+
		"\b\x03\b\x05\b\xC8\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xCF\n\t\x03"+
		"\t\x03\t\x05\t\xD3\n\t\x03\t\x03\t\x05\t\xD7\n\t\x03\t\x03\t\x03\t\x03"+
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xE3\n\v\x03\v\x03\v\x03\v"+
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10"+
		"\x03\x10\x03\x10\x05\x10\xF4\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x05\x12\u0104\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\u010A"+
		"\n\x13\x03\x13\x05\x13\u010D\n\x13\x03\x13\x03\x13\x05\x13\u0111\n\x13"+
		"\x03\x14\x05\x14\u0114\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u011A"+
		"\n\x14\x03\x14\x05\x14\u011D\n\x14\x03\x14\x03\x14\x05\x14\u0121\n\x14"+
		"\x03\x14\x03\x14\x05\x14\u0125\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03"+
		"\x15\x03\x15\x03\x16\x05\x16\u012E\n\x16\x03\x16\x03\x16\x03\x16\x05\x16"+
		"\u0133\n\x16\x03\x16\x07\x16\u0136\n\x16\f\x16\x0E\x16\u0139\v\x16\x03"+
		"\x17\x03\x17\x03\x17\x05\x17\u013E\n\x17\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x06\x18\u0149\n\x18\r\x18\x0E"+
		"\x18\u014A\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0152\n\x1A"+
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0158\n\x1A\x07\x1A\u015A\n\x1A"+
		"\f\x1A\x0E\x1A\u015D\v\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0162\n\x1B"+
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0168\n\x1B\x07\x1B\u016A\n\x1B"+
		"\f\x1B\x0E\x1B\u016D\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0173"+
		"\n\x1C\f\x1C\x0E\x1C\u0176\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D"+
		"\u017C\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0182\n\x1D\x07\x1D"+
		"\u0184\n\x1D\f\x1D\x0E\x1D\u0187\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E"+
		"\x05\x1E\u018D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0192\n\x1E\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0198\n\x1E\x05\x1E\u019A\n\x1E\x03\x1F"+
		"\x03\x1F\x03\x1F\x07\x1F\u019F\n\x1F\f\x1F\x0E\x1F\u01A2\v\x1F\x03 \x03"+
		" \x03 \x05 \u01A7\n \x03 \x06 \u01AA\n \r \x0E \u01AB\x03!\x03!\x03!\x03"+
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01BA\n!\x03\"\x03\"\x03"+
		"\"\x03\"\x03\"\x03\"\x05\"\u01C2\n\"\x03\"\x05\"\u01C5\n\"\x03#\x03#\x05"+
		"#\u01C9\n#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x03&\x03&\x05&\u01D9\n&\x03&\x03&\x03&\x05&\u01DE\n&\x03&\x03&\x03&"+
		"\x03&\x03&\x03&\x03&\x03&\x05&\u01E8\n&\x03&\x03&\x03&\x03&\x05&\u01EE"+
		"\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x03&\x03&\x03&\x03&\x05&\u0202\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x05&\u020B\n&\x07&\u020D\n&\f&\x0E&\u0210\v&\x03\'\x05\'\u0213\n\'\x03"+
		"\'\x03\'\x03\'\x03\'\x05\'\u0219\n\'\x03\'\x05\'\u021C\n\'\x03\'\x03\'"+
		"\x03\'\x03\'\x05\'\u0222\n\'\x03\'\x03\'\x03\'\x05\'\u0227\n\'\x03\'\x05"+
		"\'\u022A\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03"+
		"\'\x07\'\u0236\n\'\f\'\x0E\'\u0239\v\'\x03\'\x05\'\u023C\n\'\x03\'\x03"+
		"\'\x05\'\u0240\n\'\x03\'\x03\'\x03\'\x05\'\u0245\n\'\x06\'\u0247\n\'\r"+
		"\'\x0E\'\u0248\x03\'\x05\'\u024C\n\'\x03\'\x03\'\x07\'\u0250\n\'\f\'\x0E"+
		"\'\u0253\v\'\x03\'\x06\'\u0256\n\'\r\'\x0E\'\u0257\x03\'\x05\'\u025B\n"+
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0263\n\'\f\'\x0E\'\u0266"+
		"\v\'\x03\'\x03\'\x03\'\x03\'\x05\'\u026C\n\'\x03\'\x03\'\x03\'\x03\'\x03"+
		"\'\x07\'\u0273\n\'\f\'\x0E\'\u0276\v\'\x03\'\x05\'\u0279\n\'\x03\'\x03"+
		"\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0281\n\'\x03\'\x03\'\x07\'\u0285\n\'"+
		"\f\'\x0E\'\u0288\v\'\x03\'\x05\'\u028B\n\'\x03\'\x03\'\x03\'\x03\'\x03"+
		"\'\x03\'\x07\'\u0293\n\'\f\'\x0E\'\u0296\v\'\x03\'\x03\'\x03\'\x03\'\x05"+
		"\'\u029C\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u02A6"+
		"\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x06)\u02AE\n)\r)\x0E)\u02AF\x03*\x03"+
		"*\x03*\x05*\u02B5\n*\x03*\x05*\u02B8\n*\x03+\x03+\x03+\x03+\x03,\x05,"+
		"\u02BF\n,\x03,\x03,\x05,\u02C3\n,\x03,\x05,\u02C6\n,\x03,\x03,\x03,\x05"+
		",\u02CB\n,\x07,\u02CD\n,\f,\x0E,\u02D0\v,\x03-\x05-\u02D3\n-\x03.\x03"+
		".\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u02DF\n/\x030\x030\x03"+
		"0\x030\x030\x050\u02E6\n0\x030\x030\x050\u02EA\n0\x030\x030\x031\x031"+
		"\x031\x031\x031\x031\x031\x031\x031\x071\u02F7\n1\f1\x0E1\u02FA\v1\x03"+
		"1\x031\x031\x031\x071\u0300\n1\f1\x0E1\u0303\v1\x031\x031\x031\x031\x03"+
		"1\x031\x051\u030B\n1\x032\x032\x033\x033\x034\x054\u0312\n4\x035\x055"+
		"\u0315\n5\x036\x056\u0318\n6\x037\x037\x037\x037\x037\x037\x057\u0320"+
		"\n7\x037\x037\x037\x037\x037\x037\x057\u0328\n7\x038\x038\x039\x039\x03"+
		":\x05:\u032F\n:\x03;\x05;\u0332\n;\x03<\x03<\x03<\x05<\u0337\n<\x03=\x03"+
		"=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0345\n>\x03"+
		">\x05>\u0348\n>\x03>\x05>\u034B\n>\x03?\x03?\x03@\x05@\u0350\n@\x03A\x03"+
		"A\x03A\x03A\x03A\x03A\x03A\x06A\u0359\nA\rA\x0EA\u035A\x03A\x03A\x05A"+
		"\u035F\nA\x03A\x03A\x03A\x03A\x05A\u0365\nA\x05A\u0367\nA\x03A\x05A\u036A"+
		"\nA\x03B\x03B\x03C\x05C\u036F\nC\x03D\x05D\u0372\nD\x03E\x03E\x03E\x03"+
		"F\x03F\x03F\x03F\x03G\x06G\u037C\nG\rG\x0EG\u037D\x03G\x05G\u0381\nG\x03"+
		"H\x06H\u0384\nH\rH\x0EH\u0385\x03H\x05H\u0389\nH\x03H\x02\x02\x03JI\x02"+
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02"+
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02"+
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02"+
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02"+
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02"+
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x02\r"+
		"\x04\x02PPSS\x03\x02ef\x04\x02TTVV\x03\x02LM\x04\x02\f\f\\\\\x05\x02\r"+
		"\x10  \x86\x86\x12\x02\x04\x04*+./EELMQSWY]]_`ccggjmppuy{~\x88\x88\x04"+
		"\x02::DE\x03\x02JK\x04\x02<<GG\x04\x02\x16\x16\x86\x86\u0402\x02\x93\x03"+
		"\x02\x02\x02\x04\x99\x03\x02\x02\x02\x06\x9E\x03\x02\x02\x02\b\xAB\x03"+
		"\x02\x02\x02\n\xAD\x03\x02\x02\x02\f\xAF\x03\x02\x02\x02\x0E\xB2\x03\x02"+
		"\x02\x02\x10\xC9\x03\x02\x02\x02\x12\xDB\x03\x02\x02\x02\x14\xDD\x03\x02"+
		"\x02\x02\x16\xE8\x03\x02\x02\x02\x18\xEA\x03\x02\x02\x02\x1A\xEC\x03\x02"+
		"\x02\x02\x1C\xEE\x03\x02\x02\x02\x1E\xF0\x03\x02\x02\x02 \xF5\x03\x02"+
		"\x02\x02\"\xFD\x03\x02\x02\x02$\u0107\x03\x02\x02\x02&\u0113\x03\x02\x02"+
		"\x02(\u0126\x03\x02\x02\x02*\u012D\x03\x02\x02\x02,\u013A\x03\x02\x02"+
		"\x02.\u0148\x03\x02\x02\x020\u014C\x03\x02\x02\x022\u014E\x03\x02\x02"+
		"\x024\u015E\x03\x02\x02\x026\u016E\x03\x02\x02\x028\u0177\x03\x02\x02"+
		"\x02:\u0199\x03\x02\x02\x02<\u019B\x03\x02\x02\x02>\u01A9\x03\x02\x02"+
		"\x02@\u01B9\x03\x02\x02\x02B\u01BB\x03\x02\x02\x02D\u01C6\x03\x02\x02"+
		"\x02F\u01CA\x03\x02\x02\x02H\u01CC\x03\x02\x02\x02J\u01DD\x03\x02\x02"+
		"\x02L\u02A5\x03\x02\x02\x02N\u02A7\x03\x02\x02\x02P\u02AD\x03\x02\x02"+
		"\x02R\u02B1\x03\x02\x02\x02T\u02B9\x03\x02\x02\x02V\u02BE\x03\x02\x02"+
		"\x02X\u02D2\x03\x02\x02\x02Z\u02D4\x03\x02\x02\x02\\\u02DE\x03\x02\x02"+
		"\x02^\u02E0\x03\x02\x02\x02`\u02ED\x03\x02\x02\x02b\u030C\x03\x02\x02"+
		"\x02d\u030E\x03\x02\x02\x02f\u0311\x03\x02\x02\x02h\u0314\x03\x02\x02"+
		"\x02j\u0317\x03\x02\x02\x02l\u0319\x03\x02\x02\x02n\u0329\x03\x02\x02"+
		"\x02p\u032B\x03\x02\x02\x02r\u032E\x03\x02\x02\x02t\u0331\x03\x02\x02"+
		"\x02v\u0333\x03\x02\x02\x02x\u0338\x03\x02\x02\x02z\u033A\x03\x02\x02"+
		"\x02|\u034C\x03\x02\x02\x02~\u034F\x03\x02\x02\x02\x80\u0351\x03\x02\x02"+
		"\x02\x82\u036B\x03\x02\x02\x02\x84\u036E\x03\x02\x02\x02\x86\u0371\x03"+
		"\x02\x02\x02\x88\u0373\x03\x02\x02\x02\x8A\u0376\x03\x02\x02\x02\x8C\u0380"+
		"\x03\x02\x02\x02\x8E\u0388\x03\x02\x02\x02\x90\x92\x05\b\x05\x02\x91\x90"+
		"\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94"+
		"\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x98"+
		"\x07\x02\x02\x03\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x03"+
		"\x03\x02\x02\x02\x99\x9A\x07\x03\x02\x02\x9A\x9B\x07\x87\x02\x02\x9B\x9C"+
		"\x07\x8C\x02\x02\x9C\x9D\x07\x8E\x02\x02\x9D\x05\x03\x02\x02\x02\x9E\x9F"+
		"\x07\x14\x02\x02\x9F\xA2\x05N(\x02\xA0\xA1\x07\x04\x02\x02\xA1\xA3\x05"+
		"V,\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02"+
		"\x02\x02\xA4\xA5\x07\x15\x02\x02\xA5\x07\x03\x02\x02\x02\xA6\xAC\x05\x04"+
		"\x03\x02\xA7\xAC\x05\x0E\b\x02\xA8\xAC\x05$\x13\x02\xA9\xAC\x05\f\x07"+
		"\x02\xAA\xAC\x05\x8EH\x02\xAB\xA6\x03\x02\x02\x02\xAB\xA7\x03\x02\x02"+
		"\x02\xAB\xA8\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02"+
		"\x02\xAC\t\x03\x02\x02\x02\xAD\xAE\t\x02\x02\x02\xAE\v\x03\x02\x02\x02"+
		"\xAF\xB0\x07P\x02\x02\xB0\xB1\x054\x1B\x02\xB1\r\x03\x02\x02\x02\xB2\xB3"+
		"\x07\x05\x02\x02\xB3\xB4\x07\x7F\x02\x02\xB4\xB5\x05N(\x02\xB5\xB7\x07"+
		"\x84\x02\x02\xB6\xB8\x05\x12\n\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03"+
		"\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x07\x80\x02\x02\xBA\xBF\x05"+
		"\x8CG\x02\xBB\xBE\x05\x10\t\x02\xBC\xBE\x05\x14\v\x02\xBD\xBB\x03\x02"+
		"\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02"+
		"\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02"+
		"\x02\x02\xC2\xC3\x07\x06\x02\x02\xC3\xC4\x07\x7F\x02\x02\xC4\xC7\x07\x80"+
		"\x02\x02\xC5\xC8\x05\x8CG\x02\xC6\xC8\x07\x02\x02\x03\xC7\xC5\x03\x02"+
		"\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x0F\x03\x02\x02\x02\xC9\xCA\x07\x07"+
		"\x02\x02\xCA\xCB\x07\x7F\x02\x02\xCB\xCC\x05N(\x02\xCC\xCE\x07\x84\x02"+
		"\x02\xCD\xCF\x05\x1E\x10\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02"+
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x07\x84\x02\x02\xD1\xD3\x05\x1A\x0E"+
		"\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02"+
		"\x02\xD4\xD6\x07\x84\x02\x02\xD5\xD7\x05\x16\f\x02\xD6\xD5\x03\x02\x02"+
		"\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x07\x80\x02"+
		"\x02\xD9\xDA\x05\x8CG\x02\xDA\x11\x03\x02\x02\x02\xDB\xDC\x05N(\x02\xDC"+
		"\x13\x03\x02\x02\x02\xDD\xDE\x07\b\x02\x02\xDE\xDF\x07\x7F\x02\x02\xDF"+
		"\xE0\x05N(\x02\xE0\xE2\x07\x84\x02\x02\xE1\xE3\x05T+\x02\xE2\xE1\x03\x02"+
		"\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x07\x84"+
		"\x02\x02\xE5\xE6\x07\x80\x02\x02\xE6\xE7\x05\x8CG\x02\xE7\x15\x03\x02"+
		"\x02\x02\xE8\xE9\x05J&\x02\xE9\x17\x03\x02\x02\x02\xEA\xEB\x05N(\x02\xEB"+
		"\x19\x03\x02\x02\x02\xEC\xED\t\x03\x02\x02\xED\x1B\x03\x02\x02\x02\xEE"+
		"\xEF\x07P\x02\x02\xEF\x1D\x03\x02\x02\x02\xF0\xF3\x05N(\x02\xF1\xF2\x07"+
		"m\x02\x02\xF2\xF4\x05N(\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02"+
		"\x02\xF4\x1F\x03\x02\x02\x02\xF5\xF6\x07h\x02\x02\xF6\xF7\x05N(\x02\xF7"+
		"\xF8\x07g\x02\x02\xF8\xF9\x05J&\x02\xF9\xFA\x07j\x02\x02\xFA\xFB\x05J"+
		"&\x02\xFB\xFC\x05\x8CG\x02\xFC!\x03\x02\x02\x02\xFD\xFE\x07i\x02\x02\xFE"+
		"\xFF\x07k\x02\x02\xFF\u0100\x07h\x02\x02\u0100\u0101\x05N(\x02\u0101\u0103"+
		"\x05\x8CG\x02\u0102\u0104\x05.\x18\x02\u0103\u0102\x03\x02\x02\x02\u0103"+
		"\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x05> \x02"+
		"\u0106#\x03\x02\x02\x02\u0107\u0109\x05&\x14\x02\u0108\u010A\x05(\x15"+
		"\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C"+
		"\x03\x02\x02\x02\u010B\u010D\x05.\x18\x02\u010C\u010B\x03\x02\x02\x02"+
		"\u010C\u010D\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u0111\x07"+
		"\x02\x02\x03\u010F\u0111\x05> \x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F"+
		"\x03\x02\x02\x02\u0111%\x03\x02\x02\x02\u0112\u0114\x05\n\x06\x02\u0113"+
		"\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02"+
		"\x02\x02\u0115\u0116\t\x04\x02\x02\u0116\u011C\x05N(\x02\u0117\u0119\x07"+
		"\x7F\x02\x02\u0118\u011A\x05*\x16\x02\u0119\u0118\x03\x02\x02\x02\u0119"+
		"\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x07\x80"+
		"\x02\x02\u011C\u0117\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D"+
		"\u0120\x03\x02\x02\x02\u011E\u011F\x07l\x02\x02\u011F\u0121\x05\x18\r"+
		"\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0124"+
		"\x03\x02\x02\x02\u0122\u0125\x05\x8CG\x02\u0123\u0125\x07\x02\x02\x03"+
		"\u0124\u0122\x03\x02\x02\x02\u0124\u0123\x03\x02\x02\x02\u0125\'\x03\x02"+
		"\x02\x02\u0126\u0127\x07\x04\x02\x02\u0127\u0128\x05N(\x02\u0128\u0129"+
		"\x07\x7F\x02\x02\u0129\u012A\x05V,\x02\u012A\u012B\x07\x80\x02\x02\u012B"+
		")\x03\x02\x02\x02\u012C\u012E\x07y\x02\x02\u012D\u012C\x03\x02\x02\x02"+
		"\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0137\x05"+
		",\x17\x02\u0130\u0132\x07\x84\x02\x02\u0131\u0133\x07y\x02\x02\u0132\u0131"+
		"\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02"+
		"\u0134\u0136\x05,\x17\x02\u0135\u0130\x03\x02\x02\x02\u0136\u0139\x03"+
		"\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138"+
		"+\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x05N(\x02\u013B"+
		"\u013C\x07l\x02\x02\u013C\u013E\x05\x1E\x10\x02\u013D\u013B\x03\x02\x02"+
		"\x02\u013D\u013E\x03\x02\x02\x02\u013E-\x03\x02\x02\x02\u013F\u0140\t"+
		"\x05\x02\x02\u0140\u0141\x052\x1A\x02\u0141\u0142\x05\x8CG\x02\u0142\u0149"+
		"\x03\x02\x02\x02\u0143\u0144\x050\x19\x02\u0144\u0145\x05\x8CG\x02\u0145"+
		"\u0149\x03\x02\x02\x02\u0146\u0149\x05\x8EH\x02\u0147\u0149\x05\x04\x03"+
		"\x02\u0148\u013F\x03\x02\x02\x02\u0148\u0143\x03\x02\x02\x02\u0148\u0146"+
		"\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02"+
		"\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B/\x03\x02"+
		"\x02\x02\u014C\u014D\x05\f\x07\x02\u014D1\x03\x02\x02\x02\u014E\u0151"+
		"\x05J&\x02\u014F\u0150\x07l\x02\x02\u0150\u0152\x05\x1E\x10\x02\u0151"+
		"\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u015B\x03\x02"+
		"\x02\x02\u0153\u0154\x07\x84\x02\x02\u0154\u0157\x05J&\x02\u0155\u0156"+
		"\x07l\x02\x02\u0156\u0158\x05\x1E\x10\x02\u0157\u0155\x03\x02\x02\x02"+
		"\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u0153\x03"+
		"\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B"+
		"\u015C\x03\x02\x02\x02\u015C3\x03\x02\x02\x02\u015D\u015B\x03\x02\x02"+
		"\x02\u015E\u0161\x05J&\x02\u015F\u0160\x07l\x02\x02\u0160\u0162\x05\x1E"+
		"\x10\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162"+
		"\u016B\x03\x02\x02\x02\u0163\u0164\x07\x84\x02\x02\u0164\u0167\x05J&\x02"+
		"\u0165\u0166\x07l\x02\x02\u0166\u0168\x05\x1E\x10\x02\u0167\u0165\x03"+
		"\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x03\x02\x02\x02\u0169"+
		"\u0163\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02"+
		"\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C5\x03\x02\x02\x02\u016D\u016B"+
		"\x03\x02\x02\x02\u016E\u016F\x07O\x02\x02\u016F\u0174\x05J&\x02\u0170"+
		"\u0171\x07\x84\x02\x02\u0171\u0173\x05J&\x02\u0172\u0170\x03\x02\x02\x02"+
		"\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03"+
		"\x02\x02\x02\u01757\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177"+
		"\u0178\x07N\x02\x02\u0178\u017B\x05J&\x02\u0179\u017A\x07l\x02\x02\u017A"+
		"\u017C\x05\x1E\x10\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02"+
		"\x02\x02\u017C\u0185\x03\x02\x02\x02\u017D\u017E\x07\x84\x02\x02\u017E"+
		"\u0181\x05J&\x02\u017F\u0180\x07l\x02\x02\u0180\u0182\x05\x1E\x10\x02"+
		"\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0184\x03"+
		"\x02\x02\x02\u0183\u017D\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185"+
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u01869\x03\x02\x02"+
		"\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07\t\x02\x02\u0189\u018A"+
		"\x05V,\x02\u018A\u018C\x07\n\x02\x02\u018B\u018D\x05P)\x02\u018C\u018B"+
		"\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u019A\x03\x02\x02\x02"+
		"\u018E\u018F\x07\t\x02\x02\u018F\u0191\x07\v\x02\x02\u0190\u0192\x05<"+
		"\x1F\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192"+
		"\u0193\x03\x02\x02\x02\u0193\u0194\x07\v\x02\x02\u0194\u0195\x05V,\x02"+
		"\u0195\u0197\x07\n\x02\x02\u0196\u0198\x05P)\x02\u0197\u0196\x03\x02\x02"+
		"\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0188"+
		"\x03\x02\x02\x02\u0199\u018E\x03\x02\x02\x02\u019A;\x03\x02\x02\x02\u019B"+
		"\u01A0\x05N(\x02\u019C\u019D\x07\x84\x02\x02\u019D\u019F\x05N(\x02\u019E"+
		"\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02"+
		"\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1=\x03\x02\x02\x02\u01A2\u01A0"+
		"\x03\x02\x02\x02\u01A3\u01A6\x05@!\x02\u01A4\u01A7\x05\x8CG\x02\u01A5"+
		"\u01A7\x07\x02\x02\x03\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02"+
		"\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01AA\x05\x8EH\x02\u01A9\u01A3"+
		"\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02"+
		"\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC?\x03\x02"+
		"\x02\x02\u01AD\u01BA\x05H%\x02\u01AE\u01BA\x05`1\x02\u01AF\u01BA\x05l"+
		"7\x02\u01B0\u01BA\x05v<\x02\u01B1\u01BA\x05z>\x02\u01B2\u01BA\x05\x80"+
		"A\x02\u01B3\u01BA\x05D#\x02\u01B4\u01BA\x058\x1D\x02\u01B5\u01BA\x05x"+
		"=\x02\u01B6\u01BA\x056\x1C\x02\u01B7\u01BA\x05\f\x07\x02\u01B8\u01BA\x05"+
		"B\"\x02\u01B9\u01AD\x03\x02\x02\x02\u01B9\u01AE\x03\x02\x02\x02\u01B9"+
		"\u01AF\x03\x02\x02\x02\u01B9\u01B0\x03\x02\x02\x02\u01B9\u01B1\x03\x02"+
		"\x02\x02\u01B9\u01B2\x03\x02\x02\x02\u01B9\u01B3\x03\x02\x02\x02\u01B9"+
		"\u01B4\x03\x02\x02\x02\u01B9\u01B5\x03\x02\x02\x02\u01B9\u01B6\x03\x02"+
		"\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01BA"+
		"A\x03\x02\x02\x02\u01BB\u01BC\x07)\x02\x02\u01BC\u01BD\x07+\x02\x02\u01BD"+
		"\u01BE\x07\x8E\x02\x02\u01BE\u01BF\x05> \x02\u01BF\u01C1\x07E\x02\x02"+
		"\u01C0\u01C2\x07+\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03"+
		"\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C5\x05\x8CG\x02\u01C4"+
		"\u01C3\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5C\x03\x02\x02"+
		"\x02\u01C6\u01C8\x07^\x02\x02\u01C7\u01C9\x05F$\x02\u01C8\u01C7\x03\x02"+
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9E\x03\x02\x02\x02\u01CA\u01CB"+
		"\x05J&\x02\u01CBG\x03\x02\x02\x02\u01CC\u01CD\x05J&\x02\u01CDI\x03\x02"+
		"\x02\x02\u01CE\u01CF\b&\x01\x02\u01CF\u01DE\x05L\'\x02\u01D0\u01D1\x05"+
		"L\'\x02\u01D1\u01D2\x07(\x02\x02\u01D2\u01D3\x05J&\r\u01D3\u01DE\x03\x02"+
		"\x02\x02\u01D4\u01D9\x07!\x02\x02\u01D5\u01D9\x07\"\x02\x02\u01D6\u01D9"+
		"\x07\x1E\x02\x02\u01D7\u01D9\x07\x1F\x02\x02\u01D8\u01D4\x03\x02\x02\x02"+
		"\u01D8\u01D5\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA"+
		"\x03\x02\x02\x02\u01DA\u01DE\x05J&\n\u01DB\u01DC\t\x06\x02\x02\u01DC\u01DE"+
		"\x05J&\t\u01DD\u01CE\x03\x02\x02\x02\u01DD\u01D0\x03\x02\x02\x02\u01DD"+
		"\u01D8\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u020E\x03\x02"+
		"\x02\x02\u01DF\u01E0\f\v\x02\x02\u01E0\u01E1\x07-\x02\x02\u01E1\u020D"+
		"\x05J&\f\u01E2\u01E7\f\b\x02\x02\u01E3\u01E8\x07#\x02\x02\u01E4\u01E8"+
		"\x07$\x02\x02\u01E5\u01E8\x07&\x02\x02\u01E6\u01E8\x07%\x02\x02\u01E7"+
		"\u01E3\x03\x02\x02\x02\u01E7\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02"+
		"\x02\x02\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9"+
		"\u020D\x05J&\t\u01EA\u01ED\f\x07\x02\x02\u01EB\u01EE\x07!\x02\x02\u01EC"+
		"\u01EE\x07\"\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02"+
		"\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u020D\x05J&\b\u01F0\u01F1\f\x06"+
		"\x02\x02\u01F1\u01F2\x07Z\x02\x02\u01F2\u020D\x05J&\x07\u01F3\u01F4\f"+
		"\x05\x02\x02\u01F4\u01F5\x07[\x02\x02\u01F5\u020D\x05J&\x06\u01F6\u0201"+
		"\f\x04\x02\x02\u01F7\u0202\x07\x17\x02\x02\u01F8\u0202\x07\x18\x02\x02"+
		"\u01F9\u0202\x07\x14\x02\x02\u01FA\u0202\x07\x15\x02\x02\u01FB\u0202\x07"+
		"\x16\x02\x02\u01FC\u0202\x07\x19\x02\x02\u01FD\u0202\x07\x1A\x02\x02\u01FE"+
		"\u0202\x07\x1B\x02\x02\u01FF\u0202\x07\x1C\x02\x02\u0200\u0202\x07\x1D"+
		"\x02\x02\u0201\u01F7\x03\x02\x02\x02\u0201\u01F8\x03\x02\x02\x02\u0201"+
		"\u01F9\x03\x02\x02\x02\u0201\u01FA\x03\x02\x02\x02\u0201\u01FB\x03\x02"+
		"\x02\x02\u0201\u01FC\x03\x02\x02\x02\u0201\u01FD\x03\x02\x02\x02\u0201"+
		"\u01FE\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0200\x03\x02"+
		"\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u020D\x05J&\x05\u0204\u0205"+
		"\f\x03\x02\x02\u0205\u0206\t\x07\x02\x02\u0206\u020D\x05J&\x04\u0207\u020A"+
		"\f\f\x02\x02\u0208\u020B\x07\x1E\x02\x02\u0209\u020B\x07\x1F\x02\x02\u020A"+
		"\u0208\x03\x02\x02\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020D\x03\x02"+
		"\x02\x02\u020C\u01DF\x03\x02\x02\x02\u020C\u01E2\x03\x02\x02\x02\u020C"+
		"\u01EA\x03\x02\x02\x02\u020C\u01F0\x03\x02\x02\x02\u020C\u01F3\x03\x02"+
		"\x02\x02\u020C\u01F6\x03\x02\x02\x02\u020C\u0204\x03\x02\x02\x02\u020C"+
		"\u0207\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02"+
		"\x02\x02\u020E\u020F\x03\x02\x02\x02\u020FK\x03\x02\x02\x02\u0210\u020E"+
		"\x03\x02\x02\x02\u0211\u0213\x07\'\x02\x02\u0212\u0211\x03\x02\x02\x02"+
		"\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07"+
		"\x7F\x02\x02\u0215\u0216\x05V,\x02\u0216\u0218\x07\x80\x02\x02\u0217\u0219"+
		"\x05P)\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219"+
		"\u02A6\x03\x02\x02\x02\u021A\u021C\x07\'\x02\x02\u021B\u021A\x03\x02\x02"+
		"\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E"+
		"\x05N(\x02\u021E\u021F\x05P)\x02\u021F\u02A6\x03\x02\x02\x02\u0220\u0222"+
		"\x07\'\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02"+
		"\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x05N(\x02\u0224\u0226\x05T+\x02"+
		"\u0225\u0227\x05P)\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02"+
		"\x02\x02\u0227\u02A6\x03\x02\x02\x02\u0228\u022A\x07\'\x02\x02\u0229\u0228"+
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02"+
		"\u022B\u022C\x05N(\x02\u022C\u022D\x07\x7F\x02\x02\u022D\u022E\x07\x80"+
		"\x02\x02\u022E\u022F\x07\x04\x02\x02\u022F\u0230\x05N(\x02\u0230\u0231"+
		"\x05T+\x02\u0231\u02A6\x03\x02\x02\x02\u0232\u0233\x05N(\x02\u0233\u0237"+
		"\x05T+\x02\u0234\u0236\x05R*\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0239"+
		"\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02"+
		"\u0238\u02A6\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023C\x07"+
		"\'\x02\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C"+
		"\u023D\x03\x02\x02\x02\u023D\u023F\x05N(\x02\u023E\u0240\x05P)\x02\u023F"+
		"\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0246\x03\x02"+
		"\x02\x02\u0241\u0242\x07\x04\x02\x02\u0242\u0244\x05N(\x02\u0243\u0245"+
		"\x05P)\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245"+
		"\u0247\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02\u0247\u0248\x03\x02"+
		"\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249"+
		"\u02A6\x03\x02\x02\x02\u024A\u024C\x07\'\x02\x02\u024B\u024A\x03\x02\x02"+
		"\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u0251"+
		"\x05N(\x02\u024E\u0250\x05P)\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0253"+
		"\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02"+
		"\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0256\x05"+
		"R*\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0255"+
		"\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u02A6\x03\x02\x02\x02"+
		"\u0259\u025B\x07\'\x02\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03"+
		"\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u02A6\x05N(\x02\u025D\u025E"+
		"\x07\'\x02\x02\u025E\u025F\x07_\x02\x02\u025F\u0264\x05N(\x02\u0260\u0261"+
		"\x07\x04\x02\x02\u0261\u0263\x05N(\x02\u0262\u0260\x03\x02\x02\x02\u0263"+
		"\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02"+
		"\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267"+
		"\u0268\x07l\x02\x02\u0268\u0269\x05N(\x02\u0269\u02A6\x03\x02\x02\x02"+
		"\u026A\u026C\x07\'\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03"+
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u02A6\x05\\/\x02\u026E"+
		"\u02A6\x05:\x1E\x02\u026F\u0274\x05^0\x02\u0270\u0273\x05R*\x02\u0271"+
		"\u0273\x05P)\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0271\x03\x02\x02\x02"+
		"\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03"+
		"\x02\x02\x02\u0275\u02A6\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277"+
		"\u0279\x07\'\x02\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03\x02\x02"+
		"\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x07(\x02\x02\u027B\u0286"+
		"\x05J&\x02\u027C\u0285\x05P)\x02\u027D\u0280\x07\x85\x02\x02\u027E\u0281"+
		"\x05T+\x02\u027F\u0281\x05J&\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F"+
		"\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0285\x03\x02\x02\x02"+
		"\u0282\u0285\x05R*\x02\u0283\u0285\x05T+\x02\u0284\u027C\x03\x02\x02\x02"+
		"\u0284\u027D\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03"+
		"\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286"+
		"\u0287\x03\x02\x02\x02\u0287\u02A6\x03\x02\x02\x02\u0288\u0286\x03\x02"+
		"\x02\x02\u0289\u028B\x07\'\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B"+
		"\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x05N(\x02\u028D"+
		"\u028E\x07(\x02\x02\u028E\u0294\x05J&\x02\u028F\u0293\x05P)\x02\u0290"+
		"\u0293\x07\x85\x02\x02\u0291\u0293\x05R*\x02\u0292\u028F\x03\x02\x02\x02"+
		"\u0292\u0290\x03\x02\x02\x02\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03"+
		"\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295"+
		"\u02A6\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u029B\x07\x81"+
		"\x02\x02\u0298\u029C\x05V,\x02\u0299\u029C\x07\x16\x02\x02\u029A\u029C"+
		"\x07\"\x02\x02\u029B\u0298\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02"+
		"\u029B\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02A6\x07"+
		"\x82\x02\x02\u029E\u029F\x07&\x02\x02\u029F\u02A0\x05J&\x02\u02A0\u02A1"+
		"\x07\x04\x02\x02\u02A1\u02A2\x05J&\x02\u02A2\u02A3\x07&\x02\x02\u02A3"+
		"\u02A6\x03\x02\x02\x02\u02A4\u02A6\x05\x06\x04\x02\u02A5\u0212\x03\x02"+
		"\x02\x02\u02A5\u021B\x03\x02\x02\x02\u02A5\u0221\x03\x02\x02\x02\u02A5"+
		"\u0229\x03\x02\x02\x02\u02A5\u0232\x03\x02\x02\x02\u02A5\u023B\x03\x02"+
		"\x02\x02\u02A5\u024B\x03\x02\x02\x02\u02A5\u025A\x03\x02\x02\x02\u02A5"+
		"\u025D\x03\x02\x02\x02\u02A5\u026B\x03\x02\x02\x02\u02A5\u026E\x03\x02"+
		"\x02\x02\u02A5\u026F\x03\x02\x02\x02\u02A5\u0278\x03\x02\x02\x02\u02A5"+
		"\u028A\x03\x02\x02\x02\u02A5\u0297\x03\x02\x02\x02\u02A5\u029E\x03\x02"+
		"\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6M\x03\x02\x02\x02\u02A7\u02A8"+
		"\t\b\x02\x02\u02A8O\x03\x02\x02\x02\u02A9\u02AA\x07\x81\x02\x02\u02AA"+
		"\u02AB\x05V,\x02\u02AB\u02AC\x07\x82\x02\x02\u02AC\u02AE\x03\x02\x02\x02"+
		"\u02AD\u02A9\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02AD\x03"+
		"\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0Q\x03\x02\x02\x02\u02B1"+
		"\u02B2\x07\x04\x02\x02\u02B2\u02B4\x05N(\x02\u02B3\u02B5\x05T+\x02\u02B4"+
		"\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02"+
		"\x02\x02\u02B6\u02B8\x05P)\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8"+
		"\x03\x02\x02\x02\u02B8S\x03\x02\x02\x02\u02B9\u02BA\x07\x7F\x02\x02\u02BA"+
		"\u02BB\x05V,\x02\u02BB\u02BC\x07\x80\x02\x02\u02BCU\x03\x02\x02\x02\u02BD"+
		"\u02BF\x07\x81\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03\x02"+
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x05X-\x02\u02C1\u02C3"+
		"\x07\x82\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02"+
		"\u02C3\u02CE\x03\x02\x02\x02\u02C4\u02C6\x07\x81\x02\x02\u02C5\u02C4\x03"+
		"\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7"+
		"\u02C8\x07\x84\x02\x02\u02C8\u02CA\x05X-\x02\u02C9\u02CB\x07\x82\x02\x02"+
		"\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CD\x03"+
		"\x02\x02\x02\u02CC\u02C5\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE"+
		"\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CFW\x03\x02\x02"+
		"\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D3\x05J&\x02\u02D2\u02D1\x03"+
		"\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3Y\x03\x02\x02\x02\u02D4"+
		"\u02D5\x07\x84\x02\x02\u02D5[\x03\x02\x02\x02\u02D6\u02DF\x07\x87\x02"+
		"\x02\u02D7\u02DF\x07\x8C\x02\x02\u02D8\u02DF\x07\x8D\x02\x02\u02D9\u02DF"+
		"\x070\x02\x02\u02DA\u02DF\x071\x02\x02\u02DB\u02DF\x072\x02\x02\u02DC"+
		"\u02DD\x07\'\x02\x02\u02DD\u02DF\x072\x02\x02\u02DE\u02D6\x03\x02\x02"+
		"\x02\u02DE\u02D7\x03\x02\x02\x02\u02DE\u02D8\x03\x02\x02\x02\u02DE\u02D9"+
		"\x03\x02\x02\x02\u02DE\u02DA\x03\x02\x02\x02\u02DE\u02DB\x03\x02\x02\x02"+
		"\u02DE\u02DC\x03\x02\x02\x02\u02DF]\x03\x02\x02\x02\u02E0\u02E1\x07>\x02"+
		"\x02\u02E1\u02E2\x07\x7F\x02\x02\u02E2\u02E3\x05J&\x02\u02E3\u02E5\x07"+
		"\x84\x02\x02\u02E4\u02E6\x05J&\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6"+
		"\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E9\x07\x84\x02\x02"+
		"\u02E8\u02EA\x05J&\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02"+
		"\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x07\x80\x02\x02\u02EC"+
		"_\x03\x02\x02\x02\u02ED\u02EE\x07>\x02\x02\u02EE\u02EF\x05b2\x02\u02EF"+
		"\u02F0\x05\x8CG\x02\u02F0\u02F8\x05j6\x02\u02F1\u02F2\x07=\x02\x02\u02F2"+
		"\u02F3\x05d3\x02\u02F3\u02F4\x05\x8CG\x02\u02F4\u02F5\x05f4\x02\u02F5"+
		"\u02F7\x03\x02\x02\x02\u02F6\u02F1\x03\x02\x02\x02\u02F7\u02FA\x03\x02"+
		"\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9"+
		"\u0301\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\x07?\x02"+
		"\x02\u02FC\u02FD\x05\x8CG\x02\u02FD\u02FE\x05h5\x02\u02FE\u0300\x03\x02"+
		"\x02\x02\u02FF\u02FB\x03\x02\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301"+
		"\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u030A\x03\x02"+
		"\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304\u030B\x07A\x02\x02\u0305\u030B"+
		"\x07B\x02\x02\u0306\u030B\x07E\x02\x02\u0307\u0308\x07E\x02\x02\u0308"+
		"\u030B\x07>\x02\x02\u0309\u030B\x07@\x02\x02\u030A\u0304\x03\x02\x02\x02"+
		"\u030A\u0305\x03\x02\x02\x02\u030A\u0306\x03\x02\x02\x02\u030A\u0307\x03"+
		"\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030Ba\x03\x02\x02\x02\u030C"+
		"\u030D\x05J&\x02\u030Dc\x03\x02\x02\x02\u030E\u030F\x05J&\x02\u030Fe\x03"+
		"\x02\x02\x02\u0310\u0312\x05> \x02\u0311\u0310\x03\x02\x02\x02\u0311\u0312"+
		"\x03\x02\x02\x02\u0312g\x03\x02\x02\x02\u0313\u0315\x05> \x02\u0314\u0313"+
		"\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315i\x03\x02\x02\x02\u0316"+
		"\u0318\x05> \x02\u0317\u0316\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02"+
		"\u0318k\x03\x02\x02\x02\u0319\u031A\x079\x02\x02\u031A\u031B\x05\x8AF"+
		"\x02\u031B\u031C\x07/\x02\x02\u031C\u031F\x05n8\x02\u031D\u031E\x07.\x02"+
		"\x02\u031E\u0320\x05J&\x02\u031F\u031D\x03\x02\x02\x02\u031F\u0320\x03"+
		"\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x05\x8CG\x02\u0322"+
		"\u0323\x05r:\x02\u0323\u0324\t\t\x02\x02\u0324\u0325\x05t;\x02\u0325\u0327"+
		"\x03\x02\x02\x02\u0326\u0328\x05\x8CG\x02\u0327\u0326\x03\x02\x02\x02"+
		"\u0327\u0328\x03\x02\x02\x02\u0328m\x03\x02\x02\x02\u0329\u032A\x05J&"+
		"\x02\u032Ao\x03\x02\x02\x02\u032B\u032C\x05J&\x02\u032Cq\x03\x02\x02\x02"+
		"\u032D\u032F\x05> \x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02"+
		"\x02\x02\u032Fs\x03\x02\x02\x02\u0330\u0332\x05J&\x02\u0331\u0330\x03"+
		"\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332u\x03\x02\x02\x02\u0333"+
		"\u0336\x07<\x02\x02\u0334\u0337\x05z>\x02\u0335\u0337\x05\x80A\x02\u0336"+
		"\u0334\x03\x02\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337w\x03\x02\x02"+
		"\x02\u0338\u0339\t\n\x02\x02\u0339y\x03\x02\x02\x02\u033A\u033B\x07;\x02"+
		"\x02\u033B\u033C\x05|?\x02\u033C\u033D\x05\x8CG\x02\u033D\u0347\x05~@"+
		"\x02\u033E\u0348\x07C\x02\x02\u033F\u0344\x07E\x02\x02\u0340\u0345\x07"+
		"<\x02\x02\u0341\u0345\x07;\x02\x02\u0342\u0343\x07\x7F\x02\x02\u0343\u0345"+
		"\x07\x80\x02\x02\u0344\u0340\x03\x02\x02\x02\u0344\u0341\x03\x02\x02\x02"+
		"\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0348\x03"+
		"\x02\x02\x02\u0346\u0348\x07\x11\x02\x02\u0347\u033E\x03\x02\x02\x02\u0347"+
		"\u033F\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u034A\x03\x02"+
		"\x02\x02\u0349\u034B\x05\x8CG\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B"+
		"\x03\x02\x02\x02\u034B{\x03\x02\x02\x02\u034C\u034D\x05J&\x02\u034D}\x03"+
		"\x02\x02\x02\u034E\u0350\x05> \x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350"+
		"\x03\x02\x02\x02\u0350\x7F\x03\x02\x02\x02\u0351\u0352\x07G\x02\x02\u0352"+
		"\u0358\x05\x8CG\x02\u0353\u0354\x07G\x02\x02\u0354\u0355\x05\x82B\x02"+
		"\u0355\u0356\x05\x8CG\x02\u0356\u0357\x05\x84C\x02\u0357\u0359\x03\x02"+
		"\x02\x02\u0358\u0353\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A"+
		"\u0358\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035E\x03\x02"+
		"\x02\x02\u035C\u035D\x07I\x02\x02\u035D\u035F\x05\x86D\x02\u035E\u035C"+
		"\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0366\x03\x02\x02\x02"+
		"\u0360\u0367\x07\x12\x02\x02\u0361\u0367\x07H\x02\x02\u0362\u0364\x07"+
		"E\x02\x02\u0363\u0365\t\v\x02\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365"+
		"\x03\x02\x02\x02\u0365\u0367\x03\x02\x02\x02\u0366\u0360\x03\x02\x02\x02"+
		"\u0366\u0361\x03\x02\x02\x02\u0366\u0362\x03\x02\x02\x02\u0367\u0369\x03"+
		"\x02\x02\x02\u0368\u036A\x05\x8CG\x02\u0369\u0368\x03\x02\x02\x02\u0369"+
		"\u036A\x03\x02\x02\x02\u036A\x81\x03\x02\x02\x02\u036B\u036C\x05J&\x02"+
		"\u036C\x83\x03\x02\x02\x02\u036D\u036F\x05> \x02\u036E\u036D\x03\x02\x02"+
		"\x02\u036E\u036F\x03\x02\x02\x02\u036F\x85\x03\x02\x02\x02\u0370\u0372"+
		"\x05> \x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372"+
		"\x87\x03\x02\x02\x02\u0373\u0374\x07\'\x02\x02\u0374\u0375\x05V,\x02\u0375"+
		"\x89\x03\x02\x02\x02\u0376\u0377\x05N(\x02\u0377\u0378\t\f\x02\x02\u0378"+
		"\u0379\x05J&\x02\u0379\x8B\x03\x02\x02\x02\u037A\u037C\x07\x8E\x02\x02"+
		"\u037B\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037B\x03"+
		"\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F"+
		"\u0381\x07\x13\x02\x02\u0380\u037B\x03\x02\x02\x02\u0380\u037F\x03\x02"+
		"\x02\x02\u0381\x8D\x03\x02\x02\x02\u0382\u0384\x07\x8E\x02\x02\u0383\u0382"+
		"\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02"+
		"\u0385\u0386\x03\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0389\x07"+
		"\x13\x02\x02\u0388\u0383\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389"+
		"\x8F\x03\x02\x02\x02~\x93\x97\xA2\xAB\xB7\xBD\xBF\xC7\xCE\xD2\xD6\xE2"+
		"\xF3\u0103\u0109\u010C\u0110\u0113\u0119\u011C\u0120\u0124\u012D\u0132"+
		"\u0137\u013D\u0148\u014A\u0151\u0157\u015B\u0161\u0167\u016B\u0174\u017B"+
		"\u0181\u0185\u018C\u0191\u0197\u0199\u01A0\u01A6\u01A9\u01AB\u01B9\u01C1"+
		"\u01C4\u01C8\u01D8\u01DD\u01E7\u01ED\u0201\u020A\u020C\u020E\u0212\u0218"+
		"\u021B\u0221\u0226\u0229\u0237\u023B\u023F\u0244\u0248\u024B\u0251\u0257"+
		"\u025A\u0264\u026B\u0272\u0274\u0278\u0280\u0284\u0286\u028A\u0292\u0294"+
		"\u029B\u02A5\u02AF\u02B4\u02B7\u02BE\u02C2\u02C5\u02CA\u02CE\u02D2\u02DE"+
		"\u02E5\u02E9\u02F8\u0301\u030A\u0311\u0314\u0317\u031F\u0327\u032E\u0331"+
		"\u0336\u0344\u0347\u034A\u034F\u035A\u035E\u0364\u0366\u0369\u036E\u0371"+
		"\u037D\u0380\u0385\u0388";
	public static readonly _serializedATN: string = Utils.join(
		[
			AdvplParser._serializedATNSegment0,
			AdvplParser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AdvplParser.__ATN) {
			AdvplParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AdvplParser._serializedATN));
		}

		return AdvplParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public sources(): SourcesContext[];
	public sources(i: number): SourcesContext;
	public sources(i?: number): SourcesContext | SourcesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourcesContext);
		} else {
			return this.getRuleContext(i, SourcesContext);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_program; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterProgram) listener.enterProgram(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitProgram) listener.exitProgram(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitProgram) return visitor.visitProgram(this);
		else return visitor.visitChildren(this);
	}
}


export class LinePreProcessorContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(AdvplParser.NUMBER, 0); }
	public STRING(): TerminalNode { return this.getToken(AdvplParser.STRING, 0); }
	public CRLF(): TerminalNode { return this.getToken(AdvplParser.CRLF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_linePreProcessor; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLinePreProcessor) listener.enterLinePreProcessor(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLinePreProcessor) listener.exitLinePreProcessor(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLinePreProcessor) return visitor.visitLinePreProcessor(this);
		else return visitor.visitChildren(this);
	}
}


export class IdMarkerContext extends ParserRuleContext {
	public MINOR(): TerminalNode { return this.getToken(AdvplParser.MINOR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public MAJOR(): TerminalNode { return this.getToken(AdvplParser.MAJOR, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_idMarker; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIdMarker) listener.enterIdMarker(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIdMarker) listener.exitIdMarker(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIdMarker) return visitor.visitIdMarker(this);
		else return visitor.visitChildren(this);
	}
}


export class SourcesContext extends ParserRuleContext {
	public linePreProcessor(): LinePreProcessorContext | undefined {
		return this.tryGetRuleContext(0, LinePreProcessorContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public funcDeclaration(): FuncDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclarationContext);
	}
	public staticVariable(): StaticVariableContext | undefined {
		return this.tryGetRuleContext(0, StaticVariableContext);
	}
	public crlfEmpty(): CrlfEmptyContext | undefined {
		return this.tryGetRuleContext(0, CrlfEmptyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_sources; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterSources) listener.enterSources(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitSources) listener.exitSources(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitSources) return visitor.visitSources(this);
		else return visitor.visitChildren(this);
	}
}


export class ModifiersFunctionContext extends ParserRuleContext {
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STATIC, 0); }
	public MAIN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MAIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_modifiersFunction; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterModifiersFunction) listener.enterModifiersFunction(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitModifiersFunction) listener.exitModifiersFunction(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitModifiersFunction) return visitor.visitModifiersFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticVariableContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(AdvplParser.STATIC, 0); }
	public staticVariableDeclarationStatement(): StaticVariableDeclarationStatementContext {
		return this.getRuleContext(0, StaticVariableDeclarationStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_staticVariable; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterStaticVariable) listener.enterStaticVariable(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitStaticVariable) listener.exitStaticVariable(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitStaticVariable) return visitor.visitStaticVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LPAREN);
		} else {
			return this.getToken(AdvplParser.LPAREN, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode { return this.getToken(AdvplParser.COMMA, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.RPAREN);
		} else {
			return this.getToken(AdvplParser.RPAREN, i);
		}
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EOF, 0); }
	public fromClass(): FromClassContext | undefined {
		return this.tryGetRuleContext(0, FromClassContext);
	}
	public dataDefinition(): DataDefinitionContext[];
	public dataDefinition(i: number): DataDefinitionContext;
	public dataDefinition(i?: number): DataDefinitionContext | DataDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataDefinitionContext);
		} else {
			return this.getRuleContext(i, DataDefinitionContext);
		}
	}
	public methodDefinition(): MethodDefinitionContext[];
	public methodDefinition(i: number): MethodDefinitionContext;
	public methodDefinition(i?: number): MethodDefinitionContext | MethodDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDefinitionContext);
		} else {
			return this.getRuleContext(i, MethodDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_classDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterClassDeclaration) listener.enterClassDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitClassDeclaration) listener.exitClassDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) return visitor.visitClassDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class DataDefinitionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public wsDataType(): WsDataTypeContext | undefined {
		return this.tryGetRuleContext(0, WsDataTypeContext);
	}
	public dataModifiers(): DataModifiersContext | undefined {
		return this.tryGetRuleContext(0, DataModifiersContext);
	}
	public dataDescription(): DataDescriptionContext | undefined {
		return this.tryGetRuleContext(0, DataDescriptionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_dataDefinition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDataDefinition) listener.enterDataDefinition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDataDefinition) listener.exitDataDefinition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDataDefinition) return visitor.visitDataDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class FromClassContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_fromClass; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterFromClass) listener.enterFromClass(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitFromClass) listener.exitFromClass(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitFromClass) return visitor.visitFromClass(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_methodDefinition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterMethodDefinition) listener.enterMethodDefinition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitMethodDefinition) listener.exitMethodDefinition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) return visitor.visitMethodDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class DataDescriptionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_dataDescription; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDataDescription) listener.enterDataDescription(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDataDescription) listener.exitDataDescription(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDataDescription) return visitor.visitDataDescription(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_dataType; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDataType) listener.enterDataType(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDataType) listener.exitDataType(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDataType) return visitor.visitDataType(this);
		else return visitor.visitChildren(this);
	}
}


export class DataModifiersContext extends ParserRuleContext {
	public C_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.C_HIDDEN, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.READONLY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_dataModifiers; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDataModifiers) listener.enterDataModifiers(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDataModifiers) listener.exitDataModifiers(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDataModifiers) return visitor.visitDataModifiers(this);
		else return visitor.visitChildren(this);
	}
}


export class ModifiersMethodContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(AdvplParser.STATIC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_modifiersMethod; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterModifiersMethod) listener.enterModifiersMethod(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitModifiersMethod) listener.exitModifiersMethod(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitModifiersMethod) return visitor.visitModifiersMethod(this);
		else return visitor.visitChildren(this);
	}
}


export class WsDataTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public OF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_wsDataType; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterWsDataType) listener.enterWsDataType(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitWsDataType) listener.exitWsDataType(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitWsDataType) return visitor.visitWsDataType(this);
		else return visitor.visitChildren(this);
	}
}


export class QsDeclarationContext extends ParserRuleContext {
	public QSSTRUCT(): TerminalNode { return this.getToken(AdvplParser.QSSTRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DESCRIPTION(): TerminalNode { return this.getToken(AdvplParser.DESCRIPTION, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MODULE(): TerminalNode { return this.getToken(AdvplParser.MODULE, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_qsDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterQsDeclaration) listener.enterQsDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitQsDeclaration) listener.exitQsDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitQsDeclaration) return visitor.visitQsDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class QsMethodContext extends ParserRuleContext {
	public QSMETHOD(): TerminalNode { return this.getToken(AdvplParser.QSMETHOD, 0); }
	public INIT(): TerminalNode { return this.getToken(AdvplParser.INIT, 0); }
	public QSSTRUCT(): TerminalNode { return this.getToken(AdvplParser.QSSTRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public initFuncOrMethod(): InitFuncOrMethodContext | undefined {
		return this.tryGetRuleContext(0, InitFuncOrMethodContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_qsMethod; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterQsMethod) listener.enterQsMethod(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitQsMethod) listener.exitQsMethod(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitQsMethod) return visitor.visitQsMethod(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncDeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext {
		return this.getRuleContext(0, FunctionDefinitionContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EOF, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public superCall(): SuperCallContext | undefined {
		return this.tryGetRuleContext(0, SuperCallContext);
	}
	public initFuncOrMethod(): InitFuncOrMethodContext | undefined {
		return this.tryGetRuleContext(0, InitFuncOrMethodContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_funcDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterFuncDeclaration) listener.enterFuncDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitFuncDeclaration) listener.exitFuncDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitFuncDeclaration) return visitor.visitFuncDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PROCEDURE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PROCEDURE, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.FUNCTION, 0); }
	public crlf(): CrlfContext | undefined {
		return this.tryGetRuleContext(0, CrlfContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EOF, 0); }
	public modifiersFunction(): ModifiersFunctionContext | undefined {
		return this.tryGetRuleContext(0, ModifiersFunctionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RPAREN, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_functionDefinition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterFunctionDefinition) listener.enterFunctionDefinition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitFunctionDefinition) listener.exitFunctionDefinition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) return visitor.visitFunctionDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class SuperCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_superCall; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterSuperCall) listener.enterSuperCall(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitSuperCall) listener.exitSuperCall(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitSuperCall) return visitor.visitSuperCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public BYREF(): TerminalNode[];
	public BYREF(i: number): TerminalNode;
	public BYREF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.BYREF);
		} else {
			return this.getToken(AdvplParser.BYREF, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_formalParameters; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterFormalParameters) listener.enterFormalParameters(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitFormalParameters) listener.exitFormalParameters(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitFormalParameters) return visitor.visitFormalParameters(this);
		else return visitor.visitChildren(this);
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
	public wsDataType(): WsDataTypeContext | undefined {
		return this.tryGetRuleContext(0, WsDataTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_formalParameter; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterFormalParameter) listener.enterFormalParameter(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitFormalParameter) listener.exitFormalParameter(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitFormalParameter) return visitor.visitFormalParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class InitFuncOrMethodContext extends ParserRuleContext {
	public crlfEmpty(): CrlfEmptyContext[];
	public crlfEmpty(i: number): CrlfEmptyContext;
	public crlfEmpty(i?: number): CrlfEmptyContext | CrlfEmptyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfEmptyContext);
		} else {
			return this.getRuleContext(i, CrlfEmptyContext);
		}
	}
	public linePreProcessor(): LinePreProcessorContext[];
	public linePreProcessor(i: number): LinePreProcessorContext;
	public linePreProcessor(i?: number): LinePreProcessorContext | LinePreProcessorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinePreProcessorContext);
		} else {
			return this.getRuleContext(i, LinePreProcessorContext);
		}
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext[];
	public localVariableDeclarationStatement(i: number): LocalVariableDeclarationStatementContext;
	public localVariableDeclarationStatement(i?: number): LocalVariableDeclarationStatementContext | LocalVariableDeclarationStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocalVariableDeclarationStatementContext);
		} else {
			return this.getRuleContext(i, LocalVariableDeclarationStatementContext);
		}
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public staticVariableBeforeLocal(): StaticVariableBeforeLocalContext[];
	public staticVariableBeforeLocal(i: number): StaticVariableBeforeLocalContext;
	public staticVariableBeforeLocal(i?: number): StaticVariableBeforeLocalContext | StaticVariableBeforeLocalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticVariableBeforeLocalContext);
		} else {
			return this.getRuleContext(i, StaticVariableBeforeLocalContext);
		}
	}
	public LOCAL(): TerminalNode[];
	public LOCAL(i: number): TerminalNode;
	public LOCAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LOCAL);
		} else {
			return this.getToken(AdvplParser.LOCAL, i);
		}
	}
	public LOCA(): TerminalNode[];
	public LOCA(i: number): TerminalNode;
	public LOCA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LOCA);
		} else {
			return this.getToken(AdvplParser.LOCA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_initFuncOrMethod; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterInitFuncOrMethod) listener.enterInitFuncOrMethod(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitInitFuncOrMethod) listener.exitInitFuncOrMethod(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitInitFuncOrMethod) return visitor.visitInitFuncOrMethod(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticVariableBeforeLocalContext extends ParserRuleContext {
	public staticVariable(): StaticVariableContext {
		return this.getRuleContext(0, StaticVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_staticVariableBeforeLocal; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterStaticVariableBeforeLocal) listener.enterStaticVariableBeforeLocal(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitStaticVariableBeforeLocal) listener.exitStaticVariableBeforeLocal(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitStaticVariableBeforeLocal) return visitor.visitStaticVariableBeforeLocal(this);
		else return visitor.visitChildren(this);
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.AS);
		} else {
			return this.getToken(AdvplParser.AS, i);
		}
	}
	public wsDataType(): WsDataTypeContext[];
	public wsDataType(i: number): WsDataTypeContext;
	public wsDataType(i?: number): WsDataTypeContext | WsDataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsDataTypeContext);
		} else {
			return this.getRuleContext(i, WsDataTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_localVariableDeclarationStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLocalVariableDeclarationStatement) listener.enterLocalVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLocalVariableDeclarationStatement) listener.exitLocalVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) return visitor.visitLocalVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticVariableDeclarationStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.AS);
		} else {
			return this.getToken(AdvplParser.AS, i);
		}
	}
	public wsDataType(): WsDataTypeContext[];
	public wsDataType(i: number): WsDataTypeContext;
	public wsDataType(i?: number): WsDataTypeContext | WsDataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsDataTypeContext);
		} else {
			return this.getRuleContext(i, WsDataTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_staticVariableDeclarationStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterStaticVariableDeclarationStatement) listener.enterStaticVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitStaticVariableDeclarationStatement) listener.exitStaticVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitStaticVariableDeclarationStatement) return visitor.visitStaticVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class PublicVariableDeclarationStatementContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode { return this.getToken(AdvplParser.PUBLIC, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_publicVariableDeclarationStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterPublicVariableDeclarationStatement) listener.enterPublicVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitPublicVariableDeclarationStatement) listener.exitPublicVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitPublicVariableDeclarationStatement) return visitor.visitPublicVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class PrivateVariableDeclarationStatementContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode { return this.getToken(AdvplParser.PRIVATE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.AS);
		} else {
			return this.getToken(AdvplParser.AS, i);
		}
	}
	public wsDataType(): WsDataTypeContext[];
	public wsDataType(i: number): WsDataTypeContext;
	public wsDataType(i?: number): WsDataTypeContext | WsDataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsDataTypeContext);
		} else {
			return this.getRuleContext(i, WsDataTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_privateVariableDeclarationStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterPrivateVariableDeclarationStatement) listener.enterPrivateVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitPrivateVariableDeclarationStatement) listener.exitPrivateVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitPrivateVariableDeclarationStatement) return visitor.visitPrivateVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayOrBlockInitializerContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_arrayOrBlockInitializer; }
 
	public copyFrom(ctx: ArrayOrBlockInitializerContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockInitializerContext extends ArrayOrBlockInitializerContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public blockParams(): BlockParamsContext | undefined {
		return this.tryGetRuleContext(0, BlockParamsContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(ctx: ArrayOrBlockInitializerContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterBlockInitializer) listener.enterBlockInitializer(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitBlockInitializer) listener.exitBlockInitializer(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitBlockInitializer) return visitor.visitBlockInitializer(this);
		else return visitor.visitChildren(this);
	}
}
export class ArrayInitializerContext extends ArrayOrBlockInitializerContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(ctx: ArrayOrBlockInitializerContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterArrayInitializer) listener.enterArrayInitializer(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitArrayInitializer) listener.exitArrayInitializer(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) return visitor.visitArrayInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockParamsContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_blockParams; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterBlockParams) listener.enterBlockParams(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitBlockParams) listener.exitBlockParams(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitBlockParams) return visitor.visitBlockParams(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public crlfEmpty(): CrlfEmptyContext[];
	public crlfEmpty(i: number): CrlfEmptyContext;
	public crlfEmpty(i?: number): CrlfEmptyContext | CrlfEmptyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfEmptyContext);
		} else {
			return this.getRuleContext(i, CrlfEmptyContext);
		}
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public EOF(): TerminalNode[];
	public EOF(i: number): TerminalNode;
	public EOF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.EOF);
		} else {
			return this.getToken(AdvplParser.EOF, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_block; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterBlock) listener.enterBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitBlock) listener.exitBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitBlock) return visitor.visitBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public docaseStatement(): DocaseStatementContext | undefined {
		return this.tryGetRuleContext(0, DocaseStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public privateVariableDeclarationStatement(): PrivateVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, PrivateVariableDeclarationStatementContext);
	}
	public exitOrLoopStatement(): ExitOrLoopStatementContext | undefined {
		return this.tryGetRuleContext(0, ExitOrLoopStatementContext);
	}
	public publicVariableDeclarationStatement(): PublicVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, PublicVariableDeclarationStatementContext);
	}
	public staticVariable(): StaticVariableContext | undefined {
		return this.tryGetRuleContext(0, StaticVariableContext);
	}
	public beginSequenceStatement(): BeginSequenceStatementContext | undefined {
		return this.tryGetRuleContext(0, BeginSequenceStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_statement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BeginSequenceStatementContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(AdvplParser.BEGIN, 0); }
	public SEQUENCE(): TerminalNode[];
	public SEQUENCE(i: number): TerminalNode;
	public SEQUENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.SEQUENCE);
		} else {
			return this.getToken(AdvplParser.SEQUENCE, i);
		}
	}
	public CRLF(): TerminalNode { return this.getToken(AdvplParser.CRLF, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public END(): TerminalNode { return this.getToken(AdvplParser.END, 0); }
	public crlf(): CrlfContext | undefined {
		return this.tryGetRuleContext(0, CrlfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_beginSequenceStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterBeginSequenceStatement) listener.enterBeginSequenceStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitBeginSequenceStatement) listener.exitBeginSequenceStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitBeginSequenceStatement) return visitor.visitBeginSequenceStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(AdvplParser.RETURN, 0); }
	public returnvalues(): ReturnvaluesContext | undefined {
		return this.tryGetRuleContext(0, ReturnvaluesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_returnStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterReturnStatement) listener.enterReturnStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitReturnStatement) listener.exitReturnStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitReturnStatement) return visitor.visitReturnStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnvaluesContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_returnvalues; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterReturnvalues) listener.enterReturnvalues(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitReturnvalues) listener.exitReturnvalues(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitReturnvalues) return visitor.visitReturnvalues(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_statementExpression; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterStatementExpression) listener.enterStatementExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitStatementExpression) listener.exitStatementExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitStatementExpression) return visitor.visitStatementExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_expression; }
 
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprPrimaryContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprPrimary) listener.enterExprPrimary(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprPrimary) listener.exitExprPrimary(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprPrimary) return visitor.visitExprPrimary(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprIncrPosContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PLUSPLUS, 0); }
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUSMINUS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprIncrPos) listener.enterExprIncrPos(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprIncrPos) listener.exitExprIncrPos(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprIncrPos) return visitor.visitExprIncrPos(this);
		else return visitor.visitChildren(this);
	}
}
export class AssignmentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUSEQUALS(): TerminalNode { return this.getToken(AdvplParser.PLUSEQUALS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterAssignment) listener.enterAssignment(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitAssignment) listener.exitAssignment(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitAssignment) return visitor.visitAssignment(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprIncrPreContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUS, 0); }
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PLUSPLUS, 0); }
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUSMINUS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprIncrPre) listener.enterExprIncrPre(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprIncrPre) listener.exitExprIncrPre(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprIncrPre) return visitor.visitExprIncrPre(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprPrimaryBadFormedContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public ECOMERCIAL(): TerminalNode { return this.getToken(AdvplParser.ECOMERCIAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprPrimaryBadFormed) listener.enterExprPrimaryBadFormed(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprPrimaryBadFormed) listener.exitExprPrimaryBadFormed(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprPrimaryBadFormed) return visitor.visitExprPrimaryBadFormed(this);
		else return visitor.visitChildren(this);
	}
}
export class AliasAssignmentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ALIASACCESS(): TerminalNode { return this.getToken(AdvplParser.ALIASACCESS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterAliasAssignment) listener.enterAliasAssignment(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitAliasAssignment) listener.exitAliasAssignment(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitAliasAssignment) return visitor.visitAliasAssignment(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprLogicalContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OR, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprLogical) listener.enterExprLogical(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprLogical) listener.exitExprLogical(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprLogical) return visitor.visitExprLogical(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprCompContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MINOREQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINOREQUALS, 0); }
	public MAJOREQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MAJOREQUALS, 0); }
	public MINOR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINOR, 0); }
	public MAJOR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MAJOR, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EQUALS, 0); }
	public DOUBLEEQUAL(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DOUBLEEQUAL, 0); }
	public DIF1(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIF1, 0); }
	public DIF2(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIF2, 0); }
	public DIF3(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIF3, 0); }
	public CONTIDO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.CONTIDO, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprComp) listener.enterExprComp(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprComp) listener.exitExprComp(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprComp) return visitor.visitExprComp(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprPlusContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprPlus) listener.enterExprPlus(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprPlus) listener.exitExprPlus(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprPlus) return visitor.visitExprPlus(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprNotContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NOT(): TerminalNode { return this.getToken(AdvplParser.NOT, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprNot) listener.enterExprNot(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprNot) listener.exitExprNot(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprNot) return visitor.visitExprNot(this);
		else return visitor.visitChildren(this);
	}
}
export class ExprMulContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIV, 0); }
	public PERC(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PERC, 0); }
	public POW(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.POW, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExprMul) listener.enterExprMul(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExprMul) listener.exitExprMul(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExprMul) return visitor.visitExprMul(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_primary; }
 
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class ObjectAttribAccessContext extends PrimaryContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext[];
	public arrayAccess(i: number): ArrayAccessContext;
	public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayAccessContext);
		} else {
			return this.getRuleContext(i, ArrayAccessContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterObjectAttribAccess) listener.enterObjectAttribAccess(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitObjectAttribAccess) listener.exitObjectAttribAccess(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitObjectAttribAccess) return visitor.visitObjectAttribAccess(this);
		else return visitor.visitChildren(this);
	}
}
export class CallContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCall) listener.enterCall(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCall) listener.exitCall(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCall) return visitor.visitCall(this);
		else return visitor.visitChildren(this);
	}
}
export class VarArrayAccessContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public arrayAccess(): ArrayAccessContext {
		return this.getRuleContext(0, ArrayAccessContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterVarArrayAccess) listener.enterVarArrayAccess(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitVarArrayAccess) listener.exitVarArrayAccess(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitVarArrayAccess) return visitor.visitVarArrayAccess(this);
		else return visitor.visitChildren(this);
	}
}
export class ParensContext extends PrimaryContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterParens) listener.enterParens(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitParens) listener.exitParens(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitParens) return visitor.visitParens(this);
		else return visitor.visitChildren(this);
	}
}
export class ObjectMethodAccessContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext[];
	public arrayAccess(i: number): ArrayAccessContext;
	public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayAccessContext);
		} else {
			return this.getRuleContext(i, ArrayAccessContext);
		}
	}
	public methodAccessLoop(): MethodAccessLoopContext[];
	public methodAccessLoop(i: number): MethodAccessLoopContext;
	public methodAccessLoop(i?: number): MethodAccessLoopContext | MethodAccessLoopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodAccessLoopContext);
		} else {
			return this.getRuleContext(i, MethodAccessLoopContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterObjectMethodAccess) listener.enterObjectMethodAccess(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitObjectMethodAccess) listener.exitObjectMethodAccess(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitObjectMethodAccess) return visitor.visitObjectMethodAccess(this);
		else return visitor.visitChildren(this);
	}
}
export class VarContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterVar) listener.enterVar(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitVar) listener.exitVar(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitVar) return visitor.visitVar(this);
		else return visitor.visitChildren(this);
	}
}
export class MacroExecucaoIdentifierContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ECOMERCIAL(): TerminalNode { return this.getToken(AdvplParser.ECOMERCIAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext[];
	public arrayAccess(i: number): ArrayAccessContext;
	public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayAccessContext);
		} else {
			return this.getRuleContext(i, ArrayAccessContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.DOT);
		} else {
			return this.getToken(AdvplParser.DOT, i);
		}
	}
	public methodAccessLoop(): MethodAccessLoopContext[];
	public methodAccessLoop(i: number): MethodAccessLoopContext;
	public methodAccessLoop(i?: number): MethodAccessLoopContext | MethodAccessLoopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodAccessLoopContext);
		} else {
			return this.getRuleContext(i, MethodAccessLoopContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterMacroExecucaoIdentifier) listener.enterMacroExecucaoIdentifier(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitMacroExecucaoIdentifier) listener.exitMacroExecucaoIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitMacroExecucaoIdentifier) return visitor.visitMacroExecucaoIdentifier(this);
		else return visitor.visitChildren(this);
	}
}
export class ExpressionListInConcheteContext extends PrimaryContext {
	public LBRACK(): TerminalNode { return this.getToken(AdvplParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(AdvplParser.RBRACK, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EQUALS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUS, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExpressionListInConchete) listener.enterExpressionListInConchete(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExpressionListInConchete) listener.exitExpressionListInConchete(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExpressionListInConchete) return visitor.visitExpressionListInConchete(this);
		else return visitor.visitChildren(this);
	}
}
export class ClassConstructorContext extends PrimaryContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterClassConstructor) listener.enterClassConstructor(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitClassConstructor) listener.exitClassConstructor(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitClassConstructor) return visitor.visitClassConstructor(this);
		else return visitor.visitChildren(this);
	}
}
export class MacroExecucaoContext extends PrimaryContext {
	public ECOMERCIAL(): TerminalNode { return this.getToken(AdvplParser.ECOMERCIAL, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	public arrayAccess(): ArrayAccessContext[];
	public arrayAccess(i: number): ArrayAccessContext;
	public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayAccessContext);
		} else {
			return this.getRuleContext(i, ArrayAccessContext);
		}
	}
	public methodAccessLoop(): MethodAccessLoopContext[];
	public methodAccessLoop(i: number): MethodAccessLoopContext;
	public methodAccessLoop(i?: number): MethodAccessLoopContext | MethodAccessLoopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodAccessLoopContext);
		} else {
			return this.getRuleContext(i, MethodAccessLoopContext);
		}
	}
	public arguments(): ArgumentsContext[];
	public arguments(i: number): ArgumentsContext;
	public arguments(i?: number): ArgumentsContext | ArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentsContext);
		} else {
			return this.getRuleContext(i, ArgumentsContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.DOT);
		} else {
			return this.getToken(AdvplParser.DOT, i);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterMacroExecucao) listener.enterMacroExecucao(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitMacroExecucao) listener.exitMacroExecucao(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitMacroExecucao) return visitor.visitMacroExecucao(this);
		else return visitor.visitChildren(this);
	}
}
export class IfCallContext extends PrimaryContext {
	public ifFunctioncall(): IfFunctioncallContext {
		return this.getRuleContext(0, IfFunctioncallContext);
	}
	public methodAccessLoop(): MethodAccessLoopContext[];
	public methodAccessLoop(i: number): MethodAccessLoopContext;
	public methodAccessLoop(i?: number): MethodAccessLoopContext | MethodAccessLoopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodAccessLoopContext);
		} else {
			return this.getRuleContext(i, MethodAccessLoopContext);
		}
	}
	public arrayAccess(): ArrayAccessContext[];
	public arrayAccess(i: number): ArrayAccessContext;
	public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayAccessContext);
		} else {
			return this.getRuleContext(i, ArrayAccessContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfCall) listener.enterIfCall(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfCall) listener.exitIfCall(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfCall) return visitor.visitIfCall(this);
		else return visitor.visitChildren(this);
	}
}
export class LitContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public ARROBA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARROBA, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLit) listener.enterLit(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLit) listener.exitLit(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLit) return visitor.visitLit(this);
		else return visitor.visitChildren(this);
	}
}
export class CallWithAttContext extends PrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public methodAccessLoop(): MethodAccessLoopContext[];
	public methodAccessLoop(i: number): MethodAccessLoopContext;
	public methodAccessLoop(i?: number): MethodAccessLoopContext | MethodAccessLoopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodAccessLoopContext);
		} else {
			return this.getRuleContext(i, MethodAccessLoopContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCallWithAtt) listener.enterCallWithAtt(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCallWithAtt) listener.exitCallWithAtt(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCallWithAtt) return visitor.visitCallWithAtt(this);
		else return visitor.visitChildren(this);
	}
}
export class AssumeContext extends PrimaryContext {
	public ARROBA(): TerminalNode { return this.getToken(AdvplParser.ARROBA, 0); }
	public ASSUME(): TerminalNode { return this.getToken(AdvplParser.ASSUME, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public AS(): TerminalNode { return this.getToken(AdvplParser.AS, 0); }
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterAssume) listener.enterAssume(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitAssume) listener.exitAssume(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitAssume) return visitor.visitAssume(this);
		else return visitor.visitChildren(this);
	}
}
export class EmbbedExpressionContext extends PrimaryContext {
	public PERC(): TerminalNode[];
	public PERC(i: number): TerminalNode;
	public PERC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.PERC);
		} else {
			return this.getToken(AdvplParser.PERC, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterEmbbedExpression) listener.enterEmbbedExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitEmbbedExpression) listener.exitEmbbedExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitEmbbedExpression) return visitor.visitEmbbedExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class XCommandExpressionContext extends PrimaryContext {
	public idMarker(): IdMarkerContext {
		return this.getRuleContext(0, IdMarkerContext);
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterXCommandExpression) listener.enterXCommandExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitXCommandExpression) listener.exitXCommandExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitXCommandExpression) return visitor.visitXCommandExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class ArrayOrBlockContext extends PrimaryContext {
	public arrayOrBlockInitializer(): ArrayOrBlockInitializerContext {
		return this.getRuleContext(0, ArrayOrBlockInitializerContext);
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterArrayOrBlock) listener.enterArrayOrBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitArrayOrBlock) listener.exitArrayOrBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitArrayOrBlock) return visitor.visitArrayOrBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.IDENTIFIER, 0); }
	public LOCA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LOCA, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LOCAL, 0); }
	public TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TEMPLATE, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.USER, 0); }
	public WEB(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.WEB, 0); }
	public INIT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.INIT, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MODULE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DELETE, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.GET, 0); }
	public PROJECT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PROJECT, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OF, 0); }
	public ASSUME(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ASSUME, 0); }
	public DESCRIPTION(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DESCRIPTION, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TO, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DATA, 0); }
	public PROCESS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PROCESS, 0); }
	public PERGUNTE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PERGUNTE, 0); }
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TITLE, 0); }
	public MAIN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MAIN, 0); }
	public SEQUENCE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.SEQUENCE, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TRANSACTION, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.BYREF, 0); }
	public POST(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.POST, 0); }
	public PUT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PUT, 0); }
	public REQUEST(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.REQUEST, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DEFAULT, 0); }
	public PATH(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PATH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.CLASS, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STEP, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_identifier; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LBRACK);
		} else {
			return this.getToken(AdvplParser.LBRACK, i);
		}
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.RBRACK);
		} else {
			return this.getToken(AdvplParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_arrayAccess; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterArrayAccess) listener.enterArrayAccess(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitArrayAccess) listener.exitArrayAccess(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitArrayAccess) return visitor.visitArrayAccess(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodAccessLoopContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_methodAccessLoop; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterMethodAccessLoop) listener.enterMethodAccessLoop(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitMethodAccessLoop) listener.exitMethodAccessLoop(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitMethodAccessLoop) return visitor.visitMethodAccessLoop(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_arguments; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterArguments) listener.enterArguments(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitArguments) listener.exitArguments(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitArguments) return visitor.visitArguments(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public optionalExpression(): OptionalExpressionContext[];
	public optionalExpression(i: number): OptionalExpressionContext;
	public optionalExpression(i?: number): OptionalExpressionContext | OptionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExpressionContext);
		} else {
			return this.getRuleContext(i, OptionalExpressionContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LBRACK);
		} else {
			return this.getToken(AdvplParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.RBRACK);
		} else {
			return this.getToken(AdvplParser.RBRACK, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_expressionList; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExpressionList) listener.enterExpressionList(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExpressionList) listener.exitExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_optionalExpression; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterOptionalExpression) listener.enterOptionalExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitOptionalExpression) listener.exitOptionalExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitOptionalExpression) return visitor.visitOptionalExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListComaContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(AdvplParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_expressionListComa; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExpressionListComa) listener.enterExpressionListComa(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExpressionListComa) listener.exitExpressionListComa(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExpressionListComa) return visitor.visitExpressionListComa(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_literal; }
 
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralArrobaNilContext extends LiteralContext {
	public ARROBA(): TerminalNode { return this.getToken(AdvplParser.ARROBA, 0); }
	public NIL(): TerminalNode { return this.getToken(AdvplParser.NIL, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralArrobaNil) listener.enterLiteralArrobaNil(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralArrobaNil) listener.exitLiteralArrobaNil(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralArrobaNil) return visitor.visitLiteralArrobaNil(this);
		else return visitor.visitChildren(this);
	}
}
export class LiteralStringDuplaContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(AdvplParser.STRING, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralStringDupla) listener.enterLiteralStringDupla(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralStringDupla) listener.exitLiteralStringDupla(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralStringDupla) return visitor.visitLiteralStringDupla(this);
		else return visitor.visitChildren(this);
	}
}
export class LiteralLogicalContext extends LiteralContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.FALSE, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralLogical) listener.enterLiteralLogical(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralLogical) listener.exitLiteralLogical(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralLogical) return visitor.visitLiteralLogical(this);
		else return visitor.visitChildren(this);
	}
}
export class LiteralNilContext extends LiteralContext {
	public NIL(): TerminalNode { return this.getToken(AdvplParser.NIL, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralNil) listener.enterLiteralNil(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralNil) listener.exitLiteralNil(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralNil) return visitor.visitLiteralNil(this);
		else return visitor.visitChildren(this);
	}
}
export class LiteralNumberContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(AdvplParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralNumber) listener.enterLiteralNumber(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralNumber) listener.exitLiteralNumber(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralNumber) return visitor.visitLiteralNumber(this);
		else return visitor.visitChildren(this);
	}
}
export class LiteralStringSimplesContext extends LiteralContext {
	public STRINGSIMPLE(): TerminalNode { return this.getToken(AdvplParser.STRINGSIMPLE, 0); }
	constructor(ctx: LiteralContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLiteralStringSimples) listener.enterLiteralStringSimples(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLiteralStringSimples) listener.exitLiteralStringSimples(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLiteralStringSimples) return visitor.visitLiteralStringSimples(this);
		else return visitor.visitChildren(this);
	}
}


export class IfFunctioncallContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(AdvplParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMMA);
		} else {
			return this.getToken(AdvplParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_ifFunctioncall; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfFunctioncall) listener.enterIfFunctioncall(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfFunctioncall) listener.exitIfFunctioncall(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfFunctioncall) return visitor.visitIfFunctioncall(this);
		else return visitor.visitChildren(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.IF);
		} else {
			return this.getToken(AdvplParser.IF, i);
		}
	}
	public ifCondition(): IfConditionContext {
		return this.getRuleContext(0, IfConditionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public ifBlock(): IfBlockContext {
		return this.getRuleContext(0, IfBlockContext);
	}
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDIF, 0); }
	public ENDIF_DOT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDIF_DOT, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	public ENDI(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDI, 0); }
	public ELSEIF(): TerminalNode[];
	public ELSEIF(i: number): TerminalNode;
	public ELSEIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ELSEIF);
		} else {
			return this.getToken(AdvplParser.ELSEIF, i);
		}
	}
	public elseIfCondition(): ElseIfConditionContext[];
	public elseIfCondition(i: number): ElseIfConditionContext;
	public elseIfCondition(i?: number): ElseIfConditionContext | ElseIfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfConditionContext);
		} else {
			return this.getRuleContext(i, ElseIfConditionContext);
		}
	}
	public elseIfBlock(): ElseIfBlockContext[];
	public elseIfBlock(i: number): ElseIfBlockContext;
	public elseIfBlock(i?: number): ElseIfBlockContext | ElseIfBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfBlockContext);
		} else {
			return this.getRuleContext(i, ElseIfBlockContext);
		}
	}
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ELSE);
		} else {
			return this.getToken(AdvplParser.ELSE, i);
		}
	}
	public elseBlock(): ElseBlockContext[];
	public elseBlock(i: number): ElseBlockContext;
	public elseBlock(i?: number): ElseBlockContext | ElseBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseBlockContext);
		} else {
			return this.getRuleContext(i, ElseBlockContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_ifStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfStatement) listener.enterIfStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfStatement) listener.exitIfStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfStatement) return visitor.visitIfStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_ifCondition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfCondition) listener.enterIfCondition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfCondition) listener.exitIfCondition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfCondition) return visitor.visitIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseIfConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_elseIfCondition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterElseIfCondition) listener.enterElseIfCondition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitElseIfCondition) listener.exitElseIfCondition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitElseIfCondition) return visitor.visitElseIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseIfBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_elseIfBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterElseIfBlock) listener.enterElseIfBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitElseIfBlock) listener.exitElseIfBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitElseIfBlock) return visitor.visitElseIfBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_elseBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterElseBlock) listener.enterElseBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitElseBlock) listener.exitElseBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitElseBlock) return visitor.visitElseBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class IfBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_ifBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfBlock) listener.enterIfBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfBlock) listener.exitIfBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfBlock) return visitor.visitIfBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(AdvplParser.FOR, 0); }
	public forInit(): ForInitContext {
		return this.getRuleContext(0, ForInitContext);
	}
	public TO(): TerminalNode { return this.getToken(AdvplParser.TO, 0); }
	public forToExpression(): ForToExpressionContext {
		return this.getRuleContext(0, ForToExpressionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public forBlock(): ForBlockContext {
		return this.getRuleContext(0, ForBlockContext);
	}
	public lostExpression(): LostExpressionContext | undefined {
		return this.tryGetRuleContext(0, LostExpressionContext);
	}
	public STEP(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STEP, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.NEXT, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	public ENDFOR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDFOR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_forStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterForStatement) listener.enterForStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitForStatement) listener.exitForStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitForStatement) return visitor.visitForStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForToExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_forToExpression; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterForToExpression) listener.enterForToExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitForToExpression) listener.exitForToExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitForToExpression) return visitor.visitForToExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ForStepExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_forStepExpression; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterForStepExpression) listener.enterForStepExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitForStepExpression) listener.exitForStepExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitForStepExpression) return visitor.visitForStepExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ForBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_forBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterForBlock) listener.enterForBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitForBlock) listener.exitForBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitForBlock) return visitor.visitForBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class LostExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_lostExpression; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterLostExpression) listener.enterLostExpression(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitLostExpression) listener.exitLostExpression(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitLostExpression) return visitor.visitLostExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(AdvplParser.DO, 0); }
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public docaseStatement(): DocaseStatementContext | undefined {
		return this.tryGetRuleContext(0, DocaseStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_doStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDoStatement) listener.enterDoStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDoStatement) listener.exitDoStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDoStatement) return visitor.visitDoStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ExitOrLoopStatementContext extends ParserRuleContext {
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EXIT, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LOOP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_exitOrLoopStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterExitOrLoopStatement) listener.enterExitOrLoopStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitExitOrLoopStatement) listener.exitExitOrLoopStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitExitOrLoopStatement) return visitor.visitExitOrLoopStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode[];
	public WHILE(i: number): TerminalNode;
	public WHILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.WHILE);
		} else {
			return this.getToken(AdvplParser.WHILE, i);
		}
	}
	public whileCondition(): WhileConditionContext {
		return this.getRuleContext(0, WhileConditionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public whileBlock(): WhileBlockContext {
		return this.getRuleContext(0, WhileBlockContext);
	}
	public ENDDO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDDO, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DO, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_whileStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterWhileStatement) listener.enterWhileStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitWhileStatement) listener.exitWhileStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitWhileStatement) return visitor.visitWhileStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_whileCondition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterWhileCondition) listener.enterWhileCondition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitWhileCondition) listener.exitWhileCondition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitWhileCondition) return visitor.visitWhileCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_whileBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterWhileBlock) listener.enterWhileBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitWhileBlock) listener.exitWhileBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitWhileBlock) return visitor.visitWhileBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class DocaseStatementContext extends ParserRuleContext {
	public CASE(): TerminalNode[];
	public CASE(i: number): TerminalNode;
	public CASE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CASE);
		} else {
			return this.getToken(AdvplParser.CASE, i);
		}
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public ENDCASE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDCASE, 0); }
	public caseCondition(): CaseConditionContext[];
	public caseCondition(i: number): CaseConditionContext;
	public caseCondition(i?: number): CaseConditionContext | CaseConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseConditionContext);
		} else {
			return this.getRuleContext(i, CaseConditionContext);
		}
	}
	public caseBlock(): CaseBlockContext[];
	public caseBlock(i: number): CaseBlockContext;
	public caseBlock(i?: number): CaseBlockContext | CaseBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseBlockContext);
		} else {
			return this.getRuleContext(i, CaseBlockContext);
		}
	}
	public OTHERWISE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OTHERWISE, 0); }
	public otherWiseBlock(): OtherWiseBlockContext | undefined {
		return this.tryGetRuleContext(0, OtherWiseBlockContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_docaseStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDocaseStatement) listener.enterDocaseStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDocaseStatement) listener.exitDocaseStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDocaseStatement) return visitor.visitDocaseStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CaseConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_caseCondition; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCaseCondition) listener.enterCaseCondition(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCaseCondition) listener.exitCaseCondition(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCaseCondition) return visitor.visitCaseCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_caseBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCaseBlock) listener.enterCaseBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCaseBlock) listener.exitCaseBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCaseBlock) return visitor.visitCaseBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class OtherWiseBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_otherWiseBlock; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterOtherWiseBlock) listener.enterOtherWiseBlock(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitOtherWiseBlock) listener.exitOtherWiseBlock(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitOtherWiseBlock) return visitor.visitOtherWiseBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrobaDefineContext extends ParserRuleContext {
	public ARROBA(): TerminalNode { return this.getToken(AdvplParser.ARROBA, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_arrobaDefine; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterArrobaDefine) listener.enterArrobaDefine(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitArrobaDefine) listener.exitArrobaDefine(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitArrobaDefine) return visitor.visitArrobaDefine(this);
		else return visitor.visitChildren(this);
	}
}


export class ForInitContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ATTRIB_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ATTRIB_OPERATOR, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EQUALS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_forInit; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterForInit) listener.enterForInit(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitForInit) listener.exitForInit(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitForInit) return visitor.visitForInit(this);
		else return visitor.visitChildren(this);
	}
}


export class CrlfContext extends ParserRuleContext {
	public CRLF(): TerminalNode[];
	public CRLF(i: number): TerminalNode;
	public CRLF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CRLF);
		} else {
			return this.getToken(AdvplParser.CRLF, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_crlf; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCrlf) listener.enterCrlf(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCrlf) listener.exitCrlf(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCrlf) return visitor.visitCrlf(this);
		else return visitor.visitChildren(this);
	}
}


export class CrlfEmptyContext extends ParserRuleContext {
	public CRLF(): TerminalNode[];
	public CRLF(i: number): TerminalNode;
	public CRLF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CRLF);
		} else {
			return this.getToken(AdvplParser.CRLF, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_crlfEmpty; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterCrlfEmpty) listener.enterCrlfEmpty(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitCrlfEmpty) listener.exitCrlfEmpty(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitCrlfEmpty) return visitor.visitCrlfEmpty(this);
		else return visitor.visitChildren(this);
	}
}


