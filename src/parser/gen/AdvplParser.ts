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
	public static readonly SET=1;
	public static readonly FILTER=2;
	public static readonly COLORS=3;
	public static readonly FONT=4;
	public static readonly CHECKBOX=5;
	public static readonly CHANGE=6;
	public static readonly VALID=7;
	public static readonly ON=8;
	public static readonly INIT=9;
	public static readonly ACTIVATE=10;
	public static readonly STYLE=11;
	public static readonly MSDIALOG=12;
	public static readonly SCROLLBOX=13;
	public static readonly BUTTON=14;
	public static readonly PROMPT=15;
	public static readonly ACTION=16;
	public static readonly MSPANEL=17;
	public static readonly PICTURE=18;
	public static readonly MSGET=19;
	public static readonly COMBOBOX=20;
	public static readonly ITEMS=21;
	public static readonly SIZE=22;
	public static readonly OF=23;
	public static readonly CH_OR=24;
	public static readonly PIXEL=25;
	public static readonly SAY=26;
	public static readonly CLASSEXCEPTION=27;
	public static readonly DEFAULT=28;
	public static readonly ARRAY=29;
	public static readonly BLOCK=30;
	public static readonly VAR=31;
	public static readonly CHARACTER=32;
	public static readonly DATE=33;
	public static readonly EXPECTED=34;
	public static readonly NUMERIC=35;
	public static readonly LOGICAL=36;
	public static readonly OBJECT=37;
	public static readonly OPTIONAL=38;
	public static readonly MESSAGE=39;
	public static readonly PARAMTYPE=40;
	public static readonly DEFINE=41;
	public static readonly MINOR=42;
	public static readonly MAJOR=43;
	public static readonly EQUALS=44;
	public static readonly MINOREQUALS=45;
	public static readonly MAJOREQUALS=46;
	public static readonly DOUBLEEQUAL=47;
	public static readonly PLUSPLUS=48;
	public static readonly MINUSMINUS=49;
	public static readonly EXCLAMATION=50;
	public static readonly ASSIGNMENT=51;
	public static readonly DIFF=52;
	public static readonly DIFF2=53;
	public static readonly PLUSEQUALS=54;
	public static readonly MINUSEQUALS=55;
	public static readonly MULTEQUALS=56;
	public static readonly DIVEQUALS=57;
	public static readonly PLUS=58;
	public static readonly MINUS=59;
	public static readonly MULT=60;
	public static readonly DIV=61;
	public static readonly POW=62;
	public static readonly PERC=63;
	public static readonly AND=64;
	public static readonly OR=65;
	public static readonly NOT=66;
	public static readonly TRUE=67;
	public static readonly FALSE=68;
	public static readonly NIL=69;
	public static readonly DOLAR=70;
	public static readonly SEMICOLON=71;
	public static readonly LCURLY=72;
	public static readonly RCURLY=73;
	public static readonly LPAREN=74;
	public static readonly RPAREN=75;
	public static readonly LBRACK=76;
	public static readonly RBRACK=77;
	public static readonly COMMA=78;
	public static readonly DOT=79;
	public static readonly COLONCOLON=80;
	public static readonly COLON=81;
	public static readonly AMPERSAND=82;
	public static readonly AT=83;
	public static readonly PIPE=84;
	public static readonly ALIASACCESS=85;
	public static readonly NUMBER=86;
	public static readonly ASSUME=87;
	public static readonly LOCAL=88;
	public static readonly PRIVATE=89;
	public static readonly PUBLIC=90;
	public static readonly STATIC=91;
	public static readonly USER=92;
	public static readonly WEB=93;
	public static readonly MAIN=94;
	public static readonly PROJECT=95;
	public static readonly TEMPLATE=96;
	public static readonly AS=97;
	public static readonly FOR=98;
	public static readonly NEXT=99;
	public static readonly STEP=100;
	public static readonly TO=101;
	public static readonly LOOP=102;
	public static readonly WHILE=103;
	public static readonly DO=104;
	public static readonly ELSEIF=105;
	public static readonly IF=106;
	public static readonly ELSE=107;
	public static readonly ENDIF=108;
	public static readonly ENDDO=109;
	public static readonly ENDFOR=110;
	public static readonly END=111;
	public static readonly EXIT=112;
	public static readonly CASE=113;
	public static readonly ENDCASE=114;
	public static readonly OTHERWISE=115;
	public static readonly FUNCTION=116;
	public static readonly RETURN=117;
	public static readonly CLASS=118;
	public static readonly ENDCLASS=119;
	public static readonly METHOD=120;
	public static readonly DATA=121;
	public static readonly FROM=122;
	public static readonly SELF=123;
	public static readonly INCLUDE=124;
	public static readonly IFDEF=125;
	public static readonly UNDEFINE=126;
	public static readonly IFNDEF=127;
	public static readonly PDEFINE=128;
	public static readonly ENDIFDEF=129;
	public static readonly ELSEDEF=130;
	public static readonly IDENTIFIER=131;
	public static readonly COMMENT=132;
	public static readonly LINE_COMMENT=133;
	public static readonly STRING=134;
	public static readonly STRINGSIMPLE=135;
	public static readonly CRLF=136;
	public static readonly WS=137;
	public static readonly CRLF_ESCAPED=138;
	public static readonly RULE_program = 0;
	public static readonly RULE_directives = 1;
	public static readonly RULE_includeDeclaration = 2;
	public static readonly RULE_ifDef = 3;
	public static readonly RULE_elseDef = 4;
	public static readonly RULE_endifDef = 5;
	public static readonly RULE_defineDeclaration = 6;
	public static readonly RULE_undefineDeclaration = 7;
	public static readonly RULE_classDeclaration = 8;
	public static readonly RULE_dataDefinition = 9;
	public static readonly RULE_methodDefinition = 10;
	public static readonly RULE_modifiersMethod = 11;
	public static readonly RULE_methodBody = 12;
	public static readonly RULE_funcDeclaration = 13;
	public static readonly RULE_superCall = 14;
	public static readonly RULE_initFuncOrMethod = 15;
	public static readonly RULE_variableDeclarationStatement = 16;
	public static readonly RULE_modifiersFunction = 17;
	public static readonly RULE_formalParameters = 18;
	public static readonly RULE_formalParameter = 19;
	public static readonly RULE_identifier = 20;
	public static readonly RULE_staticVariableDeclarationStatement = 21;
	public static readonly RULE_privateVariableDeclarationStatement = 22;
	public static readonly RULE_publicVariableDeclarationStatement = 23;
	public static readonly RULE_block = 24;
	public static readonly RULE_statement = 25;
	public static readonly RULE_ifStatement = 26;
	public static readonly RULE_forStatement = 27;
	public static readonly RULE_forInit = 28;
	public static readonly RULE_doStatement = 29;
	public static readonly RULE_whileStatement = 30;
	public static readonly RULE_docaseStatement = 31;
	public static readonly RULE_returnStatement = 32;
	public static readonly RULE_exitOrLoopStatement = 33;
	public static readonly RULE_expression = 34;
	public static readonly RULE_arguments = 35;
	public static readonly RULE_expressionList = 36;
	public static readonly RULE_optionalExpression = 37;
	public static readonly RULE_arrayAccess = 38;
	public static readonly RULE_methodAccessLoop = 39;
	public static readonly RULE_primary_ref = 40;
	public static readonly RULE_primary = 41;
	public static readonly RULE_atxCommand = 42;
	public static readonly RULE_arrayOrBlockInitializer = 43;
	public static readonly RULE_blockParams = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_ifFunctioncall = 46;
	public static readonly RULE_chStatement = 47;
	public static readonly RULE_defineCh = 48;
	public static readonly RULE_activateCh = 49;
	public static readonly RULE_setsCh = 50;
	public static readonly RULE_paramType = 51;
	public static readonly RULE_classException = 52;
	public static readonly RULE_crlf = 53;
	public static readonly RULE_crlfEmpty = 54;
	public static readonly ruleNames: string[] = [
		"program", "directives", "includeDeclaration", "ifDef", "elseDef", "endifDef", 
		"defineDeclaration", "undefineDeclaration", "classDeclaration", "dataDefinition", 
		"methodDefinition", "modifiersMethod", "methodBody", "funcDeclaration", 
		"superCall", "initFuncOrMethod", "variableDeclarationStatement", "modifiersFunction", 
		"formalParameters", "formalParameter", "identifier", "staticVariableDeclarationStatement", 
		"privateVariableDeclarationStatement", "publicVariableDeclarationStatement", 
		"block", "statement", "ifStatement", "forStatement", "forInit", "doStatement", 
		"whileStatement", "docaseStatement", "returnStatement", "exitOrLoopStatement", 
		"expression", "arguments", "expressionList", "optionalExpression", "arrayAccess", 
		"methodAccessLoop", "primary_ref", "primary", "atxCommand", "arrayOrBlockInitializer", 
		"blockParams", "literal", "ifFunctioncall", "chStatement", "defineCh", 
		"activateCh", "setsCh", "paramType", "classException", "crlf", "crlfEmpty"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'SET'", "'FILTER'", "'COLORS'", "'FONT'", "'CHECKBOX'", "'CHANGE'", 
		"'VALID'", "'ON'", "'INIT'", "'ACTIVATE'", "'STYLE'", "'MSDIALOG'", "'SCROLLBOX'", 
		"'BUTTON'", "'PROMPT'", "'ACTION'", "'MSPANEL'", "'PICTURE'", "'MSGET'", 
		"'COMBOBOX'", "'ITEMS'", "'SIZE'", "'OF'", "'OR'", "'PIXEL'", "'SAY'", 
		"'CLASSEXCEPTION'", "'DEFAULT'", "'ARRAY'", "'BLOCK'", "'VAR'", "'CHARACTER'", 
		"'DATE'", "'EXPECTED'", "'NUMERIC'", "'LOGICAL'", "'OBJECT'", "'OPTIONAL'", 
		"'MESSAGE'", "'PARAMTYPE'", "'DEFINE'", "'<'", "'>'", "'='", "'<='", "'>='", 
		"'=='", "'++'", "'--'", "'!'", "':='", "'!='", "'<>'", "'+='", "'-='", 
		"'*='", "'/='", "'+'", "'-'", "'*'", "'/'", "'**'", "'%'", "'.AND.'", 
		"'.OR.'", "'.NOT.'", "'.T.'", "'.F.'", "'NIL'", "'$'", "';'", "'{'", "'}'", 
		"'('", "')'", "'['", "']'", "','", "'.'", "'::'", "':'", "'&'", "'@'", 
		"'|'", "'->'", undefined, "'ASSUME'", "'LOCAL'", "'PRIVATE'", "'PUBLIC'", 
		"'STATIC'", "'USER'", "'WEB'", "'MAIN'", "'PROJECT'", "'TEMPLATE'", "'AS'", 
		"'FOR'", "'NEXT'", "'STEP'", "'TO'", "'LOOP'", "'WHILE'", "'DO'", "'ELSEIF'", 
		"'IF'", "'ELSE'", "'ENDIF'", "'ENDDO'", "'ENDFOR'", "'END'", "'EXIT'", 
		"'CASE'", "'ENDCASE'", "'OTHERWISE'", "'FUNCTION'", "'RETURN'", "'CLASS'", 
		"'ENDCLASS'", "'METHOD'", "'DATA'", "'FROM'", "'SELF'", "'#INCLUDE'", 
		"'#IFDEF'", "'#UNDEF'", "'#IFNDEF'", "'#DEFINE'", "'#ENDIF'", "'#ELSE'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "SET", "FILTER", "COLORS", "FONT", "CHECKBOX", "CHANGE", "VALID", 
		"ON", "INIT", "ACTIVATE", "STYLE", "MSDIALOG", "SCROLLBOX", "BUTTON", 
		"PROMPT", "ACTION", "MSPANEL", "PICTURE", "MSGET", "COMBOBOX", "ITEMS", 
		"SIZE", "OF", "CH_OR", "PIXEL", "SAY", "CLASSEXCEPTION", "DEFAULT", "ARRAY", 
		"BLOCK", "VAR", "CHARACTER", "DATE", "EXPECTED", "NUMERIC", "LOGICAL", 
		"OBJECT", "OPTIONAL", "MESSAGE", "PARAMTYPE", "DEFINE", "MINOR", "MAJOR", 
		"EQUALS", "MINOREQUALS", "MAJOREQUALS", "DOUBLEEQUAL", "PLUSPLUS", "MINUSMINUS", 
		"EXCLAMATION", "ASSIGNMENT", "DIFF", "DIFF2", "PLUSEQUALS", "MINUSEQUALS", 
		"MULTEQUALS", "DIVEQUALS", "PLUS", "MINUS", "MULT", "DIV", "POW", "PERC", 
		"AND", "OR", "NOT", "TRUE", "FALSE", "NIL", "DOLAR", "SEMICOLON", "LCURLY", 
		"RCURLY", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COMMA", "DOT", "COLONCOLON", 
		"COLON", "AMPERSAND", "AT", "PIPE", "ALIASACCESS", "NUMBER", "ASSUME", 
		"LOCAL", "PRIVATE", "PUBLIC", "STATIC", "USER", "WEB", "MAIN", "PROJECT", 
		"TEMPLATE", "AS", "FOR", "NEXT", "STEP", "TO", "LOOP", "WHILE", "DO", 
		"ELSEIF", "IF", "ELSE", "ENDIF", "ENDDO", "ENDFOR", "END", "EXIT", "CASE", 
		"ENDCASE", "OTHERWISE", "FUNCTION", "RETURN", "CLASS", "ENDCLASS", "METHOD", 
		"DATA", "FROM", "SELF", "INCLUDE", "IFDEF", "UNDEFINE", "IFNDEF", "PDEFINE", 
		"ENDIFDEF", "ELSEDEF", "IDENTIFIER", "COMMENT", "LINE_COMMENT", "STRING", 
		"STRINGSIMPLE", "CRLF", "WS", "CRLF_ESCAPED"
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
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (AdvplParser.SEMICOLON - 71)) | (1 << (AdvplParser.STATIC - 71)) | (1 << (AdvplParser.USER - 71)) | (1 << (AdvplParser.WEB - 71)) | (1 << (AdvplParser.MAIN - 71)) | (1 << (AdvplParser.PROJECT - 71)) | (1 << (AdvplParser.TEMPLATE - 71)))) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (AdvplParser.FUNCTION - 116)) | (1 << (AdvplParser.CLASS - 116)) | (1 << (AdvplParser.METHOD - 116)) | (1 << (AdvplParser.INCLUDE - 116)) | (1 << (AdvplParser.IFDEF - 116)) | (1 << (AdvplParser.UNDEFINE - 116)) | (1 << (AdvplParser.IFNDEF - 116)) | (1 << (AdvplParser.PDEFINE - 116)) | (1 << (AdvplParser.ENDIFDEF - 116)) | (1 << (AdvplParser.ELSEDEF - 116)) | (1 << (AdvplParser.CRLF - 116)))) !== 0)) {
				{
				this.state = 116;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
				case 1:
					{
					this.state = 110;
					this.directives();
					}
					break;

				case 2:
					{
					this.state = 111;
					this.funcDeclaration();
					}
					break;

				case 3:
					{
					this.state = 112;
					this.staticVariableDeclarationStatement();
					}
					break;

				case 4:
					{
					this.state = 113;
					this.methodBody();
					}
					break;

				case 5:
					{
					this.state = 114;
					this.classDeclaration();
					}
					break;

				case 6:
					{
					this.state = 115;
					this.crlfEmpty();
					}
					break;
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				{
				this.state = 121;
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
	public directives(): DirectivesContext {
		let _localctx: DirectivesContext = new DirectivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AdvplParser.RULE_directives);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.IFDEF:
			case AdvplParser.IFNDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.ifDef();
				}
				break;
			case AdvplParser.ELSEDEF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.elseDef();
				}
				break;
			case AdvplParser.ENDIFDEF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.endifDef();
				}
				break;
			case AdvplParser.UNDEFINE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.undefineDeclaration();
				}
				break;
			case AdvplParser.PDEFINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				this.defineDeclaration();
				}
				break;
			case AdvplParser.INCLUDE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.includeDeclaration();
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
	public includeDeclaration(): IncludeDeclarationContext {
		let _localctx: IncludeDeclarationContext = new IncludeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AdvplParser.RULE_includeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(AdvplParser.INCLUDE);
			this.state = 133;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.STRING || _la===AdvplParser.STRINGSIMPLE) ) {
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
	public ifDef(): IfDefContext {
		let _localctx: IfDefContext = new IfDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AdvplParser.RULE_ifDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 135;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.IFDEF || _la===AdvplParser.IFNDEF) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 136;
			this.expression(0);
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
	public elseDef(): ElseDefContext {
		let _localctx: ElseDefContext = new ElseDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AdvplParser.RULE_elseDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(AdvplParser.ELSEDEF);
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
	public endifDef(): EndifDefContext {
		let _localctx: EndifDefContext = new EndifDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AdvplParser.RULE_endifDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(AdvplParser.ENDIFDEF);
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
	public defineDeclaration(): DefineDeclarationContext {
		let _localctx: DefineDeclarationContext = new DefineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AdvplParser.RULE_defineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(AdvplParser.PDEFINE);
			{
			this.state = 143;
			this.expression(0);
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
			case 1:
				{
				this.state = 144;
				this.match(AdvplParser.LPAREN);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)))) !== 0) || _la===AdvplParser.COLONCOLON || _la===AdvplParser.END || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (AdvplParser.DATA - 121)) | (1 << (AdvplParser.FROM - 121)) | (1 << (AdvplParser.SELF - 121)) | (1 << (AdvplParser.IDENTIFIER - 121)))) !== 0)) {
					{
					this.state = 145;
					this.formalParameters();
					}
				}

				this.state = 148;
				this.match(AdvplParser.RPAREN);
				}
				break;
			}
			}
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)) | (1 << (AdvplParser.PLUSPLUS - 32)) | (1 << (AdvplParser.MINUSMINUS - 32)) | (1 << (AdvplParser.EXCLAMATION - 32)) | (1 << (AdvplParser.PLUS - 32)) | (1 << (AdvplParser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AdvplParser.NOT - 66)) | (1 << (AdvplParser.TRUE - 66)) | (1 << (AdvplParser.FALSE - 66)) | (1 << (AdvplParser.NIL - 66)) | (1 << (AdvplParser.LCURLY - 66)) | (1 << (AdvplParser.LPAREN - 66)) | (1 << (AdvplParser.COLONCOLON - 66)) | (1 << (AdvplParser.AMPERSAND - 66)) | (1 << (AdvplParser.AT - 66)) | (1 << (AdvplParser.NUMBER - 66)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.IF - 106)) | (1 << (AdvplParser.END - 106)) | (1 << (AdvplParser.DATA - 106)) | (1 << (AdvplParser.FROM - 106)) | (1 << (AdvplParser.SELF - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)) | (1 << (AdvplParser.STRING - 106)) | (1 << (AdvplParser.STRINGSIMPLE - 106)))) !== 0)) {
				{
				this.state = 151;
				this.expression(0);
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.COMMA) {
					{
					this.state = 152;
					this.match(AdvplParser.COMMA);
					this.state = 153;
					this.expression(0);
					}
				}

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
	public undefineDeclaration(): UndefineDeclarationContext {
		let _localctx: UndefineDeclarationContext = new UndefineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AdvplParser.RULE_undefineDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(AdvplParser.UNDEFINE);
			this.state = 159;
			this.identifier();
			this.state = 160;
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AdvplParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(AdvplParser.CLASS);
			this.state = 163;
			this.identifier();
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.FROM) {
				{
				this.state = 164;
				this.match(AdvplParser.FROM);
				this.state = 165;
				this.identifier();
				}
			}

			this.state = 168;
			this.crlf();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.METHOD || _la===AdvplParser.DATA) {
				{
				this.state = 171;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AdvplParser.DATA:
					{
					this.state = 169;
					this.dataDefinition();
					}
					break;
				case AdvplParser.METHOD:
					{
					this.state = 170;
					this.methodDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(AdvplParser.ENDCLASS);
			this.state = 177;
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
	public dataDefinition(): DataDefinitionContext {
		let _localctx: DataDefinitionContext = new DataDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AdvplParser.RULE_dataDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(AdvplParser.DATA);
			this.state = 180;
			this.identifier();
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 181;
				this.match(AdvplParser.AS);
				this.state = 182;
				this.identifier();
				}
			}

			this.state = 185;
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
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AdvplParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(AdvplParser.METHOD);
			this.state = 188;
			this.identifier();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LPAREN) {
				{
				this.state = 189;
				this.arguments();
				}
			}

			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 192;
				this.match(AdvplParser.AS);
				this.state = 193;
				this.identifier();
				}
			}

			this.state = 196;
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
	public modifiersMethod(): ModifiersMethodContext {
		let _localctx: ModifiersMethodContext = new ModifiersMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AdvplParser.RULE_modifiersMethod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AdvplParser.RULE_methodBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.STATIC) {
				{
				this.state = 200;
				this.modifiersMethod();
				}
			}

			this.state = 203;
			this.match(AdvplParser.METHOD);
			this.state = 204;
			this.identifier();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LPAREN) {
				{
				this.state = 205;
				this.arguments();
				}
			}

			this.state = 208;
			this.match(AdvplParser.CLASS);
			this.state = 209;
			this.identifier();
			this.state = 210;
			this.crlf();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.COLON) {
				{
				this.state = 211;
				this.superCall();
				}
			}

			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LOCAL) {
				{
				this.state = 214;
				this.initFuncOrMethod();
				}
			}

			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.EOF:
				{
				this.state = 217;
				this.match(AdvplParser.EOF);
				}
				break;
			case AdvplParser.SET:
			case AdvplParser.FILTER:
			case AdvplParser.VALID:
			case AdvplParser.INIT:
			case AdvplParser.ACTIVATE:
			case AdvplParser.CLASSEXCEPTION:
			case AdvplParser.DEFAULT:
			case AdvplParser.ARRAY:
			case AdvplParser.BLOCK:
			case AdvplParser.CHARACTER:
			case AdvplParser.DATE:
			case AdvplParser.NUMERIC:
			case AdvplParser.LOGICAL:
			case AdvplParser.OBJECT:
			case AdvplParser.PARAMTYPE:
			case AdvplParser.DEFINE:
			case AdvplParser.PLUSPLUS:
			case AdvplParser.MINUSMINUS:
			case AdvplParser.EXCLAMATION:
			case AdvplParser.PLUS:
			case AdvplParser.MINUS:
			case AdvplParser.NOT:
			case AdvplParser.TRUE:
			case AdvplParser.FALSE:
			case AdvplParser.NIL:
			case AdvplParser.SEMICOLON:
			case AdvplParser.LCURLY:
			case AdvplParser.LPAREN:
			case AdvplParser.COLONCOLON:
			case AdvplParser.AMPERSAND:
			case AdvplParser.AT:
			case AdvplParser.NUMBER:
			case AdvplParser.PRIVATE:
			case AdvplParser.PUBLIC:
			case AdvplParser.STATIC:
			case AdvplParser.FOR:
			case AdvplParser.LOOP:
			case AdvplParser.WHILE:
			case AdvplParser.DO:
			case AdvplParser.IF:
			case AdvplParser.END:
			case AdvplParser.EXIT:
			case AdvplParser.RETURN:
			case AdvplParser.DATA:
			case AdvplParser.FROM:
			case AdvplParser.SELF:
			case AdvplParser.INCLUDE:
			case AdvplParser.IFDEF:
			case AdvplParser.UNDEFINE:
			case AdvplParser.IFNDEF:
			case AdvplParser.PDEFINE:
			case AdvplParser.ENDIFDEF:
			case AdvplParser.ELSEDEF:
			case AdvplParser.IDENTIFIER:
			case AdvplParser.STRING:
			case AdvplParser.STRINGSIMPLE:
			case AdvplParser.CRLF:
				{
				this.state = 218;
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
	public funcDeclaration(): FuncDeclarationContext {
		let _localctx: FuncDeclarationContext = new FuncDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AdvplParser.RULE_funcDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (AdvplParser.STATIC - 91)) | (1 << (AdvplParser.USER - 91)) | (1 << (AdvplParser.WEB - 91)) | (1 << (AdvplParser.MAIN - 91)) | (1 << (AdvplParser.PROJECT - 91)) | (1 << (AdvplParser.TEMPLATE - 91)))) !== 0)) {
				{
				this.state = 221;
				this.modifiersFunction();
				}
			}

			this.state = 224;
			this.match(AdvplParser.FUNCTION);
			this.state = 225;
			this.identifier();
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LPAREN) {
				{
				this.state = 226;
				this.match(AdvplParser.LPAREN);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)))) !== 0) || _la===AdvplParser.COLONCOLON || _la===AdvplParser.END || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (AdvplParser.DATA - 121)) | (1 << (AdvplParser.FROM - 121)) | (1 << (AdvplParser.SELF - 121)) | (1 << (AdvplParser.IDENTIFIER - 121)))) !== 0)) {
					{
					this.state = 227;
					this.formalParameters();
					}
				}

				this.state = 230;
				this.match(AdvplParser.RPAREN);
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 233;
				this.match(AdvplParser.AS);
				this.state = 234;
				this.identifier();
				}
			}

			this.state = 237;
			this.crlf();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.LOCAL) {
				{
				this.state = 238;
				this.initFuncOrMethod();
				}
			}

			this.state = 241;
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
	public superCall(): SuperCallContext {
		let _localctx: SuperCallContext = new SuperCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AdvplParser.RULE_superCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(AdvplParser.COLON);
			this.state = 244;
			this.identifier();
			{
			this.state = 245;
			this.match(AdvplParser.LPAREN);
			this.state = 246;
			this.expressionList();
			this.state = 247;
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
	public initFuncOrMethod(): InitFuncOrMethodContext {
		let _localctx: InitFuncOrMethodContext = new InitFuncOrMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AdvplParser.RULE_initFuncOrMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 249;
				this.match(AdvplParser.LOCAL);
				this.state = 250;
				this.variableDeclarationStatement();
				this.state = 251;
				this.crlf();
				}
				}
				this.state = 255; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===AdvplParser.LOCAL );
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
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AdvplParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.expression(0);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 258;
				this.match(AdvplParser.AS);
				this.state = 259;
				this.identifier();
				}
			}

			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 262;
				this.match(AdvplParser.COMMA);
				this.state = 263;
				this.expression(0);
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AS) {
					{
					this.state = 264;
					this.match(AdvplParser.AS);
					this.state = 265;
					this.identifier();
					}
				}

				}
				}
				this.state = 272;
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
	public modifiersFunction(): ModifiersFunctionContext {
		let _localctx: ModifiersFunctionContext = new ModifiersFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AdvplParser.RULE_modifiersFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			_la = this._input.LA(1);
			if ( !(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (AdvplParser.STATIC - 91)) | (1 << (AdvplParser.USER - 91)) | (1 << (AdvplParser.WEB - 91)) | (1 << (AdvplParser.MAIN - 91)) | (1 << (AdvplParser.PROJECT - 91)) | (1 << (AdvplParser.TEMPLATE - 91)))) !== 0)) ) {
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
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AdvplParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.formalParameter();
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 276;
				this.match(AdvplParser.COMMA);
				this.state = 277;
				this.formalParameter();
				}
				}
				this.state = 282;
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
		this.enterRule(_localctx, 38, AdvplParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.identifier();
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.AS) {
				{
				this.state = 284;
				this.match(AdvplParser.AS);
				this.state = 285;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AdvplParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)))) !== 0) || _la===AdvplParser.COLONCOLON || _la===AdvplParser.END || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (AdvplParser.DATA - 121)) | (1 << (AdvplParser.FROM - 121)) | (1 << (AdvplParser.SELF - 121)) | (1 << (AdvplParser.IDENTIFIER - 121)))) !== 0)) ) {
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
	public staticVariableDeclarationStatement(): StaticVariableDeclarationStatementContext {
		let _localctx: StaticVariableDeclarationStatementContext = new StaticVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AdvplParser.RULE_staticVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(AdvplParser.STATIC);
			this.state = 291;
			this.variableDeclarationStatement();
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
		this.enterRule(_localctx, 44, AdvplParser.RULE_privateVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(AdvplParser.PRIVATE);
			this.state = 294;
			this.variableDeclarationStatement();
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
		this.enterRule(_localctx, 46, AdvplParser.RULE_publicVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(AdvplParser.PUBLIC);
			this.state = 297;
			this.variableDeclarationStatement();
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
		this.enterRule(_localctx, 48, AdvplParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 305;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AdvplParser.SET:
					case AdvplParser.FILTER:
					case AdvplParser.VALID:
					case AdvplParser.INIT:
					case AdvplParser.ACTIVATE:
					case AdvplParser.CLASSEXCEPTION:
					case AdvplParser.DEFAULT:
					case AdvplParser.ARRAY:
					case AdvplParser.BLOCK:
					case AdvplParser.CHARACTER:
					case AdvplParser.DATE:
					case AdvplParser.NUMERIC:
					case AdvplParser.LOGICAL:
					case AdvplParser.OBJECT:
					case AdvplParser.PARAMTYPE:
					case AdvplParser.DEFINE:
					case AdvplParser.PLUSPLUS:
					case AdvplParser.MINUSMINUS:
					case AdvplParser.EXCLAMATION:
					case AdvplParser.PLUS:
					case AdvplParser.MINUS:
					case AdvplParser.NOT:
					case AdvplParser.TRUE:
					case AdvplParser.FALSE:
					case AdvplParser.NIL:
					case AdvplParser.LCURLY:
					case AdvplParser.LPAREN:
					case AdvplParser.COLONCOLON:
					case AdvplParser.AMPERSAND:
					case AdvplParser.AT:
					case AdvplParser.NUMBER:
					case AdvplParser.PRIVATE:
					case AdvplParser.PUBLIC:
					case AdvplParser.STATIC:
					case AdvplParser.FOR:
					case AdvplParser.LOOP:
					case AdvplParser.WHILE:
					case AdvplParser.DO:
					case AdvplParser.IF:
					case AdvplParser.END:
					case AdvplParser.EXIT:
					case AdvplParser.RETURN:
					case AdvplParser.DATA:
					case AdvplParser.FROM:
					case AdvplParser.SELF:
					case AdvplParser.INCLUDE:
					case AdvplParser.IFDEF:
					case AdvplParser.UNDEFINE:
					case AdvplParser.IFNDEF:
					case AdvplParser.PDEFINE:
					case AdvplParser.ENDIFDEF:
					case AdvplParser.ELSEDEF:
					case AdvplParser.IDENTIFIER:
					case AdvplParser.STRING:
					case AdvplParser.STRINGSIMPLE:
						{
						this.state = 299;
						this.statement();
						this.state = 302;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.SEMICOLON:
						case AdvplParser.CRLF:
							{
							this.state = 300;
							this.crlf();
							}
							break;
						case AdvplParser.EOF:
							{
							this.state = 301;
							this.match(AdvplParser.EOF);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case AdvplParser.SEMICOLON:
					case AdvplParser.CRLF:
						{
						this.state = 304;
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
				this.state = 307; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
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
		this.enterRule(_localctx, 50, AdvplParser.RULE_statement);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 311;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 312;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 313;
				this.exitOrLoopStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 314;
				this.doStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 315;
				this.returnStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 316;
				this.privateVariableDeclarationStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 317;
				this.staticVariableDeclarationStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 318;
				this.publicVariableDeclarationStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 319;
				this.chStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 320;
				this.directives();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AdvplParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(AdvplParser.IF);
			this.state = 324;
			this.expression(0);
			this.state = 325;
			this.crlf();
			this.state = 326;
			this.block();
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.ELSEIF) {
				{
				{
				this.state = 327;
				this.match(AdvplParser.ELSEIF);
				this.state = 328;
				this.expression(0);
				this.state = 329;
				this.crlf();
				this.state = 330;
				this.block();
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.ELSE) {
				{
				{
				this.state = 337;
				this.match(AdvplParser.ELSE);
				this.state = 338;
				this.crlf();
				this.state = 339;
				this.block();
				}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 346;
			this.match(AdvplParser.ENDIF);
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
		this.enterRule(_localctx, 54, AdvplParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(AdvplParser.FOR);
			this.state = 349;
			this.forInit();
			this.state = 350;
			this.match(AdvplParser.TO);
			this.state = 351;
			this.expression(0);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.STEP) {
				{
				this.state = 352;
				this.match(AdvplParser.STEP);
				this.state = 353;
				this.expression(0);
				}
			}

			this.state = 356;
			this.crlf();
			this.state = 357;
			this.block();
			{
			this.state = 358;
			this.match(AdvplParser.NEXT);
			}
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)))) !== 0) || _la===AdvplParser.COLONCOLON || _la===AdvplParser.END || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (AdvplParser.DATA - 121)) | (1 << (AdvplParser.FROM - 121)) | (1 << (AdvplParser.SELF - 121)) | (1 << (AdvplParser.IDENTIFIER - 121)))) !== 0)) {
				{
				this.state = 359;
				this.identifier();
				}
			}

			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
			case 1:
				{
				this.state = 362;
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
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AdvplParser.RULE_forInit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.identifier();
			this.state = 366;
			this.match(AdvplParser.ASSIGNMENT);
			this.state = 367;
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
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AdvplParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(AdvplParser.DO);
			this.state = 372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.WHILE:
				{
				this.state = 370;
				this.whileStatement();
				}
				break;
			case AdvplParser.CASE:
				{
				this.state = 371;
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AdvplParser.RULE_whileStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(AdvplParser.WHILE);
			this.state = 375;
			this.expression(0);
			this.state = 376;
			this.crlf();
			this.state = 377;
			this.block();
			this.state = 378;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.ENDDO || _la===AdvplParser.END) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
			case 1:
				{
				this.state = 379;
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
	public docaseStatement(): DocaseStatementContext {
		let _localctx: DocaseStatementContext = new DocaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AdvplParser.RULE_docaseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(AdvplParser.CASE);
			this.state = 383;
			this.crlf();
			this.state = 389; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 384;
				this.match(AdvplParser.CASE);
				this.state = 385;
				this.expression(0);
				this.state = 386;
				this.crlf();
				this.state = 387;
				this.block();
				}
				}
				this.state = 391; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===AdvplParser.CASE );
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.OTHERWISE) {
				{
				this.state = 393;
				this.match(AdvplParser.OTHERWISE);
				this.state = 394;
				this.block();
				}
			}

			this.state = 402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.ENDCASE:
				{
				this.state = 397;
				this.match(AdvplParser.ENDCASE);
				}
				break;
			case AdvplParser.END:
				{
				{
				this.state = 398;
				this.match(AdvplParser.END);
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.DO) {
					{
					this.state = 399;
					this.match(AdvplParser.DO);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,45,this._ctx) ) {
			case 1:
				{
				this.state = 404;
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
		this.enterRule(_localctx, 64, AdvplParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(AdvplParser.RETURN);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)) | (1 << (AdvplParser.PLUSPLUS - 32)) | (1 << (AdvplParser.MINUSMINUS - 32)) | (1 << (AdvplParser.EXCLAMATION - 32)) | (1 << (AdvplParser.PLUS - 32)) | (1 << (AdvplParser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AdvplParser.NOT - 66)) | (1 << (AdvplParser.TRUE - 66)) | (1 << (AdvplParser.FALSE - 66)) | (1 << (AdvplParser.NIL - 66)) | (1 << (AdvplParser.LCURLY - 66)) | (1 << (AdvplParser.LPAREN - 66)) | (1 << (AdvplParser.COLONCOLON - 66)) | (1 << (AdvplParser.AMPERSAND - 66)) | (1 << (AdvplParser.AT - 66)) | (1 << (AdvplParser.NUMBER - 66)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.IF - 106)) | (1 << (AdvplParser.END - 106)) | (1 << (AdvplParser.DATA - 106)) | (1 << (AdvplParser.FROM - 106)) | (1 << (AdvplParser.SELF - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)) | (1 << (AdvplParser.STRING - 106)) | (1 << (AdvplParser.STRINGSIMPLE - 106)))) !== 0)) {
				{
				this.state = 408;
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
	public exitOrLoopStatement(): ExitOrLoopStatementContext {
		let _localctx: ExitOrLoopStatementContext = new ExitOrLoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AdvplParser.RULE_exitOrLoopStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			_la = this._input.LA(1);
			if ( !(_la===AdvplParser.LOOP || _la===AdvplParser.EXIT) ) {
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
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, AdvplParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.FILTER:
			case AdvplParser.VALID:
			case AdvplParser.INIT:
			case AdvplParser.ACTIVATE:
			case AdvplParser.DEFAULT:
			case AdvplParser.ARRAY:
			case AdvplParser.BLOCK:
			case AdvplParser.CHARACTER:
			case AdvplParser.DATE:
			case AdvplParser.NUMERIC:
			case AdvplParser.LOGICAL:
			case AdvplParser.OBJECT:
			case AdvplParser.DEFINE:
			case AdvplParser.TRUE:
			case AdvplParser.FALSE:
			case AdvplParser.NIL:
			case AdvplParser.LCURLY:
			case AdvplParser.LPAREN:
			case AdvplParser.COLONCOLON:
			case AdvplParser.AMPERSAND:
			case AdvplParser.AT:
			case AdvplParser.NUMBER:
			case AdvplParser.IF:
			case AdvplParser.END:
			case AdvplParser.DATA:
			case AdvplParser.FROM:
			case AdvplParser.SELF:
			case AdvplParser.IDENTIFIER:
			case AdvplParser.STRING:
			case AdvplParser.STRINGSIMPLE:
				{
				_localctx = new ExprPrimaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 414;
				this.primary_ref();
				}
				break;
			case AdvplParser.PLUSPLUS:
			case AdvplParser.MINUSMINUS:
			case AdvplParser.PLUS:
			case AdvplParser.MINUS:
				{
				_localctx = new ExprIncrPreContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 415;
				_la = this._input.LA(1);
				if ( !(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (AdvplParser.PLUSPLUS - 48)) | (1 << (AdvplParser.MINUSMINUS - 48)) | (1 << (AdvplParser.PLUS - 48)) | (1 << (AdvplParser.MINUS - 48)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 416;
				this.expression(7);
				}
				break;
			case AdvplParser.EXCLAMATION:
			case AdvplParser.NOT:
				{
				_localctx = new ExprNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 417;
				_la = this._input.LA(1);
				if ( !(_la===AdvplParser.EXCLAMATION || _la===AdvplParser.NOT) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 418;
				this.expression(6);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 443;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 441;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
					case 1:
						{
						_localctx = new AliasAssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 421;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 422;
						this.match(AdvplParser.ALIASACCESS);
						this.state = 423;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new ExprMulContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 424;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 425;
						_la = this._input.LA(1);
						if ( !(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (AdvplParser.MULT - 60)) | (1 << (AdvplParser.DIV - 60)) | (1 << (AdvplParser.POW - 60)) | (1 << (AdvplParser.PERC - 60)))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 426;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ExprPlusContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 427;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 428;
						_la = this._input.LA(1);
						if ( !(_la===AdvplParser.PLUS || _la===AdvplParser.MINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 429;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new ExprLogicalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 431;
						_la = this._input.LA(1);
						if ( !(_la===AdvplParser.AND || _la===AdvplParser.OR) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 432;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new ExprCompContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 433;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 434;
						_la = this._input.LA(1);
						if ( !(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (AdvplParser.MINOR - 42)) | (1 << (AdvplParser.MAJOR - 42)) | (1 << (AdvplParser.EQUALS - 42)) | (1 << (AdvplParser.MINOREQUALS - 42)) | (1 << (AdvplParser.MAJOREQUALS - 42)) | (1 << (AdvplParser.DOUBLEEQUAL - 42)) | (1 << (AdvplParser.DIFF - 42)) | (1 << (AdvplParser.DIFF2 - 42)) | (1 << (AdvplParser.DOLAR - 42)))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 435;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new AssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 436;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 437;
						_la = this._input.LA(1);
						if ( !(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (AdvplParser.ASSIGNMENT - 51)) | (1 << (AdvplParser.PLUSEQUALS - 51)) | (1 << (AdvplParser.MINUSEQUALS - 51)))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 438;
						this.expression(2);
						}
						break;

					case 7:
						{
						_localctx = new ExprIncrPosContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AdvplParser.RULE_expression);
						this.state = 439;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 440;
						_la = this._input.LA(1);
						if ( !(_la===AdvplParser.PLUSPLUS || _la===AdvplParser.MINUSMINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					} 
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AdvplParser.RULE_arguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(AdvplParser.LPAREN);
			this.state = 447;
			this.expressionList();
			this.state = 448;
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
		this.enterRule(_localctx, 72, AdvplParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.optionalExpression();
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,50,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 451;
					this.match(AdvplParser.COMMA);
					this.state = 452;
					this.optionalExpression();
					}
					} 
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,50,this._ctx);
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
		this.enterRule(_localctx, 74, AdvplParser.RULE_optionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				{
				this.state = 458;
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
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AdvplParser.RULE_arrayAccess);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 461;
					this.match(AdvplParser.LBRACK);
					this.state = 462;
					this.expressionList();
					this.state = 463;
					this.match(AdvplParser.RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 467; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,52,this._ctx);
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
		this.enterRule(_localctx, 78, AdvplParser.RULE_methodAccessLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 469;
			this.match(AdvplParser.COLON);
			{
			this.state = 470;
			this.identifier();
			}
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				{
				this.state = 471;
				this.arguments();
				}
				break;
			}
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				{
				this.state = 474;
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
	public primary_ref(): Primary_refContext {
		let _localctx: Primary_refContext = new Primary_refContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AdvplParser.RULE_primary_ref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.match(AdvplParser.DEFAULT);
				this.state = 478;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 480;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
				case 1:
					{
					this.state = 479;
					this.match(AdvplParser.COLONCOLON);
					}
					break;
				}
				this.state = 482;
				this.primary();
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AdvplParser.RULE_primary);
		let _la: number;
		try {
			let _alt: number;
			this.state = 586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,72,this._ctx) ) {
			case 1:
				_localctx = new ParensContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.match(AdvplParser.LPAREN);
				this.state = 486;
				this.expressionList();
				this.state = 487;
				this.match(AdvplParser.RPAREN);
				this.state = 489;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
				case 1:
					{
					this.state = 488;
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
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AT) {
					{
					this.state = 491;
					this.match(AdvplParser.AT);
					}
				}

				this.state = 494;
				this.identifier();
				this.state = 495;
				this.arrayAccess();
				}
				break;

			case 3:
				_localctx = new CallContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.identifier();
				this.state = 498;
				this.arguments();
				{
				this.state = 500;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
				case 1:
					{
					this.state = 499;
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
				this.state = 502;
				this.identifier();
				this.state = 503;
				this.match(AdvplParser.LPAREN);
				this.state = 504;
				this.match(AdvplParser.RPAREN);
				this.state = 505;
				this.match(AdvplParser.COLON);
				this.state = 506;
				this.identifier();
				this.state = 507;
				this.arguments();
				}
				break;

			case 5:
				_localctx = new CallWithAttContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 509;
				this.identifier();
				this.state = 510;
				this.arguments();
				this.state = 514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 511;
						this.methodAccessLoop();
						}
						} 
					}
					this.state = 516;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
				}
				}
				break;

			case 6:
				_localctx = new ObjectAttribAccessContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AT) {
					{
					this.state = 517;
					this.match(AdvplParser.AT);
					}
				}

				this.state = 520;
				this.identifier();
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.LBRACK) {
					{
					this.state = 521;
					this.arrayAccess();
					}
				}

				this.state = 529; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 524;
						this.match(AdvplParser.COLON);
						this.state = 525;
						this.identifier();
						this.state = 527;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
						case 1:
							{
							this.state = 526;
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
					this.state = 531; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,64,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 7:
				_localctx = new ObjectMethodAccessContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 533;
				this.identifier();
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AdvplParser.LBRACK) {
					{
					{
					this.state = 534;
					this.arrayAccess();
					}
					}
					this.state = 539;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 541; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 540;
						this.methodAccessLoop();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 543; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 8:
				_localctx = new VarContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.AT) {
					{
					this.state = 545;
					this.match(AdvplParser.AT);
					}
				}

				this.state = 548;
				this.identifier();
				}
				break;

			case 9:
				_localctx = new LitContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 549;
				this.literal();
				}
				break;

			case 10:
				_localctx = new ArrayOrBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 550;
				this.arrayOrBlockInitializer();
				}
				break;

			case 11:
				_localctx = new MacroExecucaoContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 551;
				this.match(AdvplParser.AMPERSAND);
				this.state = 552;
				this.expression(0);
				this.state = 563;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 561;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case AdvplParser.LBRACK:
							{
							this.state = 553;
							this.arrayAccess();
							}
							break;
						case AdvplParser.DOT:
							{
							{
							this.state = 554;
							this.match(AdvplParser.DOT);
							this.state = 557;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
							case 1:
								{
								this.state = 555;
								this.arguments();
								}
								break;

							case 2:
								{
								this.state = 556;
								this.expression(0);
								}
								break;
							}
							}
							}
							break;
						case AdvplParser.COLON:
							{
							this.state = 559;
							this.methodAccessLoop();
							}
							break;
						case AdvplParser.LPAREN:
							{
							this.state = 560;
							this.arguments();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					this.state = 565;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				}
				}
				break;

			case 12:
				_localctx = new IfCallContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 566;
				this.ifFunctioncall();
				}
				break;

			case 13:
				_localctx = new AssumeContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 567;
				this.match(AdvplParser.AT);
				this.state = 568;
				this.match(AdvplParser.ASSUME);
				this.state = 569;
				this.identifier();
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AdvplParser.COLON) {
					{
					{
					this.state = 570;
					this.match(AdvplParser.COLON);
					this.state = 571;
					this.identifier();
					}
					}
					this.state = 576;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 577;
				this.match(AdvplParser.AS);
				this.state = 578;
				this.identifier();
				}
				break;

			case 14:
				_localctx = new NumberCHSayContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 580;
				this.match(AdvplParser.AT);
				this.state = 581;
				this.expression(0);
				this.state = 582;
				this.match(AdvplParser.COMMA);
				this.state = 583;
				this.expression(0);
				this.state = 584;
				this.atxCommand();
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
	public atxCommand(): AtxCommandContext {
		let _localctx: AtxCommandContext = new AtxCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, AdvplParser.RULE_atxCommand);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 643;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,75,this._ctx) ) {
					case 1:
						{
						{
						this.state = 588;
						this.match(AdvplParser.SAY);
						this.state = 589;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 2:
						{
						{
						this.state = 590;
						this.match(AdvplParser.MSGET);
						this.state = 591;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 3:
						{
						{
						this.state = 592;
						this.match(AdvplParser.MSDIALOG);
						this.state = 593;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 4:
						{
						{
						this.state = 594;
						this.match(AdvplParser.COMBOBOX);
						this.state = 595;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 5:
						{
						{
						this.state = 596;
						this.match(AdvplParser.CHECKBOX);
						this.state = 597;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 6:
						{
						{
						this.state = 598;
						this.match(AdvplParser.VAR);
						this.state = 599;
						this.expression(0);
						}
						}
						break;

					case 7:
						{
						{
						this.state = 600;
						this.match(AdvplParser.OF);
						this.state = 602;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===AdvplParser.COLONCOLON) {
							{
							this.state = 601;
							this.match(AdvplParser.COLONCOLON);
							}
						}

						this.state = 604;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 8:
						{
						{
						this.state = 605;
						this.match(AdvplParser.BUTTON);
						this.state = 606;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 9:
						{
						{
						this.state = 607;
						this.match(AdvplParser.SCROLLBOX);
						this.state = 608;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 10:
						{
						{
						this.state = 609;
						this.match(AdvplParser.PROMPT);
						this.state = 610;
						this.expression(0);
						}
						}
						break;

					case 11:
						{
						{
						this.state = 611;
						this.match(AdvplParser.ACTION);
						this.state = 612;
						this.expression(0);
						}
						}
						break;

					case 12:
						{
						{
						this.state = 613;
						this.match(AdvplParser.MSPANEL);
						this.state = 615;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===AdvplParser.COLONCOLON) {
							{
							this.state = 614;
							this.match(AdvplParser.COLONCOLON);
							}
						}

						this.state = 617;
						this.match(AdvplParser.IDENTIFIER);
						}
						}
						break;

					case 13:
						{
						{
						this.state = 618;
						this.match(AdvplParser.ITEMS);
						this.state = 619;
						this.expression(0);
						}
						}
						break;

					case 14:
						{
						{
						this.state = 620;
						this.match(AdvplParser.PIXEL);
						}
						}
						break;

					case 15:
						{
						{
						this.state = 621;
						this.match(AdvplParser.PICTURE);
						this.state = 622;
						this.expression(0);
						}
						}
						break;

					case 16:
						{
						{
						this.state = 623;
						this.match(AdvplParser.VALID);
						this.state = 624;
						this.expression(0);
						}
						}
						break;

					case 17:
						{
						{
						this.state = 625;
						this.match(AdvplParser.SIZE);
						this.state = 626;
						this.expressionList();
						}
						}
						break;

					case 18:
						{
						{
						this.state = 627;
						this.match(AdvplParser.TO);
						this.state = 628;
						this.expressionList();
						}
						}
						break;

					case 19:
						{
						{
						this.state = 629;
						this.match(AdvplParser.STYLE);
						this.state = 630;
						this.expressionList();
						}
						}
						break;

					case 20:
						{
						{
						this.state = 631;
						this.match(AdvplParser.FROM);
						this.state = 632;
						this.expressionList();
						}
						}
						break;

					case 21:
						{
						{
						this.state = 633;
						this.match(AdvplParser.FONT);
						this.state = 634;
						this.expression(0);
						}
						}
						break;

					case 22:
						{
						{
						this.state = 635;
						this.match(AdvplParser.ON);
						this.state = 636;
						this.match(AdvplParser.INIT);
						this.state = 637;
						this.expression(0);
						}
						}
						break;

					case 23:
						{
						{
						this.state = 638;
						this.match(AdvplParser.COLORS);
						this.state = 639;
						this.expressionList();
						}
						}
						break;

					case 24:
						{
						{
						this.state = 640;
						this.match(AdvplParser.ON);
						this.state = 641;
						this.match(AdvplParser.CHANGE);
						this.state = 642;
						this.expression(0);
						}
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 645; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,76,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 650;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 647;
					this.match(AdvplParser.IDENTIFIER);
					}
					} 
				}
				this.state = 652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
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
		this.enterRule(_localctx, 86, AdvplParser.RULE_arrayOrBlockInitializer);
		let _la: number;
		try {
			this.state = 670;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
			case 1:
				_localctx = new ArrayInitializerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 653;
				this.match(AdvplParser.LCURLY);
				this.state = 654;
				this.expressionList();
				this.state = 655;
				this.match(AdvplParser.RCURLY);
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
				case 1:
					{
					this.state = 656;
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
				this.state = 659;
				this.match(AdvplParser.LCURLY);
				this.state = 660;
				this.match(AdvplParser.PIPE);
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)))) !== 0) || _la===AdvplParser.COLONCOLON || _la===AdvplParser.END || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (AdvplParser.DATA - 121)) | (1 << (AdvplParser.FROM - 121)) | (1 << (AdvplParser.SELF - 121)) | (1 << (AdvplParser.IDENTIFIER - 121)))) !== 0)) {
					{
					this.state = 661;
					this.blockParams();
					}
				}

				this.state = 664;
				this.match(AdvplParser.PIPE);
				this.state = 665;
				this.expressionList();
				this.state = 666;
				this.match(AdvplParser.RCURLY);
				this.state = 668;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,80,this._ctx) ) {
				case 1:
					{
					this.state = 667;
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
		this.enterRule(_localctx, 88, AdvplParser.RULE_blockParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.identifier();
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AdvplParser.COMMA) {
				{
				{
				this.state = 673;
				this.match(AdvplParser.COMMA);
				this.state = 674;
				this.identifier();
				}
				}
				this.state = 679;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AdvplParser.RULE_literal);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.NUMBER:
				_localctx = new LiteralNumberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.match(AdvplParser.NUMBER);
				}
				break;
			case AdvplParser.STRING:
				_localctx = new LiteralStringDuplaContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.match(AdvplParser.STRING);
				}
				break;
			case AdvplParser.STRINGSIMPLE:
				_localctx = new LiteralStringSimplesContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 682;
				this.match(AdvplParser.STRINGSIMPLE);
				}
				break;
			case AdvplParser.TRUE:
				_localctx = new LiteralLogicalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 683;
				this.match(AdvplParser.TRUE);
				}
				break;
			case AdvplParser.FALSE:
				_localctx = new LiteralLogicalContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 684;
				this.match(AdvplParser.FALSE);
				}
				break;
			case AdvplParser.NIL:
				_localctx = new LiteralNilContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 685;
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
			this.state = 688;
			this.match(AdvplParser.IF);
			this.state = 689;
			this.match(AdvplParser.LPAREN);
			this.state = 690;
			this.expression(0);
			this.state = 691;
			this.match(AdvplParser.COMMA);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)) | (1 << (AdvplParser.PLUSPLUS - 32)) | (1 << (AdvplParser.MINUSMINUS - 32)) | (1 << (AdvplParser.EXCLAMATION - 32)) | (1 << (AdvplParser.PLUS - 32)) | (1 << (AdvplParser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AdvplParser.NOT - 66)) | (1 << (AdvplParser.TRUE - 66)) | (1 << (AdvplParser.FALSE - 66)) | (1 << (AdvplParser.NIL - 66)) | (1 << (AdvplParser.LCURLY - 66)) | (1 << (AdvplParser.LPAREN - 66)) | (1 << (AdvplParser.COLONCOLON - 66)) | (1 << (AdvplParser.AMPERSAND - 66)) | (1 << (AdvplParser.AT - 66)) | (1 << (AdvplParser.NUMBER - 66)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.IF - 106)) | (1 << (AdvplParser.END - 106)) | (1 << (AdvplParser.DATA - 106)) | (1 << (AdvplParser.FROM - 106)) | (1 << (AdvplParser.SELF - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)) | (1 << (AdvplParser.STRING - 106)) | (1 << (AdvplParser.STRINGSIMPLE - 106)))) !== 0)) {
				{
				this.state = 692;
				this.expression(0);
				}
			}

			this.state = 695;
			this.match(AdvplParser.COMMA);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)) | (1 << (AdvplParser.PLUSPLUS - 32)) | (1 << (AdvplParser.MINUSMINUS - 32)) | (1 << (AdvplParser.EXCLAMATION - 32)) | (1 << (AdvplParser.PLUS - 32)) | (1 << (AdvplParser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AdvplParser.NOT - 66)) | (1 << (AdvplParser.TRUE - 66)) | (1 << (AdvplParser.FALSE - 66)) | (1 << (AdvplParser.NIL - 66)) | (1 << (AdvplParser.LCURLY - 66)) | (1 << (AdvplParser.LPAREN - 66)) | (1 << (AdvplParser.COLONCOLON - 66)) | (1 << (AdvplParser.AMPERSAND - 66)) | (1 << (AdvplParser.AT - 66)) | (1 << (AdvplParser.NUMBER - 66)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.IF - 106)) | (1 << (AdvplParser.END - 106)) | (1 << (AdvplParser.DATA - 106)) | (1 << (AdvplParser.FROM - 106)) | (1 << (AdvplParser.SELF - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)) | (1 << (AdvplParser.STRING - 106)) | (1 << (AdvplParser.STRINGSIMPLE - 106)))) !== 0)) {
				{
				this.state = 696;
				this.expression(0);
				}
			}

			this.state = 699;
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
	public chStatement(): ChStatementContext {
		let _localctx: ChStatementContext = new ChStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AdvplParser.RULE_chStatement);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.PARAMTYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 701;
				this.paramType();
				}
				break;
			case AdvplParser.CLASSEXCEPTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 702;
				this.classException();
				}
				break;
			case AdvplParser.DEFINE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 703;
				this.defineCh();
				}
				break;
			case AdvplParser.ACTIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 704;
				this.activateCh();
				}
				break;
			case AdvplParser.SET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 705;
				this.setsCh();
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
	public defineCh(): DefineChContext {
		let _localctx: DefineChContext = new DefineChContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AdvplParser.RULE_defineCh);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(AdvplParser.DEFINE);
			this.state = 709;
			this.atxCommand();
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
	public activateCh(): ActivateChContext {
		let _localctx: ActivateChContext = new ActivateChContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AdvplParser.RULE_activateCh);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(AdvplParser.ACTIVATE);
			this.state = 712;
			this.atxCommand();
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
	public setsCh(): SetsChContext {
		let _localctx: SetsChContext = new SetsChContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, AdvplParser.RULE_setsCh);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(AdvplParser.SET);
			this.state = 715;
			this.match(AdvplParser.FILTER);
			this.state = 716;
			this.match(AdvplParser.TO);
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AdvplParser.FILTER) | (1 << AdvplParser.VALID) | (1 << AdvplParser.INIT) | (1 << AdvplParser.ACTIVATE) | (1 << AdvplParser.DEFAULT) | (1 << AdvplParser.ARRAY) | (1 << AdvplParser.BLOCK))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AdvplParser.CHARACTER - 32)) | (1 << (AdvplParser.DATE - 32)) | (1 << (AdvplParser.NUMERIC - 32)) | (1 << (AdvplParser.LOGICAL - 32)) | (1 << (AdvplParser.OBJECT - 32)) | (1 << (AdvplParser.DEFINE - 32)) | (1 << (AdvplParser.PLUSPLUS - 32)) | (1 << (AdvplParser.MINUSMINUS - 32)) | (1 << (AdvplParser.EXCLAMATION - 32)) | (1 << (AdvplParser.PLUS - 32)) | (1 << (AdvplParser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AdvplParser.NOT - 66)) | (1 << (AdvplParser.TRUE - 66)) | (1 << (AdvplParser.FALSE - 66)) | (1 << (AdvplParser.NIL - 66)) | (1 << (AdvplParser.LCURLY - 66)) | (1 << (AdvplParser.LPAREN - 66)) | (1 << (AdvplParser.COLONCOLON - 66)) | (1 << (AdvplParser.AMPERSAND - 66)) | (1 << (AdvplParser.AT - 66)) | (1 << (AdvplParser.NUMBER - 66)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (AdvplParser.IF - 106)) | (1 << (AdvplParser.END - 106)) | (1 << (AdvplParser.DATA - 106)) | (1 << (AdvplParser.FROM - 106)) | (1 << (AdvplParser.SELF - 106)) | (1 << (AdvplParser.IDENTIFIER - 106)) | (1 << (AdvplParser.STRING - 106)) | (1 << (AdvplParser.STRINGSIMPLE - 106)))) !== 0)) {
				{
				this.state = 717;
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
	public paramType(): ParamTypeContext {
		let _localctx: ParamTypeContext = new ParamTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, AdvplParser.RULE_paramType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(AdvplParser.PARAMTYPE);
			this.state = 721;
			this.match(AdvplParser.NUMBER);
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.VAR) {
				{
				this.state = 722;
				this.match(AdvplParser.VAR);
				this.state = 723;
				this.match(AdvplParser.IDENTIFIER);
				}
			}

			this.state = 726;
			this.match(AdvplParser.AS);
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.ARRAY:
				{
				this.state = 727;
				this.match(AdvplParser.ARRAY);
				}
				break;
			case AdvplParser.BLOCK:
				{
				this.state = 728;
				this.match(AdvplParser.BLOCK);
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.EXPECTED) {
					{
					this.state = 729;
					this.match(AdvplParser.EXPECTED);
					}
				}

				}
				break;
			case AdvplParser.CHARACTER:
				{
				this.state = 732;
				this.match(AdvplParser.CHARACTER);
				}
				break;
			case AdvplParser.DATE:
				{
				this.state = 733;
				this.match(AdvplParser.DATE);
				}
				break;
			case AdvplParser.NUMERIC:
				{
				this.state = 734;
				this.match(AdvplParser.NUMERIC);
				}
				break;
			case AdvplParser.LOGICAL:
				{
				this.state = 735;
				this.match(AdvplParser.LOGICAL);
				}
				break;
			case AdvplParser.OBJECT:
				{
				this.state = 736;
				this.match(AdvplParser.OBJECT);
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===AdvplParser.CLASS) {
					{
					this.state = 737;
					this.match(AdvplParser.CLASS);
					this.state = 738;
					this.match(AdvplParser.IDENTIFIER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.COMMA) {
				{
				this.state = 743;
				this.match(AdvplParser.COMMA);
				this.state = 744;
				_la = this._input.LA(1);
				if ( !(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (AdvplParser.ARRAY - 29)) | (1 << (AdvplParser.BLOCK - 29)) | (1 << (AdvplParser.CHARACTER - 29)) | (1 << (AdvplParser.DATE - 29)) | (1 << (AdvplParser.NUMERIC - 29)) | (1 << (AdvplParser.LOGICAL - 29)))) !== 0)) ) {
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

			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.CH_OR) {
				{
				this.state = 747;
				this.match(AdvplParser.CH_OR);
				this.state = 748;
				this.match(AdvplParser.OBJECT);
				this.state = 749;
				this.match(AdvplParser.CLASS);
				this.state = 750;
				this.expressionList();
				}
			}

			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.MESSAGE) {
				{
				this.state = 753;
				this.match(AdvplParser.MESSAGE);
				this.state = 754;
				this.expression(0);
				}
			}

			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.OPTIONAL) {
				{
				this.state = 757;
				this.match(AdvplParser.OPTIONAL);
				}
			}

			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AdvplParser.DEFAULT) {
				{
				this.state = 760;
				this.match(AdvplParser.DEFAULT);
				this.state = 761;
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
	public classException(): ClassExceptionContext {
		let _localctx: ClassExceptionContext = new ClassExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, AdvplParser.RULE_classException);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(AdvplParser.CLASSEXCEPTION);
			this.state = 765;
			this.match(AdvplParser.IDENTIFIER);
			this.state = 766;
			this.match(AdvplParser.MESSAGE);
			this.state = 767;
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
		this.enterRule(_localctx, 106, AdvplParser.RULE_crlf);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.CRLF:
				{
				this.state = 770; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 769;
						this.match(AdvplParser.CRLF);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 772; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,97,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case AdvplParser.SEMICOLON:
				{
				this.state = 774;
				this.match(AdvplParser.SEMICOLON);
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
		this.enterRule(_localctx, 108, AdvplParser.RULE_crlfEmpty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AdvplParser.CRLF:
				{
				this.state = 778; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 777;
						this.match(AdvplParser.CRLF);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 780; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case AdvplParser.SEMICOLON:
				{
				this.state = 782;
				this.match(AdvplParser.SEMICOLON);
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
		case 34:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);

		case 6:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x8C\u0314\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
		"\x02\x03\x02\x07\x02w\n\x02\f\x02\x0E\x02z\v\x02\x03\x02\x05\x02}\n\x02"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x85\n\x03\x03"+
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03"+
		"\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x95\n\b\x03\b\x05\b\x98\n\b\x03\b\x03"+
		"\b\x03\b\x05\b\x9D\n\b\x05\b\x9F\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03"+
		"\n\x03\n\x03\n\x05\n\xA9\n\n\x03\n\x03\n\x03\n\x07\n\xAE\n\n\f\n\x0E\n"+
		"\xB1\v\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\xBA\n\v\x03\v"+
		"\x03\v\x03\f\x03\f\x03\f\x05\f\xC1\n\f\x03\f\x03\f\x05\f\xC5\n\f\x03\f"+
		"\x03\f\x03\r\x03\r\x03\x0E\x05\x0E\xCC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05"+
		"\x0E\xD1\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD7\n\x0E\x03\x0E"+
		"\x05\x0E\xDA\n\x0E\x03\x0E\x03\x0E\x05\x0E\xDE\n\x0E\x03\x0F\x05\x0F\xE1"+
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE7\n\x0F\x03\x0F\x05\x0F"+
		"\xEA\n\x0F\x03\x0F\x03\x0F\x05\x0F\xEE\n\x0F\x03\x0F\x03\x0F\x05\x0F\xF2"+
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10"+
		"\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\u0100\n\x11\r\x11\x0E\x11\u0101"+
		"\x03\x12\x03\x12\x03\x12\x05\x12\u0107\n\x12\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x05\x12\u010D\n\x12\x07\x12\u010F\n\x12\f\x12\x0E\x12\u0112\v\x12"+
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0119\n\x14\f\x14\x0E"+
		"\x14\u011C\v\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0121\n\x15\x03\x16\x03"+
		"\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03"+
		"\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0131\n\x1A\x03\x1A\x06\x1A\u0134"+
		"\n\x1A\r\x1A\x0E\x1A\u0135\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0144\n\x1B"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x07\x1C\u014F\n\x1C\f\x1C\x0E\x1C\u0152\v\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x07\x1C\u0158\n\x1C\f\x1C\x0E\x1C\u015B\v\x1C\x03\x1C\x03\x1C"+
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0165\n\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u016B\n\x1D\x03\x1D\x05\x1D\u016E"+
		"\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F"+
		"\u0177\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u017F\n \x03!\x03!\x03"+
		"!\x03!\x03!\x03!\x03!\x06!\u0188\n!\r!\x0E!\u0189\x03!\x03!\x05!\u018E"+
		"\n!\x03!\x03!\x03!\x05!\u0193\n!\x05!\u0195\n!\x03!\x05!\u0198\n!\x03"+
		"\"\x03\"\x05\"\u019C\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x05$"+
		"\u01A6\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$"+
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u01BC\n$\f$\x0E$\u01BF\v"+
		"$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u01C8\n&\f&\x0E&\u01CB\v&\x03"+
		"\'\x05\'\u01CE\n\'\x03(\x03(\x03(\x03(\x06(\u01D4\n(\r(\x0E(\u01D5\x03"+
		")\x03)\x03)\x05)\u01DB\n)\x03)\x05)\u01DE\n)\x03*\x03*\x03*\x05*\u01E3"+
		"\n*\x03*\x05*\u01E6\n*\x03+\x03+\x03+\x03+\x05+\u01EC\n+\x03+\x05+\u01EF"+
		"\n+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01F7\n+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x07+\u0203\n+\f+\x0E+\u0206\v+\x03+\x05+\u0209"+
		"\n+\x03+\x03+\x05+\u020D\n+\x03+\x03+\x03+\x05+\u0212\n+\x06+\u0214\n"+
		"+\r+\x0E+\u0215\x03+\x03+\x07+\u021A\n+\f+\x0E+\u021D\v+\x03+\x06+\u0220"+
		"\n+\r+\x0E+\u0221\x03+\x05+\u0225\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x05+\u0230\n+\x03+\x03+\x07+\u0234\n+\f+\x0E+\u0237\v+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x07+\u023F\n+\f+\x0E+\u0242\v+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u024D\n+\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u025D\n,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u026A\n,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x06,\u0286\n,\r,\x0E"+
		",\u0287\x03,\x07,\u028B\n,\f,\x0E,\u028E\v,\x03-\x03-\x03-\x03-\x05-\u0294"+
		"\n-\x03-\x03-\x03-\x05-\u0299\n-\x03-\x03-\x03-\x03-\x05-\u029F\n-\x05"+
		"-\u02A1\n-\x03.\x03.\x03.\x07.\u02A6\n.\f.\x0E.\u02A9\v.\x03/\x03/\x03"+
		"/\x03/\x03/\x03/\x05/\u02B1\n/\x030\x030\x030\x030\x030\x050\u02B8\n0"+
		"\x030\x030\x050\u02BC\n0\x030\x030\x031\x031\x031\x031\x031\x051\u02C5"+
		"\n1\x032\x032\x032\x033\x033\x033\x034\x034\x034\x034\x054\u02D1\n4\x03"+
		"5\x035\x035\x035\x055\u02D7\n5\x035\x035\x035\x035\x055\u02DD\n5\x035"+
		"\x035\x035\x035\x035\x035\x035\x055\u02E6\n5\x055\u02E8\n5\x035\x035\x05"+
		"5\u02EC\n5\x035\x035\x035\x035\x055\u02F2\n5\x035\x035\x055\u02F6\n5\x03"+
		"5\x055\u02F9\n5\x035\x035\x055\u02FD\n5\x036\x036\x036\x036\x036\x037"+
		"\x067\u0305\n7\r7\x0E7\u0306\x037\x057\u030A\n7\x038\x068\u030D\n8\r8"+
		"\x0E8\u030E\x038\x058\u0312\n8\x038\x02\x02\x03F9\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02"+
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02"+
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02"+
		"j\x02l\x02n\x02\x02\x11\x03\x02\x88\x89\x04\x02\x7F\x7F\x81\x81\x03\x02"+
		"]b\r\x02\x04\x04\t\t\v\f\x1E \"#%\'++RRqq{}\x85\x85\x04\x02ooqq\x04\x02"+
		"hhrr\x04\x0223<=\x04\x0244DD\x03\x02>A\x03\x02<=\x03\x02BC\x05\x02,16"+
		"7HH\x04\x025589\x03\x0223\x05\x02\x1F \"#%&\u038A\x02x\x03\x02\x02\x02"+
		"\x04\x84\x03\x02\x02\x02\x06\x86\x03\x02\x02\x02\b\x89\x03\x02\x02\x02"+
		"\n\x8C\x03\x02\x02\x02\f\x8E\x03\x02\x02\x02\x0E\x90\x03\x02\x02\x02\x10"+
		"\xA0\x03\x02\x02\x02\x12\xA4\x03\x02\x02\x02\x14\xB5\x03\x02\x02\x02\x16"+
		"\xBD\x03\x02\x02\x02\x18\xC8\x03\x02\x02\x02\x1A\xCB\x03\x02\x02\x02\x1C"+
		"\xE0\x03\x02\x02\x02\x1E\xF5\x03\x02\x02\x02 \xFF\x03\x02\x02\x02\"\u0103"+
		"\x03\x02\x02\x02$\u0113\x03\x02\x02\x02&\u0115\x03\x02\x02\x02(\u011D"+
		"\x03\x02\x02\x02*\u0122\x03\x02\x02\x02,\u0124\x03\x02\x02\x02.\u0127"+
		"\x03\x02\x02\x020\u012A\x03\x02\x02\x022\u0133\x03\x02\x02\x024\u0143"+
		"\x03\x02\x02\x026\u0145\x03\x02\x02\x028\u015E\x03\x02\x02\x02:\u016F"+
		"\x03\x02\x02\x02<\u0173\x03\x02\x02\x02>\u0178\x03\x02\x02\x02@\u0180"+
		"\x03\x02\x02\x02B\u0199\x03\x02\x02\x02D\u019D\x03\x02\x02\x02F\u01A5"+
		"\x03\x02\x02\x02H\u01C0\x03\x02\x02\x02J\u01C4\x03\x02\x02\x02L\u01CD"+
		"\x03\x02\x02\x02N\u01D3\x03\x02\x02\x02P\u01D7\x03\x02\x02\x02R\u01E5"+
		"\x03\x02\x02\x02T\u024C\x03\x02\x02\x02V\u0285\x03\x02\x02\x02X\u02A0"+
		"\x03\x02\x02\x02Z\u02A2\x03\x02\x02\x02\\\u02B0\x03\x02\x02\x02^\u02B2"+
		"\x03\x02\x02\x02`\u02C4\x03\x02\x02\x02b\u02C6\x03\x02\x02\x02d\u02C9"+
		"\x03\x02\x02\x02f\u02CC\x03\x02\x02\x02h\u02D2\x03\x02\x02\x02j\u02FE"+
		"\x03\x02\x02\x02l\u0309\x03\x02\x02\x02n\u0311\x03\x02\x02\x02pw\x05\x04"+
		"\x03\x02qw\x05\x1C\x0F\x02rw\x05,\x17\x02sw\x05\x1A\x0E\x02tw\x05\x12"+
		"\n\x02uw\x05n8\x02vp\x03\x02\x02\x02vq\x03\x02\x02\x02vr\x03\x02\x02\x02"+
		"vs\x03\x02\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02wz\x03\x02\x02\x02"+
		"xv\x03\x02\x02\x02xy\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02"+
		"{}\x07\x02\x02\x03|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x03\x03\x02\x02"+
		"\x02~\x85\x05\b\x05\x02\x7F\x85\x05\n\x06\x02\x80\x85\x05\f\x07\x02\x81"+
		"\x85\x05\x10\t\x02\x82\x85\x05\x0E\b\x02\x83\x85\x05\x06\x04\x02\x84~"+
		"\x03\x02\x02\x02\x84\x7F\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x81"+
		"\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x05"+
		"\x03\x02\x02\x02\x86\x87\x07~\x02\x02\x87\x88\t\x02\x02\x02\x88\x07\x03"+
		"\x02\x02\x02\x89\x8A\t\x03\x02\x02\x8A\x8B\x05F$\x02\x8B\t\x03\x02\x02"+
		"\x02\x8C\x8D\x07\x84\x02\x02\x8D\v\x03\x02\x02\x02\x8E\x8F\x07\x83\x02"+
		"\x02\x8F\r\x03\x02\x02\x02\x90\x91\x07\x82\x02\x02\x91\x97\x05F$\x02\x92"+
		"\x94\x07L\x02\x02\x93\x95\x05&\x14\x02\x94\x93\x03\x02\x02\x02\x94\x95"+
		"\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x07M\x02\x02\x97\x92"+
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9E\x03\x02\x02\x02\x99\x9C"+
		"\x05F$\x02\x9A\x9B\x07P\x02\x02\x9B\x9D\x05F$\x02\x9C\x9A\x03\x02\x02"+
		"\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x99\x03\x02\x02"+
		"\x02\x9E\x9F\x03\x02\x02\x02\x9F\x0F\x03\x02\x02\x02\xA0\xA1\x07\x80\x02"+
		"\x02\xA1\xA2\x05*\x16\x02\xA2\xA3\x05l7\x02\xA3\x11\x03\x02\x02\x02\xA4"+
		"\xA5\x07x\x02\x02\xA5\xA8\x05*\x16\x02\xA6\xA7\x07|\x02\x02\xA7\xA9\x05"+
		"*\x16\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03"+
		"\x02\x02\x02\xAA\xAF\x05l7\x02\xAB\xAE\x05\x14\v\x02\xAC\xAE\x05\x16\f"+
		"\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02"+
		"\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02"+
		"\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07y\x02\x02\xB3\xB4\x05l7\x02\xB4"+
		"\x13\x03\x02\x02\x02\xB5\xB6\x07{\x02\x02\xB6\xB9\x05*\x16\x02\xB7\xB8"+
		"\x07c\x02\x02\xB8\xBA\x05*\x16\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03"+
		"\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x05l7\x02\xBC\x15\x03\x02"+
		"\x02\x02\xBD\xBE\x07z\x02\x02\xBE\xC0\x05*\x16\x02\xBF\xC1\x05H%\x02\xC0"+
		"\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2"+
		"\xC3\x07c\x02\x02\xC3\xC5\x05*\x16\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5"+
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x05l7\x02\xC7\x17\x03"+
		"\x02\x02\x02\xC8\xC9\x07]\x02\x02\xC9\x19\x03\x02\x02\x02\xCA\xCC\x05"+
		"\x18\r\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03"+
		"\x02\x02\x02\xCD\xCE\x07z\x02\x02\xCE\xD0\x05*\x16\x02\xCF\xD1\x05H%\x02"+
		"\xD0\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02"+
		"\xD2\xD3\x07x\x02\x02\xD3\xD4\x05*\x16\x02\xD4\xD6\x05l7\x02\xD5\xD7\x05"+
		"\x1E\x10\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03"+
		"\x02\x02\x02\xD8\xDA\x05 \x11\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03"+
		"\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xDE\x07\x02\x02\x03\xDC\xDE\x05"+
		"2\x1A\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\x1B\x03"+
		"\x02\x02\x02\xDF\xE1\x05$\x13\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03"+
		"\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07v\x02\x02\xE3\xE9\x05"+
		"*\x16\x02\xE4\xE6\x07L\x02\x02\xE5\xE7\x05&\x14\x02\xE6\xE5\x03\x02\x02"+
		"\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x07M\x02"+
		"\x02\xE9\xE4\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xED\x03\x02\x02"+
		"\x02\xEB\xEC\x07c\x02\x02\xEC\xEE\x05*\x16\x02\xED\xEB\x03\x02\x02\x02"+
		"\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x05l7\x02\xF0"+
		"\xF2\x05 \x11\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2"+
		"\xF3\x03\x02\x02\x02\xF3\xF4\x052\x1A\x02\xF4\x1D\x03\x02\x02\x02\xF5"+
		"\xF6\x07S\x02\x02\xF6\xF7\x05*\x16\x02\xF7\xF8\x07L\x02\x02\xF8\xF9\x05"+
		"J&\x02\xF9\xFA\x07M\x02\x02\xFA\x1F\x03\x02\x02\x02\xFB\xFC\x07Z\x02\x02"+
		"\xFC\xFD\x05\"\x12\x02\xFD\xFE\x05l7\x02\xFE\u0100\x03\x02\x02\x02\xFF"+
		"\xFB\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02"+
		"\x02\u0101\u0102\x03\x02\x02\x02\u0102!\x03\x02\x02\x02\u0103\u0106\x05"+
		"F$\x02\u0104\u0105\x07c\x02\x02\u0105\u0107\x05*\x16\x02\u0106\u0104\x03"+
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0110\x03\x02\x02\x02\u0108"+
		"\u0109\x07P\x02\x02\u0109\u010C\x05F$\x02\u010A\u010B\x07c\x02\x02\u010B"+
		"\u010D\x05*\x16\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02"+
		"\x02\u010D\u010F\x03\x02\x02\x02\u010E\u0108\x03\x02\x02\x02\u010F\u0112"+
		"\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02"+
		"\u0111#\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\t\x04"+
		"\x02\x02\u0114%\x03\x02\x02\x02\u0115\u011A\x05(\x15\x02\u0116\u0117\x07"+
		"P\x02\x02\u0117\u0119\x05(\x15\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011C"+
		"\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02"+
		"\u011B\'\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x05*"+
		"\x16\x02\u011E\u011F\x07c\x02\x02\u011F\u0121\x05*\x16\x02\u0120\u011E"+
		"\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121)\x03\x02\x02\x02\u0122"+
		"\u0123\t\x05\x02\x02\u0123+\x03\x02\x02\x02\u0124\u0125\x07]\x02\x02\u0125"+
		"\u0126\x05\"\x12\x02\u0126-\x03\x02\x02\x02\u0127\u0128\x07[\x02\x02\u0128"+
		"\u0129\x05\"\x12\x02\u0129/\x03\x02\x02\x02\u012A\u012B\x07\\\x02\x02"+
		"\u012B\u012C\x05\"\x12\x02\u012C1\x03\x02\x02\x02\u012D\u0130\x054\x1B"+
		"\x02\u012E\u0131\x05l7\x02\u012F\u0131\x07\x02\x02\x03\u0130\u012E\x03"+
		"\x02\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132"+
		"\u0134\x05n8\x02\u0133\u012D\x03\x02\x02\x02\u0133\u0132\x03\x02\x02\x02"+
		"\u0134\u0135\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03"+
		"\x02\x02\x02\u01363\x03\x02\x02\x02\u0137\u0144\x05F$\x02\u0138\u0144"+
		"\x056\x1C\x02\u0139\u0144\x058\x1D\x02\u013A\u0144\x05> \x02\u013B\u0144"+
		"\x05D#\x02\u013C\u0144\x05<\x1F\x02\u013D\u0144\x05B\"\x02\u013E\u0144"+
		"\x05.\x18\x02\u013F\u0144\x05,\x17\x02\u0140\u0144\x050\x19\x02\u0141"+
		"\u0144\x05`1\x02\u0142\u0144\x05\x04\x03\x02\u0143\u0137\x03\x02\x02\x02"+
		"\u0143\u0138\x03\x02\x02\x02\u0143\u0139\x03\x02\x02\x02\u0143\u013A\x03"+
		"\x02\x02\x02\u0143\u013B\x03\x02\x02\x02\u0143\u013C\x03\x02\x02\x02\u0143"+
		"\u013D\x03\x02\x02\x02\u0143\u013E\x03\x02\x02\x02\u0143\u013F\x03\x02"+
		"\x02\x02\u0143\u0140\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143"+
		"\u0142\x03\x02\x02\x02\u01445\x03\x02\x02\x02\u0145\u0146\x07l\x02\x02"+
		"\u0146\u0147\x05F$\x02\u0147\u0148\x05l7\x02\u0148\u0150\x052\x1A\x02"+
		"\u0149\u014A\x07k\x02\x02\u014A\u014B\x05F$\x02\u014B\u014C\x05l7\x02"+
		"\u014C\u014D\x052\x1A\x02\u014D\u014F\x03\x02\x02\x02\u014E\u0149\x03"+
		"\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150"+
		"\u0151\x03\x02\x02\x02\u0151\u0159\x03\x02\x02\x02\u0152\u0150\x03\x02"+
		"\x02\x02\u0153\u0154\x07m\x02\x02\u0154\u0155\x05l7\x02\u0155\u0156\x05"+
		"2\x1A\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0153\x03\x02\x02\x02\u0158"+
		"\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02"+
		"\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C"+
		"\u015D\x07n\x02\x02\u015D7\x03\x02\x02\x02\u015E\u015F\x07d\x02\x02\u015F"+
		"\u0160\x05:\x1E\x02\u0160\u0161\x07g\x02\x02\u0161\u0164\x05F$\x02\u0162"+
		"\u0163\x07f\x02\x02\u0163\u0165\x05F$\x02\u0164\u0162\x03\x02\x02\x02"+
		"\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x05"+
		"l7\x02\u0167\u0168\x052\x1A\x02\u0168\u016A\x07e\x02\x02\u0169\u016B\x05"+
		"*\x16\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B"+
		"\u016D\x03\x02\x02\x02\u016C\u016E\x05l7\x02\u016D\u016C\x03\x02\x02\x02"+
		"\u016D\u016E\x03\x02\x02\x02\u016E9\x03\x02\x02\x02\u016F\u0170\x05*\x16"+
		"\x02\u0170\u0171\x075\x02\x02\u0171\u0172\x05F$\x02\u0172;\x03\x02\x02"+
		"\x02\u0173\u0176\x07j\x02\x02\u0174\u0177\x05> \x02\u0175\u0177\x05@!"+
		"\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177=\x03"+
		"\x02\x02\x02\u0178\u0179\x07i\x02\x02\u0179\u017A\x05F$\x02\u017A\u017B"+
		"\x05l7\x02\u017B\u017C\x052\x1A\x02\u017C\u017E\t\x06\x02\x02\u017D\u017F"+
		"\x05l7\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F"+
		"?\x03\x02\x02\x02\u0180\u0181\x07s\x02\x02\u0181\u0187\x05l7\x02\u0182"+
		"\u0183\x07s\x02\x02\u0183\u0184\x05F$\x02\u0184\u0185\x05l7\x02\u0185"+
		"\u0186\x052\x1A\x02\u0186\u0188\x03\x02\x02\x02\u0187\u0182\x03\x02\x02"+
		"\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A"+
		"\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u018C\x07u\x02\x02"+
		"\u018C\u018E\x052\x1A\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03"+
		"\x02\x02\x02\u018E\u0194\x03\x02\x02\x02\u018F\u0195\x07t\x02\x02\u0190"+
		"\u0192\x07q\x02\x02\u0191\u0193\x07j\x02\x02\u0192\u0191\x03\x02\x02\x02"+
		"\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u018F\x03"+
		"\x02\x02\x02\u0194\u0190\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196"+
		"\u0198\x05l7\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02"+
		"\u0198A\x03\x02\x02\x02\u0199\u019B\x07w\x02\x02\u019A\u019C\x05F$\x02"+
		"\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019CC\x03\x02"+
		"\x02\x02\u019D\u019E\t\x07\x02\x02\u019EE\x03\x02\x02\x02\u019F\u01A0"+
		"\b$\x01\x02\u01A0\u01A6\x05R*\x02\u01A1\u01A2\t\b\x02\x02\u01A2\u01A6"+
		"\x05F$\t\u01A3\u01A4\t\t\x02\x02\u01A4\u01A6\x05F$\b\u01A5\u019F\x03\x02"+
		"\x02\x02\u01A5\u01A1\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6"+
		"\u01BD\x03\x02\x02\x02\u01A7\u01A8\f\n\x02\x02\u01A8\u01A9\x07W\x02\x02"+
		"\u01A9\u01BC\x05F$\v\u01AA\u01AB\f\x07\x02\x02\u01AB\u01AC\t\n\x02\x02"+
		"\u01AC\u01BC\x05F$\b\u01AD\u01AE\f\x06\x02\x02\u01AE\u01AF\t\v\x02\x02"+
		"\u01AF\u01BC\x05F$\x07\u01B0\u01B1\f\x05\x02\x02\u01B1\u01B2\t\f\x02\x02"+
		"\u01B2\u01BC\x05F$\x06\u01B3\u01B4\f\x04\x02\x02\u01B4\u01B5\t\r\x02\x02"+
		"\u01B5\u01BC\x05F$\x05\u01B6\u01B7\f\x03\x02\x02\u01B7\u01B8\t\x0E\x02"+
		"\x02\u01B8\u01BC\x05F$\x04\u01B9\u01BA\f\v\x02\x02\u01BA\u01BC\t\x0F\x02"+
		"\x02\u01BB\u01A7\x03\x02\x02\x02\u01BB\u01AA\x03\x02\x02\x02\u01BB\u01AD"+
		"\x03\x02\x02\x02\u01BB\u01B0\x03\x02\x02\x02\u01BB\u01B3\x03\x02\x02\x02"+
		"\u01BB\u01B6\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BF\x03"+
		"\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE"+
		"G\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C1\x07L\x02\x02"+
		"\u01C1\u01C2\x05J&\x02\u01C2\u01C3\x07M\x02\x02\u01C3I\x03\x02\x02\x02"+
		"\u01C4\u01C9\x05L\'\x02\u01C5\u01C6\x07P\x02\x02\u01C6\u01C8\x05L\'\x02"+
		"\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03"+
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CAK\x03\x02\x02\x02\u01CB"+
		"\u01C9\x03\x02\x02\x02\u01CC\u01CE\x05F$\x02\u01CD\u01CC\x03\x02\x02\x02"+
		"\u01CD\u01CE\x03\x02\x02\x02\u01CEM\x03\x02\x02\x02\u01CF\u01D0\x07N\x02"+
		"\x02\u01D0\u01D1\x05J&\x02\u01D1\u01D2\x07O\x02\x02\u01D2\u01D4\x03\x02"+
		"\x02\x02\u01D3\u01CF\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5"+
		"\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6O\x03\x02\x02"+
		"\x02\u01D7\u01D8\x07S\x02\x02\u01D8\u01DA\x05*\x16\x02\u01D9\u01DB\x05"+
		"H%\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD"+
		"\x03\x02\x02\x02\u01DC\u01DE\x05N(\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD"+
		"\u01DE\x03\x02\x02\x02\u01DEQ\x03\x02\x02\x02\u01DF\u01E0\x07\x1E\x02"+
		"\x02\u01E0\u01E6\x05F$\x02\u01E1\u01E3\x07R\x02\x02\u01E2\u01E1\x03\x02"+
		"\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4"+
		"\u01E6\x05T+\x02\u01E5\u01DF\x03\x02\x02\x02\u01E5\u01E2\x03\x02\x02\x02"+
		"\u01E6S\x03\x02\x02\x02\u01E7\u01E8\x07L\x02\x02\u01E8\u01E9\x05J&\x02"+
		"\u01E9\u01EB";
	private static readonly _serializedATNSegment1: string =
		"\x07M\x02\x02\u01EA\u01EC\x05N(\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB"+
		"\u01EC\x03\x02\x02\x02\u01EC\u024D\x03\x02\x02\x02\u01ED\u01EF\x07U\x02"+
		"\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0"+
		"\x03\x02\x02\x02\u01F0\u01F1\x05*\x16\x02\u01F1\u01F2\x05N(\x02\u01F2"+
		"\u024D\x03\x02\x02\x02\u01F3\u01F4\x05*\x16\x02\u01F4\u01F6\x05H%\x02"+
		"\u01F5\u01F7\x05N(\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02"+
		"\x02\x02\u01F7\u024D\x03\x02\x02\x02\u01F8\u01F9\x05*\x16\x02\u01F9\u01FA"+
		"\x07L\x02\x02\u01FA\u01FB\x07M\x02\x02\u01FB\u01FC\x07S\x02\x02\u01FC"+
		"\u01FD\x05*\x16\x02\u01FD\u01FE\x05H%\x02\u01FE\u024D\x03\x02\x02\x02"+
		"\u01FF\u0200\x05*\x16\x02\u0200\u0204\x05H%\x02\u0201\u0203\x05P)\x02"+
		"\u0202\u0201\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03"+
		"\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u024D\x03\x02\x02\x02\u0206"+
		"\u0204\x03\x02\x02\x02\u0207\u0209\x07U\x02\x02\u0208\u0207\x03\x02\x02"+
		"\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C"+
		"\x05*\x16\x02\u020B\u020D\x05N(\x02\u020C\u020B\x03\x02\x02\x02\u020C"+
		"\u020D\x03\x02\x02\x02\u020D\u0213\x03\x02\x02\x02\u020E\u020F\x07S\x02"+
		"\x02\u020F\u0211\x05*\x16\x02\u0210\u0212\x05N(\x02\u0211\u0210\x03\x02"+
		"\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214\x03\x02\x02\x02\u0213"+
		"\u020E\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02"+
		"\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u024D\x03\x02\x02\x02\u0217"+
		"\u021B\x05*\x16\x02\u0218\u021A\x05N(\x02\u0219\u0218\x03\x02\x02\x02"+
		"\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03"+
		"\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E"+
		"\u0220\x05P)\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02"+
		"\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u024D\x03"+
		"\x02\x02\x02\u0223\u0225\x07U\x02\x02\u0224\u0223\x03\x02\x02\x02\u0224"+
		"\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u024D\x05*\x16"+
		"\x02\u0227\u024D\x05\\/\x02\u0228\u024D\x05X-\x02\u0229\u022A\x07T\x02"+
		"\x02\u022A\u0235\x05F$\x02\u022B\u0234\x05N(\x02\u022C\u022F\x07Q\x02"+
		"\x02\u022D\u0230\x05H%\x02\u022E\u0230\x05F$\x02\u022F\u022D\x03\x02\x02"+
		"\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0234"+
		"\x03\x02\x02\x02\u0231\u0234\x05P)\x02\u0232\u0234\x05H%\x02\u0233\u022B"+
		"\x03\x02\x02\x02\u0233\u022C\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02"+
		"\u0233\u0232\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03"+
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u024D\x03\x02\x02\x02\u0237"+
		"\u0235\x03\x02\x02\x02\u0238\u024D\x05^0\x02\u0239\u023A\x07U\x02\x02"+
		"\u023A\u023B\x07Y\x02\x02\u023B\u0240\x05*\x16\x02\u023C\u023D\x07S\x02"+
		"\x02\u023D\u023F\x05*\x16\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242"+
		"\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02"+
		"\u0241\u0243\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0244\x07"+
		"c\x02\x02\u0244\u0245\x05*\x16\x02\u0245\u024D\x03\x02\x02\x02\u0246\u0247"+
		"\x07U\x02\x02\u0247\u0248\x05F$\x02\u0248\u0249\x07P\x02\x02\u0249\u024A"+
		"\x05F$\x02\u024A\u024B\x05V,\x02\u024B\u024D\x03\x02\x02\x02\u024C\u01E7"+
		"\x03\x02\x02\x02\u024C\u01EE\x03\x02\x02\x02\u024C\u01F3\x03\x02\x02\x02"+
		"\u024C\u01F8\x03\x02\x02\x02\u024C\u01FF\x03\x02\x02\x02\u024C\u0208\x03"+
		"\x02\x02\x02\u024C\u0217\x03\x02\x02\x02\u024C\u0224\x03\x02\x02\x02\u024C"+
		"\u0227\x03\x02\x02\x02\u024C\u0228\x03\x02\x02\x02\u024C\u0229\x03\x02"+
		"\x02\x02\u024C\u0238\x03\x02\x02\x02\u024C\u0239\x03\x02\x02\x02\u024C"+
		"\u0246\x03\x02\x02\x02\u024DU\x03\x02\x02\x02\u024E\u024F\x07\x1C\x02"+
		"\x02\u024F\u0286\x07\x85\x02\x02\u0250\u0251\x07\x15\x02\x02\u0251\u0286"+
		"\x07\x85\x02\x02\u0252\u0253\x07\x0E\x02\x02\u0253\u0286\x07\x85\x02\x02"+
		"\u0254\u0255\x07\x16\x02\x02\u0255\u0286\x07\x85\x02\x02\u0256\u0257\x07"+
		"\x07\x02\x02\u0257\u0286\x07\x85\x02\x02\u0258\u0259\x07!\x02\x02\u0259"+
		"\u0286\x05F$\x02\u025A\u025C\x07\x19\x02\x02\u025B\u025D\x07R\x02\x02"+
		"\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03"+
		"\x02\x02\x02\u025E\u0286\x07\x85\x02\x02\u025F\u0260\x07\x10\x02\x02\u0260"+
		"\u0286\x07\x85\x02\x02\u0261\u0262\x07\x0F\x02\x02\u0262\u0286\x07\x85"+
		"\x02\x02\u0263\u0264\x07\x11\x02\x02\u0264\u0286\x05F$\x02\u0265\u0266"+
		"\x07\x12\x02\x02\u0266\u0286\x05F$\x02\u0267\u0269\x07\x13\x02\x02\u0268"+
		"\u026A\x07R\x02\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02"+
		"\x02\u026A\u026B\x03\x02\x02\x02\u026B\u0286\x07\x85\x02\x02\u026C\u026D"+
		"\x07\x17\x02\x02\u026D\u0286\x05F$\x02\u026E\u0286\x07\x1B\x02\x02\u026F"+
		"\u0270\x07\x14\x02\x02\u0270\u0286\x05F$\x02\u0271\u0272\x07\t\x02\x02"+
		"\u0272\u0286\x05F$\x02\u0273\u0274\x07\x18\x02\x02\u0274\u0286\x05J&\x02"+
		"\u0275\u0276\x07g\x02\x02\u0276\u0286\x05J&\x02\u0277\u0278\x07\r\x02"+
		"\x02\u0278\u0286\x05J&\x02\u0279\u027A\x07|\x02\x02\u027A\u0286\x05J&"+
		"\x02\u027B\u027C\x07\x06\x02\x02\u027C\u0286\x05F$\x02\u027D\u027E\x07"+
		"\n\x02\x02\u027E\u027F\x07\v\x02\x02\u027F\u0286\x05F$\x02\u0280\u0281"+
		"\x07\x05\x02\x02\u0281\u0286\x05J&\x02\u0282\u0283\x07\n\x02\x02\u0283"+
		"\u0284\x07\b\x02\x02\u0284\u0286\x05F$\x02\u0285\u024E\x03\x02\x02\x02"+
		"\u0285\u0250\x03\x02\x02\x02\u0285\u0252\x03\x02\x02\x02\u0285\u0254\x03"+
		"\x02\x02\x02\u0285\u0256\x03\x02\x02\x02\u0285\u0258\x03\x02\x02\x02\u0285"+
		"\u025A\x03\x02\x02\x02\u0285\u025F\x03\x02\x02\x02\u0285\u0261\x03\x02"+
		"\x02\x02\u0285\u0263\x03\x02\x02\x02\u0285\u0265\x03\x02\x02\x02\u0285"+
		"\u0267\x03\x02\x02\x02\u0285\u026C\x03\x02\x02\x02\u0285\u026E\x03\x02"+
		"\x02\x02\u0285\u026F\x03\x02\x02\x02\u0285\u0271\x03\x02\x02\x02\u0285"+
		"\u0273\x03\x02\x02\x02\u0285\u0275\x03\x02\x02\x02\u0285\u0277\x03\x02"+
		"\x02\x02\u0285\u0279\x03\x02\x02\x02\u0285\u027B\x03\x02\x02\x02\u0285"+
		"\u027D\x03\x02\x02\x02\u0285\u0280\x03\x02\x02\x02\u0285\u0282\x03\x02"+
		"\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287"+
		"\u0288\x03\x02\x02\x02\u0288\u028C\x03\x02\x02\x02\u0289\u028B\x07\x85"+
		"\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C"+
		"\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028DW\x03\x02\x02"+
		"\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07J\x02\x02\u0290\u0291"+
		"\x05J&\x02\u0291\u0293\x07K\x02\x02\u0292\u0294\x05N(\x02\u0293\u0292"+
		"\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u02A1\x03\x02\x02\x02"+
		"\u0295\u0296\x07J\x02\x02\u0296\u0298\x07V\x02\x02\u0297\u0299\x05Z.\x02"+
		"\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03"+
		"\x02\x02\x02\u029A\u029B\x07V\x02\x02\u029B\u029C\x05J&\x02\u029C\u029E"+
		"\x07K\x02\x02\u029D\u029F\x05N(\x02\u029E\u029D\x03\x02\x02\x02\u029E"+
		"\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u028F\x03\x02"+
		"\x02\x02\u02A0\u0295\x03\x02\x02\x02\u02A1Y\x03\x02\x02\x02\u02A2\u02A7"+
		"\x05*\x16\x02\u02A3\u02A4\x07P\x02\x02\u02A4\u02A6\x05*\x16\x02\u02A5"+
		"\u02A3\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02"+
		"\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8[\x03\x02\x02\x02\u02A9\u02A7"+
		"\x03\x02\x02\x02\u02AA\u02B1\x07X\x02\x02\u02AB\u02B1\x07\x88\x02\x02"+
		"\u02AC\u02B1\x07\x89\x02\x02\u02AD\u02B1\x07E\x02\x02\u02AE\u02B1\x07"+
		"F\x02\x02\u02AF\u02B1\x07G\x02\x02\u02B0\u02AA\x03\x02\x02\x02\u02B0\u02AB"+
		"\x03\x02\x02\x02\u02B0\u02AC\x03\x02\x02\x02\u02B0\u02AD\x03\x02\x02\x02"+
		"\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1]\x03\x02"+
		"\x02\x02\u02B2\u02B3\x07l\x02\x02\u02B3\u02B4\x07L\x02\x02\u02B4\u02B5"+
		"\x05F$\x02\u02B5\u02B7\x07P\x02\x02\u02B6\u02B8\x05F$\x02\u02B7\u02B6"+
		"\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02"+
		"\u02B9\u02BB\x07P\x02\x02\u02BA\u02BC\x05F$\x02\u02BB\u02BA\x03\x02\x02"+
		"\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE"+
		"\x07M\x02\x02\u02BE_\x03\x02\x02\x02\u02BF\u02C5\x05h5\x02\u02C0\u02C5"+
		"\x05j6\x02\u02C1\u02C5\x05b2\x02\u02C2\u02C5\x05d3\x02\u02C3\u02C5\x05"+
		"f4\x02\u02C4\u02BF\x03\x02\x02\x02\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C1"+
		"\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C3\x03\x02\x02\x02"+
		"\u02C5a\x03\x02\x02\x02\u02C6\u02C7\x07+\x02\x02\u02C7\u02C8\x05V,\x02"+
		"\u02C8c\x03\x02\x02\x02\u02C9\u02CA\x07\f\x02\x02\u02CA\u02CB\x05V,\x02"+
		"\u02CBe\x03\x02\x02\x02\u02CC\u02CD\x07\x03\x02\x02\u02CD\u02CE\x07\x04"+
		"\x02\x02\u02CE\u02D0\x07g\x02\x02\u02CF\u02D1\x05F$\x02\u02D0\u02CF\x03"+
		"\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1g\x03\x02\x02\x02\u02D2"+
		"\u02D3\x07*\x02\x02\u02D3\u02D6\x07X\x02\x02\u02D4\u02D5\x07!\x02\x02"+
		"\u02D5\u02D7\x07\x85\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03"+
		"\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02E7\x07c\x02\x02\u02D9"+
		"\u02E8\x07\x1F\x02\x02\u02DA\u02DC\x07 \x02\x02\u02DB\u02DD\x07$\x02\x02"+
		"\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02E8\x03"+
		"\x02\x02\x02\u02DE\u02E8\x07\"\x02\x02\u02DF\u02E8\x07#\x02\x02\u02E0"+
		"\u02E8\x07%\x02\x02\u02E1\u02E8\x07&\x02\x02\u02E2\u02E5\x07\'\x02\x02"+
		"\u02E3\u02E4\x07x\x02\x02\u02E4\u02E6\x07\x85\x02\x02\u02E5\u02E3\x03"+
		"\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7"+
		"\u02D9\x03\x02\x02\x02\u02E7\u02DA\x03\x02\x02\x02\u02E7\u02DE\x03\x02"+
		"\x02\x02\u02E7\u02DF\x03\x02\x02\x02\u02E7\u02E0\x03\x02\x02\x02\u02E7"+
		"\u02E1\x03\x02\x02\x02\u02E7\u02E2\x03\x02\x02\x02\u02E8\u02EB\x03\x02"+
		"\x02\x02\u02E9\u02EA\x07P\x02\x02\u02EA\u02EC\t\x10\x02\x02\u02EB\u02E9"+
		"\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02F1\x03\x02\x02\x02"+
		"\u02ED\u02EE\x07\x1A\x02\x02\u02EE\u02EF\x07\'\x02\x02\u02EF\u02F0\x07"+
		"x\x02\x02\u02F0\u02F2\x05J&\x02\u02F1\u02ED\x03\x02\x02\x02\u02F1\u02F2"+
		"\x03\x02\x02\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F4\x07)\x02\x02"+
		"\u02F4\u02F6\x05F$\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02"+
		"\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02F9\x07(\x02\x02\u02F8\u02F7"+
		"\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02"+
		"\u02FA\u02FB\x07\x1E\x02\x02\u02FB\u02FD\x05F$\x02\u02FC\u02FA\x03\x02"+
		"\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FDi\x03\x02\x02\x02\u02FE\u02FF"+
		"\x07\x1D\x02\x02\u02FF\u0300\x07\x85\x02\x02\u0300\u0301\x07)\x02\x02"+
		"\u0301\u0302\x05F$\x02\u0302k\x03\x02\x02\x02\u0303\u0305\x07\x8A\x02"+
		"\x02\u0304\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0304"+
		"\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02"+
		"\u0308\u030A\x07I\x02\x02\u0309\u0304\x03\x02\x02\x02\u0309\u0308\x03"+
		"\x02\x02\x02\u030Am\x03\x02\x02\x02\u030B\u030D\x07\x8A\x02\x02\u030C"+
		"\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030C\x03\x02"+
		"\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310"+
		"\u0312\x07I\x02\x02\u0311\u030C\x03\x02\x02\x02\u0311\u0310\x03\x02\x02"+
		"\x02\u0312o\x03\x02\x02\x02gvx|\x84\x94\x97\x9C\x9E\xA8\xAD\xAF\xB9\xC0"+
		"\xC4\xCB\xD0\xD6\xD9\xDD\xE0\xE6\xE9\xED\xF1\u0101\u0106\u010C\u0110\u011A"+
		"\u0120\u0130\u0133\u0135\u0143\u0150\u0159\u0164\u016A\u016D\u0176\u017E"+
		"\u0189\u018D\u0192\u0194\u0197\u019B\u01A5\u01BB\u01BD\u01C9\u01CD\u01D5"+
		"\u01DA\u01DD\u01E2\u01E5\u01EB\u01EE\u01F6\u0204\u0208\u020C\u0211\u0215"+
		"\u021B\u0221\u0224\u022F\u0233\u0235\u0240\u024C\u025C\u0269\u0285\u0287"+
		"\u028C\u0293\u0298\u029E\u02A0\u02A7\u02B0\u02B7\u02BB\u02C4\u02D0\u02D6"+
		"\u02DC\u02E5\u02E7\u02EB\u02F1\u02F5\u02F8\u02FC\u0306\u0309\u030E\u0311";
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
	public directives(): DirectivesContext[];
	public directives(i: number): DirectivesContext;
	public directives(i?: number): DirectivesContext | DirectivesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectivesContext);
		} else {
			return this.getRuleContext(i, DirectivesContext);
		}
	}
	public funcDeclaration(): FuncDeclarationContext[];
	public funcDeclaration(i: number): FuncDeclarationContext;
	public funcDeclaration(i?: number): FuncDeclarationContext | FuncDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncDeclarationContext);
		} else {
			return this.getRuleContext(i, FuncDeclarationContext);
		}
	}
	public staticVariableDeclarationStatement(): StaticVariableDeclarationStatementContext[];
	public staticVariableDeclarationStatement(i: number): StaticVariableDeclarationStatementContext;
	public staticVariableDeclarationStatement(i?: number): StaticVariableDeclarationStatementContext | StaticVariableDeclarationStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticVariableDeclarationStatementContext);
		} else {
			return this.getRuleContext(i, StaticVariableDeclarationStatementContext);
		}
	}
	public methodBody(): MethodBodyContext[];
	public methodBody(i: number): MethodBodyContext;
	public methodBody(i?: number): MethodBodyContext | MethodBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodBodyContext);
		} else {
			return this.getRuleContext(i, MethodBodyContext);
		}
	}
	public classDeclaration(): ClassDeclarationContext[];
	public classDeclaration(i: number): ClassDeclarationContext;
	public classDeclaration(i?: number): ClassDeclarationContext | ClassDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassDeclarationContext);
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


export class DirectivesContext extends ParserRuleContext {
	public ifDef(): IfDefContext | undefined {
		return this.tryGetRuleContext(0, IfDefContext);
	}
	public elseDef(): ElseDefContext | undefined {
		return this.tryGetRuleContext(0, ElseDefContext);
	}
	public endifDef(): EndifDefContext | undefined {
		return this.tryGetRuleContext(0, EndifDefContext);
	}
	public undefineDeclaration(): UndefineDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UndefineDeclarationContext);
	}
	public defineDeclaration(): DefineDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DefineDeclarationContext);
	}
	public includeDeclaration(): IncludeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, IncludeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_directives; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDirectives) listener.enterDirectives(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDirectives) listener.exitDirectives(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDirectives) return visitor.visitDirectives(this);
		else return visitor.visitChildren(this);
	}
}


export class IncludeDeclarationContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(AdvplParser.INCLUDE, 0); }
	public STRINGSIMPLE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STRINGSIMPLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_includeDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIncludeDeclaration) listener.enterIncludeDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIncludeDeclaration) listener.exitIncludeDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIncludeDeclaration) return visitor.visitIncludeDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class IfDefContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IFDEF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.IFDEF, 0); }
	public IFNDEF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.IFNDEF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_ifDef; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterIfDef) listener.enterIfDef(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitIfDef) listener.exitIfDef(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitIfDef) return visitor.visitIfDef(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseDefContext extends ParserRuleContext {
	public ELSEDEF(): TerminalNode { return this.getToken(AdvplParser.ELSEDEF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_elseDef; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterElseDef) listener.enterElseDef(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitElseDef) listener.exitElseDef(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitElseDef) return visitor.visitElseDef(this);
		else return visitor.visitChildren(this);
	}
}


export class EndifDefContext extends ParserRuleContext {
	public ENDIFDEF(): TerminalNode { return this.getToken(AdvplParser.ENDIFDEF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_endifDef; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterEndifDef) listener.enterEndifDef(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitEndifDef) listener.exitEndifDef(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitEndifDef) return visitor.visitEndifDef(this);
		else return visitor.visitChildren(this);
	}
}


export class DefineDeclarationContext extends ParserRuleContext {
	public PDEFINE(): TerminalNode { return this.getToken(AdvplParser.PDEFINE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RPAREN, 0); }
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_defineDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDefineDeclaration) listener.enterDefineDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDefineDeclaration) listener.exitDefineDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDefineDeclaration) return visitor.visitDefineDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class UndefineDeclarationContext extends ParserRuleContext {
	public UNDEFINE(): TerminalNode { return this.getToken(AdvplParser.UNDEFINE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_undefineDeclaration; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterUndefineDeclaration) listener.enterUndefineDeclaration(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitUndefineDeclaration) listener.exitUndefineDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitUndefineDeclaration) return visitor.visitUndefineDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(AdvplParser.CLASS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
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
	public ENDCLASS(): TerminalNode { return this.getToken(AdvplParser.ENDCLASS, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.FROM, 0); }
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
	public DATA(): TerminalNode { return this.getToken(AdvplParser.DATA, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
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


export class MethodDefinitionContext extends ParserRuleContext {
	public METHOD(): TerminalNode { return this.getToken(AdvplParser.METHOD, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
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


export class MethodBodyContext extends ParserRuleContext {
	public METHOD(): TerminalNode { return this.getToken(AdvplParser.METHOD, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public CLASS(): TerminalNode { return this.getToken(AdvplParser.CLASS, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EOF, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public modifiersMethod(): ModifiersMethodContext | undefined {
		return this.tryGetRuleContext(0, ModifiersMethodContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
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
	@Override public get ruleIndex(): number { return AdvplParser.RULE_methodBody; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterMethodBody) listener.enterMethodBody(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitMethodBody) listener.exitMethodBody(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitMethodBody) return visitor.visitMethodBody(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(AdvplParser.FUNCTION, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifiersFunction(): ModifiersFunctionContext | undefined {
		return this.tryGetRuleContext(0, ModifiersFunctionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RPAREN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
	public initFuncOrMethod(): InitFuncOrMethodContext | undefined {
		return this.tryGetRuleContext(0, InitFuncOrMethodContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
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


export class InitFuncOrMethodContext extends ParserRuleContext {
	public LOCAL(): TerminalNode[];
	public LOCAL(i: number): TerminalNode;
	public LOCAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LOCAL);
		} else {
			return this.getToken(AdvplParser.LOCAL, i);
		}
	}
	public variableDeclarationStatement(): VariableDeclarationStatementContext[];
	public variableDeclarationStatement(i: number): VariableDeclarationStatementContext;
	public variableDeclarationStatement(i?: number): VariableDeclarationStatementContext | VariableDeclarationStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationStatementContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationStatementContext);
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


export class VariableDeclarationStatementContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return AdvplParser.RULE_variableDeclarationStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterVariableDeclarationStatement) listener.enterVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitVariableDeclarationStatement) listener.exitVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) return visitor.visitVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ModifiersFunctionContext extends ParserRuleContext {
	public USER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.USER, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STATIC, 0); }
	public MAIN(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MAIN, 0); }
	public PROJECT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PROJECT, 0); }
	public TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.TEMPLATE, 0); }
	public WEB(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.WEB, 0); }
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AS, 0); }
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


export class IdentifierContext extends ParserRuleContext {
	public SELF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.SELF, 0); }
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.COLONCOLON, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.IDENTIFIER, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DATA, 0); }
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DEFINE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.FROM, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OBJECT, 0); }
	public CHARACTER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.CHARACTER, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DATE, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.NUMERIC, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LOGICAL, 0); }
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.BLOCK, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ARRAY, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DEFAULT, 0); }
	public ACTIVATE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ACTIVATE, 0); }
	public INIT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.INIT, 0); }
	public VALID(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.VALID, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.FILTER, 0); }
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


export class StaticVariableDeclarationStatementContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(AdvplParser.STATIC, 0); }
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		return this.getRuleContext(0, VariableDeclarationStatementContext);
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


export class PrivateVariableDeclarationStatementContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode { return this.getToken(AdvplParser.PRIVATE, 0); }
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		return this.getRuleContext(0, VariableDeclarationStatementContext);
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


export class PublicVariableDeclarationStatementContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode { return this.getToken(AdvplParser.PUBLIC, 0); }
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		return this.getRuleContext(0, VariableDeclarationStatementContext);
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public exitOrLoopStatement(): ExitOrLoopStatementContext | undefined {
		return this.tryGetRuleContext(0, ExitOrLoopStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public privateVariableDeclarationStatement(): PrivateVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, PrivateVariableDeclarationStatementContext);
	}
	public staticVariableDeclarationStatement(): StaticVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, StaticVariableDeclarationStatementContext);
	}
	public publicVariableDeclarationStatement(): PublicVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, PublicVariableDeclarationStatementContext);
	}
	public chStatement(): ChStatementContext | undefined {
		return this.tryGetRuleContext(0, ChStatementContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
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


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(AdvplParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ENDIF(): TerminalNode { return this.getToken(AdvplParser.ENDIF, 0); }
	public ELSEIF(): TerminalNode[];
	public ELSEIF(i: number): TerminalNode;
	public ELSEIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ELSEIF);
		} else {
			return this.getToken(AdvplParser.ELSEIF, i);
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


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(AdvplParser.FOR, 0); }
	public forInit(): ForInitContext {
		return this.getRuleContext(0, ForInitContext);
	}
	public TO(): TerminalNode { return this.getToken(AdvplParser.TO, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.NEXT, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.STEP, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
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


export class ForInitContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(AdvplParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(AdvplParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ENDDO(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ENDDO, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.END, 0); }
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public OTHERWISE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OTHERWISE, 0); }
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


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(AdvplParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public primary_ref(): Primary_refContext {
		return this.getRuleContext(0, Primary_refContext);
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
	public PLUSEQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.PLUSEQUALS, 0); }
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.ASSIGNMENT, 0); }
	public MINUSEQUALS(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MINUSEQUALS, 0); }
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
	public DIFF(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIFF, 0); }
	public DIFF2(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DIFF2, 0); }
	public DOLAR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DOLAR, 0); }
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


export class Primary_refContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DEFAULT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.COLONCOLON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_primary_ref; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterPrimary_ref) listener.enterPrimary_ref(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitPrimary_ref) listener.exitPrimary_ref(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitPrimary_ref) return visitor.visitPrimary_ref(this);
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
	public AT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AT, 0); }
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
	public AT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AT, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(AdvplParser.LPAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AdvplParser.RPAREN, 0); }
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
	public AT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.AT, 0); }
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
	public AMPERSAND(): TerminalNode { return this.getToken(AdvplParser.AMPERSAND, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
export class NumberCHSayContext extends PrimaryContext {
	public AT(): TerminalNode { return this.getToken(AdvplParser.AT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(AdvplParser.COMMA, 0); }
	public atxCommand(): AtxCommandContext {
		return this.getRuleContext(0, AtxCommandContext);
	}
	constructor(ctx: PrimaryContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterNumberCHSay) listener.enterNumberCHSay(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitNumberCHSay) listener.exitNumberCHSay(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitNumberCHSay) return visitor.visitNumberCHSay(this);
		else return visitor.visitChildren(this);
	}
}
export class AssumeContext extends PrimaryContext {
	public AT(): TerminalNode { return this.getToken(AdvplParser.AT, 0); }
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


export class AtxCommandContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.IDENTIFIER);
		} else {
			return this.getToken(AdvplParser.IDENTIFIER, i);
		}
	}
	public SAY(): TerminalNode[];
	public SAY(i: number): TerminalNode;
	public SAY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.SAY);
		} else {
			return this.getToken(AdvplParser.SAY, i);
		}
	}
	public MSGET(): TerminalNode[];
	public MSGET(i: number): TerminalNode;
	public MSGET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.MSGET);
		} else {
			return this.getToken(AdvplParser.MSGET, i);
		}
	}
	public MSDIALOG(): TerminalNode[];
	public MSDIALOG(i: number): TerminalNode;
	public MSDIALOG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.MSDIALOG);
		} else {
			return this.getToken(AdvplParser.MSDIALOG, i);
		}
	}
	public COMBOBOX(): TerminalNode[];
	public COMBOBOX(i: number): TerminalNode;
	public COMBOBOX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COMBOBOX);
		} else {
			return this.getToken(AdvplParser.COMBOBOX, i);
		}
	}
	public CHECKBOX(): TerminalNode[];
	public CHECKBOX(i: number): TerminalNode;
	public CHECKBOX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CHECKBOX);
		} else {
			return this.getToken(AdvplParser.CHECKBOX, i);
		}
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.VAR);
		} else {
			return this.getToken(AdvplParser.VAR, i);
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
	public OF(): TerminalNode[];
	public OF(i: number): TerminalNode;
	public OF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.OF);
		} else {
			return this.getToken(AdvplParser.OF, i);
		}
	}
	public BUTTON(): TerminalNode[];
	public BUTTON(i: number): TerminalNode;
	public BUTTON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.BUTTON);
		} else {
			return this.getToken(AdvplParser.BUTTON, i);
		}
	}
	public SCROLLBOX(): TerminalNode[];
	public SCROLLBOX(i: number): TerminalNode;
	public SCROLLBOX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.SCROLLBOX);
		} else {
			return this.getToken(AdvplParser.SCROLLBOX, i);
		}
	}
	public PROMPT(): TerminalNode[];
	public PROMPT(i: number): TerminalNode;
	public PROMPT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.PROMPT);
		} else {
			return this.getToken(AdvplParser.PROMPT, i);
		}
	}
	public ACTION(): TerminalNode[];
	public ACTION(i: number): TerminalNode;
	public ACTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ACTION);
		} else {
			return this.getToken(AdvplParser.ACTION, i);
		}
	}
	public MSPANEL(): TerminalNode[];
	public MSPANEL(i: number): TerminalNode;
	public MSPANEL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.MSPANEL);
		} else {
			return this.getToken(AdvplParser.MSPANEL, i);
		}
	}
	public ITEMS(): TerminalNode[];
	public ITEMS(i: number): TerminalNode;
	public ITEMS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ITEMS);
		} else {
			return this.getToken(AdvplParser.ITEMS, i);
		}
	}
	public PIXEL(): TerminalNode[];
	public PIXEL(i: number): TerminalNode;
	public PIXEL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.PIXEL);
		} else {
			return this.getToken(AdvplParser.PIXEL, i);
		}
	}
	public PICTURE(): TerminalNode[];
	public PICTURE(i: number): TerminalNode;
	public PICTURE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.PICTURE);
		} else {
			return this.getToken(AdvplParser.PICTURE, i);
		}
	}
	public VALID(): TerminalNode[];
	public VALID(i: number): TerminalNode;
	public VALID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.VALID);
		} else {
			return this.getToken(AdvplParser.VALID, i);
		}
	}
	public SIZE(): TerminalNode[];
	public SIZE(i: number): TerminalNode;
	public SIZE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.SIZE);
		} else {
			return this.getToken(AdvplParser.SIZE, i);
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
	public TO(): TerminalNode[];
	public TO(i: number): TerminalNode;
	public TO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.TO);
		} else {
			return this.getToken(AdvplParser.TO, i);
		}
	}
	public STYLE(): TerminalNode[];
	public STYLE(i: number): TerminalNode;
	public STYLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.STYLE);
		} else {
			return this.getToken(AdvplParser.STYLE, i);
		}
	}
	public FROM(): TerminalNode[];
	public FROM(i: number): TerminalNode;
	public FROM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.FROM);
		} else {
			return this.getToken(AdvplParser.FROM, i);
		}
	}
	public FONT(): TerminalNode[];
	public FONT(i: number): TerminalNode;
	public FONT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.FONT);
		} else {
			return this.getToken(AdvplParser.FONT, i);
		}
	}
	public ON(): TerminalNode[];
	public ON(i: number): TerminalNode;
	public ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ON);
		} else {
			return this.getToken(AdvplParser.ON, i);
		}
	}
	public INIT(): TerminalNode[];
	public INIT(i: number): TerminalNode;
	public INIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.INIT);
		} else {
			return this.getToken(AdvplParser.INIT, i);
		}
	}
	public COLORS(): TerminalNode[];
	public COLORS(i: number): TerminalNode;
	public COLORS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COLORS);
		} else {
			return this.getToken(AdvplParser.COLORS, i);
		}
	}
	public CHANGE(): TerminalNode[];
	public CHANGE(i: number): TerminalNode;
	public CHANGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CHANGE);
		} else {
			return this.getToken(AdvplParser.CHANGE, i);
		}
	}
	public COLONCOLON(): TerminalNode[];
	public COLONCOLON(i: number): TerminalNode;
	public COLONCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.COLONCOLON);
		} else {
			return this.getToken(AdvplParser.COLONCOLON, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_atxCommand; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterAtxCommand) listener.enterAtxCommand(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitAtxCommand) listener.exitAtxCommand(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitAtxCommand) return visitor.visitAtxCommand(this);
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
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LCURLY, 0); }
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.PIPE);
		} else {
			return this.getToken(AdvplParser.PIPE, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RCURLY, 0); }
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
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.LCURLY, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.RCURLY, 0); }
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


export class ChStatementContext extends ParserRuleContext {
	public paramType(): ParamTypeContext | undefined {
		return this.tryGetRuleContext(0, ParamTypeContext);
	}
	public classException(): ClassExceptionContext | undefined {
		return this.tryGetRuleContext(0, ClassExceptionContext);
	}
	public defineCh(): DefineChContext | undefined {
		return this.tryGetRuleContext(0, DefineChContext);
	}
	public activateCh(): ActivateChContext | undefined {
		return this.tryGetRuleContext(0, ActivateChContext);
	}
	public setsCh(): SetsChContext | undefined {
		return this.tryGetRuleContext(0, SetsChContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_chStatement; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterChStatement) listener.enterChStatement(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitChStatement) listener.exitChStatement(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitChStatement) return visitor.visitChStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DefineChContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(AdvplParser.DEFINE, 0); }
	public atxCommand(): AtxCommandContext {
		return this.getRuleContext(0, AtxCommandContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_defineCh; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterDefineCh) listener.enterDefineCh(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitDefineCh) listener.exitDefineCh(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitDefineCh) return visitor.visitDefineCh(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivateChContext extends ParserRuleContext {
	public ACTIVATE(): TerminalNode { return this.getToken(AdvplParser.ACTIVATE, 0); }
	public atxCommand(): AtxCommandContext {
		return this.getRuleContext(0, AtxCommandContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_activateCh; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterActivateCh) listener.enterActivateCh(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitActivateCh) listener.exitActivateCh(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitActivateCh) return visitor.visitActivateCh(this);
		else return visitor.visitChildren(this);
	}
}


export class SetsChContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(AdvplParser.SET, 0); }
	public FILTER(): TerminalNode { return this.getToken(AdvplParser.FILTER, 0); }
	public TO(): TerminalNode { return this.getToken(AdvplParser.TO, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_setsCh; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterSetsCh) listener.enterSetsCh(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitSetsCh) listener.exitSetsCh(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitSetsCh) return visitor.visitSetsCh(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamTypeContext extends ParserRuleContext {
	public PARAMTYPE(): TerminalNode { return this.getToken(AdvplParser.PARAMTYPE, 0); }
	public NUMBER(): TerminalNode { return this.getToken(AdvplParser.NUMBER, 0); }
	public AS(): TerminalNode { return this.getToken(AdvplParser.AS, 0); }
	public ARRAY(): TerminalNode[];
	public ARRAY(i: number): TerminalNode;
	public ARRAY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.ARRAY);
		} else {
			return this.getToken(AdvplParser.ARRAY, i);
		}
	}
	public BLOCK(): TerminalNode[];
	public BLOCK(i: number): TerminalNode;
	public BLOCK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.BLOCK);
		} else {
			return this.getToken(AdvplParser.BLOCK, i);
		}
	}
	public CHARACTER(): TerminalNode[];
	public CHARACTER(i: number): TerminalNode;
	public CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CHARACTER);
		} else {
			return this.getToken(AdvplParser.CHARACTER, i);
		}
	}
	public DATE(): TerminalNode[];
	public DATE(i: number): TerminalNode;
	public DATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.DATE);
		} else {
			return this.getToken(AdvplParser.DATE, i);
		}
	}
	public NUMERIC(): TerminalNode[];
	public NUMERIC(i: number): TerminalNode;
	public NUMERIC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.NUMERIC);
		} else {
			return this.getToken(AdvplParser.NUMERIC, i);
		}
	}
	public LOGICAL(): TerminalNode[];
	public LOGICAL(i: number): TerminalNode;
	public LOGICAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.LOGICAL);
		} else {
			return this.getToken(AdvplParser.LOGICAL, i);
		}
	}
	public OBJECT(): TerminalNode[];
	public OBJECT(i: number): TerminalNode;
	public OBJECT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.OBJECT);
		} else {
			return this.getToken(AdvplParser.OBJECT, i);
		}
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.VAR, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.IDENTIFIER);
		} else {
			return this.getToken(AdvplParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.COMMA, 0); }
	public CH_OR(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.CH_OR, 0); }
	public CLASS(): TerminalNode[];
	public CLASS(i: number): TerminalNode;
	public CLASS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AdvplParser.CLASS);
		} else {
			return this.getToken(AdvplParser.CLASS, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public MESSAGE(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.MESSAGE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.OPTIONAL, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.DEFAULT, 0); }
	public EXPECTED(): TerminalNode | undefined { return this.tryGetToken(AdvplParser.EXPECTED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_paramType; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterParamType) listener.enterParamType(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitParamType) listener.exitParamType(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitParamType) return visitor.visitParamType(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassExceptionContext extends ParserRuleContext {
	public CLASSEXCEPTION(): TerminalNode { return this.getToken(AdvplParser.CLASSEXCEPTION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(AdvplParser.IDENTIFIER, 0); }
	public MESSAGE(): TerminalNode { return this.getToken(AdvplParser.MESSAGE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AdvplParser.RULE_classException; }
	@Override
	public enterRule(listener: AdvplListener): void {
		if (listener.enterClassException) listener.enterClassException(this);
	}
	@Override
	public exitRule(listener: AdvplListener): void {
		if (listener.exitClassException) listener.exitClassException(this);
	}
	@Override
	public accept<Result>(visitor: AdvplVisitor<Result>): Result {
		if (visitor.visitClassException) return visitor.visitClassException(this);
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


