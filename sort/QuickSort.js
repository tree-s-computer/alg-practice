// 퀵 정렬 함수
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 예제 사용
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // 출력: [1, 1, 2, 3, 6, 8, 10]
