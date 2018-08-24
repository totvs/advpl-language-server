/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
grammar Advpl;
options 
{
 language = TypeScript;
}
program
	:	  
	(directives | funcDeclaration|staticVariableDeclarationStatement| methodBody | classDeclaration |crlfEmpty
	)* EOF?	
	;
//-----------------------------------------------    
// PreProcessor
//-----------------------------------------------
       
directives:
	ifDef|elseDef|endifDef|undefineDeclaration|defineDeclaration |includeDeclaration;

includeDeclaration
	: INCLUDE (STRINGSIMPLE | STRING) 
	;	
ifDef:
        ((IFDEF | IFNDEF) expression) ;
elseDef:
         ELSEDEF ; 
         
endifDef:
	ENDIFDEF   ;
         
defineDeclaration
	:	PDEFINE (expression (LPAREN formalParameters? RPAREN)?)  (expression (','expression )?)? ;

undefineDeclaration
	:	UNDEFINE identifier crlf ;         

//-----------------------------------------------    
// Classes
//-----------------------------------------------
classDeclaration:
                 CLASS identifier (FROM identifier)? crlf
                 (dataDefinition|methodDefinition)*
                 ENDCLASS crlf
                ;
dataDefinition:
                DATA identifier (AS identifier)? crlf
;

methodDefinition:
                METHOD identifier arguments? (AS identifier)? crlf
;
modifiersMethod :
			STATIC;
methodBody:
                 modifiersMethod? METHOD identifier arguments? CLASS identifier crlf
                 	superCall? initFuncOrMethod?   (EOF|block) 	;
//-----------------------------------------------    
// Functions
//-----------------------------------------------
funcDeclaration 
	: 
        modifiersFunction? FUNCTION identifier (LPAREN formalParameters? RPAREN)? (AS identifier)?  crlf
		initFuncOrMethod?   block
	;
superCall: ':' identifier (LPAREN expressionList RPAREN) ;

initFuncOrMethod 
	:	(LOCAL variableDeclarationStatement crlf)+;

variableDeclarationStatement 
    :   expression (AS identifier)? 
        (COMMA expression (AS identifier)? 
        )*
    ;
modifiersFunction  
    :
	USER
    |   STATIC
    |   MAIN
    |   PROJECT
    | 	TEMPLATE
    |	WEB
    ;

formalParameters
    :   formalParameter (COMMA formalParameter)*
    ;
formalParameter:
                   identifier (AS identifier)? ;

identifier:
          SELF|COLONCOLON|IDENTIFIER|END|DATA|DEFINE|FROM|OBJECT| CHARACTER | DATE| NUMERIC| LOGICAL|BLOCK|ARRAY|DEFAULT|ACTIVATE|INIT|VALID|FILTER;

staticVariableDeclarationStatement
	:	STATIC variableDeclarationStatement  
	;
privateVariableDeclarationStatement
    :	PRIVATE variableDeclarationStatement  
	;
publicVariableDeclarationStatement
    :	PUBLIC variableDeclarationStatement  
	;
//-----------------------------------------------    
// Block
//-----------------------------------------------
block	:	
	(statement (crlf|EOF)|crlfEmpty)+	
	;

//-----------------------------------------------    
// Statement
//-----------------------------------------------
statement :
    expression|
    ifStatement|
    forStatement|
    whileStatement|
    exitOrLoopStatement|
    doStatement|
    returnStatement|
    privateVariableDeclarationStatement|
    staticVariableDeclarationStatement|    
    publicVariableDeclarationStatement|
    chStatement|
    directives
          ;

ifStatement 
	: IF expression crlf 
		block
	( ELSEIF expression crlf block   )*
	(ELSE crlf  
	 block)*
	ENDIF
	;
forStatement
	:	
        FOR forInit TO expression (STEP expression)? crlf
             block
        (NEXT) identifier?  crlf? 
        ;
forInit	:identifier
        ASSIGNMENT expression 
	;
doStatement
	:	DO (whileStatement |docaseStatement) ;
whileStatement
	: WHILE expression  crlf
            block 
         (ENDDO|END )crlf? 	
	;
docaseStatement 
	: CASE crlf 
                (CASE expression crlf 
            block)+ 
              (OTHERWISE block)? (ENDCASE|(END (DO)? ) ) crlf? 
		;
returnStatement
	:	RETURN expression?;
exitOrLoopStatement:
    EXIT|LOOP;

//-----------------------------------------------    
// Expressions
//-----------------------------------------------
expression
	:  primary_ref    #ExprPrimary	
    |    expression (PLUSPLUS | MINUSMINUS) #ExprIncrPos    
    |   expression ALIASACCESS expression #AliasAssignment
    |   (PLUS|MINUS|PLUSPLUS|MINUSMINUS) expression #ExprIncrPre
    |   ('!' | NOT) expression #ExprNot    
    |   expression (MULT|DIV|PERC|POW) expression #ExprMul
    |   expression (PLUS|MINUS) expression #ExprPlus    
    |   expression (AND|OR) expression #ExprLogical    
    |   expression (MINOREQUALS | MAJOREQUALS | MINOR | MAJOR| EQUALS|DOUBLEEQUAL|DIFF|DIFF2|DOLAR) expression #ExprComp    
    |   expression    
         (PLUSEQUALS         
        | ASSIGNMENT |MINUSEQUALS
         )    
        expression # Assignment;
/*expression:
    conditionalExpression 
        ((ASSIGNMENT | PLUSEQUALS | MINUSEQUALS| MULTEQUALS | DIVEQUALS ) expression)*;

conditionalExpression : 
    relationalExpression 
        ((AND|OR|NOT) relationalExpression)*;
relationalExpression: 
    additionExpression 
        ((MAJOR |MINOR | EQUALS| DOUBLEEQUAL |MINOREQUALS|MAJOREQUALS | DIFF | DIFF2 | DOLAR) additionExpression)* ;
additionExpression: 
    multiplicationExpression 
        ((PLUS|MINUS) multiplicationExpression)*;
multiplicationExpression: 
    unaryExpression 
        ((MULT|DIV|POW) unaryExpression)*;
unaryExpression: 
   primary_ref  | (EXCLAMATION | NOT) expression;
*/

arguments
    :   LPAREN expressionList RPAREN 
    ;

expressionList
    : optionalExpression ( COMMA optionalExpression )*
  ;

optionalExpression
  : expression?
  ;

arrayAccess
    :  ( LBRACK expressionList RBRACK )+
    ;
methodAccessLoop:
                    (':' (identifier) arguments? arrayAccess? )
                    
                ;
primary_ref : (DEFAULT expression|COLONCOLON? primary);
primary : 
          LPAREN expressionList RPAREN arrayAccess?        #Parens
        | AT? identifier arrayAccess        #VarArrayAccess
        | identifier arguments  (arrayAccess? )  #Call
        | identifier LPAREN RPAREN ':' identifier arguments  #ClassConstructor
        | identifier arguments  methodAccessLoop*  #CallWithAtt
        | AT? identifier arrayAccess? ( ':' identifier arrayAccess?)+     #ObjectAttribAccess
        | identifier arrayAccess* methodAccessLoop+  #ObjectMethodAccess                
        | AT? identifier        #Var             
        | literal                   #lit        
        | arrayOrBlockInitializer  #ArrayOrBlock
        | AMPERSAND expression (arrayAccess | (DOT (arguments|expression)?)| methodAccessLoop|arguments)*   #MacroExecucao        
        | ifFunctioncall #IfCall
        | AT ASSUME identifier (':' identifier)* AS identifier     #Assume
        | AT expression COMMA expression  atxCommand #NumberCHSay
        ;
atxCommand:
    ((SAY IDENTIFIER)       |
     (MSGET IDENTIFIER)     |
     (MSDIALOG IDENTIFIER)  |
     (COMBOBOX IDENTIFIER)  |
     (CHECKBOX IDENTIFIER)  |
     (VAR expression)       | 
     (OF COLONCOLON? IDENTIFIER)        |
     (BUTTON IDENTIFIER)    |
     (SCROLLBOX IDENTIFIER)  |
     (PROMPT expression)    |
     (ACTION expression)    |
     (MSPANEL COLONCOLON? IDENTIFIER)   |
     (ITEMS expression)     |
     (PIXEL           )     |
     (PICTURE expression)   |  
     (VALID expression)     |  
     (SIZE expressionList)  |
     (TO expressionList)    |
     (STYLE expressionList) |
     (FROM expressionList)  |
     (FONT expression   )   |
     (ON INIT expression)   |
     (COLORS expressionList) |
     (ON CHANGE expression)     
    )+ IDENTIFIER*
          ;
arrayOrBlockInitializer
    :   (LCURLY expressionList RCURLY arrayAccess? ) #arrayInitializer
    |  (LCURLY PIPE blockParams? PIPE expressionList RCURLY arrayAccess?)  #blockInitializer
    ;    
blockParams
	:	identifier (COMMA identifier )*
	;
literal	
	:  NUMBER #LiteralNumber
	|  STRING #LiteralStringDupla
	|  STRINGSIMPLE  #LiteralStringSimples
	|  TRUE  #LiteralLogical
	|  FALSE #LiteralLogical
    |  NIL #LiteralNil    
    ;
ifFunctioncall
	:	IF LPAREN expression COMMA expression? COMMA expression? RPAREN  
	;        
chStatement:
            paramType|classException |defineCh|activateCh|setsCh;
               /*  (defineCh|(chIdentifier| arrobaDefine )
                    (chIdentifier|(expression (COMMA expression)*) )+);
  chIdentifier:
          IDENTIFIER (DOT IDENTIFIER )* (AS|USER|WEB|TO|SELF|CLASS|DATA|FROM|NEXT|);
  */
  defineCh 
      :  DEFINE atxCommand;
  activateCh 
      :  ACTIVATE atxCommand;
  setsCh:
            SET FILTER TO expression?;
  

/*  arrobaDefine:
                  AT expressionList ;*/
 paramType:
              PARAMTYPE NUMBER (VAR IDENTIFIER)? AS (ARRAY | BLOCK (EXPECTED)? | CHARACTER | DATE| NUMERIC| LOGICAL | OBJECT (CLASS IDENTIFIER )? )
(COMMA (ARRAY| BLOCK |CHARACTER |DATE |NUMERIC|LOGICAL))?
(CH_OR OBJECT CLASS expressionList)?
 (MESSAGE expression)?  OPTIONAL?
 (DEFAULT expression)?;
 
 classException:
          CLASSEXCEPTION  IDENTIFIER MESSAGE expression;
//-----------------------------------------------    
// CHtokens
//-----------------------------------------------
SET         : 'SET';
FILTER      : 'FILTER';
COLORS     :    'COLORS';
FONT       :    'FONT';
CHECKBOX    :   'CHECKBOX';
CHANGE      :   'CHANGE';
VALID       :   'VALID';
ON          :   'ON';
INIT        :   'INIT';
ACTIVATE    : 'ACTIVATE';
STYLE      :   'STYLE';
MSDIALOG    :  'MSDIALOG';
SCROLLBOX   : 'SCROLLBOX';
BUTTON      : 'BUTTON';
PROMPT      : 'PROMPT';
ACTION      : 'ACTION';
MSPANEL    :   'MSPANEL';
PICTURE     :   'PICTURE';
MSGET           :       'MSGET';
COMBOBOX        :   'COMBOBOX';
ITEMS       :   'ITEMS';
SIZE        :   'SIZE';
OF          :   'OF';
CH_OR       :   'OR'; 
PIXEL       :   'PIXEL';
SAY         :	'SAY';
CLASSEXCEPTION :   'CLASSEXCEPTION';
DEFAULT     :   'DEFAULT';

ARRAY       :	'ARRAY';
BLOCK       :   'BLOCK';
VAR         :	'VAR';
CHARACTER   :   'CHARACTER';
DATE        :	'DATE';
EXPECTED    :   'EXPECTED';
NUMERIC     :	'NUMERIC';
LOGICAL     :   'LOGICAL';
OBJECT      :   'OBJECT';
OPTIONAL    :	'OPTIONAL';
MESSAGE     :   'MESSAGE';
PARAMTYPE   :   'PARAMTYPE';
//-----------------------------------------------    
// tokens
//-----------------------------------------------
  
DEFINE  : 'DEFINE';
MINOR 	: '<';
MAJOR	: '>';
EQUALS	: '=';
MINOREQUALS 	: '<=';
MAJOREQUALS	: '>=';
DOUBLEEQUAL     : '==';
PLUSPLUS        : '++';
MINUSMINUS      : '--';

EXCLAMATION     : '!';
ASSIGNMENT      : ':=';
DIFF            : '!=';
DIFF2           : '<>';
PLUSEQUALS 	: '+=';    
MINUSEQUALS 	: '-=';    
MULTEQUALS      : '*=';
DIVEQUALS       : '/=';
PLUS            : '+';
MINUS           : '-';    
MULT            : '*';
DIV             : '/';
POW		: '**';
PERC            : '%';

AND		: '.AND.';
OR		: '.OR.';
NOT		: '.NOT.';

TRUE		: '.T.';
FALSE		: '.F.';	
NIL             : 'NIL';
DOLAR           : '$';


SEMICOLON : ';';
LCURLY  : '{';
RCURLY  : '}';

LPAREN	: '(';
RPAREN	: ')';

LBRACK	: '[';
RBRACK	: ']';

COMMA	: ',';
DOT	: '.';
COLONCOLON   : '::';
COLON   : ':';

AMPERSAND : '&';
AT        : '@';

PIPE    : '|';

ALIASACCESS     :       '->';

NUMBER
    :   ('0'..'9')+ ('.'  ('0'..'9')+ )?
    |   '.' ('0'..'9')+ 
    ;

   
fragment
DIGITS : ( '0' .. '9' )+ ;

ASSUME :    'ASSUME';
//-----------------------------------------------    
// Types Tokens
//-----------------------------------------------

LOCAL		:	'LOCAL';
PRIVATE		:	'PRIVATE';
PUBLIC		:	'PUBLIC';
STATIC		:	'STATIC';
USER		:	'USER';
WEB		:	'WEB';
MAIN		:	'MAIN';
PROJECT		:       'PROJECT';
TEMPLATE	:	'TEMPLATE';
AS              :       'AS';
//-----------------------------------------------    
// StatementTokens
//-----------------------------------------------

FOR		:	'FOR';
NEXT		:	'NEXT';
STEP		:	'STEP';    
TO              :       'TO';
LOOP		:	'LOOP';
WHILE		:	'WHILE';
DO              :       'DO';
ELSEIF		:	'ELSEIF';
IF		:	'IF';
ELSE		:	'ELSE';
ENDIF		:	'ENDIF';
ENDDO           :       'ENDDO';
ENDFOR          :       'ENDFOR';
END		:	'END';
EXIT		:	'EXIT';
CASE		:	'CASE';
ENDCASE		:	'ENDCASE';
OTHERWISE	:	'OTHERWISE';
FUNCTION	:	'FUNCTION';
RETURN		:	'RETURN';
//-----------------------------------------------    
// Class Tokens
//-----------------------------------------------
CLASS           :       'CLASS';
ENDCLASS        :       'ENDCLASS';
METHOD          :       'METHOD';
DATA            :       'DATA';
FROM            :       'FROM';
SELF            :       'SELF';
//-----------------------------------------------    
// PreProcess Tokens
//-----------------------------------------------
INCLUDE	:	'#INCLUDE';
IFDEF	:	'#IFDEF';
UNDEFINE:	'#UNDEF';
IFNDEF  :       '#IFNDEF';
PDEFINE	:	'#DEFINE';
ENDIFDEF:	'#ENDIF';
ELSEDEF:	'#ELSE';

    
IDENTIFIER	:	( 'a' .. 'z' | 'A' .. 'Z' | '_')
        ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )* ;
   
COMMENT
    :   '/*' .*? '*/'  -> channel(HIDDEN)
    ;
LINE_COMMENT:   '//' ~('\n'|'\r')*  -> channel(HIDDEN);

STRING
    :  '"' ( ~('"'|'\n') )* '"'? ;
STRINGSIMPLE
    :  '\'' (  ~('\''|'\n') )* '\''?;

crlf:
        (CRLF+|';');
crlfEmpty:
        (CRLF+|';');

CRLF
  : ((('\r')? '\n' ))  
  ;

WS  :   ( ' ' | '\t')+  -> skip;

CRLF_ESCAPED
  : (';' ( ' ' | '\t')*(  ('//'|'&&') ~('\n'|'\r')*   )? ('\r')?'\n' )-> channel(HIDDEN);