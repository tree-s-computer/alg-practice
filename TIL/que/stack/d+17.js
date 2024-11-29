// 기술 연계 마스터 임스 문제 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class SkillSystem {
  constructor() {
    this.count = 0;
    this.stack = { L: 0, S: 0 };
    this.isValid = true;
  }

  // 일반 기술 처리 (1-9)
  handleNormalSkill() {
    this.count++;
  }

  // 사전 기술 처리 (L, S)
  handlePreSkill(skill) {
    this.stack[skill]++;
  }

  // 본 기술 처리 (R, K)
  handleMainSkill(skill, preSkill) {
    if (this.stack[preSkill] > 0) {
      this.stack[preSkill]--;
      this.count++;
    } else {
      this.isValid = false;
    }
  }

  // 기술 처리
  processSkill(skill) {
    // 스크립트가 꼬였으면 더 이상 처리하지 않음
    if (!this.isValid) return;

    if (skill >= "1" && skill <= "9") {
      this.handleNormalSkill();
    } else if (skill === "L" || skill === "S") {
      this.handlePreSkill(skill);
    } else if (skill === "R") {
      this.handleMainSkill(skill, "L");
    } else if (skill === "K") {
      this.handleMainSkill(skill, "S");
    }
  }

  // 결과 반환
  getResult() {
    return this.count;
  }
}

function solution(N, skills) {
  const skillSystem = new SkillSystem();

  // 각 기술 처리
  for (let i = 0; i < N; i++) {
    skillSystem.processSkill(skills[i]);
  }

  return skillSystem.getResult();
}

// 입력 처리 및 출력
const N = parseInt(input[0]);
const skills = input[1];
console.log(solution(N, skills));
