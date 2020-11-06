const { each } = require("jquery");
var $ = require("jquery");
var Tone = require("tone");
const synth = new Tone.Synth().toDestination();
const now = Tone.now()

function playCode() {
    //console.log("it works");
    //synth.triggerAttackRelease("C4", "8n");

    var toneInput = document.getElementById("toneInput").value.replace(/\s/g, '').split(",");
    //console.log(toneInput);
    var i = 0;
    var nextN = 0;
    

    Tone.Transport.schedule((time) => {

        Tone.Transport.bpm.value = parseInt(document.getElementById("tempo").value);
        //synth.sync();
        while (true) {
            var item = toneInput[i];
            var note, length, octave;
            if (item != "00") {
                if (item.charAt(0) == "*") {
                    var nPos = 1;
                    var lPos = 2;
                    octave = 1;
                }
                else {
                    var nPos = 0;
                    var lPos = 1;
                    octave = 0;
                }

                switch (item.charAt(nPos)) {
                    case "0":
                        note = "C" + (4 + octave);
                        break;
                    case "1":
                        note = "C#" + (4 + octave);
                        break;
                    case "2":
                        note = "D" + (4 + octave);
                        break;
                    case "3":
                        note = "D#" + (4 + octave);
                        break;
                    case "4":
                        note = "E" + (4 + octave);
                        break;
                    case "5":
                        note = "F" + (4 + octave);
                        break;
                    case "6":
                        note = "F#" + (4 + octave);
                        break;
                    case "7":
                        note = "G" + (4 + octave);
                        break;
                    case "8":
                        note = "G#" + (4 + octave);
                        break;
                    case "9":
                        note = "A" + (4 + octave);
                        break;
                    case "A":
                        note = "A#" + (4 + octave);
                        break;
                    case "a":
                        note = "A#" + (4 + octave);
                        break;
                    case "B":
                        note = "B" + (4 + octave);
                        break;
                    case "b":
                        note = "B" + (4 + octave);
                        break;
                }

                switch (item.charAt(lPos)) {
                    case "1":
                        length = "8n";
                        break;
                    case "2":
                        length = "4n";
                        break;
                    case "3":
                        length = "4n.";
                        break;
                    case "4":
                        length = "2n";
                        break;
                    case "5":
                        length = "2n.";
                        break;
                    case "6":
                        length = "1n";
                        break;
                }

                //console.log(note + ", " + length);

                synth.triggerAttackRelease(note, length, time + nextN);
                nextN += Tone.Time(length).toSeconds();
            }
            else {
                break;
            }
            i++;
        }
    }/*, `${i}m`*/);
    if (Tone.Transport.state != 'stopped') {
        Tone.Transport.stop();
    }
    Tone.Transport.start();

}