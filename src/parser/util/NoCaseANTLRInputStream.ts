import { ANTLRInputStream, IntStream } from "antlr4ts";

export class NoCaseANTLRInputStream extends ANTLRInputStream {
    LA(i: number): number {
        if ( i === 0 ) {
            return 0; // undefined
        }
        if ( i < 0 ) {
            i++; // e.g., translate LA(-1) to use offset 0
            if ( ( this.p + i - 1) < 0 ) {
                return IntStream.EOF; // invalid; no char before first char
            }

        }

        if ( (this.p + i - 1) >= this.n ) {

            return IntStream.EOF;
        }
        return (this.data[this.p + i - 1]).toUpperCase().charCodeAt(0);
    }
}
