import CharacterNames from "./Data/CharacterNames";
import DageshNames from "./Data/DageshNames";

class HebrewWordParser {
    literalTokenization(text) {
        // I'm going to try to be literal in this step and only translate glyphs
        // without regard to pronunciation rules

        let r = [];
        for (const [index, ch] of text.split("").entries()) {
            let name = CharacterNames[ch] || "Unknown";
            if (typeof(name) == "string") {
                r.push(name);
            } else {
                r.push(...name);
            }
        }
        return r;
    }

    dageshize(tokens) {
        let r = [];
        for (const token of tokens) {
            if (token == "Dagesh" || token == "Mapik") {
                const previous = r[r.length - 1];
                const replacement = DageshNames[previous] || (previous + "D");
                r[r.length - 1] = replacement;
            } else if (token == "Rafe" || token == "Varika") {
                // this is the opposite of a Dagesh
                // which in this case means do nothing
            } else {
                r.push(token);
            }
        }
        return r;
    }

    fixShinSinDot(tokens) {
        let r = [];

        for (const token of tokens) {
            const previous = r[r.length - 1];
            
            if (token == "Shin Dot" || token == "Sin Dot") {
                let replacement = "Unknown";

                if (token == "Shin Dot") {
                    if (previous == "Sin" || previous == "Shin") {
                        replacement = "Shin";
                    } else if (oldName == "SinD" || oldName == "ShinD") {
                        replacement = "ShinD";
                    }
                } else if (token == "Sin Dot") {
                    if (oldName == "Sin" || oldName == "Shin") {
                        replacement = "Sin";
                    } else if (oldName == "SinD" || oldName == "ShinD") {
                        replacement = "SinD";
                    } else {
                        console.log("cannot convert to Sin from", oldName)
                    }

                }
                r[r.length - 1] = replacement;
            } else {
                r.push(token);
            }
        }

        return r;
    }

    tokenize(text) {
        let tokens = this.literalTokenization(text);
        tokens = this.dageshize(tokens);
        tokens = this.fixShinSinDot(tokens);

        return tokens;
    }

    syllablize(tokens) {
        return tokens;
    }

    parse(text) {
        let tokens = tokenize(text);
        
        // chop into syllables
        // calculate silent letters
        // mark stress pattern
        // mark trope(s)
    }
}

export default HebrewWordParser