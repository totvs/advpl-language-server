import { AdvplParser } from "../gen/AdvplParser";

export enum AdvplTypes {
    UNKNOW = -1,
    NUMBER,
    STRING,
    BOOLEAN,
    BLOCK,
    ARRAY,
    NIL,
    USER_TYPE}

/*export function antlrToAdvplTypes( token: number) {
    switch (token) {
        case AdvplParser.STATIC : return AdvplTypes.NUMBER;
        case AdvplParser.USER : return AdvplTypes.STRING;
        case AdvplParser.LOCAL : return AdvplTypes.BOOLEAN;
        case AdvplParser.PUBLIC : return AdvplTypes.BLOCK;
        case AdvplParser.MAIN : return AdvplTypes.ARRAY;
        case AdvplParser.USER : return AdvplTypes.USER_TYPE;

    }*/
