const validSounds = ["aya", "ye", "woo", "ma"];

function solution(word) {
  let i = 0;
  let lastSound = "";

  while (i < word.length) {
    let found = false;
    for (let sound of validSounds) {
      if (word.startsWith(sound, i)) {
        //i 부터 다시 시작
        if (sound === lastSound) {
          return false; // 같은 발음이 연속되면 false
        }
        lastSound = sound;
        i += sound.length; //반복문 돌릴 때 다음으로 넘어가고 싶으면 sound 문자수만큼 i ++
        found = true;
        break;
      }
    }
    if (!found) {
      return false; // 발음할 수 없는 단어가 포함되어 있으면 false
    }
  }
  return true;
}

function countPronounceableWords(words) {
  let count = 0;
  for (let word of words) {
    if (solution(word)) {
      count++;
    }
  }
  return count;
}

// 테스트 예제
const words1 = ["aya", "yee", "u", "maa"];
const words2 = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

console.log(countPronounceableWords(words1)); // 1
