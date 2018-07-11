import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from "antlr4ts";
import { ParseTreeListener, ParseTreeWalker} from "antlr4ts/tree";
import fs = require("fs");
import { AdvplLexer } from "../gen/AdvplLexer";
import { AdvplParser } from "../gen/AdvplParser";
import { SymbolTableListener } from "../listener/symboltable/symbolTableListener";

class Startup {
    public static async main() {

        // Create the lexer and parser
        fs.readFile("C:\\Totvs\\vscode\\advpl-language-server\\src\\parser\\test\\resources\\simples.ppo",
        async (err, data) => {
            if (err) {
                throw err;
            }
            // console.log(data);
            const inputStream = new ANTLRInputStream(data.toString("utf8"));
            const lexer = new AdvplLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new AdvplParser(tokenStream);
            const v = new SymbolTableListener();
            const walker = new ParseTreeWalker();
            // parser.addErrorListener()
            parser.addErrorListener(new ConsoleErrorListener());
            // console.time('10K source line');
            const result = parser.program();
            // console.timeEnd('10K source line');
            walker.walk(v  as ParseTreeListener, result);
            await v.debug_tblsymb();
            console.log("para");
          });
        return 0;
    }
}

Startup.main();
