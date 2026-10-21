const birthdayMelody = [
  { frequency: 392, duration: 0.28 },
  { frequency: 392, duration: 0.28 },
  { frequency: 440, duration: 0.52 },
  { frequency: 392, duration: 0.52 },
  { frequency: 523.25, duration: 0.52 },
  { frequency: 493.88, duration: 0.76 },
];

function playFirework(context, startTime) {
  const buffer = context.createBuffer(1, context.sampleRate * 0.65, context.sampleRate);
  const samples = buffer.getChannelData(0);

  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }

  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const volume = context.createGain();
  noise.buffer = buffer;
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1800, startTime);
  filter.frequency.exponentialRampToValueAtTime(180, startTime + 0.6);
  volume.gain.setValueAtTime(0.0001, startTime);
  volume.gain.exponentialRampToValueAtTime(0.3, startTime + 0.025);
  volume.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.65);
  noise.connect(filter);
  filter.connect(volume);
  volume.connect(context.destination);
  noise.start(startTime);
  noise.stop(startTime + 0.65);
}

function playMelody(context, startTime) {
  const noteVolume = 0.1;
  let noteStart = startTime + 0.25;

  birthdayMelody.forEach(({ frequency, duration }) => {
    const oscillator = context.createOscillator();
    const volume = context.createGain();
    const noteEnd = noteStart + duration * 0.88;

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    volume.gain.setValueAtTime(0.0001, noteStart);
    volume.gain.exponentialRampToValueAtTime(noteVolume, noteStart + 0.025);
    volume.gain.setValueAtTime(noteVolume, noteEnd - 0.04);
    volume.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
    oscillator.connect(volume);
    volume.connect(context.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd);
    noteStart += duration;
  });

  return noteStart;
}

export async function playBirthdayAudio() {
  const AudioContextConstructor = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContextConstructor) return false;

  const context = new AudioContextConstructor();
  try {
    await context.resume();
    const startTime = context.currentTime;
    playFirework(context, startTime);
    const melodyEnd = playMelody(context, startTime);
    window.setTimeout(() => {
      context.close();
    }, Math.max(0, (melodyEnd - context.currentTime) * 1000) + 250);
    return true;
  } catch (error) {
    await context.close();
    throw error;
  }
}
