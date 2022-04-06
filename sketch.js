

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
};

const dageshNames = {
    "Vet": "Bet",
    "Sav": "Tav",
};

const consonants = [
    "Aleph", "Bet", "Vet",
    "Yud",
    "Resh",
    "Shin", "Sin", "Tav", "Sav"
]

const vowels = [
    "Shva", "ShvaNa", "ShvaNach",
    "Chirik", "Tsere"
];

const dots = [
    "Dagesh", "Shin Dot", "Sin Dot"
];

const tropes = [
    "Tipcha"
];

const RosowskyHighSilluqTrope = {
    "Tipcha": {
        "Default": [
            ["a", 8], 
            ["a", 10],
            ["C", 10],
            ["g", 8]
        ]
    }
}

const AshkenaziTraditionalPhonemes = {
    "Silence": ["", ""],
    "Shuruk": ["~gr_u", "oo"],
    "Patach": ["~ah,", "ah"],
    "ChatafPatach": ["~ah", "ah"],
    "QamatzGadol": ["~sp_o", "o"],
    "QamatzQatan": ["~sp_o", "o"],
    "ChatafQamatz": ["~sp_o", "o"],
    "Chirik": ["~iy", "ee"],
    "Segol": ["~eh", "eh"],
    "ChatafSegol": ["~eh", "eh"],
    "Tsere": ["~uk_ey","ey"],
    "Qubutz": ["~gr_u", "oo"],
    "Holam": ["~gr_eu", "oy"],
    "ShvaNach": ["~eh", ""],
    "ShvaNa": ["~eh", "\""],
    "Aleph": ["~_<3,>", "'"],
    "Bet": ["~b", "b"],
    "Vet": ["=~v", "v"],
    "GimelD": ["~g", "g"],
    "Gimel": ["~g", "g"],
    "DaletD": ["~d", "d"],
    "Dalet": ["~d", "d"],
    "MapikHe": ["~uk_hx", "hh"],
    "He": ["~hx", "h"],
    "VavD": ["~v", "v"],
    "Vav": ["~v", "v"],
    "ZayinD": ["~z", "z"],
    "Zayin": ["~z", "z"],
    "ChetD": ["~cz", "kh"],
    "Chet": ["~cz", "kh"],
    "TetD": ["~t", "t"],
    "Tet": ["~t", "t"],
    "YudD": ["~yx", "y"],
    "Yud": ["~yx", "y"],
    "Kaf": ["~k", "k"],
    "Chaf": ["~cz", "ch"],
    "LamedD": ["~ll","l"],
    "Lamed": ["~ll", "l"],
    "MemD": ["~gr_m", "m"],
    "Mem": ["~gr_m", "m"],
    "NunD": ["~n", "n"],
    "Nun": ["~n", "n"],
    "SamechD": ["~s", "s"],
    "Samech": ["~s", "s"],
    "AyinD": ["~q<3,>", "`"],
    "Ayin": ["~q<3,>","`"],
    "Peh": ["~p", "p"],
    "Feh": ["~f", "f"],
    "TsadeD": ["~t~s", "ts"],
    "Tsade": ["~t~s", "ts"],
    "QofD": ["~k", "k"],
    "Qof": ["~k", "k"],
    "ReshD": ["~sp_rr", "r"],
    "Resh": ["~sp_rr", "r"],
    "ShinD": ["~sh", "sh"],
    "Shin": ["~sh", "sh"],
    "SinD": ["~s", "s"],
    "Sin": ["~s", "s"],
    "Tav": ["~t", "t"],
    "Sav": ["~s", "s"],
}

function unicodeHebrewWordToTokens(hebrewGlyphString) {
    // each mark in a hebrew word is a separate unicode character
    let r = [];
    for (const ch of hebrewGlyphString) {
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
                console.log("cannot convert to Sin from", oldName)
            }
        } else if (name == "Shva") {
            // FIXME: logic for ShvaNa vs ShvaNoch is complicated!
            r.push("ShvaNa");
        } else if (name) {
            r.push(name);
        } else {
            console.log("unknown character", ch, "\\u0" + ch.codePointAt(0).toString(16));
        }
    }
    return r;
}

function anyVowels(tokens) {
    return tokens.findIndex(function(t){ return vowels.includes(t) }) != -1;
}

function tropeForTokenizedWord(wordTokens) {
    let tropeName = null;
    let preTrope = [];
    let tropeSyllable = [];
    let postTrope = [];

    let appending = preTrope;
    let current = [];

    for (const token of wordTokens) {
        if (tropes.includes(token)) {
            tropeName = token;
            tropeSyllable = current;
            appending = tropeSyllable;
            current = [];
        } else {
            if (consonants.includes(token)) {
                // possibly new syllable
                // (FIXME: I think there's a case where a vowel can come first but I'll have to look it up)

                if (tropeName && anyVowels(current)) {
                    appending = postTrope;
                }
                appending.push(...current);

                current = [];
            }

            current.push(token);
        }
    }

    if (anyVowels(current)) {
        // there were vowels, this is an extra syllable
        postTrope.push(...current);
    } else {
        // otherwise, it needs to get pushed onto the end of the last syllable
        appending.push(...current);
    }

    return [tropeName, preTrope, tropeSyllable, postTrope]
}

function textPronunciation(phonemes, tokens) {
    let r = "";

    for (const token of tokens) {
        const phonemePair = AshkenaziTraditionalPhonemes[token];
        if (phonemePair) {
            textPhoneme = phonemePair[1];
            r += textPhoneme;
        }
    }
    return r;
}

function decPronunciation(phonemes, tokens) {
    let r = "";

    for (const token of tokens) {
        const phonemePair = AshkenaziTraditionalPhonemes[token];
        if (phonemePair) {
            textPhoneme = phonemePair[0];
            r += textPhoneme;
        }
    }
    return r;
}

console.log(unicodeHebrewWordToTokens(inTheBeginning));

console.log(tropeForTokenizedWord(unicodeHebrewWordToTokens(inTheBeginning)));

console.log(textPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(inTheBeginning)));
console.log(decPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(inTheBeginning)));