import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from "antlr4ts";
import { ParseTreeListener, ParseTreeWalker} from "antlr4ts/tree";
import fs = require("fs");
import { AdvplLexer } from "../gen/AdvplLexer";
import { AdvplParser } from "../gen/AdvplParser";
// import { SymbolTableListener } from "../listener/symboltable/symbolTableListener";
import { NoCaseANTLRInputStream } from "../util/NoCaseANTLRInputStream";

class Startup {
    public static async main() {

        // Create the lexer and parser
        // fs.readFile("C:\\Totvs\\vscode\\advpl-language-server\\src\\parser\\test\\resources\\class1.ppo",
        fs.readFile("C:\\Totvs\\vscode\\wk_lib_master\\AdvplFramework\\src\\MVC-View\\generico\\FWBrowse.PRW",
        async (err, data) => {
            if (err) {
                throw err;
            }
            // console.log(data);
            const inputStream = new NoCaseANTLRInputStream(data.toString("utf8"));
            const lexer = new AdvplLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new AdvplParser(tokenStream);
           // const v = new SymbolTableListener();
            const walker = new ParseTreeWalker();
            // parser.addErrorListener()
            // parser.addErrorListener(new ConsoleErrorListener());
            console.time("13K source line");
            const result = parser.program();
            console.timeEnd("13K source line");

            parser.reset();
            console.time("segunda");
            parser.program();
            console.timeEnd("segunda");
            // walker.walk(v  as ParseTreeListener, result);
            // await v.debug_tblsymb();
            console.log("para");
          });
        return 0;
    }
}

Startup.main();
