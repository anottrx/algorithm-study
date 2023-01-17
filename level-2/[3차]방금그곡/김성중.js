// 2018 KAKAO BLIND RECRUITMENT

function solution(m, musicinfos) {
  const getReplacedSounds = (sounds) => {
    return sounds
      .replaceAll("C#", "c")
      .replaceAll("D#", "d")
      .replaceAll("F#", "f")
      .replaceAll("G#", "g")
      .replaceAll("A#", "a");
  };

  const getParsedTime = (time) => {
    const [parsedHour, parsedMinute] = time.split(":").map(Number);

    return parsedHour * 60 + parsedMinute;
  };

  const getTotalTime = (startTime, endTime) => {
    const parsedStartTime = getParsedTime(startTime);
    const parsedEndTime = getParsedTime(endTime);

    return parsedEndTime - parsedStartTime;
  };

  const newMusicinfos = musicinfos.map((musicinfo) => {
    const [startTime, endTime, title, sounds] = musicinfo.split(",");
    const replacedSounds = getReplacedSounds(sounds);
    const totalTime = getTotalTime(startTime, endTime);
    const loopedCount = Math.floor(totalTime / replacedSounds.length);
    const restLength = totalTime - loopedCount * replacedSounds.length;

    return [
      replacedSounds.repeat(loopedCount) + replacedSounds.slice(0, restLength),
      title,
    ];
  });

  let [temp, tempLength] = [null, 0];
  const replacedM = getReplacedSounds(m);

  newMusicinfos.forEach((newMusicinfo) => {
    const [playedSounds, title] = newMusicinfo;

    if (playedSounds.includes(replacedM) && playedSounds.length > tempLength)
      [temp, tempLength] = [title, playedSounds.length];
  });

  return temp || "(None)";
}
