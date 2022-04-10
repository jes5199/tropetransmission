const { chdir } = require("process");


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

const silent = [
    "Aleph", "Yud"
]

const dots = [
    "Dagesh", "Shin Dot", "Sin Dot"
];

const tropes = [
    "Tipcha"
];


const RosowskyHighSilluqStyle = {
    pitchbend: 1,
    assimilate_pitch: false,
    key: "F MAJOR",
    assimilate_rhythm: true,
}

const RosowskyHighSilluqMelody = {
    "Tipcha": {
        "Default": [
            ["a", 8], 
            ["a", 10],
            ["C", 10],
            ["g", 8]
        ]
    }
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
    "Tipcha": {
        "Default": [
            ["g", 8], 
            ["a", 10],
            ["C", 12],
            ["g", 8]
        ]
    }
}


const AveryBinderStyle = {
    pitchbend: 1,
    assimilate_pitch: false,
    key: "C MAJOR",
    assimilate_rhythm: true,
}

const AveryBinderMelody = {
    "Tipcha": {
        "Default": [
            ["g", 8], 
            ["a", 10],
            ["C", 12],
            ["g", 8]
        ]
    }
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

    let unbentValue = Math.round((2 ** (transposedNote / 12) ) * 13.75);
    let value = unbentValue + detune;
    console.log([unbentValue, value]);

    return value;
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
    if (!pitch) {pitch = ""} else {pitch = "5" + pitch}

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
    console.log(noteLength);

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

function decSong(style, melody, phonemes, trope, speed, voice, pitchOffset) {
    if (!speed) { speed = 10; }
    if (!voice) { voice = "Baritone"; }
    if (!pitchOffset) { pitchOffset = 0; }

    let pitchbend = style.pitchbend;

    let tropeName = trope[0];
    let preTrope = trope[1];
    let onTrope = trope[2];
    let postTrope = trope[3];

    let notes = melody[tropeName]["Default"];
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

        let phone = decPronunciation(phonemes, token);

        if (vowels.includes(token)) {
            let noteCount = 0;
            for (note of notes.slice(1)) {
                noteCount += 1; 
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


async function tests() {
    console.log(unicodeHebrewWordToTokens(inTheBeginning));

    console.log(tropeForTokenizedWord(unicodeHebrewWordToTokens(inTheBeginning)));

    console.log(textPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(inTheBeginning)));

    // FIXME: decPronunciation should respect silent letters
    //console.log(decPronunciation(AshkenaziTraditionalPhonemes, unicodeHebrewWordToTokens(inTheBeginning)));

    let speed = 3;
    let range = "Baritone";
    let pitch = 0;

    let song = decSong(
        AveryBinderStyle,
        AveryBinderMelody,
        AshkenaziTraditionalPhonemes,
        tropeForTokenizedWord(unicodeHebrewWordToTokens(inTheBeginning)),
        speed,
        range,
        pitch
    );

    console.log(song);

//    await decTalk("[:name Paul] aeiou");

    await decSing(song, speed, range);
}

tests();