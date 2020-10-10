/**
 * https://programmers.co.kr/learn/courses/30/lessons/12931
 * @param n | 자연수
 * @return | N의 각 자릿수의 합을 구해서 return
 제한사항
 N의 범위 : 100,000,000 이하의 자연수
 */
function solution(n) {
  return Array.prototype.reduce.call(n + '', (ans, char) => ans + Number(char), 0);
}

/*
 문자열로 바꾸어 자리수를 더하는 것보다 수를 10으로 나누어 자리수를 구분하는 것이 조금 더 빠르다.
 테스트 1 〉	통과 (0.06ms, 30.2MB)
 테스트 2 〉	통과 (0.07ms, 30MB)
 테스트 3 〉	통과 (0.07ms, 30.3MB)
 테스트 4 〉	통과 (0.06ms, 30MB)
 테스트 5 〉	통과 (0.07ms, 30.1MB)
 테스트 6 〉	통과 (0.08ms, 30MB)
 테스트 7 〉	통과 (0.06ms, 30.2MB)
 테스트 8 〉	통과 (0.07ms, 30.2MB)
 테스트 9 〉	통과 (0.08ms, 30MB)
 테스트 10 〉	통과 (0.06ms, 30.1MB)
 테스트 11 〉	통과 (0.06ms, 30.4MB)
 테스트 12 〉	통과 (0.06ms, 30.2MB)
 테스트 13 〉	통과 (0.08ms, 30.4MB)
 테스트 14 〉	통과 (0.07ms, 30MB)
 테스트 15 〉	통과 (0.06ms, 30.2MB)
 테스트 16 〉	통과 (0.07ms, 30.2MB)
 테스트 17 〉	통과 (0.06ms, 30MB)
 테스트 18 〉	통과 (0.06ms, 30MB)
 테스트 19 〉	통과 (0.08ms, 30.1MB)
 테스트 20 〉	통과 (0.07ms, 30.4MB)
 테스트 21 〉	통과 (0.06ms, 30.1MB)
 */
console.log(
  solution(123) === 6,
  solution(987) === 24,
);

//
function solution2(n) {
  var answer = 0;
  while (n > 0) {
    answer += (n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}

/*
 테스트 1 〉	통과 (0.05ms, 30.2MB)
 테스트 2 〉	통과 (0.05ms, 30.1MB)
 테스트 3 〉	통과 (0.05ms, 30.2MB)
 테스트 4 〉	통과 (0.05ms, 30MB)
 테스트 5 〉	통과 (0.05ms, 29.8MB)
 테스트 6 〉	통과 (0.06ms, 30.1MB)
 테스트 7 〉	통과 (0.05ms, 30.1MB)
 테스트 8 〉	통과 (0.05ms, 30.1MB)
 테스트 9 〉	통과 (0.03ms, 30.1MB)
 테스트 10 〉	통과 (0.05ms, 30MB)
 테스트 11 〉	통과 (0.05ms, 30MB)
 테스트 12 〉	통과 (0.05ms, 30.1MB)
 테스트 13 〉	통과 (0.05ms, 30.2MB)
 테스트 14 〉	통과 (0.05ms, 30MB)
 테스트 15 〉	통과 (0.05ms, 30.1MB)
 테스트 16 〉	통과 (0.05ms, 30.2MB)
 테스트 17 〉	통과 (0.05ms, 30.2MB)
 테스트 18 〉	통과 (0.05ms, 30MB)
 테스트 19 〉	통과 (0.06ms, 30.2MB)
 테스트 20 〉	통과 (0.05ms, 30MB)
 테스트 21 〉	통과 (0.05ms, 30.1MB)
 */