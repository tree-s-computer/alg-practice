const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

// N개의 노래 정보와 M개의 시도 정보를 각각 분리
const songs = input.slice(1, N + 1).map((line) => {
  const [T, title, ...notes] = line.split(" ");
  return { title, firstThreeNotes: notes.slice(0, 3).join("") }; // 노래 제목과 첫 세 음을 저장
});
const attempts = input
  .slice(N + 1, N + 1 + M)
  .map((line) => line.split(" ").join("")); // 시도할 첫 세 음

function guessSong(songs, attempts) {
  return attempts.map((attempt) => {
    const matchedSongs = songs.filter(
      (song) => song.firstThreeNotes === attempt
    );
    if (matchedSongs.length === 1) {
      return matchedSongs[0].title; // 매칭된 노래가 하나일 경우 제목 반환
    } else if (matchedSongs.length > 1) {
      return "?"; // 여러 곡이 매칭되면 ?
    } else {
      return "!"; // 매칭된 노래가 없을 경우 !
    }
  });
}

const results = guessSong(songs, attempts);
console.log(results.join("\n"));

// 순서 적어보기
// songs 배열, 각 노래별로 음을 담는다. 예시: {'song':[], .... }
// 즉... songsObj를 따로 만든다.
// attempts로 gogo
// 고민: attempts 기준으로 반복을 돌릴까 songsObJ 기준으로 반복을 돌릴까
// attempts 기준으로 반복문을 돌리자. 첫 번째 "EDE" 랑 같은게 있는지 쭉 ----- 돌려본다.
// 돌리면서 if 문 가르면 될듯... 로직 끝 !!

// 예시 songsObj = {'song' :[], 'song2' : [], ...}
