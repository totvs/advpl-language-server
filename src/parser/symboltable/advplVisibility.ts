import { AdvplParser } from "../gen/AdvplParser";

export enum AdvplVisibility {
    STATIC = 0,
    LOCAL,
    PRIVATE,
    PUBLIC,
    MAIN,
    USER,
    FUNCTION}
export function antlrToAdvplVisibility( token: number) {
    switch (token) {
        case AdvplParser.STATIC : return AdvplVisibility.STATIC;
        case AdvplParser.USER : return AdvplVisibility.USER;
        case AdvplParser.LOCAL : return AdvplVisibility.LOCAL;
        case AdvplParser.PUBLIC : return AdvplVisibility.PUBLIC;
        case AdvplParser.MAIN : return AdvplVisibility.MAIN;
        case AdvplParser.USER : return AdvplVisibility.USER;

    }
}