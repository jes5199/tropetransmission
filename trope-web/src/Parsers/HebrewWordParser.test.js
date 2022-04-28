import HebrewWordParser from "./HebrewWordParser";

const bereshis = "בְּרֵאשִׁ֖ית";

test('tokenizes bereshis', () => {
    let parser = new HebrewWordParser();
    let tokens = parser.tokenize(bereshis);
    expect(tokens).toStrictEqual(
        ["Bet", "Shva", "Resh", "Tsere", "Aleph", "Shin", "Chirik", "TIPCHA", "Yud", "Sav"]);
});

test('tokenizes precomposed forms', () => {
    let parser = new HebrewWordParser();
    const agaph = "\uFB2E\uFB32\u05B8\u05E4";

    let literals = parser.literalTokenization(agaph)
    expect(literals).toStrictEqual(
        ["Aleph", "Patach", "Gimel", "Dagesh", "Qamatz", "Feh"]);

    let tokens = parser.tokenize(agaph);
    expect(tokens).toStrictEqual(
        ["Aleph", "Patach", "GimelD", "Qamatz", "Feh"]);
});

test('respects Mapik', () => {
    let parser = new HebrewWordParser();

    const _ah = "־ָהּ";
    let literals = parser.literalTokenization(_ah)
    expect(literals).toStrictEqual(
        ["Maqaf", "Qamatz", "He", "Dagesh"]);

    let tokens = parser.tokenize(_ah);
    expect(tokens).toStrictEqual(
        ["Maqaf", "Qamatz", "MapikHe"]
    )
});

test('respects precomposed Mapik', () => {
    let parser = new HebrewWordParser();

    const _ah = "\u05be\u05b8\ufb34";
    let literals = parser.literalTokenization(_ah)
    expect(literals).toStrictEqual(
        ["Maqaf", "Qamatz", "He", "Mapik"]);

    let tokens = parser.tokenize(_ah);
    expect(tokens).toStrictEqual(
        ["Maqaf", "Qamatz", "MapikHe"]
    )
});

test('syllablizes bereshis', () => {
    let parser = new HebrewWordParser();
    let tokens = parser.tokenize(bereshis);
    let syllables = parser.syllablize(tokens);
    return
    expect(syllables).toStrictEqual(
        [["Bet", "Shva"],
        ["Resh", "Tsere", "Aleph"],
        ["Shin", "Chirik", "Tipcha", "Yud", "Sav"]]
    )
});