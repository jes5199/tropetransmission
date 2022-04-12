const { chdir } = require("process");


let inTheBeginning = "בְּרֵאשִׁ֖ית"
let created = "בָּרָ֣א"

let GenesisOneOne = "בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃"

const charNames = {
    // I'm using the names as seen in TropeTalk 3, when available.
    // This is different than the official unicode names.

    // consonants
    "א": "Aleph",
    "ב": "Vet",
    "ג": "Gimel",
    "ד": "Dalet",
    "ה": "He",
    "ו": "Vav",
    "ז": "Zayin",
    "ח": "Chet",
    "ט": "Tet",
    "י": "Yud",
    "כ": "Chaf",
    "ך": "Chaf", // Final
    "ל": "Lamed",
    "מ": "Mem",
    "ם": "Mem", // Final
    "נ": "Nun",
    "ן": "Nun", // Final
    "ס": "Samech",
    "ע": "Ayin",
    "פ": "Feh",
    "ף": "Feh", // Final
    "צ": "Tsade",
    "ץ": "Tsade", // Final
    "ק": "Qof",
    "ר": "Resh",
    "ש": "Shin",
    "ת": "Sav",

    // vowels
    "\u05b0": "Shva",
    "\u05b1": "ChatafSegol",
    "\u05b4": "Chirik",
    "\u05b5": "Tsere",
    "\u05b6": "Segol",
    "\u05b7": "Patach",
    "\u05b8": "QamatzGadol",
    "\u05b9": "Holam",

    // consonant disambiguations
    "\u05bc": "Dagesh", // dot for Vet -> Bet, etc

    "\u05c1": "Shin Dot",
    "\u05c2": "Sin Dot",

    // cantillation marks
    "\u0591": "Etnachta",
    "\u0596": "Tipcha",
    "\u05a3": "Munach",
    "\u05a5": "Mercha",
    "\u05bd": "Silluq", // sometimes might actually be a Meteg
    "\u05c3": "Sof Pasuk",
};

const dageshNames = {
    "Vet": "Bet",
    "Sav": "Tav",
    "Shin": "ShinD",
};

const consonants = [
    "Aleph", "Bet", "Vet",
    "He",
    "Yud",
    "Lamed", "Mem", "Nun",
    "Samech",
    "Tsade", "Qof", "Resh",
    "Shin", "ShinD", "Sin", "SinD", "Tav", "Sav"
]

const vowels = [
    "Shva", "ShvaNa", "ShvaNach",
    "ChatafSegol",
    "Chirik", "Segol", "Tsere",
    "Patach", "QamatzGadol", "Holam",
];

const silent = [
    "Aleph", "Yud"
]

const dots = [
    "Dagesh", "Shin Dot", "Sin Dot"
];

const tropes = [
    "Etnachta", "Tipcha", "Munach", "Mercha",
    "Silluq", "Sof Pasuk", 
];

const phraseEndingTropes = [
    "Etnachta"
]

const verseEndingTropes = [
    "Sof Pasuk"
]


const RosowskyHighSilluqStyle = {
    pitchbend: 1,
    assimilate_pitch: false,
    key: "F MAJOR",
    assimilate_rhythm: true,
}

const RosowskyHighSilluqMelody = {
    "Tipcha": [
        ["Default", [
            ["a", 8], 
            ["a", 10],
            ["C", 10],
            ["g", 8]
        ]]
    ]
}

function decRateForSpeed(speed)  {
    return 20 + (15 * speed);
}

const AveryBinderHighSofPasukStyle = {
    pitchbend: 1,
    assimilate_pitch: false,
    key: "C MAJOR",
    assimilate_rhythm: true,
}

const AveryBinderHighSofPasukMelody = {
    "Tipcha": [
        ["Default", [
            ["g", 8], 
            ["a", 10],
            ["C", 12],
            ["g", 8]
        ]]
    ]
}


const AveryBinderStyle = {
    pitchbend: 1,
    assimilate_pitch: false,
    key: "C MAJOR",
    assimilate_rhythm: true,
}

const AveryBinderMelody = {
    "Tipcha": [
        ["Default", [
            ["g", 8], 
            ["a", 10],
            ["C", 12],
            ["g", 8]
        ]]
    ],
    "Munach": [
        ["Default", [
            ["C", 8], 
            ["C", 12],
            ["a", 12],
            ["C", 4]
        ]],
        [{before: "Etnachta"}, [
            ["g", 8], 
            ["f", 8],
            ["d", 8],
        ]],
    ],
    "Etnachta": [
        ["Default", [
            ["c", 8],
            ["g", 4],
        ]]
    ]
}


const numericNote = {
    "3x":  1.5,
    "3#":  2.0,
    "4-":  2.0,
    "4/":  2.5,
    "4" :  3.0,
    "4x":  3.5,
    "4#":  4.0,
    "5-":  4.0,
    "5/":  4.5,
    "5" :  5.0,
    "5x":  5.5,
    "6/":  5.5,
    "6" :  6.0,
    "6x":  6.5,
    "6#":  7.0,
    "7-":  7.0,
    "7/":  7.5,
    "7" :  8.0,
    "7x":  8.5,
    "7#":  9.0,
    "1-":  9.0,
    "1/":  9.5,
    "1" : 10.0,
    "1x": 10.5,
    "1#": 11.0,
    "2-": 11.0,
    "2/": 11.5,
    "2" : 12.0,
    "2x": 12.5,
    "c/": 12.5,
    "c" : 13.0,
    "cx": 13.5,
    "c#": 14.0,
    "d-": 14.5,
    "d/": 14.5,
    "d" : 15.0,
    "dx": 15.5,
    "d#": 16.0,
    "e-": 16.0,
    "e/": 16.5,
    "e" : 17.0,
    "ex": 17.5,
    "f/": 17.5,
    "f" : 18.0,
    "fx": 18.5,
    "f#": 19.0,
    "g-": 19.0,
    "g/": 19.5,
    "g" : 20.0,
    "gx": 20.5,
    "g#": 21.0,
    "a-": 21.0,
    "a/": 21.5,
    "a" : 22.0,
    "ax": 22.5,
    "a#": 23.0,
    "b-": 23.0,
    "b/": 23.5,
    "b" : 24.0,
    "bx": 24.5,
    "C/": 24.5,
    "C" : 25.0,
    "Cx": 25.5,
    "C#": 26.0,
    "D-": 26.0,
    "D/": 26.5,
    "D" : 27.0,
    "Dx": 27.5,
    "D#": 28.0,
    "E-": 28.0,
    "E/": 28.5,
    "E" : 29.0,
    "Ex": 29.5,
    "F/": 29.5,
    "F" : 30.0,
    "Fx": 30.5,
    "F#": 31.0,
    "Gb": 31.0,
    "G/": 31.5,
    "G" : 32.0,
    "Gx": 32.5,
    "G#": 33.0,
    "A-": 33.0,
    "A/": 33.5,
    "A" : 34.0,
    "Ax": 34.5,
    "A#": 35.0,
    "B-": 35.0,
    "B/": 35.5,
    "B" : 36.0,
    "Bx": 36.5,
    "H/": 36.5,
    "H" : 37.0,
    "Hx": 37.5,
    "H#": 38.0,
    "I-": 38.0,
    "I/": 38.5,
    "I" : 39.0,
    "Ix": 39.5,
    "I#": 40.0,
    "J-": 40.0,

}

function decPitchForNote(note, transpose, detune) {
    if (Array.isArray(note)) {
        note = note[0];
    }
    if (typeof note != "number") {
        note = numericNote[note];
    }

    if (!transpose) { 
        transpose = 0;
    }

    if (!detune) {
        detune = 0;
    }

    let transposedNote = note + transpose + 30 + 5 - 9;
    let frequency = Math.round((2 ** (transposedNote / 12) ) * 13.75);

    let detunedFrequency = frequency + detune;
    //console.log([frequency, detunedFrequency]);

    return detunedFrequency;
}

const AshkenaziTraditionalPhonemes = {
    "Silence": ["", ""],
    "Shuruk": ["~gr_u", "oo"],
    "Patach": ["~ah", "ah"],
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

const voices = {
    "Bass": "Harry",
    "Baritone": "Paul",
    "Tenor": "Dennis",
    "Alto": "Betty",
    "Soprano": "Rita",
    "Child": "Kit"
};

const voicePitchOffset = {
    "Bass": -12,
    "Baritone": -6,
    "Tenor": 0,
    "Alto": 0,
    "Soprano": 6,
    "Child": 6
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
            } else if (oldName == "SinD" || oldName == "ShinD") {
                r[r.length - 1] = "ShinD";
            } else {
                console.log("cannon convert to Shin from", oldName)
            }
        } else if (name == "Sin Dot") {
            const oldName = r[r.length - 1];
            if (oldName == "Sin" || oldName == "Shin") {
                r[r.length - 1] = "Sin";
            } else if (oldName == "SinD" || oldName == "ShinD") {
                r[r.length - 1] = "SinD";
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

function tropeForTokenizedWord(wordTokens, speed) {
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
        if (silent.includes(token)) {
            continue;
        }

        const phonemePair = AshkenaziTraditionalPhonemes[token];
        if (phonemePair) {
            textPhoneme = phonemePair[1];
            r += textPhoneme;
        }
    }
    return r;
}

function decPronunciation(phonemes, tokens) {
    if (!Array.isArray(tokens)) {
        tokens = [tokens];
    }

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

function slideAndThenHoldPitch(phone, pitch, slideDuration, holdDuration) {
    if (!slideDuration) {slideDuration = ""}
    if (!holdDuration) {holdDuration = ""}
    if (!pitch) {pitch = ""} else {pitch = 5000 + pitch}

    return phone + "<" + slideDuration + "," + pitch + ">" 
         + phone + "<" + holdDuration  + "," + pitch + ">";
}

function vowelHoldDuration(speed, duration, isUpbeat) {
    let divisor = 20 + (12 * speed);

    let wholeNoteLength = Math.round(120000 / divisor);
    let noteLength = Math.round(wholeNoteLength / duration);

    if (isUpbeat) {
        noteLength = Math.round(noteLength / 1.1);
    }
    //console.log(noteLength);

    let tenPercentLength = Math.round(noteLength * 0.1);
    let randomLength = Math.floor(Math.random() * tenPercentLength);
    let sungNoteLength = noteLength + randomLength;

    let holdLength = Math.max(25, sungNoteLength - 50);
    return holdLength;
}

function noteSlideAndHoldDuration(speed, noteOrDuration, isVowel, isUpbeat) {
    let duration = Array.isArray(noteOrDuration) ?  noteOrDuration[1] : noteOrDuration;

    let slideDuration = isVowel ? 50 : 20;
    let holdDuration = isVowel ? vowelHoldDuration(speed, duration, isUpbeat) : null;

    return [slideDuration, holdDuration];
}

function findMatchingRule(tropeRules, tropeContext) {
    let defaultRule = tropeRules.find(([context, notes]) => {return context == "Default"});

    let bestRule = tropeRules.find(([ruleContext, notes]) => {
        if (ruleContext == "Default") { return false }
        for (key in ruleContext) {
            console.log(key);
            if (ruleContext[key] != tropeContext[key]) {
                console.log([key, ruleContext[key], tropeContext[key] ])
                return false;
            }
        }
        return true;
    });

    return bestRule || defaultRule;
}

function decSong(style, melody, phonemes, trope, speed, voice, pitchOffset) {
    if (!speed) { speed = 10; }
    if (!voice) { voice = "Baritone"; }
    if (!pitchOffset) { pitchOffset = 0; }

    let pitchbend = style.pitchbend;

    let tropeName = trope[0];
    let preTrope = trope[1];
    let onTrope = trope[2];
    let postTrope = trope[3];
    let tropeContext = trope[4] || {};

    let tropeRules = melody[tropeName];
    let matchingRule = findMatchingRule(tropeRules, tropeContext);

    let [defaultRuleContext, notes] = matchingRule;

    let upbeat = notes[0];
    let tropeStartNote = notes.length > 1 ? notes[1] : notes[0];
    let tropeEndNote = notes[notes.length - 1];

    let r = "";

    let transpose = voicePitchOffset[voice] + pitchOffset + pitchbend;

    for (token of preTrope) {
        if (silent.includes(token)) {
            continue;
        }

        let phone = decPronunciation(phonemes, [token]);
        let isVowel = vowels.includes(token);

        let [slideDuration, holdDuration] = noteSlideAndHoldDuration(speed, upbeat, isVowel, true);

        let detune = (isVowel ? Math.floor(Math.random() * 3) - 2 : 0);
        let pitch = decPitchForNote(upbeat, transpose, detune);

        r += slideAndThenHoldPitch(phone, pitch, slideDuration, holdDuration);
    }

    let afterVowel = false;
    for (token of onTrope) {
        if (silent.includes(token)) {
            continue;
        }

        // TODO: dipthongs from 004F4254
        let phone = decPronunciation(phonemes, token);

        if (vowels.includes(token)) {
            let endNoteIndex = postTrope.length > 0 ? -1 : undefined;

            for (note of notes.slice(1, endNoteIndex)) {
                let detune = Math.floor(Math.random() * 3) - 2;

                let pitch = decPitchForNote(note, transpose, detune);
                let [slideDuration, holdDuration] = noteSlideAndHoldDuration(speed, note, true, false);
                
                r += slideAndThenHoldPitch(phone, pitch, slideDuration, holdDuration);
            }
            afterVowel = true;
        } else {  // consonants
            let note = !afterVowel ? tropeStartNote : tropeEndNote;
            let pitch = decPitchForNote(note, transpose, 0);
            let [slideDuration, holdDuration] = noteSlideAndHoldDuration(speed, note, false, false);

            r += slideAndThenHoldPitch(phone, pitch, slideDuration, holdDuration);
        }
    }
    for (token of postTrope) {
        if (silent.includes(token)) {
            continue;
        }
        
        let phone = decPronunciation(phonemes, [token]);
        let isVowel = vowels.includes(token);
        let detune = (isVowel ? Math.floor(Math.random() * 3) - 2 : 0);

        let pitch = decPitchForNote(tropeEndNote, transpose, detune);
        let [slideDuration, holdDuration] = noteSlideAndHoldDuration(speed, tropeEndNote, isVowel, false);

        r += slideAndThenHoldPitch(phone, pitch, slideDuration, holdDuration);
    }

    r += "_<71,>"; // end of word. FIXME: adjust duration by speed

    return r;
}

function decText(phones, rate, voice) {
    if (!rate) { rate = 170 }
    if (!voice) { voice = "Paul" }

    return "[:volume att 80] [:mode email on] [:comma -40] [:name "+voice+"]" 
    + "[:rate "+rate+"] [:phoneme arpabet speak on]  [:index mark 4]" 
    + "[" + phones + "]"
}

async function decTalk(text) {
    const { spawn } = require("child_process");
    let child = spawn("bash", ["./tropetalk/tropesay.sh"]);

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        if (code !== 0) {
          console.log(`process exited with code ${code}`);
        }
        child.stdin.end();
    });
      
    let exitPromise = new Promise( (resolve) => {
        child.on('exit', () => {
            resolve();
        });
    });

    child.stdin.write(text + "\n");
    child.stdin.end();

    await exitPromise;
}

function decSing(phones, speed, range) {
    if (!speed) { speed = 10 }
    let text = decText(phones, decRateForSpeed(speed), voices[range]);
    console.log(text);
    decTalk(text);
}

function parseTextIntoTropes(verse) {
    let words = verse.split(" ");
    
    let tropes = [];
    // find trope for each word
    for(const [index, word] of words.entries()) {
        tropes.push(tropeForTokenizedWord(unicodeHebrewWordToTokens(word)));
    }
    return tropes;
}

function contextForTropes(tropes) {
    let results = [];
    //let lastPhraseEndIndex = -1;
    for (const [index, trope] of tropes.entries()) {
        let previousTrope = index > 0 ? tropes[index - 1] : null;
        let nextTrope = index < tropes.length - 1 ? tropes[index + 1] : null;

        let previousPreviousTrope = index > 1 ? tropes[index - 2] : null;
        let nextNextTrope = index < tropes.length - 2 ? tropes[index + 2] : null;

        let phraseEndIndex = tropes.findIndex( (tr, i) => { return i >= index && (phraseEndingTropes.includes(tr[0]) || verseEndingTropes.includes(tr[0])) });
        let groupTrope = tropes[phraseEndIndex];

        let context = {
            afterAfter: previousPreviousTrope ? previousPreviousTrope[0] : null,
            after: previousTrope ? previousTrope[0] : null,

            before: nextTrope ? nextTrope[0] : null,
            beforeBefore: nextNextTrope ? nextNextTrope[0] : null,

            group: groupTrope ? groupTrope[0] : null,
        }
        results.push([...trope, context]);

        //if (phraseEndIndex == index) {
        //    lastPhraseEndIndex = index;
        //}
    }
    return results;
}


async function tests() {
    let word = created;

    console.log(unicodeHebrewWordToTokens(word));

    console.log(tropeForTokenizedWord(unicodeHebrewWordToTokens(word)));

    console.log(textPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(word)));

    // FIXME: decPronunciation should respect silent letters
    //console.log(decPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(word)));

    let speed = 3;
    let range = "Baritone";
    let pitch = 0;

    let song = decSong(
        AveryBinderStyle,
        AveryBinderMelody,
        AshkenaziTraditionalPhonemes,
        tropeForTokenizedWord(unicodeHebrewWordToTokens(word)),
        speed,
        range,
        pitch
    );

    console.log(song);

//    await decTalk("[:name Paul] aeiou");

    let singing = decSing(song, speed, range);
    await singing;
}

async function tests2() {
    // WIP
    let tropes = contextForTropes(parseTextIntoTropes(GenesisOneOne));
    console.log(tropes);

    let speed = 3;
    let range = "Baritone";
    let pitch = 0;

    let song = decSong(
        AveryBinderStyle,
        AveryBinderMelody,
        AshkenaziTraditionalPhonemes,
        tropes[2],
        speed,
        range,
        pitch
    );
    let singing = decSing(song, speed, range);
    await singing;

}


tests2();