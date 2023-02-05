const changeMusic = (music) => {
  return music
    .replace(/C#/g, "H")
    .replace(/D#/g, "I")
    .replace(/F#/g, "J")
    .replace(/G#/g, "K")
    .replace(/A#/g, "L");
};

const getTime = (time) => {
  const splited = time.split(":").map(Number);
  return splited[0] * 60 + splited[1];
};

const getTimeDiff = (bef, after) => {
  return getTime(after) - getTime(bef);
};

const getMusicPlay = (music, time) => {
  return (
    music.repeat(Math.floor(time / music.length)) +
    music.slice(0, time % music.length)
  );
};

function solution(m, musicinfos) {
  const mm = changeMusic(m);
  let [answer, answerLen] = ["", 0];
  musicinfos.forEach((musicinfo) => {
    const splited = musicinfo.split(",");
    const time = getTimeDiff(splited[0], splited[1]);
    const musicPlay = getMusicPlay(changeMusic(splited[3]), time);
    if (musicPlay.includes(mm) && time > answerLen) {
      answer = splited[2];
      answerLen = time;
    }
  });
  return answer === "" ? "(None)" : answer;
}
