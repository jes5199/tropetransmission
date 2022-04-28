const CharacterNames = {
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

    // cantillation marks
    // (names in all caps to match TropeDef.xml)
    "\u0591": "ETNACHTA",
    "\u0592": "SEGOL", // not to be confused with vowel Segol
    "\u0593": "SHALSHELET",
    "\u0594": "ZAKEF_KATON",
    "\u0595": "ZAKEF_GADOL",
    "\u0596": "TIPCHA",
    "\u0597": "REVIA",
    "\u0598": "ZARKA", // possibly Tsinnorit ?
    "\u0599": "PASHTA",
    "\u059a": "YETIV",
    "\u059b": "TEVIR",
    "\u059c": "GERESH",
    "\u059d": "GERESH", // mukdam variant ?
    "\u059e": "GERSHAYIM",
    "\u059f": "KARNEI_FARAH",
    "\u05a0": "TELISHA_GEDOLA",
    "\u05a1": "PAZER",
    "\u05a2": "ATNACH_HAFUCH", // not in tropedef.xml ?
    "\u05a3": "MUNACH",
    "\u05a5": "MERCHA",
    "\u05a6": "MERCHA_CHEFULA",
    "\u05a7": "DARGA",
    "\u05a8": "KADMA",
    "\u05a9": "TELISHA_KETANA",
    "\u05aa": "YERACH_BEN-YOMO",
    "\u05ab": "OLE", // not in tropdedef.xml

    "\u05ad": "DEHI", // not in tropedef.xml ?
    "\u05ae": "ZARKA", // possibly Tsinnorit ?

    // misc
    "\u05af": "Masora Circle",


    // vowels
    "\u05b0": "Shva",
    "\u05b1": "ChatafSegol",
    "\u05b2": "ChatafPatach",
    "\u05b3": "ChatafQamatz",
    "\u05b4": "Chirik",
    "\u05b5": "Tsere",
    "\u05b6": "Segol",
    "\u05b7": "Patach",
    "\u05b8": "Qamatz",
    "\u05b9": "Holam",
    "\u05ba": "Holam", // Holam Haser
    "\u05bb": "Qubutz",

    // consonant disambiguation
    "\u05bc": "Dagesh", // dot for Vet -> Bet, etc

    // trope-related accent
    "\u05bd": "SILLUQ",

    // punctuation
    "\u05be": "Maqaf",

    // consonant disambiguation
    "\u05bf": "Rafe",

    // punctuation
    "\u05c0": "Paseq",

    // consonant disambiguations
    "\u05c1": "Shin Dot",
    "\u05c2": "Sin Dot",

    // punctuation / trope
    "\u05c3": "SOF_PASUK",

    // misc dots
    "\u05c4": "Upper Dot",
    "\u05c5": "Lower Dot",

    // punctuation
    "\u05c6": "NunHafukha", // inverted nun

    // rare versions of vowels
    "\u05c7": "QamatzKaton",

    // ligatures
    "\u05ef": ["Yod", "Yod", "Yod"], // literally three yods together
    "\u05f0": ["Vav", "Vav"],
    "\u05f1": ["Vav", "Yod"],
    "\u05f2": ["Yod", "Yod"],

    // punctuation
    "\u05f3": "Geresh", // not a trope
    "\u05f4": "Gershayim", // not a trope

    // precomposed letters
    "\ufb1d": ["Yod", "Chirik"],

    // consonant disambiguation
    "\ufb1e": "Varika",

    // ligature
    "\ufb1f": ["Yod", "Yod", "Patach"],

    // alternate forms
    "\ufb20": "Ayin",
    "\ufb21": "Aleph", // wide version
    "\ufb22": "Dalet", // wide version
    "\ufb23": "He",    // wide version
    "\ufb24": "Chaf",  // wide version
    "\ufb25": "Lamed", // wide version
    "\ufb26": "Mem",   // wide version and final
    "\ufb27": "Resh",  // wide version
    "\ufb28": "Tav",   // wide version
    "\ufb29": undefined, // alternate plus sign

    // precomposed letters
    "\ufb2a": ["Shin", "Shin Dot"], // dotted shin
    "\ufb2b": ["Sin", "Sin Dot"],   // dotted sin
    "\ufb2c": ["Shin", "Shin Dot", "Dagesh"], // dotted shin with dagesh 
    "\ufb2d": ["Sin", "Sin Dot", "Dagesh"],   // dotted shin with dagesh
    "\ufb2e": ["Aleph", "Patach"],
    "\ufb2f": ["Aleph", "Qamatz"],
    "\ufb30": ["Aleph", "Mapik"],
    "\ufb31": ["Vet", "Dagesh"],
    "\ufb32": ["Gimel", "Dagesh"],
    "\ufb33": ["Dalet", "Dagesh"],
    "\ufb34": ["He", "Mapik"],
    "\ufb35": ["Vav", "Dagesh"],
    "\ufb36": ["Zayin", "Dagesh"],
    "\ufb37": undefined,
    "\ufb38": ["Tet", "Dagesh"],
    "\ufb39": ["Yod", "Dagesh"],
    "\ufb3a": ["Chaf", "Dagesh"], // final
    "\ufb3b": ["Chaf", "Dagesh"],
    "\ufb3c": ["Lamed", "Dagesh"],
    "\ufb3d": undefined,
    "\ufb3e": ["Mem", "Dagesh"],
    "\ufb3f": undefined,
    "\ufb40": ["Nun", "Dagesh"],
    "\ufb41": ["Samech", "Dagesh"],
    "\ufb42": undefined,
    "\ufb43": ["Feh", "Dagesh"], // final
    "\ufb44": ["Feh", "Dagesh"],
    "\ufb45": undefined,
    "\ufb46": ["Tsade", "Dagesh"],
    "\ufb47": ["Qof", "Dagesh"],
    "\ufb48": ["Resh", "Dagesh"],
    "\ufb49": ["Shin", "Dagesh"],
    "\ufb4a": ["Sav", "Dagesh"],
    "\ufb4b": ["Vav", "Holam"],
    "\ufb4c": ["Vet", "Rafe"],
    "\ufb4d": ["Chaf", "Rafe"],
    "\ufb4e": ["Feh", "Rafe"],
    "\ufb4f": ["Aleph", "Lamed"],
};

export default CharacterNames;
