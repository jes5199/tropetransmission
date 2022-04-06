

let inTheBeginning = "בְּרֵאשִׁ֖ית"


const charNames = {
    // I'm using the names as seen in TropeTalk 3, when available
    // this is different than the official unicode names

    // consonants
    "א": "Aleph",
    "ב": "Vet",
    "י": "Yud",
    "ר": "Resh",
    "ש": "Shin",
    "ת": "Sav",

    // vowels
    "\u05b0": "Shva",
    "\u05b4": "Chirik",
    "\u05b5": "Tsere",

    // consonant disambiguations
    "\u05bc": "Dagesh", // dot for Vet -> Bet, etc

    "\u05c1": "Shin Dot",
    "\u05c2": "Sin Dot",

    // cantillation marks
    "\u0596": "Tipcha",
}

const dageshNames = {
    "Vet": "Bet",
    "Sav": "Tav"
}

function unicodeHebrewWordToTokens(hebrewWordString) {
    // each mark in a hebrew word is a separate unicode character
    var r = [];
    for (const ch of hebrewWordString) {
        let name = charNames[ch];
        if (name == "Dagesh") {
            const oldName = r[r.length - 1];
            const newName = dageshNames[oldName];
            if (newName) {
                r[r.length - 1] = newName;
            } else {
                console.log("unknown Dagesh for", oldName)
            }
        } else if (name == "Shin Dot") {
            const oldName = r[r.length - 1];
            if (oldName == "Sin" || oldName == "Shin") {
                r[r.length - 1] = "Shin";
            } else {
                console.log("cannon convert to Shin from", oldName)
            }
        } else if (name == "Sin Dot") {
            const oldName = r[r.length - 1];
            if (oldName == "Sin" || oldName == "Shin") {
                r[r.length - 1] = "Sin";
            } else {
                console.log("cannon convert to Sin from", oldName)
            }
        } else if (name) {
            r.push(name);
        } else {
            console.log("unknown character", ch, "\\u0" + ch.codePointAt(0).toString(16));
        }
    }
    return r;
}


console.log(unicodeHebrewWordToTokens(inTheBeginning))
