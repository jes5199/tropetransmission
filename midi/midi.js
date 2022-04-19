const midi = require('midi');

// Set up a new input.
const input = new midi.Input();
process.stdout.write("[:volume att 80] [:mode email on] [:comma -40] [:name Paul   ] [:rate 170] [:phoneme arpabet speak on]");

input.getPortCount();
console.log(input.getPortName(0));
let note = null;

// Configure a callback.
input.on('message', (deltaTime, message) => {
    //console.log(`m: ${message} d: ${deltaTime}`);

    let [status, data1, data2] = message;
    if (status == 144) {
        note = data1;
    }
    if (status == 128) {
        if (data1 == note) {
            note = null;
        }
    }
});

let singingNote = note;
function outputText() {
    if (singingNote != note) {
        process.stdout.write("\x08\n");
        singingNote = note;
        if (note) {
            let freq = Math.floor(220 * Math.pow(2, (note-69)/12));
            let code = 5000 + freq;
            let consonant = "~ll";
            let vowel = "~ah";
            if (note % 12 == 0) {
                consonant = "~dd";
                vowel = "~ow";
            }
            if (note % 12 == 2) {
                consonant = "~sp_rr";
                vowel = "~uk_ey";
            }
            if (note % 12 == 4) {
                consonant = "~gr_m";
                vowel = "~iy";
            }
            if (note % 12 == 5) {
                consonant = "~ff";
                vowel = "~ah";
            }
            if (note % 12 == 7) {
                consonant = "~ss";
                vowel = "~ow";
            }
            if (note % 12 == 11) {
                consonant = "~tt";
                vowel = "~iy";
            }
            process.stdout.write("[:rate 280][:phoneme arpabet speak on]["+consonant+"<,"+code+">"+vowel+"<50,"+ code + ">"+vowel+"<5000,"+ code + ">]" + "\n");
        }
    }

    setTimeout(outputText, 1);
}

input.openPort(0);
setTimeout(outputText, 2000);