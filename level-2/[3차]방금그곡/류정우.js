const getPlayedMinutes = (startTime, endTime) => {
  const [startHour, startMinite] = startTime.split(':').map(Number);
  const [endHour, endMinite] = endTime.split(':').map(Number);

  return (endHour - startHour) * 60 + (endMinite - startMinite);
};

const getCompressTunes = (tunes) => tunes.replace(/\w#/g, (tune) => tune[0].toLowerCase());

const getTargetTitle = (m, musicinfos) => {
  const candidates = musicinfos.map((musicInfo) => {
    const [startTime, endTime, title, melody] = musicInfo.split(',');
    const playedMinites = getPlayedMinutes(startTime, endTime);
    const compressedMelody = getCompressTunes(melody);

    const hearedMelody =
      compressedMelody.repeat(Math.floor(playedMinites / compressedMelody.length)) +
      compressedMelody.substr(0, playedMinites % compressedMelody.length);

    if (hearedMelody.indexOf(m) !== -1) return [title, playedMinites];
  });

  return candidates.sort((a, b) => b[1] - a[1])[0]?.[0];
};

function solution(m, musicinfos) {
  const compressedM = getCompressTunes(m);
  const targetTitle = getTargetTitle(compressedM, musicinfos);

  return targetTitle || '(None)';
}
