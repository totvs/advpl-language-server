import { AdvplListener } from "../gen/AdvplListener";
import { MethodDefinitionContext, ProgramContext } from "../gen/AdvplParser";

export class TesteAdvplListener implements AdvplListener {
    enterProgram(ctx: ProgramContext) {
        // console.log("Sera?");
    }
    enterMethodDefinition (ctx: MethodDefinitionContext){
        // console.log("Achei");
    }
}
