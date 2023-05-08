import './log';

log('started app');
const root = document.getElementById("root");
root.textContent = "root";

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const context = new AudioContext();
const osc = context.createOscillator();
const amp = context.createGain();
let a:number = 12;
osc.connect(amp);
amp.connect(context.destination);
osc.start();
amp.gain = 0;
osc.frequency.value = 0;

function increaseFrequency() {
  osc.frequency.value += 100;
}

function decreaseFrequency() {
  osc.frequency.value -= 100;
}

function increaseGain() {
  amp.gain += 10;
}

function decreaseGain() {
  amp.gain -= 10;
}

function buttonClick() {
  context.resume();
}
