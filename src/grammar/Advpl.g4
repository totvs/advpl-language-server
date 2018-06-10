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
	(sources
	)* EOF?
	
	;



/*preprocessorDeclaration
	:	linePreProcessor;*/
linePreProcessor : '#LINE' NUMBER STRING CRLF 
;

/* 
includeDeclaration
	: INCLUDE (STRINGSIMPLE | STRING) 
	;	
       
directives:
	ifDef|elseDef|endifDef|undefineDeclaration|xCommand|xTranslate|defineDeclaration;

ifDef:
        ((IFDEF | IFNDEF) expression) ;
         
xCommand:
	
     '#XCOMMAND' matchPattern '=>' resultPattern crlf ;      
matchPattern :/ 
	(LBRACK? expression RBRACK?)+;

resultPattern :
	(LBRACK? (expression|';') RBRACK?)+;
*/
idMarker:
	 MINOR identifier (':' expressionList)?MAJOR;
		
/*xTranslate:
	'#XTRANSLATE' matchPattern '=>' resultPattern crlf ;
 
       //'#XTRANSLATE' ~('\n'|'\r')*  -> channel(HIDDEN);
             
elseDef:
         ELSEDEF ; 
         
endifDef:
	ENDIFDEF   ;
         
defineDeclaration
	:	DEFINE (expression (LPAREN formalParameters? RPAREN)?)  (expression (','expression )?)? ;

undefineDeclaration
	:	UNDEFINE identifier crlf ;
*/
sources 
	:
	 linePreProcessor| classDeclaration|funcDeclaration|staticVariable|(crlfEmpty);

modifiersFunction  
    :	
       STATIC
    |   MAIN
    ;
//-----------------------------------------------------------
// variaveis statics
//-----------------------------------------------------------
staticVariable
	:	STATIC staticVariableDeclarationStatement 
	;
//-----------------------------------------------------------
// Definão da classe
//-----------------------------------------------------------
classDeclaration:
'_OBJNEWCLASS' LPAREN identifier COMMA (fromClass )? RPAREN crlf
 (dataDefinition|methodDefinition)*
'_OBJENDCLASS' LPAREN  RPAREN (crlf|EOF);
dataDefinition : 
	'_OBJCLASSDATA'  LPAREN identifier COMMA (wsDataType)? COMMA (dataModifiers)? COMMA (dataDescription)? RPAREN crlf;
fromClass:
             identifier;
methodDefinition:
	'_OBJCLASSMETHOD' LPAREN identifier COMMA (arguments)? COMMA RPAREN crlf;             
dataDescription:
	expression;
dataType:
	identifier;
/*             
classDeclaration_semppo:
                  CLASS identifier CAMELCASE? fromClass?  crlf
                  (dataDefinition|serializabledataDefinition|methodDefinition|asteriscoStatement crlf)*
                  (ENDCLASS|(END CLASS) )  (crlf|EOF)
                ;
fromClass_semppo:
             FROM identifier;
dataDefinition_semppo:
                 DATA identifier (AS wsDataType)? dataModifiers? crlf;*/
dataModifiers:
	C_HIDDEN|READONLY;                 
/*serializabledataDefinition:
        CAMELCASE DATA identifier (AS wsDataType )? crlf;*/
modifiersMethod :
			STATIC;
/*methodDefinition_semppo:
                 METHOD identifier arguments 'CONSTRUCTOR'? crlf;
methodBody:
                 modifiersMethod? METHOD identifier (LPAREN formalParameters? RPAREN)? CLASS identifier crlf
                 	initFuncOrMethod?   (EOF|block) 	
;*/
//-----------------------------------------------------------
// Definão de REST
//-----------------------------------------------------------
/* 
restServiceDeclaration:
                  WSRESTFUL identifier DESCRIPTION expression (FORMAT literal)? crlf
                  wsdataDefinition*
                  restmethodDefinition*
                  END WSRESTFUL crlf
                ;

restmethodDefinition :                        
                 WSMETHOD (GET|PUT|POST|DELETE) identifier?  (DESCRIPTION expression )?
                 (WSSYNTAX literal) ?
                 ((PATH) expression)?
                 (PRODUCES identifier)?
                 (REQUEST literal)?
                 (RESPONSE identifier)?
                 crlf;
restmethodBody:
                 WSMETHOD (GET|'PUT'|'POST'|DELETE) identifier 
                 (PATHPARAM expressionList )?
                 (QUERYPARAM expressionList)?
                 (WSREST|WSRESTFUL) identifier crlf
                 
                 	initFuncOrMethod?   block 	
            ;
*/
//-----------------------------------------------------------
// Definão de WebService
//-----------------------------------------------------------
/*
wsServiceDeclaration:
                  WSSERVICE identifier (DESCRIPTION expression)? (NAMESPACE literal)? crlf
                  (wsdataDefinition|
                  wsmethodDefinition)*
                  ENDWSSERVICE crlf
                ;

*/
/*wsStructDeclaration:
                  WSSTRUCT identifier crlf
                  wsdataDefinition*  
                  wsmethodDefinition*                
                  (ENDWSSTRUCT | END WSSTRUCT) crlf
                ;


wsdataDefinition:
                 WSDATA identifier (AS wsDataType)? OPTIONAL? crlf;
wsmethodDefinition:
                 WSMETHOD identifier arguments? (DESCRIPTION expression)? crlf;
wsmethodBody:
                 WSMETHOD identifier ((wsReceive? wsSend ?)|(wsSend? wsReceive?) )WSSERVICE identifier crlf
                 
                 	initFuncOrMethod?   block 	
            ;
wsReceive: WSRECEIVE formalParameters;
wsSend: WSSEND formalParameters ;
* 
*/
wsDataType: identifier (OF identifier)?;


//-----------------------------------------------------------
// Definão de QuickSearch
//-----------------------------------------------------------

qsDeclaration : QSSTRUCT identifier DESCRIPTION expression MODULE expression crlf ;
qsMethod : QSMETHOD INIT QSSTRUCT identifier crlf
initFuncOrMethod?  block
; 
//-----------------------------------------------------------
// Definão de WebServiceCliente
//-----------------------------------------------------------
/*
wsServiceClientDeclaration:
                  WSCLIENT identifier crlf
                  (wsdataDefinition|wsmethodClientDefinition)*
                  ENDWSCLIENT crlf
                ;
wsmethodClientDefinition:
                WSMETHOD identifier crlf;

wsmethodClientBody:
                 WSMETHOD identifier  wsSend ? wsReceive? WSCLIENT identifier crlf                 
                 	initFuncOrMethod?   blockWS  
            ;
           
beginWSMethod : BEGIN WSMETHOD;
endWSMethod: END WSMETHOD;
   */

//-----------------------------------------------------------
// Definão do DataSet Birt
//-----------------------------------------------------------
/*birtDataset:
	 DATASET identifier (crlf|EOF) ((TITLE expression crlf) |(DESCRIPTION expression crlf) | (PERGUNTE literal crlf))+
		initFuncOrMethod?   block;
birtProcess:
		PROCESS DATASET (crlf|EOF)
		initFuncOrMethod?   block;*/
/*birtColumns :
	 	COLUMNS
;
birtdefineColumn:
	DEFINE COLUMN;*/
//-----------------------------------------------------------
// Definão da Funcao
//-----------------------------------------------------------

funcDeclaration 
	: functionDefinition
		superCall? initFuncOrMethod?   (EOF|block) 	
	;
functionDefinition:
	modifiersFunction? (PROCEDURE| FUNCTION )identifier (LPAREN formalParameters? RPAREN)? ('AS' dataType)?  (crlf|EOF);

superCall: ':' identifier (LPAREN expressionList RPAREN) 
;
formalParameters
    :   BYREF? formalParameter (',' BYREF? formalParameter)*
    ;
formalParameter:
                   identifier (AS wsDataType)? ;
               
initFuncOrMethod 
	:	(((LOCAL|LOCA )localVariableDeclarationStatement crlf)                  
                  |(staticVariableBeforeLocal crlf)                                    
                  | crlfEmpty
                  | linePreProcessor )+
			;
staticVariableBeforeLocal:
				staticVariable;			
localVariableDeclarationStatement 
    :   expression (AS wsDataType)? 
        (COMMA expression (AS wsDataType)? 
        )*
    ;
staticVariableDeclarationStatement 
    :   expression (AS wsDataType)?
        (COMMA expression (AS wsDataType)?
        )*
    ;    
publicVariableDeclarationStatement:
    PUBLIC expression
        (COMMA expression
        )* ;

privateVariableDeclarationStatement:
    PRIVATE expression (AS wsDataType)?
        (COMMA expression (AS wsDataType)?
        )* ;
/*defaultStatement:
     DEFAULT expression #defaultState
    |DEFAULT ATTRIB_OPERATOR expression #defaultStateUInvalid
                ;
/*variableDeclarator
	:	identifier (':=' variableInitializer)?
        
	;
variableInitializer
	:	expression;*/
arrayOrBlockInitializer
    :   ('{' expressionList '}' arrayAccess? ) #arrayInitializer
    |  ('{' '|' blockParams? '|' expressionList'}' arrayAccess?)  #blockInitializer
    ;
blockParams
	:	identifier (COMMA identifier )*
	;

block	:	
	(statement (crlf|EOF)
	|crlfEmpty)+	
	;
/*blockWS:
((statement|endWSMethod|beginWSMethod) (crlf|EOF)
	|crlfEmpty)+	
	
	
;*/	

statement 
	: 	statementExpression
	|	ifStatement
	|	forStatement
        |       doStatement
        |       whileStatement
        |       docaseStatement
		|		returnStatement         
        |       privateVariableDeclarationStatement        
        |       exitOrLoopStatement           
        |       publicVariableDeclarationStatement        
        |       staticVariable                
        |		beginSequenceStatement
        //|		beginTransaction
//        |       chStatement
                        
/*        |		beginReport
        |		endReport
  */      
        
	;
    /* 
beginTransaction: BEGIN TRANSACTION EXTENDED? crlf
		block
		END TRANSACTION? (LPAREN RPAREN)? EXTENDED? crlf?; 
	*/
beginSequenceStatement: BEGIN SEQUENCE CRLF
		block
		END SEQUENCE? crlf?
	
	;
/*beginReport: BEGIN REPORT chIdentifier* CRLF


;	
endReport : END REPORT chIdentifier* CRLF;*/	
returnStatement
	:	RETURN returnvalues?
	;	
returnvalues
	:	expression ;
		
statementExpression
	:expression ;	
//Removido o Assigment pois, se deixamos o return ser um expression, e podemos começar com expression como commando direto 
//a gramatica na fica mais LL(*) e precisamos ativar o backtracer, que onera a performace.	
expression
	:  primary    #ExprPrimary
	|  primary ECOMERCIAL expression   #ExprPrimaryBadFormed
    |    expression (op=PLUSPLUS | op=MINUSMINUS) #ExprIncrPos    
    |   expression ALIASACCESS expression #AliasAssignment
    |   (op=PLUS|op=MINUS|op=PLUSPLUS|op=MINUSMINUS) expression #ExprIncrPre
    |   ('!' | NOT) expression #ExprNot    
    |   expression (op=MULT|op=DIV|op=PERC|op=POW) expression #ExprMul
    |   expression (op=PLUS|op=MINUS) expression #ExprPlus    
    |   expression op=AND expression #ExprLogical
    |   expression op=OR expression #ExprLogical
    |   expression (op=MINOREQUALS | op=MAJOREQUALS | op=MINOR | op=MAJOR| op=EQUALS|op=DOUBLEEQUAL|op=DIF1|op=DIF2|op=DIF3|op=CONTIDO) expression #ExprComp    
    |   expression    
         (PLUSEQUALS 
        |'-='
        |'*='
        |'/='
        |':='
        |'^'
         )    
        expression # Assignment
    
    /*
    | expression arrayAccess   #VarArrayAccess
    | expression arguments  #Call
    | expression ':' identifier #ObjectAttribAccess
    | expression ':' identifier arguments#ObjectMethodAccess*/
    
    ;
primary
	:     ARROBA?'(' expressionList ')' arrayAccess?        #Parens
        | ARROBA? identifier arrayAccess        #VarArrayAccess
        | ARROBA? identifier arguments  (arrayAccess? )  #Call
        | ARROBA? identifier LPAREN RPAREN ':' identifier arguments  #ClassConstructor
        | identifier arguments  methodAccessLoop*  #CallWithAtt
        | ARROBA? identifier arrayAccess? ( ':' identifier arrayAccess?)+     #ObjectAttribAccess
        | ARROBA? identifier arrayAccess* methodAccessLoop+  #ObjectMethodAccess                
        | ARROBA? identifier        #Var                
        | ARROBA ASSUME identifier (':' identifier)* AS identifier     #Assume
	| ARROBA? literal                   #lit
	| arrayOrBlockInitializer  #ArrayOrBlock
	| ifFunctioncall (methodAccessLoop|arrayAccess)*           #IfCall
        | ARROBA? ECOMERCIAL expression (arrayAccess | (DOT (arguments|expression)?)| methodAccessLoop|arguments)*   #MacroExecucao//| ARROBA? ECOMERCIAL expression (arrayAccess | DOT |expression| methodAccessLoop)*  #MacroExecucao
        | ARROBA? identifier ECOMERCIAL expression (arrayAccess | DOT | methodAccessLoop)*   #MacroExecucaoIdentifier//| ARROBA? identifier ECOMERCIAL expression (arrayAccess | DOT |expression| methodAccessLoop)*   #MacroExecucaoIdentifier
        | LBRACK (expressionList | EQUALS |MINUS) RBRACK        #ExpressionListInConchete
        | PERC expression ':' expression PERC        #EmbbedExpression
        | idMarker	#XCommandExpression
    ;

/*chIdentifier:
          (BEGIN|PATH|PROCESS|PERGUNTE|TITLE|READONLY|USER|WEB|INIT| MODULE|TO|SELF|CLASS|IDENTIFIER (DOT IDENTIFIER )*|DATA|FROM|OPTIONAL|GET|DELETE|NEXT|FOR|WHILE|EXTENDED) ;*/
//Next e END não podem estar no chIdentifier pois quebram o comandos de for e while
/*subChIdentifier:
	(NEXT|END|FOR|WHILE) (expression|chIdentifier);*/          

identifier:
          'SELF'|':'|IDENTIFIER|LOCA|LOCAL|TEMPLATE|USER|WEB|INIT| MODULE|DELETE|GET|PROJECT|OF|ASSUME|DESCRIPTION|AS|TO|DATA|PROCESS|PERGUNTE|TITLE|MAIN|SEQUENCE|TRANSACTION|BYREF|POST|PUT|REQUEST|DEFAULT|PATH|CLASS|STEP|END 
          ;
arrayAccess
    :  ( LBRACK expressionList RBRACK )+
    ;
methodAccessLoop:
                    (':' (identifier) arguments? arrayAccess? )
                    
                ;
/*functionCall
	:	arguments;	
*/
arguments
    :   LPAREN expressionList RPAREN 
    ;

expressionList
    : LBRACK? optionalExpression RBRACK? (LBRACK ? COMMA optionalExpression RBRACK?)*
  ;

optionalExpression
  : expression?
  ;
expressionListComa:
                      COMMA;
literal	
	:  NUMBER #LiteralNumber
	|  STRING #LiteralStringDupla
	|  STRINGSIMPLE  #LiteralStringSimples
	|  TRUE  #LiteralLogical
	|  FALSE #LiteralLogical
    |  NIL #LiteralNil
    |  ARROBA NIL #LiteralArrobaNil
    ;

ifFunctioncall
	:	IF LPAREN expression COMMA expression? COMMA expression? RPAREN  
	;        
//---------------------------------------------------------
// STATEMENTs    
//---------------------------------------------------------
ifStatement 
	: IF ifCondition crlf 
		ifBlock
	( ELSEIF elseIfCondition crlf elseIfBlock   )*
	(ELSE crlf  
	 elseBlock)*
	(ENDIF|ENDIF_DOT|END| END IF |ENDI)
	;    
ifCondition : expression;
elseIfCondition : expression;
elseIfBlock : block?;
elseBlock : block?;
ifBlock : block?;    
forStatement
	:	
		FOR forInit TO forToExpression (STEP expression)? crlf
		     forBlock
		((NEXT|END|ENDFOR) lostExpression )  crlf? 
		;
forToExpression : expression;
forStepExpression : expression;
forBlock : block?;

lostExpression : expression?;

doStatement
	:	DO (whileStatement |docaseStatement) ;
exitOrLoopStatement:
    EXIT|LOOP;
whileStatement
	: WHILE whileCondition  crlf
            whileBlock (ENDDO|END (DO|WHILE|(LPAREN RPAREN))?|'ENDD') crlf? 
	
	;
whileCondition : expression;
whileBlock : block?;
docaseStatement 
	: CASE crlf (  CASE caseCondition crlf caseBlock)+ (OTHERWISE otherWiseBlock )? ('ENDC'|ENDCASE|(END (CASE | DO)? ) ) crlf? 
		;
caseCondition : expression;
caseBlock : block?;
otherWiseBlock : block?;                    
//-----------------------------------------------    
//Instruções para ler o CH do protheus
//-----------------------------------------------    
/*chStatement:
               (chIdentifier | arrobaDefine               )
                    (chIdentifier|(expression (COMMA expression)*) )+
           ;*/
arrobaDefine
    :   ARROBA expressionList
    ;

forInit	:identifier
        (ATTRIB_OPERATOR | EQUALS) expression 
	;
	
/*asteriscoStatement:
	(ASTERICO | MULT) (ASTERICO|chIdentifier|(literal ((COMMA|'^') literal)*) )* ;

litleStringLost:
	STRING|STRINGSIMPLE; 	
    */	
//-----------------------------------------------    
// tokens
//-----------------------------------------------
MINOR 	: '<';
MAJOR	: '>';
EQUALS	: '=';
MINOREQUALS 	: '<=';
MAJOREQUALS		: '>=';
DOUBLEEQUAL : '==';
DIF1	: '!=';
DIF2	: '<>';
DIF3	: '#';
CONTIDO : '$';
PLUSPLUS            : '++';
MINUSMINUS           : '--';
PLUSEQUALS 			: '+=';    
PLUS            : '+';
MINUS           : '-';    
MULT            : '*';
DIV             : '/';
POW				: '**';
PERC            : '%';
ARROBA          : '@';
ECOMERCIAL      : '&';
BEGIN			: 'BEGIN';
TRANSACTION : 	'TRANSACTION';
SEQUENCE	:	'SEQUENCE';    
BEGIN_SQL       : 'BEGINSQL' .*? 'ENDSQL'  -> channel(HIDDEN);
ALIASACCESS     :       '->';
STEP		:	'STEP';    
TO		:	'TO';    
TRUE		:	'.T.';
FALSE		:	'.F.';	
NIL             :       'NIL';
DEFINE			:	'#DEFINE';
UNDEFINE			:	'#UNDEF';
IFDEF           :       '#IFDEF';
IFNDEF          :       '#IFNDEF';

ELSEDEF         :       '#ELSE';
ENDIFDEF        :       '#ENDIF';

FOR		:	'FOR';
NEXT		:	'NEXT';
WHILE		:	'WHILE';
DO              :       'DO';
ELSEIF		:	'ELSEIF';
IF		:	'IF';
ELSE		:	'ELSE';
ENDI		:	'ENDI';
ENDIF		:	'ENDIF';
ENDIF_DOT		:	'ENDIF.';
//END_IF          :       'END IF';
ENDDO           :       'ENDDO';
ENDFOR           :       'ENDFOR';
END		:	'END';
EXTENDED	:	'EXTENDED';
CASE		:	'CASE';
ENDCASE		:	'ENDCASE';
OTHERWISE	:	'OTHERWISE';
EXIT		:	'EXIT';
LOOP		:	'LOOP';
LOCA		:	'LOCA';
LOCAL		:	'LOCAL';
PRIVATE		:	'PRIVATE';
PUBLIC		:	'PUBLIC';
STATIC		:	'STATIC';
USER		:	'USER';
WEB			:	'WEB';
MAIN		:	'MAIN';
FUNCTION	:	'FUNCTION';
FUNCTIO		:	'FUNCTIO';
PROCEDURE	: 	'PROCEDURE';
SELF		:	'SELF';
PROJECT		:   'PROJECT';
TEMPLATE	:	'TEMPLATE';
AND		:	'.AND.';
OR		:	'.OR.';
NOT		:	'.NOT.';

DEFAULT		:	'DEFAULT';

RETURN		:	'RETURN';
ASSUME          :       'ASSUME';
CLASS           :       'CLASS';
ENDCLASS        :       'ENDCLASS';
METHOD          :       'METHOD';
DATA            :       'DATA';
FROM            :       'FROM';
C_HIDDEN		:		'HIDDEN';
READONLY		:		'READONLY';
//WSSTRUCT		:		'WSSTRUCT';
//ENDWSSTRUCT		:		'ENDWSSTRUCT';
//WSCLIENT        :       'WSCLIENT';
//WSSERVICE       :       'WSSERVICE';
//NAMESPACE       :       'NAMESPACE';
//ENDWSCLIENT     :       'ENDWSCLIENT';
//ENDWSSERVICE    :       'ENDWSSERVICE';
//WSRESTFUL       :       'WSRESTFUL';
//FORMAT          :       'FORMAT';
//WSMETHOD        :       'WSMETHOD';
//WSDATA          :       'WSDATA';
//WSRECEIVE       :       'WSRECEIVE';
//WSSEND          :       'WSSEND';
DESCRIPTION     :       'DESCRIPTION';
QSSTRUCT 		: 		'QSSTRUCT';
QSMETHOD 		: 		'QSMETHOD';
MODULE	 		: 		'MODULE';
INIT	 		: 		'INIT';
AS              :       'AS';
OF              :       'OF';
PRODUCES        :       'PRODUCES';
OPTIONAL        :       'OPTIONAL';
//WSSYNTAX        :       'WSSYNTAX';
//RESPONSE        :       'RESPONSE';
REQUEST         :       'REQUEST';
QUERYPARAM      :       'QUERYPARAM';
WSREST          :       'WSREST';
CAMELCASE       :       'CAMELCASE';
PATHPARAM       :       'PATHPARAM';
GET				:		'GET';
POST			:		'POST';
PUT				:		'PUT';
DELETE			:		'DELETE';
BYREF			:		'BYREF';
//BEGIN           :       'BEGIN';
//BIRT
DATASET			: 		'DATASET';
PROCESS			:		'PROCESS';	
//COLUMNS			:		'COLUMNS';
//COLUMN			:		'COLUMN';
TITLE			:		'TITLE';
PERGUNTE		:		'PERGUNTE';
PATH			:		'PATH';
//COMMAND			:	'#COMMAND';
//XCOMMAND		:	'#XCOMMAND';

LPAREN	: '(' ;

RPAREN	: ')'  ;

LBRACK	: '['  ;

RBRACK	: ']'  ;
INCLUDE	:	'#''INCLUDE';

COMMA		:	',';
DOT			:	'.';
ATTRIB_OPERATOR
	:	':=';

NUMBER
    :   ('0'..'9')+ ('.'  ('0'..'9')+ )?
    |   '.' ('0'..'9')+ 
    ;

   
fragment
DIGITS : ( '0' .. '9' )+ ;

    
IDENTIFIER	:	( 'a' .. 'z' | 'A' .. 'Z' | '_')
        ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )* ;
   

COMMENT
    :   '/*' .*? '*/'  -> channel(HIDDEN)
    ;
LINE_COMMENT:   '//' ~('\n'|'\r')*  -> channel(HIDDEN);
LINE_COMMENT_EE:   '&&' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO:   '*Ú' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO2:   '*³' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO3:   '*À' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO4:   '*--' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO5:   '*/' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO6:   '*==' ~('\n'|'\r')*  -> channel(HIDDEN);
//LINE_COMMENT_BIZARRO7:   '*#' ~('\n'|'\r')*  -> channel(HIDDEN);

/* 
ASTERICO:
	'*' '*'*;
   */
STRING
    :  '"' ( ~('"'|'\n') )* '"'?
    ;
STRINGSIMPLE
    :  '\'' (  ~('\''|'\n') )* '\''?
    ;
//------------------------------------------------------------
//Em davpl o CRLF ajuda a determina o fim dos expression

crlf:
        (CRLF+|';');
crlfEmpty:
        (CRLF+|';');
CRLF
  : ((('\r')? '\n' ))  
  ;

WS  :   ( ' ' | '\t')+  -> skip;
/*
INVALID_CHAR : '�' -> skip;
INVALID_CHAR_1 : '' -> skip;
INVALID_CHAR_2 : ' ' -> skip;
INVALID_CHAR_3 :'\u0001' -> skip;
INVALID_CHAR_4 :'\u0002' -> skip;
INVALID_CHAR_14 :'\u0003' -> skip;
INVALID_CHAR_17 :'\u001f' -> skip;
INVALID_CHAR_5 :'§' -> skip;
INVALID_CHAR_6 :'¢' -> skip;
INVALID_CHAR_7 :'£' -> skip;
INVALID_CHAR_8 :'À' -> skip;
INVALID_CHAR_9 :'ß' -> skip;
INVALID_CHAR_10 :'±' -> skip;
INVALID_CHAR_11 :'Ä' -> skip;
INVALID_CHAR_12 :'Á' -> skip;
INVALID_CHAR_13 :'Ù' -> skip;
INVALID_CHAR_16 :'`' -> skip;
INVALID_CHAR_18 :'»' -> skip;
INVALID_CHAR_19 :'¿' -> skip;
*/

/*
 * Quando le o ppo não tem mais ; como escaped
CRLF_ESCAPED
  : (';' ( ' ' | '\t')*(  ('//'|'&&') ~('\n'|'\r')*   )? ('\r')?'\n' )-> channel(HIDDEN);
  
  *  
  */
/*
CRLF_ESCAPED
  : (DOT_COMA  ('\r')?'\n')-> skip;
*/
ErrorChar
   : .
   ;